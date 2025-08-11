// components/Navbar.js
"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiShoppingCart } from "react-icons/fi";
import { getUserSession } from "@lib/auth";
import useProducts from "@hooks/custom/useProducts";
import { usePathname } from "next/navigation";

const Navbar = () => {

	const pathname = usePathname();
	 const routeNames = {
    "/about": "About Us",
    "/culinary-maitake": "Culinary Maitake",
    "/maitake-supplement": "Maitake Supplements",
    "/our-affiliations": "Our Affiliations",
    "/news": "News & Publications",
    "/allergen-information": "Allergen Information",
	"/order-now": "Order Now",
	"/fresh-maitake":"Fresh Maitake",
	"/2025-news": "2025 News",
    "/contact-us": "Contact Us",
	
  };

	const [isOpen, setIsOpen] = useState(false);
	const userInfo = getUserSession();
	const { cart } = useProducts();

	const cartLength = useMemo(() => {
		return cart?.length || 0;
	}, [cart]);
	const currentLabel = routeNames[pathname] || "About Us";
	return (
		<nav className="bg-white border-b border-gray-200 shadow-md relative z-50 2xl:py-12 xl:py-6 sticky top-0">
			<div className="container">
				<div className="flex justify-between h-16 items-center">
					<Link  href="/" className="2xl:w-[260px] xl:w-[195px]">
						<Image width={260} height={45} alt="logo" className="w-full" src="/logo/logo.png" />
					</Link >
					{/* Desktop Menu */}
					<div className="grid grid-flow-col gap-4 items-center">
						<Link href="/order-now" className="text-white bg-darkgreen2 text-uppercase 2xl:text-2xl xl:text-lg px-6 rounded-3xl">
							order online
						</Link>

						{userInfo?.email ? (
							<Link href="/" className="text-greyblack">
								<p>My account</p>
							</Link>
						) : (
							""
						)}

						<Link href={pathname} className="text-greyblack">
							<p>{currentLabel}</p>
						</Link>
						<div className="h-[30px] w-[30px]">
							<button onClick={() => setIsOpen(!isOpen)} className="bg-darkgreen2 focus:outline-none p-1 text-white rounded-[50%]" aria-label="Toggle menu">
								<svg
									className={`w-full h-full'
                  }`}
									fill="#fff"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
								</svg>
							</button>
						</div>
						<Link href={"/cart"} className="relative px-5 text-2xl font-bold">
							{cartLength ? (
								<span className="absolute z-10 top-0 right-0 inline-flex items-center justify-center p-1 h-5 w-5 text-xs font-medium leading-none text-red-100 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">
									{cartLength}
								</span>
							) : null}

							<FiShoppingCart className="w-6 h-6 drop-shadow-xl" />
						</Link>
					</div>
				</div>
				<div className={`fixed top-0 right-0 h-full w-80 bg-white z-50 transform transition-transform duration-500 ease-in-out shadow-lg ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
					<div className="p-8 space-y-4">
						<button className="text-gray-600 hover:text-red-500 float-right" onClick={() => setIsOpen(false)} aria-label="Close menu">
							✕
						</button>

						<nav className="grid grid-flow-row  gap-4 text-lg text-greyblack">
							<Link href="about" className="block">
								<p>About</p>
							</Link>
							<Link href="/culinary-maitake" className="block">
								<p>Culinary Maitake</p>
							</Link>
							<Link href="/maitake-suppliment" className="block">
								<p>Maitake Suppliments</p>
							</Link>
							<Link href="/our-affiliations" className="block">
								<p>Our Affiliations</p>
							</Link>
							<Link href="/news" className="block">
								<p>News & Publications</p>
							</Link>
							<Link href="allergen-information" className="block">
								<p>Allergen Information</p>
							</Link>
							<Link href="/contact-us" className="block">
								<p>Contact Us</p>
							</Link>
						</nav>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
