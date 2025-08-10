import {
	// FiUser,
	FiGift,
	FiGrid,
	FiAlertCircle,
	FiHelpCircle,
	FiTruck,
	FiPhoneCall,
	FiCreditCard,
	FiMail,
	FiMapPin,
	FiShoppingBag,
	FiFileText,
	FiUsers,
	FiPocket,
	FiSettings,
	FiList,
	FiPhoneIncoming,
} from "react-icons/fi";

const pages = [
	// {
	//   title: 'User',
	//   href: '/user/dashboard',
	//   icon: FiUser,
	// },
	{
		title: "offer-page",
		href: "/offer",
		icon: FiGift,
	},
	{
		title: "checkout-page",
		href: "/checkout",
		icon: FiShoppingBag,
	},
	{
		title: "faq-page",
		href: "/faq",
		icon: FiHelpCircle,
	},
	{
		title: "about-us-page",
		href: "/about",
		icon: FiUsers,
	},
	{
		title: "contact-us-page",
		href: "/contact-us",
		icon: FiPhoneIncoming,
	},
	{
		title: "privacy-policy-page",
		href: "/privacy-policy",
		icon: FiPocket,
	},
	{
		title: "terms-and-conditions-page",
		href: "/terms-and-conditions",
		icon: FiFileText,
	},
	{
		title: "not-found-page",
		href: "/404",
		icon: FiAlertCircle,
	},
];

const userSidebar = [
	{
		title: "Dashboard",
		href: "/user/dashboard",
		icon: FiGrid,
	},
	{
		title: "My Orders",
		href: "/user/my-orders",
		icon: FiList,
	},
	{
		title: "Update Profile",
		href: "/user/update-profile",
		icon: FiSettings,
	},
	{
		title: "Change Password",
		href: "/user/change-password",
		icon: FiFileText,
	},
];

const sliderData = [
	{
		id: 1,
		title: "Slider1Title",
		info: "Slider1description",
		url: "/search?Category=biscuits--cakes",
		image: "/slider/slider-1.jpg",
	},
	{
		id: 2,
		title: "Slider2Title",
		info: "Slider2description",
		url: "/search?Category=fish--meat",
		image: "/slider/slider-2.jpg",
	},
	{
		id: 3,
		title: "Slider3Title",
		info: "Slider3description",
		url: "/search?category=fresh-vegetable",
		image: "/slider/slider-3.jpg",
	},
];

const ctaCardData = [
	{
		id: 1,
		title: "Taste of",
		subTitle: "Fresh & Natural",
		image: "/cta/cta-bg-1.jpg",
		url: "/search?category=fresh-vegetable",
	},
	{
		id: 2,
		title: "Taste of",
		subTitle: "Fish & Meat",
		image: "/cta/cta-bg-2.jpg",
		url: "/search?Category=fish--meat",
	},
	{
		id: 3,
		title: "Taste of",
		subTitle: "Bread & Bakery",
		image: "/cta/cta-bg-3.jpg",
		url: "/search?Category=biscuits--cakes",
	},
];

const featurePromo = [
	{
		id: 1,
		title: "featurePromo1-title",
		info: "featurePromo1-info",
		icon: FiTruck,
	},
	{
		id: 2,
		title: "featurePromo2-title",
		info: "featurePromo2-info",
		icon: FiPhoneCall,
	},
	{
		id: 3,
		title: "featurePromo3-title",
		info: "featurePromo3-info",
		icon: FiCreditCard,
	},
	{
		id: 4,
		title: "featurePromo4-title",
		info: "featurePromo4-info",
		icon: FiGift,
	},
];

const contactData = [
	{
		id: 1,
		title: "contact-page-box1-title",
		info: "contact-page-box1-info",
		icon: FiMail,
		contact: "kachabazar@gmail.com",
		className: "bg-emerald-100",
	},
	{
		id: 2,
		title: "contact-page-box2-title",
		info: "contact-page-box2-info",
		icon: FiPhoneCall,
		contact: "029-00124667",
		className: "bg-yellow-100",
	},
	{
		id: 3,
		title: "contact-page-box3-title",
		info: "contact-page-box3-info",
		icon: FiMapPin,
		contact: "",
		className: "bg-indigo-100",
	},
];

