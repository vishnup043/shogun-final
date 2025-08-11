import React from "react";
import Image from "next/image";
import Navbar from "@layout/navbar/Navbar";
import Footer from "@layout/footer/Footer";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

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
        <div className="bg-green py-24 relative overflow-hidden">
          <div className="container">
            <div className="year-block flex justify-between">
              <div className="flex gap-28">
                <Link href="https://www.cbc.ca/news/canada/london/london-ontario-shogun-maitake-mushroom-1.4707532" target="_blank" className="block text-5xl text-white flex items-center gap-4">2018
                  <div className="text-3xl flex w-[56px]">
                    <FontAwesomeIcon icon={faChevronRight} />
                    <FontAwesomeIcon icon={faChevronRight} className="opacity-[57%]" />
                    <FontAwesomeIcon icon={faChevronRight} className="opacity-[28%]" />
                  </div>
                </Link>
                <Link href="https://londonincmagazine.ca/2017/09/01/growing-ways/" target="_blank" className="block text-5xl text-white flex items-center gap-4">2019
                  <div className="text-3xl flex w-[56px]">
                    <FontAwesomeIcon icon={faChevronRight} />
                    <FontAwesomeIcon icon={faChevronRight} className="opacity-[57%]" />
                    <FontAwesomeIcon icon={faChevronRight} className="opacity-[28%]" />
                  </div>
                </Link>
              </div>
              <div className="flex gap-28">
                <Link href="/" className="block text-5xl text-white flex items-center gap-4">2021
                  <div className="text-3xl flex w-[56px]">
                    <FontAwesomeIcon icon={faChevronRight} />
                    <FontAwesomeIcon icon={faChevronRight} className="opacity-[57%]" />
                    <FontAwesomeIcon icon={faChevronRight} className="opacity-[28%]" />
                  </div>
                </Link>
                <Link href="/2025-news" className="block text-5xl text-white flex items-center gap-4">2025
                  <div className="text-3xl flex w-[56px]">
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
              className="absolute top-[64px] left-1/2 -translate-x-1/2"
              src="/news/maitake.png"
            />
          </div>
        </div>
        <Link href="/" className="flex justify-center bg-brown items-center gap-4 2xl:py-12 lg:py-8 py-6">
          <h2 className="text-white text-4xl">construction update </h2>
          <div className="text-3xl flex w-[56px] text-white">
            <FontAwesomeIcon icon={faChevronRight} />
            <FontAwesomeIcon icon={faChevronRight} className="opacity-[57%]" />
            <FontAwesomeIcon icon={faChevronRight} className="opacity-[28%]" />
          </div>
        </Link>
      </section>
      <Footer />
    </div>
  );
};

export default News;
