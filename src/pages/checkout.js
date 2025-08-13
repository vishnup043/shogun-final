import React, { useCallback, useState, useEffect } from "react";
import { PayPalScriptProvider, PayPalButtons, FUNDING } from "@paypal/react-paypal-js";
import useProducts from "@hooks/custom/useProducts";
import { useRouter } from "next/router";
import Navbar from "@layout/navbar/Navbar";
import Footer from "@layout/footer/Footer";
import { addOnProducts } from "@utils/data";

const CheckoutPage = () => {
  const shippingCost = 20;
  const taxRate = 0.13;
  const router = useRouter();
  const { cart, getCartItemTotal, productList } = useProducts();

  const getProductDetails = useCallback(
    (productId) => {
      if (!productList || productList.length === 0) return null;
      return productList.find((product) => product.id === productId);
    },
    [productList]
  );

  const totalItems = cart.reduce((sum, item) => sum + (item.itemCount || 0), 0);

  // Helper: per-unit price consistent with your "combo overrides base price" rule
  const getPerUnitPrice = (item) => {
    const hasCombo = item?.addOns?.includes(1000);
    if (hasCombo) {
      return addOnProducts.find((p) => p.id === 1000)?.price || 0;
    }
    // base per-unit price (1 unit)
    return getCartItemTotal(item.productId, item.bundleId, 1) || 0;
  };

  // Subtotal consistent with per-unit logic above
  const subtotal = cart.reduce((sum, item) => {
    const unitPrice = getPerUnitPrice(item);
    return sum + unitPrice * (item.itemCount || 1);
  }, 0);

  const taxAmount = +(subtotal * taxRate).toFixed(2);
  const total = +(subtotal + shippingCost + taxAmount).toFixed(2);

  // Billing details (persist to localStorage)
  const [billingDetails, setBillingDetails] = useState(() => {
    const savedDetails = typeof window !== "undefined" ? localStorage.getItem("billingDetails") : null;
    return savedDetails
      ? JSON.parse(savedDetails)
      : {
          firstName: "",
          lastName: "",
          country: "",
          streetAddress: "",
          city: "",
          state: "",
          postcode: "",
          phone: "",
          email: "",
          doctorName: "",
        };
  });

  useEffect(() => {
    try {
      localStorage.setItem("billingDetails", JSON.stringify(billingDetails));
    } catch (error) {
      console.error("Error saving billing details to local storage:", error);
    }
  }, [billingDetails]);

  const handleOrderSuccess = async (details, data) => {
    // validate payment
    const isPaymentCompleted =
      details?.status === "COMPLETED" &&
      details?.purchase_units?.[0]?.payments?.captures?.[0]?.status === "COMPLETED";

    if (!isPaymentCompleted) {
      try {
        if (router?.push) router.push("/payment-failed");
        else window.location.href = "/payment-failed";
      } catch (err) {
        console.error("Redirect to failure page failed:", err);
      }
      return;
    }

    const billingFromLocal = JSON.parse(localStorage.getItem("billingDetails") || "{}");

    const payerName =
      `${billingFromLocal.firstName || ""} ${billingFromLocal.lastName || ""}`.trim() ||
      `${details?.payer?.name?.given_name || ""} ${details?.payer?.name?.surname || ""}`.trim() ||
      "Valued Customer";

    const payerEmail =
      billingFromLocal.email || details?.payer?.email_address || "customer@example.com";

    const orderDate = new Date(details?.update_time || new Date()).toLocaleDateString();
    const totalAmount = Number(details?.purchase_units?.[0]?.amount?.value) || total || 0;
    const currency = details?.purchase_units?.[0]?.amount?.currency_code || "CAD";

    // ✅ Build email items so that if combo is applied, per-unit price is 260 (only)
    const orderItems = cart.map((item) => {
      const product = getProductDetails(item.productId);
      const hasCombo = item?.addOns?.includes(1000);
      const unitPrice = getPerUnitPrice(item); // 260 if combo, else base
      const name = hasCombo
        ? `${product?.name || "N/A"} + Combo Care`
        : product?.name || "N/A";

      return {
        name,
        quantity: item.itemCount || 1,
        price: unitPrice, // per-unit price
      };
    });

    // Email template (kept simple, shows unit price; quantity shown separately)
    const generateOrderConfirmationHtml = ({
      customerName = "Valued Customer",
      orderDate = new Date().toLocaleDateString(),
      items = [],
      totalAmount = 0,
      currency = "CAD",
      billingDetails = {},
    } = {}) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>Order Confirmation</title>
  <style>
    body { font-family: Arial, sans-serif; color: #333; }
    table { width: 100%; border-collapse: collapse; margin-top: 15px; }
    th, td { text-align: left; padding: 8px; border-bottom: 1px solid #ddd; }
    h1 { color: #4CAF50; }
    .footer { font-size: 0.9em; color: #777; text-align: center; margin-top: 30px; }
    .address { margin: 15px 0; }
  </style>
</head>
<body>
  <div style="max-width: 600px; margin: 30px auto; background: #fff; padding: 20px; border-radius: 8px;">
    <h1>Thank you for your order, ${customerName}!</h1>
    <p>Your order has been confirmed on ${orderDate}.</p>
    <h3>Billing Address:</h3>
    <div class="address">
      <p>${billingDetails.firstName || 'N/A'} ${billingDetails.lastName || ''}</p>
      <p>${billingDetails.streetAddress || 'N/A'}</p>
      <p>${billingDetails.city || 'N/A'}, ${billingDetails.state || 'N/A'} ${billingDetails.postcode || 'N/A'}</p>
      <p>${billingDetails.country || 'N/A'}</p>
      <p>Phone: ${billingDetails.phone || 'N/A'}</p>
      <p>Email: ${billingDetails.email || 'N/A'}</p>
    </div>
    <h3>Order Details:</h3>
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Qty</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        ${items.map(item => `
          <tr>
            <td>${item.name}</td>
            <td>${item.quantity}</td>
            <td>${currency} ${Number(item.price * item.quantity).toFixed(2)}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
    <p style="font-weight: bold; font-size: 1.1em; text-align: right; margin-top: 15px;">
      Total: ${currency} ${Number(totalAmount).toFixed(2)}
    </p>
    <p>If you have any questions, reply to this email or contact our support team.</p>
    <div class="footer">
      <p>© 2025 Your Company Name. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
`;

    const emailHtml = generateOrderConfirmationHtml({
      customerName: payerName,
      orderDate,
      items: orderItems,
      totalAmount,
      currency,
      billingDetails: billingFromLocal,
    });

    // Send email
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: payerEmail,
          subject: "Order Confirmation",
          html: emailHtml,
        }),
      });

      if (!response.ok) {
        console.error("Email send failed:", response.statusText);
      } else {
        console.log("Email sent successfully:", await response.json());
      }
    } catch (error) {
      console.error("Error sending email:", error);
    } finally {
      try {
        if (router?.push) {
          localStorage.removeItem("orderNowCart");
          localStorage.removeItem("add_on_details");
          router.push("/payment-success");
        } else {
          window.location.href = "/payment-success";
        }
      } catch (redirectError) {
        console.error("Redirect failed:", redirectError);
        window.location.href = "/payment-success";
      }
    }
  };

  const isBillingComplete = Object.values(billingDetails).every((value) => String(value).trim() !== "");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBillingDetails((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <Navbar />
      <PayPalScriptProvider
        options={{
          "client-id": "Af9PS1KArAfS9DCPCAPEbi4jmg7GnbeZ-Jl5mjApepfA3IWpIGCpHcVtzvEco4nqgjdq6Ksm4rzIsXUj",
          currency: "CAD",
        }}
      >
        <div className="">
          <div className="bg-green-500 min-h-screen p-6">
            <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg grid grid-cols-1 lg:grid-cols-3 gap-8 p-6">
              {/* Left Column - Billing Details */}
              <div className="lg:col-span-2 space-y-4">
                <h2 className="text-lg font-semibold">Billing Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input name="firstName" type="text" placeholder="First name *" className="border border-gray-300 rounded p-2" value={billingDetails.firstName} onChange={handleInputChange} />
                  <input name="lastName" type="text" placeholder="Last name *" className="border border-gray-300 rounded p-2" value={billingDetails.lastName} onChange={handleInputChange} />
                  <input name="company" type="text" placeholder="Company name (optional)" className="border border-gray-300 rounded p-2 md:col-span-2" value={billingDetails.company || ""} onChange={handleInputChange} />
                  <select name="country" className="border border-gray-300 rounded p-2 md:col-span-2" value={billingDetails.country} onChange={handleInputChange}>
                    <option value="">Country / Region *</option>
                    <option value="USA">USA</option>
                    <option value="India">India</option>
                    <option value="UK">UK</option>
                    <option value="Canada">Canada</option>
                  </select>
                  <input name="streetAddress" type="text" placeholder="Street address *" className="border border-gray-300 rounded p-2 md:col-span-2" value={billingDetails.streetAddress} onChange={handleInputChange} />
                  <input name="apartment" type="text" placeholder="Apartment, suite, unit (optional)" className="border border-gray-300 rounded p-2 md:col-span-2" value={billingDetails.apartment || ""} onChange={handleInputChange} />
                  <input name="city" type="text" placeholder="Town / City *" className="border border-gray-300 rounded p-2" value={billingDetails.city} onChange={handleInputChange} />
                  <input name="state" type="text" placeholder="State / County *" className="border border-gray-300 rounded p-2" value={billingDetails.state} onChange={handleInputChange} />
                  <input name="postcode" type="text" placeholder="Postcode / Zip *" className="border border-gray-300 rounded p-2" value={billingDetails.postcode} onChange={handleInputChange} />
                  <input name="phone" type="text" placeholder="Phone *" className="border border-gray-300 rounded p-2" value={billingDetails.phone} onChange={handleInputChange} />
                  <input name="email" type="email" placeholder="Email address *" className="border border-gray-300 rounded p-2 md:col-span-2" value={billingDetails.email} onChange={handleInputChange} />
                  <input name="doctorName" type="text" placeholder="Doctor's Name" className="border border-gray-300 rounded p-2 md:col-span-2" value={billingDetails.doctorName || ""} onChange={handleInputChange} />
                </div>
              </div>

              {/* Right Column - Order Summary */}
              <div className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm h-fit">
                <h2 className="text-lg font-semibold mb-4">Your order</h2>
                {!productList || productList.length === 0 ? (
                  <p className="text-gray-500 text-sm mb-4">Loading products...</p>
                ) : (
                  <div className="mb-4">
                    {cart.map((item) => {
                      const productDetails = getProductDetails(item.productId);
                      const hasCombo = item?.addOns?.includes(1000);
                      const unitPrice = getPerUnitPrice(item);
                      const lineTotal = unitPrice * (item.itemCount || 1);

                      return (
                        <div key={`${item.productId}-${item.bundleId}`} className="flex justify-between border-b border-gray-200 py-2 text-sm">
                          <div className="flex">
                            <span>
                              {productDetails?.name}
                              {hasCombo ? " + Ex Tablets" : ""}
                            </span>
                          </div>
                          <span>${lineTotal.toFixed(2)}</span>
                        </div>
                      );
                    })}
                  </div>
                )}

                <div className="flex justify-between border-b border-gray-200 pb-2 mb-4">
                  <span>Items ({totalItems})</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2 mb-4">
                  <span>Shipping</span>
                  <span>${shippingCost.toFixed(2)}</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2 mb-4">
                  <span>Tax</span>
                  <span>{(taxRate * 100).toFixed(0)}%</span>
                </div>
                <div className="flex justify-between font-bold text-lg mb-4">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>

                <PayPalButtons
                  style={{ layout: "vertical" }}
                  fundingSource={FUNDING.PAYPAL}
                  disabled={!isBillingComplete}
                  createOrder={(data, actions) => {
                    return actions.order.create({
                      purchase_units: [
                        {
                          amount: {
                            value: total.toString(),
                          },
                        },
                      ],
                      application_context: {
                        shipping_preference: "NO_SHIPPING",
                      },
                    });
                  }}
                  onApprove={(data, actions) => {
                    return actions.order.capture().then((details) => handleOrderSuccess(details, data));
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </PayPalScriptProvider>
      <Footer />
    </div>
  );
};

export default CheckoutPage;
