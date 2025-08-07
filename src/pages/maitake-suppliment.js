import React from "react";
import Image from "next/image";
import Navbar from "@layout/navbar/Navbar";
import Footer from "@layout/footer/Footer";
import Link from 'next/link';

const MaitakeSuppliment = () => {

  return (

    <div>
      <Navbar />
      <div className="about-banner relative">
        <h1 className="text-greenLeaf text-[80px] text-center leading-[75px] pb-6 pt-12">Black Maitake can keep your doctor away!</h1>
        <Image
          src="/maitake-suppliment/suppliment-banner.png"
          alt="Banner"
          className="w-full"
          width={1920}
          height={657}
        />
      </div>
      <div className="2xl:py-36 2xl:pb-48 xl:py-28 xl:pb-36 relative bg-white">
        <div className="container">
          <p className="text-center 2xl:w-2/5 xl:w-1/2 mx-auto text-grey 2xl:text-2xl text-lg">Surprised! The value of Maitake mushroom is not just about the price, but the rich health benefits it can provide to the humankind.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-16">
            <div className="box bg-limebg p-8">
              <h2 className="2xl:text-[40px] lg:text-[30px] leading-[35px] text-lg text-forestGreen">Boosts Immune <span className="block">System</span></h2>
              <p className="text-grey 2xl:text-2xl text-lg pt-6"> Now, the world truly knows the importance of immunity and the ways it helps to keep diseases away. Black Maitake mushrooms will help human body to up the immune defense with the help of beta-glucans. As a polysaccharide fibre, it helps to activate and enhance the production of immune system cells, which helps to prevent and fight against external factors.</p>
            </div>
            <div className="box bg-limebg p-8">
              <h2 className="2xl:text-[40px] lg:text-[30px] leading-[35px] text-lg text-forestGreen">FIGHTS <span className="block">CANCER</span></h2>
              <p className="text-grey 2xl:text-2xl text-lg pt-6">A simple, natural solution, which helps the world in the fight against cancer. Black Maitake mushroom studies show that the beta-glucans helps to activate and produce macrophages. These white blood cells help the body to target and destroy tumour cells. It can go hand in hand with chemotherapy and allows the treatment to work more effectively. Maitake can also reduce the side-effects of cancer treatments.</p>
            </div>
            <div className="box bg-limebg p-8">
              <h2 className="2xl:text-[40px] lg:text-[30px] leading-[35px] text-lg text-forestGreen">FOR GOOD HEART & <span className="block">WEIGHT LOSS</span></h2>
              <p className="text-grey 2xl:text-2xl text-lg pt-6">By having Fresh Black Maitake as a delicacy, people can experience the benefits easily. It helps to lower blood pressure, total cholesterol and helps to keep heart health. As it is low in calories and high in fibre, you can feel fuller for longer, thus helping in weight loss.</p>
            </div>
          </div>
          <div className="2xl:mt-28 xl:mt-24 mt-16">
            <h2 class="text-greenLeaf text-[80px] leading-[80px] text-center">Dietary Supplements</h2>
            <h4 class="text-grey 2xl:text-5xl text-3xl text-center">Our history is all about Black Maitake</h4>
            <p className="text-grey 2xl:text-2xl text-lg text-center py-16">The benefits of Black Maitake are realized and approved by modern science. The beta-glucans in these rarest kinds of mushrooms offers medicinal benefits. It can boost the immune response against cancer cells, reduce tumour growth and enhance the effects of other cancer treatments. Shogun Maitake, make use of organically grown Black Maitake mushrooms, for extracts, ensuring maximum benefits. Making use of the purest fruiting body, Shogun Maitake ensures the best. To get the maximum out of Maitake, we make of 2-step water-ethanol extraction method, ensuring high quantity of beta-glucan levels. Our products for general immunity and clinical use are Gmp certified.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="box bg-limebg p-8">
                <h2 className="2xl:text-[40px] lg:text-[30px] leading-[35px] text-lg text-forestGreen">Immunity &  <span className="block">functions</span></h2>
                <p className="text-grey 2xl:text-2xl text-lg pt-6">Our body is equipped with its own defense system. When a disease or an infection comes up, it activates the defense system, which is called the immune system. This helps our body to fight against diseases and other external elements. A weakened immune system makes people prone to different kinds of infections.</p>
              </div>
              <div className="box bg-limebg p-8">
                <h2 className="2xl:text-[40px] lg:text-[30px] leading-[35px] text-lg text-forestGreen">Immunity declines<span className="block"> with age </span></h2>
                <p className="text-grey 2xl:text-2xl text-lg pt-6">Age is not just a number when it comes to immunity. As the age progress, the immunity also declines. According to studies immunity reaches maturity by 30 and starts to decline. Beyond 40, immunity comes down. Several other factors like continued mental and physical stress can also contribute to this.</p>
              </div>
              <div className="box bg-limebg p-8">
                <h2 className="2xl:text-[40px] lg:text-[30px] leading-[35px] text-lg text-forestGreen">Black Maitake & <span className="block">immunity boosting </span></h2>
                <p className="text-grey 2xl:text-2xl text-lg pt-6">Black Maitake, when organically cultivated can bring amazing benefits. Active fractions from Black Maitake Mushroom have got the biological benefits, like immunomodulatory and anti-tumour activities, with its main active constituent as beta-glucans. This can directly activate the immune system by stimulating macrophages, T cells and other white blood cells.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className="container">
          <div className="flex justify-between items-center relative 2xl:pb-36 xl:pb-28">
            <div className="2xl:w-[34%] xl:w-[40%]">
              <h4 className="text-sblack 2xl:text-5xl text-3xl">Shogun Black Maitake</h4>
              <h2 className="bg-greenLeaf text-white 2xl:text-[80px] 2xl:leading-[80px] xl:text-[60px] xl:leading-[50px] text-[40px] leading-none 2xl:py-2 2xl:px-4 p-2 my-4 max-w-max">Synergy Extract</h2>
              <h4 className="text-sblack 2xl:text-5xl text-3xl">Liquid & capsule</h4>
              <p className="text-grey 2xl:text-2xl text-lg 2xl:pt-8 2xl:pb-16 xl:pt-6 xl:pb-12">Immunity decreases with age. There are several factors that make the body a breeding ground of diseases. Shogun Maitake Synergy Extract helps to boost immunity as it contains beta-glucans that helps to activate the immune system of our body.</p>
              <div className="2xl:text-4xl xl:text-xl text-grey">Immunity Booster</div>
              <div className="2xl:text-4xl xl:text-xl text-grey">Rich in Multi-Vitamins</div>
            </div>
            <div className="2xl:w-[54%] xl:w-[44%]">
              <Image
                src="/maitake-suppliment/synergy-extract.png"
                alt="Banner"
                className="w-full"
                width={726}
                height={726}
              />
            </div>
          </div>
          <div className="flex justify-between items-center ">
            <div className="2xl:w-[34%] xl:w-[40%]">
              <h4 className="text-sblack 2xl:text-5xl text-3xl">Shogun Black Maitake</h4>
              <h2 className="bg-greenLeaf text-white 2xl:text-[80px] 2xl:leading-[80px] xl:text-[60px] xl:leading-[50px] py-2 px-4 my-4 max-w-max">Prothera</h2>
              <h4 className="text-sblack 2xl:text-5xl text-3xl">Liquid</h4>
              <p className="text-grey 2xl:text-2xl text-lg 2xl:pt-8 xl:pt-6">Black Maitake has proved its worth by helping in the prevention and treating cancer along with other health benefits. Studies have shown its multiple benefits, including the fight against various types of cancers. Shogun Maitake developed Prothera based on a formula that has been used in several cancer studies. Prothera liquid is exclusively for clinical purpose and naturopaths.</p>
            </div>
            <div className="2xl:w-[54%] xl:w-[44%]">
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
      <section className="2xl:mt-36 2xl:mb-60 xl:mt-32 xl:mb-52 relative 2xl:before:rounded-r-[100px] xl:before:rounded-r-[68px] before:content-[''] before:absolute before:left-0 before:w-[28%] before:h-[100%] before:top-1/2 before:-translate-y-1/2 before:bg-limebg   2xl:after:rounded-l-[100px] xl:after:rounded-l-[68px] after:content-[''] after:absolute after:right-0 after:w-[164px] after:h-[100%] after:top-1/2 after:-translate-y-1/2 after:bg-limebg">
        <div className="container">
          <div className="flex items-center justify-center gap-[100px] py-24 relative before:rounded-r-[68px] before:content-[''] before:absolute before:left-0 before:w-[28%] before:h-[100%] before:top-1/2 before:-translate-y-1/2 before:bg-limebg">
            <div className="2xl:w-[39%] xl:w-[30%] relative">
              <Image
                src="/maitake-suppliment/ceo.png"
                alt="Banner"
                className="w-full"
                width={530}
                height={793}
              />
            </div>
            <div className="2xl:w-[39%] xl:w-[36%]">
              <h1 className="2xl:text-[80px] 2xl:leading-[80px] xl:text-[60px] xl:leading-[50px] text-greenLeaf">Words from Founder</h1>
              <p className="text-black 2xl:text-2xl text-lg 2xl:pt-8 2xl:pb-6 xl:pt-8 xl:pb-6">“Maitake mushrooms need the natural setting to grow. To cultivate it without any pesticides or chemicals we brought the nature inside our factory. Our technology allows to carefully control and manipulate the temperature and humidity, so that mushrooms can be grown naturally. Maitake mushrooms and its benefits must be provided to the wellness of humanity. I believe health is our own responsibility”</p>
              <h4 className="text-darkgrey 2xl:text-5xl text-3xl">Mr. Yoshinobu Odaira</h4>
              <h5 className="2xl:text-4xl xl:text-xl text-darkgrey"> CEO & Founder</h5>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-limebg 2xl:py-48 xl:py-36">
        <div className="container">
          <div className="flex justify-center gap-[70px]">
            <div className="2xl:w-[350px] xl:w-[262px]">
              <h2 className="2xl:text-[80px] 2xl:leading-[80px] xl:text-[60px] xl:leading-[50px] text-green">Health Benefit</h2>
              <h3 className="text-black 2xl:text-5xl text-3xl py-6">Peace of mind,<span className="block">the Maitake way</span></h3>
              <div className="grid gap-2">
                <div className="flex items-center gap-3">
                  <div className="2xl:w-[112px] xl:w-[75px]">
                    <Image
                      src="/maitake-suppliment/anti-tumor.png"
                      alt="Banner"
                      width={112}
                      height={112}
                    />
                  </div>
                  <h6 className="2xl:text-3xl xl:text-2xl xl:leading-[28px] text-green">Anti-tumour & <span className="block">Anti-cancer benefits</span></h6>
                </div>
                <div className="flex items-center gap-3">
                  <div className="2xl:w-[112px] xl:w-[75px]">
                    <Image
                      src="/maitake-suppliment/strength.png"
                      alt="Banner"
                      width={112}
                      height={112}
                    />
                  </div>
                  <h6 className="2xl:text-3xl xl:text-2xl xl:leading-[28px] text-green">Strengthen <span className="block">immune system</span></h6>
                </div>
                <div className="flex items-center gap-3">
                  <div className="2xl:w-[112px] xl:w-[75px]">
                    <Image
                      src="/maitake-suppliment/reduce-cencer-spread.png"
                      alt="Banner"
                      width={112}
                      height={112}
                    />
                  </div>
                  <h6 className="2xl:text-3xl xl:text-2xl xl:leading-[28px] text-green">Reduces the <span className="block">cancer spread</span></h6>
                </div>
                <div className="flex items-center gap-3">
                  <div className="2xl:w-[112px] xl:w-[75px]">
                    <Image
                      src="/maitake-suppliment/anti-oxident.png"
                      alt="Banner"
                      width={112}
                      height={112}
                    />
                  </div>
                  <h6 className="2xl:text-3xl xl:text-2xl xl:leading-[28px] text-green">Anti-oxidant <span className="block">effects </span></h6>
                </div>
                <div className="flex items-center gap-3">
                  <div className="2xl:w-[112px] xl:w-[75px]">
                    <Image
                      src="/maitake-suppliment/anti-inflam.png"
                      alt="Banner"
                      width={112}
                      height={112}
                    />
                  </div>
                  <h6 className="2xl:text-3xl xl:text-2xl xl:leading-[28px] text-green">Anti-inflammatory<span className="block">benefits</span></h6>
                </div>
              </div>
            </div>
            <div className="w-[41%]">
              <div className="text-grey 2xl:text-2xl text-lg grid gap-6">
                <p>Black Maitake Mushroom is a one-of-a-kind health insurance policy that will give people an opportunity to live with a peace of mind. Maitake is loaded with enormous health benefits and some of them are truly beneficial. With the most recent bug scare we all know that everyone must give top priority to immunity. Otherwise, diseases can easily catch us. </p>
                <p>Immunotherapeutic benefits of Black Maitake help to keep the immunity strength, beyond normal. As we age, the immunity will decrease naturally. Beta-glucans in Maitake can activate the T-cells in the body to strengthen your immune defense. It also has Cancer and tumour resisting qualities and several studies suggest about the help it provides in treatment stages.</p>
                <p> Shogun Maitake, helps everyone to extract these benefits through its supplement range. Our extracts are 100% from the fruiting body of Maitake.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="feature-panel py-36">
        <div className="container">
          <h2 className="text-white text-5xl text-center">Salient Features</h2>
          <div className="flex flex-wrap w-[855px] mx-auto gap-y-12 mt-16">
            <div className="flex items-center px-4 gap-4 w-[280px]  border-r border-l">
              <div className="w-[80px]">
                <Image
                  src="/maitake-suppliment/feature-1.png"
                  alt="Banner"
                  className="w-full"
                  width={80}
                  height={80}
                />
              </div>
              <div>
                <h6 className="text-white text-2xl leading-7">100% organic <span className="block"> mushroom extracts</span></h6>
              </div>
            </div>
            <div className="flex items-center px-4 gap-4 w-[332px] border-r">
              <div className="w-[80px]">
                <Image
                  src="/maitake-suppliment/feature-2.png"
                  alt="Banner"
                  className="w-full"
                  width={80}
                  height={80}
                />
              </div>
              <div>
                <h6 className="text-white text-2xl leading-7">Extracted out of<span className="block"> pure Fruiting body</span></h6>
              </div>
            </div>
            <div className="flex items-center px-4 gap-4 w-[240px] border-r">
              <div className="w-[80px]">
                <Image
                  src="/maitake-suppliment/feature-3.png"
                  alt="Banner"
                  width={80}
                  height={80}
                />
              </div>
              <div>
                <h6 className="text-white text-2xl leading-7">Quality grown</h6>
              </div>
            </div>

            <div className="flex items-center px-4 gap-4 w-[280px] border-r border-l">
              <div className="w-[80px]">
                <Image
                  src="/maitake-suppliment/feature-4.png"
                  alt="Banner"
                  className="w-full"
                  width={80}
                  height={80}
                />
              </div>
              <div>
                <h6 className="text-white text-2xl leading-7">No mycelium</h6>
              </div>
            </div>
            <div className="flex items-center px-4 gap-4 w-[332px] border-r">
              <div className="w-[80px]">
                <Image
                  src="/maitake-suppliment/feature-5.png"
                  alt="Banner"
                  className="w-full"
                  width={80}
                  height={80}
                />
              </div>
              <div>
                <h6 className="text-white text-2xl leading-7">Certified safe & effective in<span className="block">  Clinical trials 1 & 2</span></h6>
              </div>
            </div>
            <div className="flex items-center px-4 gap-4 w-[240px] border-r">
              <div className="w-[80px]">
                <Image
                  src="/maitake-suppliment/feature-6.png"
                  alt="Banner"
                  width={80}
                  height={80}
                />
              </div>
              <div>
                <h6 className="text-white text-2xl leading-7">Eco certified</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-limebg 2xl:pt-44 2xl:pb-32 xl:pt-36 xl:pb-28">
        <div className="container">
          <div>
            <h2 class="text-greenLeaf text-[70px] leading-[70px] text-center pb-16">Shogun Black Maitake Functional Extracts</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="box bg-darkgreen p-8">
                <h2 className="2xl:text-[40px] lg:text-[30px] leading-[35px] text-lg text-white">Quality of research & <span className="block">experience</span></h2>
                <p className="text-white 2xl:text-2xl text-lg pt-6">Shogun Maitake is in to the research and production of Black Maitake mushroom, spanning over 3 long decades. We work in coordination with world’s best Maitake scientists and researchers. Our standard protocols are developed by Dr. Hiroaki Nanba, the renowned researcher, who extracted MD fraction from Maitake.</p>
              </div>
              <div className="box bg-darkgreen p-8">
                <h2 className="2xl:text-[40px] lg:text-[30px] leading-[35px] text-lg text-white">100% Organic<span className="block">Maitake</span></h2>
                <p className="text-white 2xl:text-2xl text-lg pt-6">Shogun Maitake have its own state-of-the-art facility in London, Ontario, to grow Black Maitake mushrooms. So we have total control over the quality of our produce. Fresh Maitake are cultivated organically without any pesticides or chemicals and fruiting bodies are handpicked avoiding all kinds of impurities.</p>
              </div>
              <div className="box bg-darkgreen p-8">
                <h2 className="2xl:text-[40px] lg:text-[30px] leading-[35px] text-lg text-white">Beta-Glucan<span className="block">effect</span></h2>
                <p className="text-white 2xl:text-2xl text-lg pt-6">Black Maitake, when organically cultivated can bring amazing benefits. Active fractions from Black Maitake Mushroom have got the biological benefits, like immunomodulatory and anti-tumour activities, with its main active constituent as beta-glucans. This can directly activate the immune system by stimulating macrophages, T cells and other white blood cells.</p>
              </div>
            </div>
            <div className="w-max mx-auto">
              <Link href="/order-now" className="2xl:mt-24 xl:mt-20 block link-btn bg-greenLeaf text-white px-12 py-1 2xl:text-5xl lg:text-3xl text-2xl">
                ORDER NOW
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default MaitakeSuppliment;
