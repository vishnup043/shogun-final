import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import BundleType from "./BundleType";
import useProducts from "@hooks/custom/useProducts";

const ProductCard = ({ productDetails }) => {
	const { name, id, displayPrice, type, bundleTypes, images, isComboTherapyAvailable } = productDetails;
	const { cart, removeFromCart, addToCart, updateItemCount, getCartItemTotal, addAddOnToCartItem, removeAddOnFromCartItem } = useProducts();

	const isInCart = useMemo(() => {
		return cart.find((item) => item.productId === id);
	}, [cart]);

	console.log("isInCart", isInCart);

	const isComboTherapyAvailableInCart = useMemo(() => {
		return cart.some((item) => item.productId === id && item.addOns && item.addOns.includes(1000));
	}, [isInCart, id, cart]);

	const [count, setCount] = React.useState(isInCart?.itemCount || 0);
	const [selectedBundleType, setSelectedBundleType] = React.useState(isInCart?.bundleId ? bundleTypes.find((bundle) => bundle.id === isInCart.bundleId) : null);
	const handleBundleTypeChange = (bundle) => {
		setSelectedBundleType(bundle);
	};

	const addCartClick = () => {
		if (isInCart) {
			if (isInCart.bundleId !== selectedBundleType?.id) {
				// If the bundle type is different, we need to remove the old one and add the new one
				removeFromCart(id, isInCart.bundleId);
				addToCart(id, selectedBundleType?.id, count);
				return;
			}
			removeFromCart(id, selectedBundleType?.id);
			setCount(0);
		} else {
			addToCart(id, selectedBundleType?.id, 1);
		}
	};

	const onCountChange = (e) => {
		const newCount = parseInt(e.target.value, 10);
		setCount(newCount);
		if (newCount >= 1 && newCount <= 10) {
			if (isInCart) {
				updateItemCount(id, selectedBundleType?.id, newCount);
			} else {
				addToCart(id, selectedBundleType?.id, newCount);
			}
		}
	};

	const onClickAddOn = (addOnId, details) => {
		console.log("here",details)
		if (isInCart) {
			if (isInCart.addOns && isInCart.addOns.includes(addOnId)) {
				localStorage.removeItem("add_on_details")
				console.log("here")
				removeAddOnFromCartItem(id, selectedBundleType?.id, addOnId);
			} else {
				localStorage.setItem("add_on_details", JSON.stringify(details))
				addAddOnToCartItem(id, selectedBundleType?.id, addOnId);
			}
		}
	};

	return (
		<div className="product-list grid grid-cols-2 py-28 border-b" key={id}>
			<div className="product-box">
				<h5 className="text-greyblack 2xl:text-5xl text-3xl">Shogun Black Maitake</h5>
				<h2 className="text-[80px] leading-none">{name}</h2>
				<h3 className="text-greyblack 2xl:text-5xl text-3xl">
					{type} <span className="block">{displayPrice}</span>
				</h3>

				<div className="relative inline-block text-left">
					<p className="2xl:text-xl text-lg pt-8">Select The Product Bundle Type</p>
					<div className="space-y-4">
						{bundleTypes.map((bundle, index) => (
							<BundleType selectedBundle={selectedBundleType} onSelect={handleBundleTypeChange} key={index} bundleDetails={bundle} />
						))}
					</div>

					{/* Quantity & Total */}
					<div className="flex items-center gap-8 mt-6">
						{!isInCart ? (
							""
						) : (
							<div className="flex flex-row items-center gap-8">
								<p className="2xl:text-xl text-lg text-black">
									Options Amount <span className="block">${getCartItemTotal(isInCart?.productId, isInCart.bundleId, isInCart.itemCount)}</span>
								</p>
								<input onChange={onCountChange} value={count} max={10} min={1} type="number" className="w-[78px] px-4 py-2 border border-gray-300 rounded-md text-black 2xl:text-2xl text-lg" />
							</div>
						)}

						<button onClick={addCartClick} className="w-[178px] px-4 py-2 border border-gray-300 rounded-md text-black 2xl:text-2xl text-lg">
							{isInCart ? isInCart?.bundleId !== selectedBundleType?.id ? <p>Update bundle type</p> : <p>Remove from Cart</p> : <p>Add to Cart</p>}
						</button>
					</div>
				</div>
			</div>
			<div>
				<Swiper className="rounded-3xl" slidesPerView={1} loop={true} navigation={true} modules={[Navigation]} onSlideChange={() => console.log("slide change")} onSwiper={(swiper) => console.log(swiper)}>
					{images.map((image, index) => (
						<SwiperSlide key={index}>
							<Image width={1500} height={1500} className="w-full" alt="logo" src={image} />
						</SwiperSlide>
					))}
				</Swiper>
				{isComboTherapyAvailable ? (
					<div className="combotherappy w-max mx-auto mt-6">
						<div className="w-[178px] p-1 text-center rounded-xl text-white 2xl:text-2xl text-lg bg-green">
							<p>Combo Care {isComboTherapyAvailableInCart ? "(Applied)" : ""}</p>
						</div>
						<div className="w-[178px] p-3 combo-panel bg-offwhite rounded-xl mt-4">
							<p>Shogun Black Maitake Ex Tablets + Shogun Black Maitake Prothera</p>
							<button
								disabled={!isInCart || !selectedBundleType}
								onClick={() => {
									onClickAddOn(1000, {desc: "Maitake Ex Tablets", price: "$ 220", quantity: 1});
								}}
								className="w-[154px] p-1 text-center rounded-xl text-white 2xl:text-2xl text-lg bg-green disabled:bg-gray-300 disabled:cursor-not-allowed"
							>
								<p>$ 220</p>
							</button>
						</div>
					</div>
				) : null}
			</div>
		</div>
	);
};

export default ProductCard;
