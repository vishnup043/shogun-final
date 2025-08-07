import { addOnProducts, shortgunProducts } from "@utils/data";
import { useState, useEffect, useRef } from "react";

const CART_STORAGE_KEY = "orderNowCart";

const getInitialCart = () => {
	if (typeof window === "undefined") return [];
	try {
		const stored = localStorage.getItem(CART_STORAGE_KEY);
		return stored ? JSON.parse(stored) : [];
	} catch (e) {
		return [];
	}
};

const useProducts = () => {
	const productList = shortgunProducts;

	const [cart, setCart] = useState(getInitialCart);

	// To avoid writing to localStorage on first render if it matches
	const isFirstRender = useRef(true);

	// Sync cart to localStorage whenever it changes
	useEffect(() => {
		if (typeof window === "undefined") return;
		if (isFirstRender.current) {
			isFirstRender.current = false;
			return;
		}
		try {
			localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
		} catch (e) {
			// ignore
		}
	}, [cart]);

	// Add item to cart or update itemCount if already exists
	const addToCart = (productId, bundleId, itemCount = 1) => {
		setCart((prevCart) => {
			const existingIndex = prevCart.findIndex((item) => item.productId === productId && item.bundleId === bundleId);
			if (existingIndex !== -1) {
				// Update itemCount for existing item
				const updatedCart = [...prevCart];
				updatedCart[existingIndex] = {
					...updatedCart[existingIndex],
					itemCount: updatedCart[existingIndex].itemCount + itemCount,
				};
				return updatedCart;
			} else {
				// Add new item
				return [...prevCart, { productId, bundleId, itemCount }];
			}
		});
	};

	// Remove item from cart
	const removeFromCart = (productId, bundleId) => {
		setCart((prevCart) => prevCart.filter((item) => !(item.productId === productId && item.bundleId === bundleId)));
	};

	// Update itemCount for a specific cart item
	const updateItemCount = (productId, bundleId, newCount) => {
		setCart((prevCart) => {
			const updatedCart = prevCart.map((item) => {
				if (item.productId === productId && item.bundleId === bundleId) {
					return { ...item, itemCount: newCount };
				}
				return item;
			});
			return updatedCart;
		});
	};

	const addAddOnToCartItem = (productId, bundleId, addOnId) => {
		setCart((prevCart) => {
			const existingIndex = prevCart.findIndex((item) => item.productId === productId && item.bundleId === bundleId);
			if (existingIndex !== -1) {
				const updatedCart = [...prevCart];
				const existingItem = updatedCart[existingIndex];
				if (!existingItem.addOns) {
					existingItem.addOns = [];
				}
				if (!existingItem.addOns.includes(addOnId)) {
					existingItem.addOns.push(addOnId);
				}
				return updatedCart;
			}
			return prevCart; // If item doesn't exist, return unchanged cart
		});
	};

	const removeAddOnFromCartItem = (productId, bundleId, addOnId) => {
		setCart((prevCart) => {
			const updatedCart = prevCart.map((item) => {
				if (item.productId === productId && item.bundleId === bundleId) {
					return {
						...item,
						addOns: item.addOns ? item.addOns.filter((id) => id !== addOnId) : [],
					};
				}
				return item;
			});
			return updatedCart;
		});
	};

	const getCartItemTotal = (productId, bundleId, count) => {
		let addOnPrice = 0;
		const productDetails = productList.find((product) => product.id === productId);
		const cartDetails = cart.find((item) => item.productId === productId && item.bundleId === bundleId);
		if (cartDetails && cartDetails.addOns) {
			const addOnTotal = cartDetails.addOns.reduce((total, addOnId) => {
				const addOnProduct = addOnProducts.find((addOn) => addOn.id === addOnId);
				return total + (addOnProduct ? addOnProduct.price : 0);
			}, 0);
			addOnPrice = addOnTotal;
		}

		if (!productDetails) return 0;
		const bundleDetails = productDetails.bundleTypes.find((bundle) => bundle.id === bundleId);
		if (!bundleDetails) return 0;
		return (bundleDetails.finalPrice || bundleDetails.price) * count + addOnPrice;
	};

	const getCartTotal = () => {
		return cart.reduce((total, item) => {
			const itemTotal = getCartItemTotal(item.productId, item.bundleId, item.itemCount);
			return total + itemTotal;
		}, 0);
	};

	const getCartSplit = () => {
		const splitCart = {};
		cart.forEach((item) => {
			const productDetails = productList.find((product) => product.id === item.productId);
			if (productDetails) {
				const bundleDetails = productDetails.bundleTypes.find((bundle) => bundle.id === item.bundleId);
				if (bundleDetails) {
					const totalPrice = getCartItemTotal(item.productId, item.bundleId, item.itemCount);
					splitCart[item.productId] = {
						name: productDetails.name,
						bundle: bundleDetails.unit,
						price: totalPrice,
						count: item.itemCount,
						addOns: item.addOns || [],
					};
				}
			}
		});
		return splitCart;
	};

	return { productList, cart, addToCart, removeFromCart, updateItemCount, getCartItemTotal, addAddOnToCartItem, removeAddOnFromCartItem, getCartTotal, getCartSplit };
};

export default useProducts;
