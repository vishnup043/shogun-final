import React, { useRef } from "react";
import NavbarHome from "@layout/navbar/NavbarHome";
import Navbar from "@layout/navbar/Navbar";
import Image from "next/image";
import Link from 'next/link';

const Home = () => {
	const videoRef = useRef(null);
	return (
		<>
		<div className="md:hidden block absolute w-full">
			<Navbar className="top-0"/>
			</div>
			<div className="hidden md:block">
			<NavbarHome videoRef={videoRef} />
			</div>
			<div className="min-h-screen">
				<video ref={videoRef} className="md:block hidden w-full h-screen object-cover" autoPlay playsInline loop muted>
					<source src="/video/shogun-video.mp4" type="video/mp4" controls />
				</video>
				<video ref={videoRef} className="block md:hidden w-full h-screen object-cover" autoPlay playsInline loop muted>
					<source src="/video/shogun-video-mob.mp4" type="video/mp4" controls />
				</video>

				<Link href="/application-form">
					<Image
						src="/video/application-banner.jpg"
						alt="Banner"
						className="w-full absolute bottom-0"
						width={1517}
						height={188}
					/>
				</Link>

			</div>
		</>
	);
};

export default Home;
