import React from "react";
import Image from "next/image";
import Navbar from "@layout/navbar/Navbar";
import Link from 'next/link';
import Footer from "@layout/footer/Footer";
import WhatsAppButton from "@components/whatsapp/WhatsAppButton";
import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation("about");
  return (

    <div className="bg-white">
      <Navbar />
      <div className="about-banner relative">
        <Image
          src="/about/about-banner.jpg"
          alt="Banner"
          className="w-full"
          width={1200}
          height={500}
        />
        <Image
          src="/about/maitake.png"
          alt="Banner"
          className="absolute maitake"
          width={400}
          height={400}
        />
      </div>
      <div className="container mx-auto text-center lg:pt-[135px] lg:pb-[110px] sm:pt-[80px] sm:pb-[60px] pt-[60px] pb-[40px] ">
        <h1 className=" xl:text-[80px] md:text-[50px] text-[35px] md:leading-[75px] leading-[35px] text-darkgreen2">{t("title")}</h1>
        <h2 className="text-grey 2xl:text-5xl text-3xl">{t("subtitle")}</h2>
      </div>
      <div className="text-center xl:py-[135px] sm:py-[80px] py-[60px] bg-limebg">
        <div className="container mx-auto">
          <p className="text-grey 2xl:text-2xl text-lg">
            <Trans
              i18nKey="p1"
              ns="about"
              components={{
                b: <b className="font-bold" />,
              }}
            />
          </p>
          <p className="text-grey 2xl:text-2xl text-lg">
            <Trans
              i18nKey="p2"
              ns="about"
              components={{
                b: <b className="font-bold" />,
              }}
            />
          </p>
          <p className="text-grey 2xl:text-2xl text-lg">{t("p3")}</p>

        </div>
      </div>
      <div className="text-center 2xl:my-[200px] xl:my-[120px] my-[80px] relative">
        <Image
          src="/about/maitake-transparent.png"
          alt="Banner"
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[40%]"
          width={910}
          height={910}
        />
        <div className="container mx-auto relative z-10">
          <h1 className="xl:text-[80px] md:text-[50px] text-[35px] md:leading-[75px] leading-[35px] text-darkgreen2 text-darkgreen2">{t("historyTitle")}</h1>
          <h2 className="text-grey 2xl:text-5xl text-3xl md:pt-6 md:pb-10 py-6">{t("healthyText1")}</h2>
          <p className="text-grey 2xl:text-2xl text-lg">{t("p4")}</p>
          <p className="text-grey 2xl:text-2xl text-lg">{t("p5")}</p>
          <p className="text-grey 2xl:text-2xl text-lg">{t("p6")}</p>
          <p className="text-grey 2xl:text-2xl text-lg">{t("p7")}</p>
          <p className="text-grey 2xl:text-2xl text-lg">{t("p8")}</p>
        </div>
      </div>
      <section className="vision-panel 2xl:pt-[184px] xl:py-[120px] 2xl:pb-[140px] md:py-20 py-12 relative">
        <div className="container mx-auto">
          <h2 className="2xl:text-[80px] lg:text-[60px] text-[40px] leading-none text-white">{t("visiontitle")}</h2>
          <h3 className="2xl:text-6xl lg:text-4xl text-3xl text-limeglow">{t("visionSubtitle1")}<span className="block">{t("visionSubtitle2")}</span></h3>
          <h4 className="2xl:text-[40px] lg:text-[30px] text-lg md:py-8 py-4 text-white">{t("visionHeading")}</h4>
          <p className="2xl:text-2xl text-lg text-white 2xl:w-[92%] lg:w-[78%]">{t("visionText1")}</p>
        </div>
        <Image
          src="/about/maitake-half.png"
          alt=""
          className="absolute w-[33%] right-[100px] top-0"
          width={632}
          height={368}
        />
      </section>
      <section className="xl:pt-24 xl:pb-16 py-16 relative md:pl-6 pl-0 before:content-[''] before:absolute before:left-0 md:before:w-1/2 before:w-full before:h-full before:top-0 before:bg-softLime after:content-[''] after:absolute after:right-0 md:after:w-1/2 after:h-full after:top-0 after:bg-limebg">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 md:gap-y-16 relative z-10">
            <div className="box1">
              <h3 className="2xl:text-fz-40 text-3xl leading-none text-forestGreen pb-6">{t("missionTitle")}</h3>
              <p className="2xl:text-2xl text-lg">{t("missionText")}</p>
            </div>
            <div className="box1">
              <h3 className="2xl:text-fz-40 text-3xl leading-none text-forestGreen pb-6">{t("csrTitle")}</h3>
              <p className="2xl:text-2xl text-lg">{t("csrText")}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden sm:before:content-[''] before:absolute before:right-0 before:w-[22%] xl:before:h-[74%] 2xl:before:h-[62.7%] before:top-1/2 before:-translate-y-1/2 before:bg-limebg">
        <div className="container">
          <div className="2xl:my-[277px] sm:my-[90px] my-[50px]  ceo-message grid justify-between grid-cols-1 md:grid-cols-2 items-center gap-x-16 gap-y-8 md:gap-y-16 relative z-10">
            <div className="ceo-block">
              <h2 className="2xl:text-[80px] lg:text-[60px] text-[40px] leading-none text-greenLeaf pb-4">{t("ceoTitle")}</h2>
              <p className="text-grey 2xl:text-2xl text-lg">{t("ceoText")}</p>
            </div>
            <div className="ceo-image relative md:w-auto w-2/3 mx-auto">
              <Image
                src="/about/ceo.png"
                alt=""
                className="2xl:w-[54%] xl:w-[40%] xl:right-[42%] absolute 2xl:right-[30%] top-1/2 -translate-y-1/2 "
                width={360}
                height={360}
              />
              <Image
                src="/about/maitake-half-vertical.png"
                alt=""
                className="2xl:w-[86%] xl:w-[56%] ml-[40%] bg-limebg"
                width={575}
                height={958}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="advisor-panel lg:py-28 py-16 relative before:content-[''] before:absolute before:left-0 xl:before:w-[70%] md:before:w-[64%] md:before:w-[70%] before:w-full before:h-full before:top-0 before:bg-limeLeaf after:content-[''] after:absolute after:right-0 2xl:after:w-[36%] xl:after:w-[30%] md:after:w-[36%] aftetr:content-none after:h-full after:top-0 after:bg-limebg">
        <div className="container relative z-10 text-white">
          <div className="md:w-3/5 w-full">
            <h2 className="2xl:text-[80px] lg:text-[60px] text-[40px] leading-none text-white pb-4">{t("advisorTitle")}</h2>
            <div className="2xl:text-2xl text-lg">
              <p>
                      <Trans
              i18nKey="advisorText1"
              ns="about"
              components={{
                b: <b className="font-bold" />,
              }}
            />
            </p>
              <p>{t("advisorText2")}</p>
              <p>{t("advisorText3")}</p>
              <p>{t("advisorText4")}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="2xl:pt-[256px] 2xl:pb-[160px] xl:pt-[100px] xl:pb-[60px] pt-[60px] pb-[40px]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 md:gap-y-16 relative z-10">
            <div className="box1">
              <h3 className="2xl:text-[80px] lg:text-[60px] text-[40px] leading-none text-greenLeaf pb-4">{t("mission")}</h3>
              <h4 className="2xl:text-5xl lg:text-4xl text-3xl text-grey pb-8">  
                <Trans
              i18nKey="missionsubtitle"
              ns="about"
              components={{
                span: <span className="block" />,
              }}
            /></h4>
              <p className="2xl:text-2xl text-lg text-grey pb-4">{t("missionp1")}</p>
              <p className="2xl:text-2xl text-lg text-grey">{t("missionp2")}</p>
            </div>
            <div className="box1">
              <Image
                src="/about/map.png"
                alt=""
                className=""
                width={754}
                height={705}
              />
            </div>
          </div>
          <div className="w-[90%] pt-16">
            <h4 className="2xl:text-5xl lg:text-4xl text-3xl text-grey pb-8">{t("futuretext")}</h4>
            <p className="2xl:text-2xl text-lg text-grey pb-4">{t("futuresub")}</p>
          </div>
          <div className="flex justify-center items-center xl:pt-28 lg:pt-12 pt-4">
            <Link href="/about" className="link-btn bg-greenLeaf text-white px-2 py-1 2xl:text-5xl lg:text-3xl text-2xl">
            {t("expansion")}
            </Link>
          </div>
        </div>
      </section>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default AboutUs;
