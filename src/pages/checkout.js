import React, { useCallback, useState, useEffect } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import useProducts from "@hooks/custom/useProducts";
import { useRouter } from 'next/router';

const CheckoutPage = () => {
	const router = useRouter();
	const { cart, getCartItemTotal, productList } = useProducts();
	const totalItems = cart.reduce((sum, item) => sum + item.itemCount, 0);
	const subtotal = cart.reduce(
		(sum, item) =>
			sum + getCartItemTotal(item.productId, item.bundleId, item.itemCount),
		0
	);
	const total = subtotal;
	const getProductDetails = useCallback(
		(productId) => {
			if (!productList || productList.length === 0) return null;
			return productList.find((product) => product.id === productId);
		},
		[productList]
	);

	// Initialize billingDetails with data from local storage if available
	const [billingDetails, setBillingDetails] = useState(() => {
		const savedDetails = localStorage.getItem('billingDetails');
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

	// Save billing details to local storage whenever they change
	useEffect(() => {
		try {
			localStorage.setItem('billingDetails', JSON.stringify(billingDetails));
			console.log("Billing details updated in local storage:", billingDetails);
		} catch (error) {
			console.error("Error saving billing details to local storage:", error);
		}
	}, [billingDetails]);

	const handleOrderSuccess = async (details, data) => {
		console.log("Payment details received:", details);

		// 1️⃣ Validate payment success
		const isPaymentCompleted =
			details?.status === "COMPLETED" &&
			details?.purchase_units?.[0]?.payments?.captures?.[0]?.status === "COMPLETED";

		if (!isPaymentCompleted) {
			console.error("Payment validation failed. Status:", details?.status);
			try {
				if (router?.push) {
					router.push("/payment-failed");
				} else {
					window.location.href = "/payment-failed";
				}
			} catch (err) {
				console.error("Redirect to failure page failed:", err);
			}
			return; // Stop execution if payment not completed
		}
		const billingFromLocal = JSON.parse(localStorage.getItem('billingDetails'));
		console.log("local billing", billingFromLocal);
		const payerName = `${billingFromLocal.firstName} ${billingFromLocal.lastName}`.trim() || 
			`${details?.payer?.name?.given_name || ""} ${details?.payer?.name?.surname || ""}`.trim() || 
			"Valued Customer";
		const payerEmail = billingFromLocal.email || details?.payer?.email_address || "customer@example.com";
		const orderDate = new Date(details?.update_time || new Date()).toLocaleDateString();
		const totalAmount = Number(details?.purchase_units?.[0]?.amount?.value) || total || 0;
		const currency = details?.purchase_units?.[0]?.amount?.currency_code || "USD";

		// 5️⃣ Generate order items for email
		const orderItems = cart.map(item => {
			const productDetails = getProductDetails(item.productId);
			return {
				name: productDetails?.name || "N/A",
				quantity: item.itemCount || 1,
				price: getCartItemTotal(item.productId, item.bundleId, item.itemCount) / (item.itemCount || 1)
			};
		});

		// 6️⃣ Retrieve billing details from local storage for email
		const storedBillingDetails = JSON.parse(localStorage.getItem('billingDetails') || '{}');
		const addOndetails = JSON.parse(localStorage.getItem("add_on_details" || '{}' ))
		// 7️⃣ HTML template generator
		const addOnProduct = addOndetails?.desc || "";
		const generateOrderConfirmationHtml = ({
			customerName = "Valued Customer",
			orderDate = new Date().toLocaleDateString(),
			items = [],
			totalAmount = 0,
			currency = "USD",
			billingDetails = {}
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
                <td>${addOnProduct ? `${item.name} + ${addOnProduct}` : item.name}</td>
                <td>${item.quantity}</td>
                <td>${currency} ${Number(item.price).toFixed(2)}</td>
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
			billingDetails: storedBillingDetails
		});

		// 8️⃣ Send email & always redirect
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

	// Validate if all required fields are filled (simple check)
	const isBillingComplete = Object.values(billingDetails).every(
		(value) => value.trim() !== ""
	);

	// Handle input changes for billing form
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setBillingDetails((prev) => ({ ...prev, [name]: value }));
	};

	return (
		<PayPalScriptProvider
			options={{
				"client-id": "Af9PS1KArAfS9DCPCAPEbi4jmg7GnbeZ-Jl5mjApepfA3IWpIGCpHcVtzvEco4nqgjdq6Ksm4rzIsXUj",
				currency: "USD",
			}}
		>
			<div className="">
				<div className="bg-green-500 min-h-screen p-6">
					<div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg grid grid-cols-1 lg:grid-cols-3 gap-8 p-6">
						{/* Left Column - Billing Details */}
						<div className="lg:col-span-2 space-y-4">
							<h2 className="text-lg font-semibold">Billing Details</h2>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								<input
									name="firstName"
									type="text"
									placeholder="First name *"
									className="border border-gray-300 rounded p-2"
									value={billingDetails.firstName}
									onChange={handleInputChange}
								/>
								<input
									name="lastName"
									type="text"
									placeholder="Last name *"
									className="border border-gray-300 rounded p-2"
									value={billingDetails.lastName}
									onChange={handleInputChange}
								/>
								<input
									name="company"
									type="text"
									placeholder="Company name (optional)"
									className="border border-gray-300 rounded p-2 md:col-span-2"
									value={billingDetails.company || ""}
									onChange={handleInputChange}
								/>
								<select
									name="country"
									className="border border-gray-300 rounded p-2 md:col-span-2"
									value={billingDetails.country}
									onChange={handleInputChange}
								>
									<option value="">Country / Region *</option>
									<option value="USA">USA</option>
									<option value="India">India</option>
									<option value="UK">UK</option>
								</select>
								<input
									name="streetAddress"
									type="text"
									placeholder="Street address *"
									className="border border-gray-300 rounded p-2 md:col-span-2"
									value={billingDetails.streetAddress}
									onChange={handleInputChange}
								/>
								<input
									name="apartment"
									type="text"
									placeholder="Apartment, suite, unit (optional)"
									className="border border-gray-300 rounded p-2 md:col-span-2"
									value={billingDetails.apartment || ""}
									onChange={handleInputChange}
								/>
								<input
									name="city"
									type="text"
									placeholder="Town / City *"
									className="border border-gray-300 rounded p-2"
									value={billingDetails.city}
									onChange={handleInputChange}
								/>
								<input
									name="state"
									type="text"
									placeholder="State / County *"
									className="border border-gray-300 rounded p-2"
									value={billingDetails.state}
									onChange={handleInputChange}
								/>
								<input
									name="postcode"
									type="text"
									placeholder="Postcode / Zip *"
									className="border border-gray-300 rounded p-2"
									value={billingDetails.postcode}
									onChange={handleInputChange}
								/>
								<input
									name="phone"
									type="text"
									placeholder="Phone *"
									className="border border-gray-300 rounded p-2"
									value={billingDetails.phone}
									onChange={handleInputChange}
								/>
								<input
									name="email"
									type="email"
									placeholder="Email address *"
									className="border border-gray-300 rounded p-2 md:col-span-2"
									value={billingDetails.email}
									onChange={handleInputChange}
								/>
								<input
									name="doctorName"
									type="text"
									placeholder="Doctor's Name"
									className="border border-gray-300 rounded p-2 md:col-span-2"
									value={billingDetails.doctorName || ""}
									onChange={handleInputChange}
								/>
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
										return (
											<div
												key={`${item.productId}-${item.bundleId}`}
												className="flex justify-between border-b border-gray-200 py-2 text-sm"
											>
												<span>{productDetails?.name}</span>
												<span>
													$
													{getCartItemTotal(
														item.productId,
														item.bundleId,
														item.itemCount
													)}
												</span>
											</div>
										);
									})}
								</div>
							)}

							<div className="flex justify-between border-b border-gray-200 pb-2 mb-4">
								<span>Items ({totalItems})</span>
								<span>${subtotal}</span>
							</div>
							<div className="flex justify-between border-b border-gray-200 pb-2 mb-4">
								<span>Shipping</span>
								<span>Free</span>
							</div>
							<div className="flex justify-between font-bold text-lg mb-4">
								<span>Total</span>
								<span>${total}</span>
							</div>

							{/* PayPal Button - only show if billing complete */}
							<PayPalButtons
								style={{ layout: "vertical" }}
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
									return actions.order.capture().then((details) => 
										handleOrderSuccess(details, data)
									);
								}}
							/>
						</div>
					</div>
				</div>
			</div>
		</PayPalScriptProvider>
	);
};

export default CheckoutPage;