import { useCallback, useState } from "react";
import Image from "next/image";
import Navbar from "@layout/navbar/Navbar";

import useProducts from "@hooks/custom/useProducts";
import { useRouter } from "next/navigation";

const Cart = () => {
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
			<div className="container">
				<div className="bg-green-100 min-h-screen flex items-center justify-center p-6 mb-12">
					<div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-4xl">
						<div>
							<div className="overflow-x-auto">
								{cart.length === 0 ? (
									<div className="text-center py-20">
										<p className="text-gray-500 text-xl">Your cart is empty</p>
									</div>
								) : (
									<table className="w-full text-left border-t border-b border-gray-200">
										<thead>
											<tr className="text-gray-600 uppercase text-sm">
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
														<td className="py-4 flex items-center space-x-4">
															<button className="text-gray-400 hover:text-red-500" onClick={() => removeFromCart(item.productId, item.bundleId)}>
																✕
															</button>
															<Image width={130} height={130} className="w-16 h-16 rounded-md border" alt="logo" src={productDetails?.images?.[0] || "/order-now/liquid-1.jpg"} />
															<div>
																<p className="font-semibold text-black !m-0 p-0">{productDetails?.name}</p>
																{haveAddOns ? <p className="font-semibold text-gray-400 text-xs">(Include Combo therapy)</p> : ""}
															</div>
														</td>
														<td className="py-4">{productDetails?.displayPrice}</td>
														<td className="py-4">
															<input
																type="number"
																value={item.itemCount}
																onChange={(e) => updateItemCount(item.productId, item.bundleId, parseInt(e.target.value))}
																className="w-[78px] px-4 py-2 border border-gray-300 rounded-md text-black 2xl:text-2xl text-lg"
															/>
														</td>
														<td className="py-4 font-semibold text-black">${getCartItemTotal(item.productId, item.bundleId, item.itemCount)}</td>
													</tr>
												);
											})}
										</tbody>
									</table>
								)}
							</div>
						</div>
						{cart.length > 0 && (
							<button onClick={onProceedClick} className="bg-green text-white rounded-md px-6 py-2 hover:bg-green-700 transition my-8 mx-auto block">
								<p>Proceed to checkout</p>
							</button>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cart;