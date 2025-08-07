import Image from "next/image";
import Navbar from "@layout/navbar/Navbar";
import Footer from "@layout/footer/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import useProducts from "@hooks/custom/useProducts";
import ProductCard from "@components/order-now/ProductCard";
const OrderNow = () => {
	const { productList } = useProducts();

	const highlightedProducts = productList.filter((product) => product.highlighted);
	const nonHighlightedProducts = productList.filter((product) => !product.highlighted);

	return (
		<div>
			<Navbar />
			<div className="container">
				{nonHighlightedProducts.map((each) => (
					<ProductCard key={each.id} productDetails={each} />
				))}
			</div>
			{highlightedProducts?.map((each) => (
				<div className="bg-limebg">
					<div className="container">
						<ProductCard key={each.id} productDetails={each} />
					</div>
				</div>
			))}
			<Footer />
		</div>
	);
};

export default OrderNow;
