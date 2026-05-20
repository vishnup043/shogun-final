import React from "react";
import Image from "next/image";
import Navbar from "@layout/navbar/Navbar";
import Footer from "@layout/footer/Footer";
import Link from 'next/link';
import WhatsAppButton from "@components/whatsapp/WhatsAppButton";
import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";

const Allergen = () => {
  const { t } = useTranslation("allergen");
  return (

    <div>
      <Navbar />
      <section className="relative before:content-[''] before:absolute before:left-0 before:w-full before:h-[30%] before:bottom-0 before:bg-green 2xl:py-16 py-12">
        <div className="container">
          <div className="lg:w-[80%] w-full mx-auto text-sm text-gray-700 bg-limebg md:p-16 p-6 relative overflow-hidden">
            <h2 className="text-green 2xl:text-7xl md:text-5xl text-3xl">
              <Trans
                i18nKey="maintitle"
                ns="allergen"
                components={{
                  span: <span className="block" />,
                }}
              />
            </h2>
            <h5 class="text-grey 2xl:text-4xl md:text-3xl text-2xl md:pb-8 pb-4">{t("smalltitle")}</h5>
            <p>{t("allergenp1")}</p>
            <p>
              {t("allergenp2")}
            </p>

            <p>
              {t("allergenp3")}
            </p>
            <p>{t("allergenp4")}</p>

            <p>{t("allergenp5")}</p>
            <p> {t("allergenp6")}</p>
            <p className="font-bold">{t("allergenp7")}</p>
            <p className="!mb-0">{t("allergenp8")}</p>
            <p>{t("allergenp9")}</p>
            <p>{t("allergenp10")}</p>
            <p className="font-bold !mb-0">{t("allergenp11")}</p>
            <p className="!mb-0">{t("allergenp12")}</p>
            <p className="!mb-0">{t("allergenp13")}</p>
            <p className="!mb-0">{t("allergenp14")}</p>
            <div className="flex 2xl:gap-10 xl:gap-8 2xl:mt-10 mt-8">
              <Link href="https://shogunmaitake.s3.eu-north-1.amazonaws.com/shogun-pdf/Disclaimer-Allergen.pdf" target="_blank" className="link-btn bg-green text-white px-2 py-1 2xl:text-2xl md:text-lg text-base rounded-xl">
                <p>{t("download")}</p>
              </Link>
            </div>
            <div className="absolute bottom-[-53px] right-12 hidden sm:block">
              <Image
                width={284}
                height={274}
                alt="logo"
                className='relative 2xl:w-[284px] lg:w-[170px] w-[150px]'
                src="/about/maitake.png"
              />
            </div>
            <div className="relative bottom-[-110px] mx-auto sm:hidden block">
              <Image
                width={284}
                height={274}
                alt="logo"
                className='relative 2xl:w-[284px] lg:w-[170px] w-[150px] mx-auto'
                src="/about/maitake.png"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Allergen;
