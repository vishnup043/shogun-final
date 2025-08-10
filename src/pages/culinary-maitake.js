import React from "react";
import Image from "next/image";
import Navbar from "@layout/navbar/Navbar";
import Link from 'next/link';
import Footer from "@layout/footer/Footer";

const CulinaryMaitake = () => {

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
          <div className="absolute bottom-36 left-0 w-full text-center text-white">
            <h1 className="2xl:text-[80px] lg:text-[60px] text-[40px] leading-none text-white"><span className="block 2xl:text-6xl lg:text-4xl text-3xl">The superfood, that everyone is looking for</span> Good Food, Good Life</h1>
          </div>
        </div>
        <div className="text-center 2xl:py-36 lg:py-28 py-12 relative bg-white ">
          <div className="container mx-auto relative z-10">
            <h2 className="text-greenLeaf 2xl:text-5xl text-3xl pb-10">The culinary usages</h2>
            <p className="text-grey 2xl:text-2xl text-lg">People are in search of super foods. There are many superstars in this list.
              But what about Black Maitake Mushroom? If it’s not in your list until today, then it’s time to put Maitake in to the forefront. </p>
            <p className="text-grey 2xl:text-2xl text-lg"> Black Maitake, is quite a unique mushroom variety, with intense flavour and texture, that everyone can relish. With its smooth,
              velvety and soft wavy edges Maitake leaf-like fronds can be the queen in your menu. </p>
            <p className="text-grey 2xl:text-2xl text-lg">Black in colour, grows like a flower, pure and
              elegant, Black Maitake Mushroom, is out of synonyms not only because of its culinary qualities but also with its enormous medicinal benefits.
              Maitake is of high nutritional value. It is an excellent source of potassium, fiber, copper, amino-acids, beta-glucans, anti-oxidants and vitamins B & C.</p>
            <p className="text-grey 2xl:text-2xl text-lg">Maitake mushrooms can be used in raw or cooked formats. You can go for roasting, grilling, baking, frying, sautéing or even stir-frying. Fresh Maitake can
              be used for green salads or can be an added ingredient in stews and soups. It can be dried and ground in to powder to add flavour to dishes. </p>
          </div>
        </div>
        <section className="bg-limeLeaf 2xl:pt-[184px] 2xl:pb-[140px] lg:pt-[130px] lg:pb-[90px] py-16 relative">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="col-span-2">
                <h3 className="2xl:text-6xl lg:text-4xl text-3xl text-white pb-9">The super-food which is healthy & tasty</h3>
                <div className="2xl:text-2xl text-lg text-white w-3/4">
                  <p className="pb-8">Escape from the boring range of superfoods. Now we have the elegant taste of healthy Black Maitake Mushroom, which take care of your health from inside. You can easily prepare great delicacies using the organically produced Black Maitake Mushrooms.</p>

                  <p> Shogun Maitake, brings you fresh Black Maitake Mushroom, that is packed completely safe. Taste superfood everyday and live healthy.</p>
                </div>

              </div>
            </div>
          </div>
          <Image
            src="/culinary/culinary-hand.png"
            alt="Banner"
            className="sm:absolute relative right-0 sm:top-1/2 sm:transform sm:-translate-y-1/2 sm:w-[44%] w-full sm:mt-0 mt-8"
            width={778}
            height={450}
          />
        </section>

        <section className="culinary-maitake 2xl:mt-32 md:mt-24 mt-20">
          <Image
            src="/culinary/maitake-on-plate.png"
            alt="Banner"
            className="mx-auto 2xl:w-[38%] w-[40%]"
            width={732}
            height={365}
          />
          <h1 className="2xl:text-[340px] md:text-[240px] sm:text-[80px] text-[80px] text-center text-limeGreen lg:leading-[290px] leading-[200px]">Fresh Maitake</h1>
          <div className="flex justify-center items-center mt-8">
            <Link href="/fresh-maitake" className="link-btn bg-greenLeaf text-white px-2 py-1 2xl:text-5xl lg:text-3xl text-2xl">
              Fresh Maitake & Recipes
            </Link>
          </div>
        </section>
      </div>
      <Footer/>
    </div>
  );
};

export default CulinaryMaitake;
