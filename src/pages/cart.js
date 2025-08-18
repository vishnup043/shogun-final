import { useCallback, useState } from "react";
import Image from "next/image";
import Navbar from "@layout/navbar/Navbar";
import Footer from "@layout/footer/Footer";
import useProducts from "@hooks/custom/useProducts";
import { useRouter } from "next/navigation";
import { addOnProducts } from "@utils/data";

const Cart = () => {
	const [error, setError] = useState("");

	const handleProceed = () => {
		if (cart.some(item => item.itemCount === 0)) {
			setError("Quantity cannot be zero.");
			return;
		}
		setError("");
		router.push("/checkout");
	};
	const router = useRouter();
	const { cart, productList, updateItemCount, removeFromCart, getCartItemTotal } = useProducts();

	const getProductDetails = useCallback(
		(productId) => {
			return productList.find((product) => product.id === productId);
		},
		[productList]
	);

	const onProceedClick = () => {
		router.push("/checkout");
	};

	return (
		<div>
			<Navbar />
			<div className="bg-limebg">
				<div className="container">
					<div className="bg-green-100 flex items-center justify-center lg:py-28 py-12">
						<div className="bg-white rounded-2xl shadow-lg lg:p-12 sm:p-8 p-4 w-full max-w-4xl">
							<div>
								<div className="overflow-x-auto">
									{cart.length === 0 ? (
										<div className="text-center py-20">
											<p className="text-gray-500 text-xl">Your cart is empty</p>
										</div>
									) : (
										<table className="md:w-full w-[600px] text-left border-t border-b border-gray-200">
											<thead>
												<tr className="text-greyblack text-sm">
													<th className="py-2">Product</th>
													<th className="py-2">Price</th>
													<th className="py-2">Quantity</th>
													<th className="py-2">Subtotal</th>
												</tr>
											</thead>
											<tbody>
												{cart.map((item) => {
													const productDetails = getProductDetails(item.productId);
													const haveAddOns = item?.addOns && item.addOns.length > 0;
													return (
														<tr className="border-t border-gray-200" key={item.productId}>
															<td className="py-4 grid grid-flow row gap-4">

																<div className="flex space-x-8">
																	<button className="text-gray-400 hover:text-red-500" onClick={() => removeFromCart(item.productId, item.bundleId)}>
																		✕
																	</button>
																	<div>
																		<div className="flex space-x-4 items-center">
																			<Image width={130} height={130} className="w-16 h-16 rounded-md border" alt="logo" src={productDetails?.images?.[0] || "/order-now/liquid-1.jpg"} />
																			<div>
																				<p className="font-bold text-black !m-0 p-0">{productDetails?.name}</p>
																			</div>
																		</div>
																		<div className="text-center w-[65px]">
																			{"+"}
																		</div>
																		<div className="flex">
																			{haveAddOns ? (
																				<div className="flex space-x-4 items-center">
																					<Image
																						width={130}
																						height={130}
																						className="w-16 h-16 rounded-md border"
																						alt="logo"
																						src="/order-now/ex-1.jpg"
																					/>
																					<p className="font-bold">Ex Tablets</p>
																				</div>
																			) : null}
																		</div>
																	</div>
																</div>
															</td>

															<td className="py-4">
																{item.addOns?.length > 0
																	? `$${item.addOns
																		.map(addOnId => {
																			const addOn = addOnProducts.find(p => p.id === addOnId);
																			return addOn ? addOn.price : 0;
																		})
																		.reduce((sum, price) => sum + price, 0)}`
																	: `$${getCartItemTotal(item.productId, item.bundleId, 1)}`}
															</td>

															<td className="py-4">
																<input
																	type="number"
																	value={item.itemCount}
																	onChange={(e) => updateItemCount(item.productId, item.bundleId, parseInt(e.target.value))}
																	className={`w-[62px] px-2 py-1 border ${item.itemCount === 0 ? "border-red-500" : "border-gray-200"} rounded-md text-black 2xl:text-2xl text-lg`}

																/>
															</td>
															<td className="py-4 font-semibold text-black">
																{item.addOns?.includes(1000)
																	? `$${(addOnProducts.find(p => p.id === 1000)?.price || 0) * item.itemCount}`
																	: `$${getCartItemTotal(item.productId, item.bundleId, item.itemCount)}`}
															</td>
														</tr>

													);
												})}
											</tbody>
										</table>
									)}
								</div>
							</div>
							<div>
								{cart.length > 0 && (
									<button
										onClick={handleProceed}
										className={`rounded-md px-6 py-2 transition my-4 mx-auto block ${cart.some(item => item.itemCount === 0)
											? "bg-gray-400 cursor-not-allowed text-white"
											: "bg-green text-white hover:bg-green-700"
											}`}
									>
										<p>Proceed to checkout</p>
									</button>
								)}
								{error && (
									<p className="text-red-600 font-medium text-center">{error}</p>
								)}

							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Cart;