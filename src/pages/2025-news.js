import React from "react";
import Image from "next/image";
import Navbar from "@layout/navbar/Navbar";
import Footer from "@layout/footer/Footer";
import Link from "next/link";
import { Autoplay, Controller, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const News = () => {

  return (

    <div>
      <Navbar />
      <section className="pt-16">
        <div className="container">
          <div className="relative">
            <h1 className="text-[clamp(3rem,43vw,51rem)] leading-[clamp(3rem,30vw,51rem)] text-center text-limebg">News</h1>
          </div>
        </div>
        <div className="bg-limebg relative pb-16">
          <div className="container">
            <div className="px-16 relative">
              <div className="absolute top-0 -translate-y-1/2 -left-2 z-10">
                <button className="swiper-button-prev-custom bg-lime2 w-[28px] h-[28px] rounded-full">
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>
              </div>
              <div className="absolute top-0 -translate-y-1/2 -right-2 z-10">
                <button className="swiper-button-prev-custom bg-lime2 w-[28px] h-[28px] rounded-full">
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </div>
              <Swiper className="relative top-[-250px]"
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                navigation={{
                  prevEl: '.swiper-button-prev-custom',
                  nextEl: '.swiper-button-next-custom',
                }}
                modules={[Navigation]}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                breakpoints={{
                  1200: {
                    slidesPerView: 3,
                  },
                  992: {
                    slidesPerView: 3,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  500: {
                    slidesPerView: 1,
                  },
                }}
              >
                <SwiperSlide>
                  <Image
                    src="/fresh-maitake/slide-1.png"
                    alt=""
                    className="w-full"
                    width={318}
                    height={318}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src="/fresh-maitake/slide-2.png"
                    alt=""
                    className="w-full"
                    width={318}
                    height={318}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src="/fresh-maitake/slide-3.png"
                    alt=""
                    className="w-full"
                    width={318}
                    height={318}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src="/fresh-maitake/slide-4.png"
                    alt=""
                    className="w-full"
                    width={318}
                    height={318}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src="/fresh-maitake/slide-5.png"
                    alt=""
                    className="w-full"
                    width={318}
                    height={318}
                  />
                </SwiperSlide>
              </Swiper>
            </div>
            <h2 className="text-center absolute bottom-[-92px] left-0 right-0 text-[clamp(3rem,35vw,51rem)] leading-[360px] text-center text-lime2">2025</h2>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default News;
