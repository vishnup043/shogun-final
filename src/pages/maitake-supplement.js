import React from "react";
import Image from "next/image";
import Navbar from "@layout/navbar/Navbar";
import Footer from "@layout/footer/Footer";
import Link from 'next/link';
import WhatsAppButton from "@components/whatsapp/WhatsAppButton";
import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";

const MaitakeSuppliment = () => {
  const { t } = useTranslation("maitakesuppliment");
  return (

    <div>
      <Navbar />
      <div className="about-banner relative">
        <h1 className="text-greenLeaf xl:text-[80px] md:text-[50px] text-[35px] text-center md:leading-[75px] leading-[35px] pb-6 pt-12 sm:px-0 px-8">{t("maintext")}</h1>
        <Image
          src="/maitake-suppliment/suppliment-banner.png"
          alt="Banner"
          className="w-full"
          width={1920}
          height={657}
        />
      </div>
      <div className="lg:py-36 lg:pb-48 py-12 lg:pb-20 relative bg-white">
        <div className="container">
          <p className="text-center 2xl:w-2/5 xl:w-1/2 mx-auto text-grey 2xl:text-2xl text-lg">{t("subtext")}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-16">
            <div className="box bg-limebg lg:p-8 p-4">
              <h2 className="2xl:text-[40px] lg:text-[30px] lg:leading-[35px] leading-[25px] text-2xl text-forestGreen text-forestGreen">
                <Trans
                  i18nKey="immuneTitle"
                  ns="maitakesuppliment"
                  components={{
                    span: <span className="block" />,
                  }}
                /></h2>
              <p className="text-grey 2xl:text-2xl text-lg pt-6">{t("immuneText")}</p>
            </div>
            <div className="box bg-limebg lg:p-8 p-4">
              <h2 className="2xl:text-[40px] lg:text-[30px] lg:leading-[35px] leading-[25px] text-2xl text-forestGreen text-forestGreen">  <Trans
                i18nKey="cancerTitle"
                ns="maitakesuppliment"
                components={{
                  span: <span className="block" />,
                }}
              /></h2>
              <p className="text-grey 2xl:text-2xl text-lg pt-6">
                {t("cancerText")}
              </p>
            </div>
            <div className="box bg-limebg lg:p-8 p-4">
              <h2 className="2xl:text-[40px] lg:text-[30px] lg:leading-[35px] leading-[25px] text-2xl text-forestGreen text-forestGreen">
                <Trans
                  i18nKey="heartTitle"
                  ns="maitakesuppliment"
                  components={{
                    span: <span className="block" />,
                  }}
                />
              </h2>
              <p className="text-grey 2xl:text-2xl text-lg pt-6">{t("heartText")}</p>
            </div>
          </div>
          <div className="2xl:mt-28 xl:mt-24 mt-16">
            <h2 class="text-greenLeaf xl:text-[80px] md:text-[60px] text-[35px] md:leading-[75px] leading-[35px] text-center ">{t("dietaryTitle")}</h2>
            <h4 class="text-grey md:text-5xl text-2xl text-center">{t("dietarySubtitle")}</h4>
            <p className="text-grey 2xl:text-2xl text-lg text-center md:py-16 py-8">{t("dietaryDescription")}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="box bg-limebg lg:p-8 p-4">
                <h2 className="2xl:text-[40px] lg:text-[30px] lg:leading-[35px] leading-[25px] text-2xl text-forestGreen">
                  <Trans
                    i18nKey="immunityTitle"
                    ns="maitakesuppliment"
                    components={{
                      span: <span className="block" />,
                    }}
                  />
                </h2>
                <p className="text-grey 2xl:text-2xl text-lg pt-6">{t("immunityText")}</p>
              </div>
              <div className="box bg-limebg lg:p-8 p-4">
                <h2 className="2xl:text-[40px] lg:text-[30px] lg:leading-[35px] leading-[25px] text-2xl text-forestGreen">
                  <Trans
                    i18nKey="ageTitle"
                    ns="maitakesuppliment"
                    components={{
                      span: <span className="block" />,
                    }}
                  />
                </h2>
                <p className="text-grey 2xl:text-2xl text-lg pt-6">{t("ageText")}</p>
              </div>
              <div className="box bg-limebg lg:p-8 p-4">
                <h2 className="2xl:text-[40px] lg:text-[30px] lg:leading-[35px] leading-[25px] text-2xl text-forestGreen">
                  <Trans
                    i18nKey="boostTitle"
                    ns="maitakesuppliment"
                    components={{
                      span: <span className="block" />,
                    }}
                  />
                </h2>
                <p className="text-grey 2xl:text-2xl text-lg pt-6">{t("boostText")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className="container">
          <div className="lg:flex block justify-between items-center relative 2xl:pb-36 2xl:pb-28 xl:pb-24 md:pb-16 pb-12" >
            <div className="2xl:w-[34%] lg:w-1/2 w-full">
              <h4 className="text-sblack 2xl:text-5xl text-3xl">{t("synergytext")}</h4>
              <h2 className="bg-greenLeaf text-white 2xl:text-[80px] 2xl:leading-[80px] xl:text-[60px] xl:leading-[50px] text-[40px] leading-none 2xl:py-2 2xl:px-4 p-2 my-4 max-w-max">{t("synergytext2")}</h2>
              <h4 className="text-sblack 2xl:text-5xl text-3xl">{t("synergytext3")}</h4>
              <p className="text-grey 2xl:text-2xl text-lg 2xl:pt-8 2xl:pb-16 xl:pt-6 xl:pb-12">{t("synergydescription")}</p>
              <div className="2xl:text-4xl xl:text-xl text-grey">{t("synergydescription1")}</div>
              <div className="2xl:text-4xl xl:text-xl text-grey">{t("synergydescription2")}</div>
            </div>
            <div className="2xl:w-[54%] lg:w-[40%] w-full">
              <Image
                src="/maitake-suppliment/synergy-extract.png"
                alt="Banner"
                className="w-full"
                width={726}
                height={726}
              />
            </div>
          </div>
          <div className="lg:flex block justify-between items-center ">
            <div className="2xl:w-[34%] lg:w-1/2 w-full">
              <h4 className="text-sblack 2xl:text-5xl text-3xl">{t("synergytext")}</h4>
              <h2 className="bg-greenLeaf text-white 2xl:text-[80px] 2xl:leading-[80px] xl:text-[60px] xl:leading-[50px] text-[40px] leading-none 2xl:py-2 2xl:px-4 p-2 my-4 max-w-max">{t("prothera")}</h2>
              <h4 className="text-sblack 2xl:text-5xl text-3xl">{t("liquid")}</h4>
              <p className="text-grey 2xl:text-2xl text-lg 2xl:pt-8 xl:pt-6">{t("protheradescription")}</p>
            </div>
            <div className="2xl:w-[54%] lg:w-[40%] w-full">
              <Image
                src="/maitake-suppliment/prothera.png"
                alt="Banner"
                className="w-full"
                width={726}
                height={726}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="2xl:mb-60 lg:mt-32 mt-0 lg:mb-52 mb-12 relative before:rounded-r-[100px] before:rounded-r-[68px] sm:before:content-[''] before:content-none before:absolute before:left-0 lg:before:w-[28%] before:w-[21%] before:h-[100%] before:top-1/2 before:-translate-y-1/2 before:bg-limebg  after:rounded-l-[100px] after:rounded-l-[68px] sm:after:content-[''] after:content-none after:absolute after:right-0 lg:after:w-[164px] after:w-[80px] after:h-[100%] after:top-1/2 after:-translate-y-1/2 after:bg-limebg">
        <div className="container">
          <div className="flex flex-col sm:flex-row items-center lg:justify-center justify-between 2xl:gap-[100px] xl:gap-[80px] gap-8 sm:gap-0 lg:gap-[50px] md:py-24 py-0 relative before:rounded-r-[68px] sm:before:content-[''] before:content-none before:absolute before:left-0 lg:before:w-[28%] before:w-[15%] before:h-[100%] before:top-1/2 before:-translate-y-1/2 before:bg-limebg text-center sm:text-left">
            <div className="2xl:w-[39%] sm:w-[30%] w-1/2 relative">
              <Image
                src="/maitake-suppliment/CEO.png"
                alt=""
                className="w-full"
                width={530}
                height={793}
              />
            </div>
            <div className="2xl:w-[39%] lg:w-[36%] sm:w-[63%] w-full lg:pr-0 sm:pr-12 pr-0">
              <h1 className="xl:text-[80px] md:text-[50px] text-[30px] md:leading-[75px] leading-[35px] text-greenLeaf">{t("foundertitle")}</h1>
              <p className="text-black 2xl:text-2xl text-lg 2xl:pt-8 2xl:pb-6 xl:pt-8 xl:pb-6">{t("founderdescription")}</p>
              <h4 className="text-darkgrey 2xl:text-5xl sm:text-3xl text-2xl">{t("founder")}</h4>
              <h5 className="2xl:text-4xl xl:text-xl text-darkgrey">{t("ceo")}</h5>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-limebg 2xl:py-48 xl:py-36 md:py-24 py-12">
        <div className="container">
          <div className="justify-center sm:gap-[70px] gap-[30px] flex flex-col sm:flex-row">
            <div className="2xl:w-[350px] xl:w-[262px]">
              <h2 className="2xl:text-[80px] 2xl:leading-[80px] sm:text-[60px] xl:leading-[50px] text-[35px] leading-[35px] text-green">{t("health")}</h2>
              <h3 className="text-black lg:text-5xl sm:text-3xl text-2xl leading-[26px] py-6">
                <Trans
                  i18nKey="healthsub"
                  ns="maitakesuppliment"
                  components={{
                    span: <span className="block" />,
                  }}
                /></h3>
              <div className="grid gap-2">
                <div className="flex items-center gap-3">
                  <div className="2xl:w-[112px] w-[75px]">
                    <Image
                      src="/maitake-suppliment/anti-tumor.png"
                      alt="Banner"
                      width={112}
                      height={112}
                    />
                  </div>
                  <h6 className="2xl:text-3xl text-2xl leading-[28px] text-green">  <Trans
                    i18nKey="sub1"
                    ns="maitakesuppliment"
                    components={{
                      span: <span className="block" />,
                    }}
                  /></h6>
                </div>
                <div className="flex items-center gap-3">
                  <div className="2xl:w-[112px] w-[75px]">
                    <Image
                      src="/maitake-suppliment/strength.png"
                      alt="Banner"
                      width={112}
                      height={112}
                    />
                  </div>
                  <h6 className="2xl:text-3xl text-2xl leading-[28px] text-green"><Trans
                    i18nKey="sub2"
                    ns="maitakesuppliment"
                    components={{
                      span: <span className="block" />,
                    }}
                  /></h6>
                </div>
                <div className="flex items-center gap-3">
                  <div className="2xl:w-[112px] w-[75px]">
                    <Image
                      src="/maitake-suppliment/reduce-cencer-spread.png"
                      alt="Banner"
                      width={112}
                      height={112}
                    />
                  </div>
                  <h6 className="2xl:text-3xl text-2xl leading-[28px] text-green"><Trans
                    i18nKey="sub3"
                    ns="maitakesuppliment"
                    components={{
                      span: <span className="block" />,
                    }}
                  /></h6>
                </div>
                <div className="flex items-center gap-3">
                  <div className="2xl:w-[112px] w-[75px]">
                    <Image
                      src="/maitake-suppliment/anti-oxident.png"
                      alt="Banner"
                      width={112}
                      height={112}
                    />
                  </div>
                  <h6 className="2xl:text-3xl text-2xl leading-[28px] text-green"><Trans
                    i18nKey="sub4"
                    ns="maitakesuppliment"
                    components={{
                      span: <span className="block" />,
                    }}
                  /></h6>
                </div>
                <div className="flex items-center gap-3">
                  <div className="2xl:w-[112px] w-[75px]">
                    <Image
                      src="/maitake-suppliment/anti-inflam.png"
                      alt="Banner"
                      width={112}
                      height={112}
                    />
                  </div>
                  <h6 className="2xl:text-3xl text-2xl leading-[28px] text-green"><Trans
                    i18nKey="sub5"
                    ns="maitakesuppliment"
                    components={{
                      span: <span className="block" />,
                    }}
                  /></h6>
                </div>
              </div>
            </div>
            <div className="sm:w-[41%] w-full">
              <div className="text-grey 2xl:text-2xl text-lg grid sm:gap-6 gap-0">
                <p>{t("healthp1")}</p>
                <p>{t("healthp2")}</p>
                <p>{t("healthp3")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="feature-panel xl:py-36 md:py-24 py-12">
        <div className="container">
          <h2 className="text-white text-5xl text-center">{t("features")}</h2>
          <div className="lg:flex grid sm:grid-cols-2 flex-wrap lg:w-[855px] w-full mx-auto sm:gap-y-12 gap-y-6 mt-16">
            <div className="flex items-center sm:px-4 gap-4 lg:w-[280px]  lg:border-r lg:border-l">
              <div className="sm:w-[80px] w-[62px]">
                <Image
                  src="/maitake-suppliment/feature-1.png"
                  alt="Banner"
                  className="w-full"
                  width={80}
                  height={80}
                />
              </div>
              <div>
                <h6 className="text-white text-2xl leading-7">
                  <Trans
                    i18nKey="feat1"
                    ns="maitakesuppliment"
                    components={{
                      span: <span className="block" />,
                    }}
                  />
                </h6>
              </div>
            </div>
            <div className="flex items-center sm:px-4 gap-4 lg:w-[332px] lg:border-r">
              <div className="sm:w-[80px] w-[62px]">
                <Image
                  src="/maitake-suppliment/feature-2.png"
                  alt="Banner"
                  className="w-full"
                  width={80}
                  height={80}
                />
              </div>
              <div>
                <h6 className="text-white text-2xl leading-7">
                  <Trans
                    i18nKey="feat2"
                    ns="maitakesuppliment"
                    components={{
                      span: <span className="block" />,
                    }}
                  />
                </h6>
              </div>
            </div>
            <div className="flex items-center sm:px-4 gap-4 lg:w-[240px] lg:border-r">
              <div className="sm:w-[80px] w-[62px]">
                <Image
                  src="/maitake-suppliment/feature-3.png"
                  alt="Banner"
                  width={80}
                  height={80}
                />
              </div>
              <div>
                <h6 className="text-white text-2xl leading-7">{t("feat3")}</h6>
              </div>
            </div>

            <div className="flex items-center sm:px-4 gap-4 lg:w-[280px] lg:border-r lg:border-l">
              <div className="sm:w-[80px] w-[62px]">
                <Image
                  src="/maitake-suppliment/feature-4.png"
                  alt="Banner"
                  className="w-full"
                  width={80}
                  height={80}
                />
              </div>
              <div>
                <h6 className="text-white text-2xl leading-7">{t("feat4")}</h6>
              </div>
            </div>
            <div className="flex items-center sm:px-4 gap-4 lg:w-[332px] lg:border-r">
              <div className="sm:w-[80px] w-[62px]">
                <Image
                  src="/maitake-suppliment/feature-5.png"
                  alt="Banner"
                  className="w-full"
                  width={80}
                  height={80}
                />
              </div>
              <div>
                <h6 className="text-white text-2xl leading-7">     <Trans
                  i18nKey="feat5"
                  ns="maitakesuppliment"
                  components={{
                    span: <span className="block" />,
                  }}
                /></h6>
              </div>
            </div>
            <div className="flex items-center sm:px-4 gap-4 lg:w-[240px] lg:border-r">
              <div className="sm:w-[80px] w-[62px]">
                <Image
                  src="/maitake-suppliment/feature-6.png"
                  alt="Banner"
                  width={80}
                  height={80}
                />
              </div>
              <div>
                <h6 className="text-white text-2xl leading-7">{t("feat6")}</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-limebg 2xl:pt-44 2xl:pb-32 lg:pt-36 lg:pb-28 pt-16 pb-16">
        <div className="container">
          <div>
            <h2 class="text-greenLeaf lg:text-[70px] md:text-[40px] text-[30px] leading-[32px] md:leading-[70px] text-center lg:pb-16 pb-8">{t("Extracts")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="box bg-darkgreen lg:p-8 p-4">
                <h2 className="2xl:text-[40px] lg:text-[30px] lg:leading-[35px] leading-[25px] text-2xl text-white"><Trans
                  i18nKey="extract1"
                  ns="maitakesuppliment"
                  components={{
                    span: <span className="block" />,
                  }} /></h2>
                <p className="text-white 2xl:text-2xl text-lg pt-6">{t("extractp1")}</p>
              </div>
              <div className="box bg-darkgreen lg:p-8 p-4">
                <h2 className="2xl:text-[40px] lg:text-[30px] lg:leading-[35px] leading-[25px] text-2xl text-white">
                  <Trans
                    i18nKey="extract2"
                    ns="maitakesuppliment"
                    components={{
                      span: <span className="block" />,
                    }} />
                </h2>
                <p className="text-white 2xl:text-2xl text-lg pt-6">{t("extractp2")}</p>
              </div>
              <div className="box bg-darkgreen lg:p-8 p-4">
                <h2 className="2xl:text-[40px] lg:text-[30px] lg:leading-[35px] leading-[25px] text-2xl text-white">
                  <Trans
                    i18nKey="extract3"
                    ns="maitakesuppliment"
                    components={{
                      span: <span className="block" />,
                    }} />
                </h2>
                <p className="text-white 2xl:text-2xl text-lg pt-6">{t("extractp3")}</p>
              </div>
            </div>
            <div className="w-max mx-auto">
              <Link href="/order-now" className="2xl:mt-24 lg:mt-20 mt-12 block link-btn bg-greenLeaf text-white px-12 py-1 2xl:text-5xl lg:text-3xl text-2xl">
                {t("ordernow")}
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default MaitakeSuppliment;
