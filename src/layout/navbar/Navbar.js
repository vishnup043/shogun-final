// components/Navbar.js
"use client";
import { useMemo, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiShoppingCart } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { getUserSession } from "@lib/auth";
import useProducts from "@hooks/custom/useProducts";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import "../../i18n";

const Navbar = () => {
	const { t, i18n } = useTranslation("navbar");

	const changeLanguage = (event) => {
		i18n.changeLanguage(event.target.value);
	};

	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const [loggedInUser, setLoggedInUser] = useState(null);
	const pathname = usePathname();
	const routeNames = {
		"/about": t("link1"),
		"/culinary-maitake": t("link2"),
		"/maitake-supplement": t("link3"),
		"/our-affiliations": t("link4"),
		"/news": t("link5"),
		"/allergen-information": t("link6"),
		"/order-now": t("ordernow"),
		"/fresh-maitake": t("freshmaitake"),
		"/2025-news": t("2025news"),
		"/cart": t("cart"),
		"/checkout": t("checkout"),
		"/application-form": t("application"),
		"/contact-us": t("link7"),

	};

	const [isOpen, setIsOpen] = useState(false);
	const userInfo = getUserSession();
	const { cart } = useProducts();

	const cartLength = useMemo(() => {
		return cart?.length || 0;
	}, [cart]);
	const currentLabel = routeNames[pathname] || "About Us";
	useEffect(() => {
		if (typeof window !== "undefined") {
			const user = JSON.parse(localStorage.getItem("loggedInUser"));
			setLoggedInUser(user);
		}
	}, []);
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (!event.target.closest(".relative")) {
				setIsDropdownOpen(false);
			}
		};
		document.addEventListener("click", handleClickOutside);
		return () => document.removeEventListener("click", handleClickOutside);
	}, []);


	return (
		<nav className="bg-white border-b border-gray-200 shadow-md relative z-50 2xl:py-12 xl:py-6 sticky top-0">
			<div className="container">
				<div className="flex justify-between h-16 items-center">
					<Link href="/" className="2xl:w-[260px] xl:w-[195px]">
						<Image width={260} height={45} alt="logo" className="w-full" src="/logo/logo.png" />
					</Link >
					{/* Desktop Menu */}
					<div className="grid grid-flow-col gap-4 items-center">

						<div className="bg-darkgreen2 flex items-center ">
							<p className="text-white p-2">{t("language")}</p>

							<select className="border-sm"
								onChange={changeLanguage}
								value={i18n.language}
							>
								<option value="en">English</option>
								<option value="ja">日本語</option>
							</select>
						</div>
						<Link href="/order-now" className="hidden md:block text-white bg-darkgreen2 text-uppercase 2xl:text-2xl xl:text-lg px-6 rounded-3xl">
							{t("orderonline")}
						</Link>

						<Link href={pathname} className="text-greyblack hidden md:block">
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
						{pathname !== "/" && (
							<Link href={"/cart"} className="relative md:px-5 px-0 text-2xl font-bold">
								{cartLength ? (
									<span className="absolute z-10 top-0 right-0 inline-flex items-center justify-center p-1 h-5 w-5 text-xs font-medium leading-none text-red-100 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">
										{cartLength}
									</span>
								) : null}

								<FiShoppingCart className="w-6 h-6 drop-shadow-xl" />
							</Link>
						)}
						{loggedInUser ? (
							<div className="relative">
								<button
									onClick={() => setIsDropdownOpen(!isDropdownOpen)}
									className="text-2xl font-bold text-gray-700 hover:text-green-600 md:px-2 focus:outline-none"
									title="Profile"
								>
									<FiUser className="w-6 h-6 drop-shadow-xl" />
								</button>

								{isDropdownOpen && (
									<div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
										<div className="px-4 py-2 text-gray-800 border-b border-gray-100 font-semibold">
											{loggedInUser.email || "User"}
										</div>
										<button
											className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
											onClick={() => {
												localStorage.removeItem("user"); // clear session
												setLoggedInUser(null); // update state
												setIsDropdownOpen(false); // close dropdown
											}}
										>
											{t("logout")}
										</button>
									</div>
								)}
							</div>
						) : (
							<Link
								href="/login"
								className="text-sm font-semibold text-green-700 md:px-3 hover:underline"
							>
								{t("login")}
							</Link>
						)}

					</div>
				</div>
				<div className={`fixed top-0 right-0 h-full w-80 bg-white z-50 transform transition-transform duration-500 ease-in-out shadow-lg ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
					<div className="p-8 space-y-4">
						<button className="text-gray-600 hover:text-red-500 float-right" onClick={() => setIsOpen(false)} aria-label="Close menu">
							✕
						</button>

						<nav className="grid grid-flow-row  gap-4 text-lg text-greyblack">
							<Link href="about" className="block">
								<p>{t("link1")}</p>
							</Link>
							<Link href="/culinary-maitake" className="block">
								<p>{t("link2")}</p>
							</Link>
							<Link href="/maitake-supplement" className="block">
								<p>{t("link3")}</p>
							</Link>
							<Link href="/our-affiliations" className="block">
								<p>{t("link4")}</p>
							</Link>
							<Link href="/news" className="block">
								<p>{t("link5")}</p>
							</Link>
							<Link href="allergen-information" className="block">
								<p>{t("link6")}</p>
							</Link>
							<Link href="/contact-us" className="block">
								<p>{t("link7")}</p>
							</Link>
							<Link href="/order-now" className="w-max md:hidden block text-white bg-darkgreen2 text-uppercase 2xl:text-2xl xl:text-lg px-6 rounded-3xl">
								{t("orderonline")}
							</Link>
							{/* <Link href="/application-form" className="w-max md:hidden block text-white bg-darkgreen2 text-uppercase 2xl:text-2xl xl:text-lg px-6 rounded-3xl">
								Free Samples
							</Link> */}

						</nav>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
