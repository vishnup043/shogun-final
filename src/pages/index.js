import React, { useRef } from "react";
import NavbarHome from "@layout/navbar/NavbarHome";

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
			</div>
		</>
	);
};

export default Home;
