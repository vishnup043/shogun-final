import React, { useRef } from "react";
import NavbarHome from "@layout/navbar/NavbarHome";
import Image from "next/image";
import Link from 'next/link';

const Home = () => {
	const videoRef = useRef(null);
	return (
		<>
			<NavbarHome videoRef={videoRef} />
			<div className="min-h-screen">
				<video ref={videoRef} className="w-full h-screen object-cover" autoPlay playsInline loop muted>
					<source src="/video/shogun-video.mp4" type="video/mp4" controls />
					Your browser does not support the video tag.
				</video>
				<div className="relative">
					<div className="container">
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
				</div>
			</div>
		</>
	);
};

export default Home;
