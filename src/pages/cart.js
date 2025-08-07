import { useCallback, useState } from "react";
import Image from "next/image";
import Navbar from "@layout/navbar/Navbar";

import useProducts from "@hooks/custom/useProducts";
import { signIn } from "next-auth/react";
import { getUserSession } from "@lib/auth";
import { useRouter } from "next/navigation";
const Cart = () => {
	const router = useRouter();
	const userInfo = getUserSession();
	const { cart, productList, updateItemCount, removeFromCart, getCartItemTotal } = useProducts();

	const getProductDetails = useCallback(
		(productId) => {
			return productList.find((product) => product.id === productId);
		},
		[productList]
	);

	const onSignInClick = () => {
		signIn("google", {
			callbackUrl: "/cart",
			redirect: false,
		}).then((response) => {
			console.log("Sign in response:", response);
		});
	};

	const onProceedClick = () => {
		router.push("/checkout");
	};

	return (
		<div>
			<Navbar />
			<div className="container">
				<div class="bg-green-100 min-h-screen flex items-center justify-center p-6 mb-12">
					<div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-4xl">
						<div>
							<div class="overflow-x-auto">
								{cart.length === 0 ? (
									<div className="text-center py-20">
										<p className="text-gray-500 text-xl">Your cart is empty</p>
									</div>
								) : (
									<table class="w-full text-left border-t border-b border-gray-200">
										<thead>
											<tr class="text-gray-600 uppercase text-sm">
												<th class="py-2">Product</th>
												<th class="py-2">Price</th>
												<th class="py-2">Quantity</th>
												<th class="py-2">Subtotal</th>
											</tr>
										</thead>
										<tbody>
											{cart.map((item) => {
												const productDetails = getProductDetails(item.productId);
												const haveAddOns = item?.addOns && item.addOns.length > 0;
												return (
													<tr class="border-t border-gray-200" key={item.productId}>
														<td class="py-4 flex items-center space-x-4">
															<button class="text-gray-400 hover:text-red-500" onClick={() => removeFromCart(item.productId, item.bundleId)}>
																✕
															</button>
															<Image width={130} height={130} className="w-16 h-16 rounded-md border" alt="logo" src={productDetails?.images?.[0] || "/order-now/liquid-1.jpg"} />
															<div>
																<p class="font-semibold text-black !m-0 p-0">{productDetails?.name}</p>
																{haveAddOns ? <p class="font-semibold text-gray-400 text-xs ">(Include Combo theraphy)</p> : ""}
															</div>
														</td>
														<td class="py-4">{productDetails?.displayPrice}</td>
														<td class="py-4">
															<input
																type="number"
																value={item.itemCount}
																onChange={(e) => updateItemCount(item.productId, item.bundleId, parseInt(e.target.value))}
																className="w-[78px] px-4 py-2 border border-gray-300 rounded-md text-black 2xl:text-2xl text-lg"
															/>
														</td>
														<td class="py-4 font-semibold text-black">${getCartItemTotal(item.productId, item.bundleId, item.itemCount)}</td>
													</tr>
												);
											})}

											{/* <tr class="border-t border-gray-200">
												<td class="py-4 flex items-center space-x-4">
													<button class="text-gray-400 hover:text-red-500">✕</button>
													<Image width={130} height={130} className="w-16 h-16 rounded-md border" alt="logo" src="/order-now/liquid-1.jpg" />

													<div>
														<p class="font-semibold text-black">BLACK MAITAKE PROTHERA ™ MC LIQUID”</p>
													</div>
												</td>
												<td class="py-4">$150</td>
												<td class="py-4">
													<input type="number" className="w-[78px] px-4 py-2 border border-gray-300 rounded-md text-black 2xl:text-2xl text-lg" />
												</td>
												<td class="py-4 font-semibold text-black">$150</td>
											</tr>
											<tr class="border-t border-gray-200">
												<td class="py-4 flex items-center space-x-4">
													<button class="text-gray-400 hover:text-red-500">✕</button>
													<Image width={130} height={130} className="w-16 h-16 rounded-md border" alt="logo" src="/order-now/liquid-1.jpg" />

													<div>
														<p class="font-semibold text-black">BLACK MAITAKE PROTHERA ™ MC LIQUID”</p>
													</div>
												</td>
												<td class="py-4">$150</td>
												<td class="py-4">
													<input type="number" className="w-[78px] px-4 py-2 border border-gray-300 rounded-md text-black 2xl:text-2xl text-lg" />
												</td>
												<td class="py-4 font-semibold text-black">$150</td>
											</tr> */}
										</tbody>
									</table>
								)}
							</div>

							{/* <div class="flex flex-col md:flex-row justify-between items-center mt-6 gap-4">
								<div class="flex items-center gap-2">
									<input type="text" placeholder="Coupon Code" class="border border-gray-300 rounded-md px-4 py-2 text-sm text-grey1" />
									<button class="bg-green text-white rounded-md px-4 py-2 hover:bg-green-700 transition">
										<p>Apply Coupon</p>
									</button>
								</div>

								<button class="bg-green text-white rounded-md px-6 py-2 hover:bg-green-700 transition">
									<p>Update cart</p>
								</button>
							</div> */}
						</div>

						{userInfo?.email ? (
							<button onClick={onProceedClick} className="bg-green text-white rounded-md px-6 py-2 hover:bg-green-700 transition my-8 mx-auto block">
								<p>Proceed to checkout</p>
							</button>
						) : (
							<button onClick={onSignInClick} className="bg-blue-400 text-white rounded-md px-6 py-2 hover:bg-green-700 transition my-8 mx-auto block">
								<p>Sign in with google to checkout</p>
							</button>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cart;
