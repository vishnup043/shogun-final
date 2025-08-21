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
      <section>
        <div className="container">
              <div className="sm:px-16 relative sm:my-16 my-8">
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
              <div className="bg-limebg md:p-12 p-4 rounded-xl">
                <Swiper
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

                >
                  <SwiperSlide>
                    <div className="grid lg:grid-cols-6 sm:grid-cols-3 grid-cols-2 gap-4">
                      <div className="rounded-md bg-white text-xl px-2 flex items-center justify-center">
                        <Link href="https://finance.yahoo.com/news/major-research-advancement-university-windsor-111100957.html" target="_blank" className="py-4 block text-center">
                          Yahoo! Finance
                        </Link>
                      </div>
                      <div className="rounded-md bg-white text-xl px-2 flex items-center justify-center">
                        <Link href="https://apnews.com/press-release/pr-newswire/a-major-research-advancement-by-the-university-of-windsor-in-collaboration-with-shogun-maitake-shows-maitake-mushrooms-could-improve-cancer-patients-care-19e7a37955c4384c6695ee4fb8637003" target="_blank" className="py-4 block text-center">
                          AP NEWS
                        </Link>
                      </div>
                      <div className="rounded-md bg-white text-xl px-2 flex items-center justify-center">
                        <Link href="https://www.marketwatch.com/press-release/a-major-research-advancement-by-the-university-of-windsor-in-collaboration-with-shogun-maitake-shows-maitake-mushrooms-could-improve-cancer-patients-care-73563987?mod=search_headline" target="_blank" className="py-4 block text-center">
                          Market Watch
                        </Link>
                      </div>
                      <div className="rounded-md bg-white text-xl px-2 flex items-center justify-center">
                        <Link href="https://ktla.com/business/press-releases/cision/20250812TO47812/a-major-research-advancement-by-the-university-of-windsor-in-collaboration-with-shogun-maitake-shows-maitake-mushrooms-could-improve-cancer-patients-care/" target="_blank" className="py-4 block text-center">
                          KTLA
                        </Link>
                      </div>
                      <div className="rounded-md bg-white text-xl px-2 flex items-center justify-center">
                        <Link href="https://www.morningstar.com/news/pr-newswire/20250812to47812/a-major-research-advancement-by-the-university-of-windsor-in-collaboration-with-shogun-maitake-shows-maitake-mushrooms-could-improve-cancer-patients-care" target="_blank" className="py-4 block text-center">
                          Morningstar
                        </Link>
                      </div>
                      <div className="rounded-md bg-white text-xl px-2 flex items-center justify-center">
                        <Link href="https://www.prnewswire.com/news-releases/a-major-research-advancement-by-the-university-of-windsor-in-collaboration-with-shogun-maitake-shows-maitake-mushrooms-could-improve-cancer-patients-care-302526767.html
" target="_blank" className="py-4 block text-center">
                          PR Newswire
                        </Link>
                      </div>
                      <div className="rounded-md bg-white text-xl px-2 flex items-center justify-center">
                        <Link href="https://www.barchart.com/story/news/34072829/a-major-research-advancement-by-the-university-of-windsor-in-collaboration-with-shogun-maitake-shows-maitake-mushrooms-could-improve-cancer-patients-care" target="_blank" className="py-4 block text-center">
                          Barchart
                        </Link>
                      </div>
                      <div className="rounded-md bg-white text-xl px-2 flex items-center justify-center">
                        <Link href="https://fox8.com/business/press-releases/cision/20250812TO47812/a-major-research-advancement-by-the-university-of-windsor-in-collaboration-with-shogun-maitake-shows-maitake-mushrooms-could-improve-cancer-patients-care/" target="_blank" className="py-4 block text-center">
                          WJW-TV FOX-8
                        </Link>
                      </div>
                      <div className="rounded-md bg-white text-xl px-2 flex items-center justify-center">
                        <Link href="https://ca.finance.yahoo.com/news/major-research-advancement-university-windsor-111100263.html" target="_blank" className="py-4 block text-center">
                          Yahoo! Finance Canada
                        </Link>
                      </div>
                      <div className="rounded-md bg-white text-xl px-2 flex items-center justify-center">
                        <Link href="https://www.wfla.com/business/press-releases/cision/20250812TO47812/a-major-research-advancement-by-the-university-of-windsor-in-collaboration-with-shogun-maitake-shows-maitake-mushrooms-could-improve-cancer-patients-care/
" target="_blank" className="py-4 block text-center">
                          WFLA [Tampa, FL]
                        </Link>
                      </div>
                      <div className="rounded-md bg-white text-xl px-2 flex items-center justify-center">
                        <Link href="https://wgntv.com/business/press-releases/cision/20250812TO47812/a-major-research-advancement-by-the-university-of-windsor-in-collaboration-with-shogun-maitake-shows-maitake-mushrooms-could-improve-cancer-patients-care/" target="_blank" className="py-4 block text-center">
                          WGN [Chicago, IL]
                        </Link>
                      </div>
                      <div className="rounded-md bg-white text-xl px-2 flex items-center justify-center">
                        <Link href="https://www.kxan.com/business/press-releases/cision/20250812TO47812/a-major-research-advancement-by-the-university-of-windsor-in-collaboration-with-shogun-maitake-shows-maitake-mushrooms-could-improve-cancer-patients-care/" target="_blank" className="py-4 block text-center">
                          KXAN-TV NBC-36 [Austin, TX]
                        </Link>
                      </div>
                      <div className="rounded-md bg-white text-xl px-2 flex items-center justify-center">
                        <Link href="https://myfox8.com/business/press-releases/cision/20250812TO47812/a-major-research-advancement-by-the-university-of-windsor-in-collaboration-with-shogun-maitake-shows-maitake-mushrooms-could-improve-cancer-patients-care/
" target="_blank" className="py-4 block text-center">
                          WGHP [Greensboro, NC]
                        </Link>
                      </div>
                      <div className="rounded-md bg-white text-xl px-2 flex items-center justify-center">
                        <Link href="https://fox2now.com/business/press-releases/cision/20250812TO47812/a-major-research-advancement-by-the-university-of-windsor-in-collaboration-with-shogun-maitake-shows-maitake-mushrooms-could-improve-cancer-patients-care/" target="_blank" className="py-4 block text-center">
                          KTVI-TV FOX-2 [St. Louis, MO]
                        </Link>
                      </div>
                      <div className="rounded-md bg-white text-xl px-2 flex items-center justify-center">
                        <Link href="https://newsblaze.com/pr-newswire/?rkey=20250812TO47812&filter=12684" target="_blank" className="py-4 block text-center">
                          NewsBlaze US
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
        </div>
        <div className="bg-limebg relative lg:py-16">
          <div className="container">
       
            <h2 className="text-center text-[clamp(3rem,35vw,51rem)] lg:leading-[360px] text-center text-lime2">2025</h2>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default News;