const shortgunProducts = [
	{
		id: 1,
		name: "Prothera",
		type: "Liquid",
		displayPrice: "$ 150",
		isComboTherapyAvailable: true,
		bundleTypes: [
			{ id: "ProtheraB1", price: 150, unit: "Bottle (140 ml)", purchaseMode: "ONE_TIME" },
			{ id: "ProtheraB2", price: 120, unit: "Bottle (140 ml) (2 Bottles/Mo)", purchaseMode: "SUBSCRIPTION" },
		],
		images: ["/order-now/prothera1.jpg", "/order-now/prothera2.jpg", "/order-now/prothera3.jpg", "/order-now/prothera4.jpg", "/order-now/prothera5.jpg", "/order-now/prothera6.jpg", "/order-now/prothera7.jpg"],
	},
	{
		id: 2,
		name: "EX TABLETS",
		displayPrice: "$ 120",
		isComboTherapyAvailable: false,
		bundleTypes: [
			{ id: "ExTabletsB1", price: 150, unit: "Bottle (140 ml)", purchaseMode: "ONE_TIME" },
			{ id: "ExTabletsB2", price: 120, unit: "Bottle (140 ml) (2 Bottles/Mo)", purchaseMode: "SUBSCRIPTION", finalPrice: 2800.0 },
		],
		images: ["/order-now/ex-1.jpg", "/order-now/ex-2.jpg", "/order-now/ex-3.jpg", "/order-now/ex-4.jpg", "/order-now/ex-5.jpg", "/order-now/ex-6.jpg", "/order-now/ex-7.jpg"],
	},
	{
		id: 3,
		name: "Synergy Extract",
		type: "capsule",
		displayPrice: "$ 139.99",
		isComboTherapyAvailable: true,
		bundleTypes: [
			{ id: "SynergyExtractB1", price: 139.99, unit: "Bottle (60 Capsules & 200 mg)", purchaseMode: "ONE_TIME" },
			{ id: "SynergyExtractB2", price: 130.0, unit: "Bottle (60 capsules) (2 Bottles/Mo)", purchaseMode: "SUBSCRIPTION", finalPrice: 1560.0 },
		],
		images: ["/order-now/synergy-1.jpg", "/order-now/synergy-2.jpg", "/order-now/synergy-3.jpg", "/order-now/synergy-4.jpg", "/order-now/synergy-5.jpg", "/order-now/synergy-6.jpg", "/order-now/synergy-7.jpg"],
	},
	{
		id: 4,
		name: "Synergy Extract",
		type: "Liquid",
		displayPrice: "$ 109.99",
		isComboTherapyAvailable: false,
		highlighted: true,
		bundleTypes: [
			{ id: "SynergyExtractLiquidB1", price: 109.99, unit: "Bottle (140 ml)", purchaseMode: "ONE_TIME" },
			{ id: "SynergyExtractLiquidB2", price: 100.0, unit: "Bottle (140 ml) (2 Bottles/Mo)", purchaseMode: "SUBSCRIPTION", finalPrice: 2400.0 },
		],
		images: ["/order-now/liquid-1.jpg", "/order-now/liquid-2.jpg", "/order-now/liquid-3.jpg", "/order-now/liquid-4.jpg", "/order-now/liquid-5.jpg", "/order-now/liquid-6.jpg", "/order-now/liquid-7.jpg"],
	},
];

export const addOnProducts = [{ id: 1000, name: "Combo Theraphy", price: 220, description: "Shogun Black Maitake Ex Tablets + Shogun Black Maitake Prothera" }];

export { pages, userSidebar, sliderData, ctaCardData, featurePromo, contactData, shortgunProducts };
