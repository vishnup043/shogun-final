import React, { useRef } from "react";
import NavbarHome from "@layout/navbar/NavbarHome";
import Navbar from "@layout/navbar/Navbar";
import Image from "next/image";
import Link from 'next/link';
import WhatsAppButton from "@components/whatsapp/WhatsAppButton";

const Home = () => {
	const videoRef = useRef(null);
	return (
		<>
			<div className="hidden md:block">
				<NavbarHome videoRef={videoRef} />
			</div>
			<div className="md:hidden block absolute w-full">
				<Navbar />
			</div>
			<div className="min-h-screen">
				<video ref={videoRef} className="w-full h-screen object-cover md:block hidden" autoPlay playsInline loop muted>
					<source src="/video/shogun-video.mp4" type="video/mp4" controls />
				</video>
				<video className="w-full h-screen object-cover md:hidden block" autoPlay playsInline loop muted>
					<source src="/video/shogun-video-mob.mp4" type="video/mp4" controls />
				</video>
				<Link href="/application-form" className="hidden sm:block">
					<Image
						src="/video/application-banner.jpg"
						alt="Banner"
						className="w-full absolute bottom-0"
						width={1517}
						height={188}
					/>
				</Link>
				<Link href="/application-form" className="sm:hidden block">
					<Image
						src="/video/application-banner-mob.jpg"
						alt="Banner"
						className="w-full absolute bottom-0"
						width={1517}
						height={188}
					/>
				</Link>
			</div>
			<WhatsAppButton/>
		</>
	);
};

export default Home;
