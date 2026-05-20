import React from "react";
import Image from "next/image";
import Navbar from "@layout/navbar/Navbar";
import Link from 'next/link';
import Footer from "@layout/footer/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import WhatsAppButton from "@components/whatsapp/WhatsAppButton";
import { useTranslation } from "react-i18next";


const CulinaryMaitake = () => {
const { t } = useTranslation();
  return (
    <div>
      <div className="bg-limebg">
        <Navbar />
        <div className="about-banner relative">

          <Image
            src="/culinary/banner.png"
            alt="Banner"
            className="w-full"
            width={1200}
            height={500}
          />
          <div className="absolute 2xl:bottom-36 bottom-6 left-0 w-full text-center text-white">
            <h1 className="xl:text-[80px] md:text-[50px] text-[30px] md:px-0 px-4 leading-none text-white"><span className="block 2xl:text-6xl lg:text-4xl text-xl"> {t("title")}</span> {t("subtitle")}</h1>
          </div>
        </div>
        <div className="text-center 2xl:py-36 lg:py-28 py-12 relative bg-white ">
          <div className="container mx-auto relative z-10">
            <h2 className="text-greenLeaf 2xl:text-5xl text-3xl md:pb-10 pb-6">{t("h2")}</h2>
            <p className="text-grey 2xl:text-2xl text-lg">{t("p1")}</p>
            <p className="text-grey 2xl:text-2xl text-lg"> {t("p2")}</p>
            <p className="text-grey 2xl:text-2xl text-lg">{t("p3")}</p>
            <p className="text-grey 2xl:text-2xl text-lg">{t("p4")}</p>
          </div>
        </div>
        <section className="bg-limeLeaf 2xl:pt-[184px] 2xl:pb-[140px] lg:pt-[130px] lg:pb-[90px] py-16 relative">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="col-span-2">
                <h3 className="2xl:text-6xl lg:text-4xl text-3xl text-white pb-9">{t("healthyTitle")}</h3>
                <div className="2xl:text-2xl text-lg text-white md:w-3/4 w-full">
                  <p className="md:pb-8 pb-0">{t("healthyText1")}</p>

                  <p>{t("healthyText2")}</p>
                </div>

              </div>
            </div>
          </div>
          <Image
            src="/culinary/culinary-hand.png"
            alt="Banner"
            className="md:absolute relative right-0 md:top-1/2 sm:transform md:-translate-y-1/2 md:w-[44%] w-full md:mt-0 mt-8"
            width={778}
            height={450}
          />
        </section>

        <section className="culinary-maitake 2xl:mt-32 md:mt-24 mt-10">
          <Image
            src="/culinary/maitake-on-plate.png"
            alt="Banner"
            className="mx-auto 2xl:w-[38%] w-[40%]"
            width={732}
            height={365}
          />
          <h1 className="2xl:text-[340px] lg:text-[240px] md:text-[100px] lg:text-[160px] text-[75px] text-center text-limeGreen lg:leading-[240px] md:leading-[100px] leading-[75px]">{t("freshmaitake")}</h1>
          <div className="grid place-content-center">
            <Link href="/fresh-maitake" className="link-btn bg-greenLeaf text-white px-2 py-1 2xl:text-5xl lg:text-3xl text-2xl">
              {t("h3")}
            </Link>
            <div className="text-3xl flex w-[56px] text-white mx-auto mt-6 pb-12">
              <FontAwesomeIcon icon={faChevronRight} />
              <FontAwesomeIcon icon={faChevronRight} className="opacity-[57%]" />
              <FontAwesomeIcon icon={faChevronRight} className="opacity-[28%]" />
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default CulinaryMaitake;
