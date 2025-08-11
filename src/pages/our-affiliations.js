import React from "react";
import Image from "next/image";
import Navbar from "@layout/navbar/Navbar";
import Footer from "@layout/footer/Footer";
import Link from 'next/link';
import { Autoplay, Controller, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const Affiliation = () => {

  return (

    <div>
      <Navbar />
      <section className="lg:py-24 py-16">
        <div className="container">
          <div>
            <h2 className="text-center text-green 2xl:text-7xl lg:text-5xl text-4xl sm:mb-8 mb-4 uppercase">Affiliation</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 sm:divide-x max-w-4xl mx-auto">
              <div className="flex flex-col items-center py-8 px-8">
                <div className="text-center">
                  <Image
                    width={1343}
                    height={573}
                    alt="logo"
                    className='w-full'
                    src="/affiliation/logo-4.png"
                  />
                  <span className="block text-center md:text-3xl text-2xl mt-4 leading-none">Patterson Institute for <span className="block">Integrative Cancer Research</span></span>
                </div>
              </div>
              <div className="flex flex-col items-center py-8 px-8">
                <div className="text-center">
                  <Image
                    width={272}
                    height={159}
                    alt="logo"
                    className='w-full'
                    src="/affiliation/logo-3.png"
                  />
                  <span className="block text-center md:text-3xl text-2xl mt-4">CCNM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="map-section relative pt-16 overflow-hidden">
          <div className="container">
            <Image
              width={1343}
              height={573}
              alt="logo"
              className='w-full'
              src="/affiliation/map.png"
            />
          </div>
          <Image
            width={278}
            height={278}
            alt="logo"
            className='absolute top-1/2 left-[-140px] transform -translate-y-1/2 lg:block hidden'
            src="/affiliation/maitale-element.png"
          />
          <Image
            width={278}
            height={278}
            alt="logo"
            className='absolute top-1/2 right-[-140px] transform -translate-y-1/2 lg:block hidden'
            src="/affiliation/maitale-element.png"
          />
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Affiliation;
