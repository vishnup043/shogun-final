import React from "react";
import Image from "next/image";
import Navbar from "@layout/navbar/Navbar";
import Footer from "@layout/footer/Footer";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import WhatsAppButton from "@components/whatsapp/WhatsAppButton";

const News = () => {

  return (

    <div>
      <Navbar />
      <section className="">
        <div className="container">
          <div className="relative">
            <h1 className="absolute left-1/2 -translate-x-1/2 text-[clamp(3rem,50vw,51rem)] leading-none text-center text-limebg">News</h1>
            <Image
              width={722}
              height={777}
              alt=""
              className="relative mx-auto block"
              src="/news/news-paper.png"
            />
          </div>
        </div>
        <div className="bg-green lg:py-24 py-12 relative overflow-hidden">
          <div className="container">
            <div className="year-block flex justify-between">
              <div className="flex flex-col md:flex-row lg:gap-28 gap-6">
                <Link href="https://www.cbc.ca/news/canada/london/london-ontario-shogun-maitake-mushroom-1.4707532" target="_blank" className="block lg:text-5xl text-4xl text-white flex items-center gap-4">2018
                  <div className="md:text-3xl text-2xl flex w-[56px]">
                    <FontAwesomeIcon icon={faChevronRight} />
                    <FontAwesomeIcon icon={faChevronRight} className="opacity-[57%]" />
                    <FontAwesomeIcon icon={faChevronRight} className="opacity-[28%]" />
                  </div>
                </Link>
                <Link href="https://londonincmagazine.ca/2017/09/01/growing-ways/" target="_blank" className="block lg:text-5xl text-4xl text-white flex items-center gap-4">2019
                  <div className="md:text-3xl text-2xl flex w-[56px]">
                    <FontAwesomeIcon icon={faChevronRight} />
                    <FontAwesomeIcon icon={faChevronRight} className="opacity-[57%]" />
                    <FontAwesomeIcon icon={faChevronRight} className="opacity-[28%]" />
                  </div>
                </Link>
              </div>
              <div className="flex flex-col md:flex-row lg:gap-28 gap-6">
                <Link href="/" className="block lg:text-5xl text-4xl text-white flex items-center gap-4">2021
                  <div className="md:text-3xl text-2xl flex w-[56px]">
                    <FontAwesomeIcon icon={faChevronRight} />
                    <FontAwesomeIcon icon={faChevronRight} className="opacity-[57%]" />
                    <FontAwesomeIcon icon={faChevronRight} className="opacity-[28%]" />
                  </div>
                </Link>
                <Link href="/2025-news" className="block lg:text-5xl text-4xl text-white flex items-center gap-4">2025
                  <div className="md:text-3xl text-2xl flex w-[56px]">
                    <FontAwesomeIcon icon={faChevronRight} />
                    <FontAwesomeIcon icon={faChevronRight} className="opacity-[57%]" />
                    <FontAwesomeIcon icon={faChevronRight} className="opacity-[28%]" />
                  </div>
                </Link>
              </div>
            </div>
            <Image
              width={360}
              height={360}
              alt=""
              className="absolute lg:top-[126px] left-1/2 -translate-x-1/2 lg-w-[360px] md:w-[243px] w-[150px] top-auto"
              src="/news/maitake.png"
            />
          </div>
        </div>
        <Link href="/" className="flex justify-center bg-brown items-center gap-4 2xl:py-12 lg:py-8 py-6">
          <h2 className="text-white sm:text-4xl text-2xl">construction update </h2>
          <div className="sm:text-3xl text-2xl flex w-[56px] text-white">
            <FontAwesomeIcon icon={faChevronRight} />
            <FontAwesomeIcon icon={faChevronRight} className="opacity-[57%]" />
            <FontAwesomeIcon icon={faChevronRight} className="opacity-[28%]" />
          </div>
        </Link>
      </section>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default News;
