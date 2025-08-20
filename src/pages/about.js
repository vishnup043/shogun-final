import React from "react";
import Image from "next/image";
import Navbar from "@layout/navbar/Navbar";
import Link from 'next/link';
import Footer from "@layout/footer/Footer";
import WhatsAppButton from "@components/whatsapp/WhatsAppButton";

const AboutUs = () => {

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
        <h1 className=" xl:text-[80px] md:text-[50px] text-[35px] md:leading-[75px] leading-[35px] text-darkgreen2">Company profile & history</h1>
        <h2 className="text-grey 2xl:text-5xl text-3xl">Our history is all about Black Maitake</h2>
      </div>
      <div className="text-center xl:py-[135px] sm:py-[80px] py-[60px] bg-limebg">
        <div className="container mx-auto">
          <p className="text-grey 2xl:text-2xl text-lg">the legacy of maitake cultivation began in <b>Mr. Yoshinobu Odaira’s</b> homeland, japan, at a time when black maitake mushrooms were still found only in the wild. an environmentalist and a great humanitarian, <b>Mr. Odaira, CEO</b> and Founder of shogun maitake, dreamt of bringing the benefits of maitake to the world.</p>
          <p className="text-grey 2xl:text-2xl text-lg"> in his pursuit to achieve stable, large-scale cultivation of the rare wild black maitake mushrooms through artificial means, he founded yukiguni maitake in 1983. back then, maitake was rare and expensive, selling at prices as high as $250 per kilogram. but <b>Mr. Odaira</b> had a larger vision; he wanted to make maitake accessible to the wider society.</p>
          <p className="text-grey 2xl:text-2xl text-lg">Through innovation and dedication, he developed indigenous techniques to grow high-quality maitake at a much lower cost. his ambitious efforts led to extraordinary growth. the company expanded its production facilities to 4.2 million square feet, eventually catering to 70% of the maitake demand in the japanese market.</p>

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
          <h1 className="xl:text-[80px] md:text-[50px] text-[35px] md:leading-[75px] leading-[35px] text-darkgreen2 text-darkgreen2">History of Maitake production</h1>
          <h2 className="text-grey 2xl:text-5xl text-3xl md:pt-6 md:pb-10 py-6">We know, because we grow</h2>
          <p className="text-grey 2xl:text-2xl text-lg">In the old days Black Maitake Mushrooms were rare enough as it was grown in wild, naturally. Black Maitake mushroom, as the name suggests, is black in colour, but it tastes more delicate and is with a feathery texture. Apart from being a delicacy this rare mushroom family is the most sought-after one, because of its health benefits.</p>
          <p className="text-grey 2xl:text-2xl text-lg"> Shogun Maitake, copied the way nature nurture and grow Black Maitake Mushroom in its state-of-the-art facility in London, Ontario. Expert hands with the deepest of knowledge in Maitake production helped them cultivate as it was grown in the mountains of northeastern Japan. </p>
          <p className="text-grey 2xl:text-2xl text-lg">Black maitake is known to contain some of the most potent compounds for immune support, as well as cancer and tumor-fighting properties. Its medicinal potential is currently being actively researched by institutions and scientists around the world.To obtain the maximum health benefits from black maitake, its origin and how it is cultivated are of critical importance. This rare species of the fungi kingdom must be grown completely free of pesticides or chemicals to preserve its bioactive compounds and therapeutic potential. </p>
          <p className="text-grey 2xl:text-2xl text-lg">At Shogun Maitake, we are committed to cultivating black maitake fully organically, using a proprietary method that replicates natural conditions while maintaining the highest purity and quality standards. </p>
          <p className="text-grey 2xl:text-2xl text-lg">Clinical trials at Memorial Sloan Kettering Cancer Center were conducted using a strain of black maitake mushroom identical to the one cultivated by Shogun Maitake. the results of these Phase 1 and 2 trials confirmed the extract’s safety and potential efficacy, providing further validation for the powerful health-supporting properties of black maitake.</p>
        </div>
      </div>
      <section className="vision-panel 2xl:pt-[184px] xl:py-[120px] 2xl:pb-[140px] md:py-20 py-12 relative">
        <div className="container mx-auto">
          <h2 className="2xl:text-[80px] lg:text-[60px] text-[40px] leading-none text-white">Company Vision</h2>
          <h3 className="2xl:text-6xl lg:text-4xl text-3xl text-limeglow">To contribute to humanity by<span className="block"> providing the means to For healthy standard of life.</span></h3>
          <h4 className="2xl:text-[40px] lg:text-[30px] text-lg md:py-8 py-4 text-white">We take the responsibility of your health</h4>
          <p className="2xl:text-2xl text-lg text-white 2xl:w-[92%] lg:w-[78%]">Health is always our own responsibility. But we, at Shogun Maitake, work hard on a belief that everyone must have the luxury to keep their own health better and enjoy the life in full. ”Save the world from Cancer”, is our aim and we strive to achieve this vision in everything we do. For thousands of years the benefits of the Black Maitake Mushroom were unknown to people in some parts of the world. When there is an easy way to keep diseases away, why take chances?</p>
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
              <h3 className="2xl:text-fz-40 text-3xl leading-none text-forestGreen pb-6">Mission</h3>
              <p className="2xl:text-2xl text-lg">We are spreading the word of Maitake and its benefits, help people experience the benefits and to bring easy to use products to offer a hassle free life. We take this mission as our responsibility and every member who associates with us is a goodwill ambassador for humankind.</p>
            </div>
            <div className="box1">
              <h3 className="2xl:text-fz-40 text-3xl leading-none text-forestGreen pb-6">Corporate SOCIAL Responsibility AND Philosophy</h3>
              <p className="2xl:text-2xl text-lg">We embody a deep respect for society, a consideration for others, and an understanding of our own potential. We work hard each and every day to reach that potential. We keep our standards high and act with a view to create a healthy society. Each and every member of staff works with these principles in mind.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden sm:before:content-[''] before:absolute before:right-0 before:w-[22%] xl:before:h-[74%] 2xl:before:h-[62.7%] before:top-1/2 before:-translate-y-1/2 before:bg-limebg">
        <div className="container">
          <div className="2xl:my-[277px] sm:my-[90px] my-[50px]  ceo-message grid justify-between grid-cols-1 md:grid-cols-2 items-center gap-x-16 gap-y-8 md:gap-y-16 relative z-10">
            <div className="ceo-block">
              <h2 className="2xl:text-[80px] lg:text-[60px] text-[40px] leading-none text-greenLeaf pb-4">CEO & Founder</h2>
              <p className="text-grey 2xl:text-2xl text-lg">Shogun Maitake is the brain child of Mr. Yoshinobu Odaira. Familiar with the tradition in Japan and with deep understanding in Black Maitake cultivation and production, along with his unique organic techniques Mr. Odaira has come a long way in the industry. 35 years of legacy in Black Maitake cultivation, an unrivalled experience of this expert is the strength and spirit behind Shogun Maitake. Shogun Maitake makes use of a proprietary growing process, developed by Mr. Yoshinobu Odaira, to replicate the natural atmosphere inside a factory setting which helps in the mass production of Black Maitake. As a humanitarian, his long-term mission is to make this world, cancer-free by making use of Maitake benefits.</p>
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
            <h2 className="2xl:text-[80px] lg:text-[60px] text-[40px] leading-none text-white pb-4">Our Advisor</h2>
            <div className="2xl:text-2xl text-lg">
              <p><b>Dr. Hiroaki Nanba,</b> Professor Emeritus, Kobe Pharmaceutical University, is one of the world’s most acclaimed researchers in the field of maitake.</p>
              <p>Encouraged by Mr. Yoshinobu Odaira, he began studying the medicinal properties of maitake mushrooms in 1980’s.</p>
              <p>Dr. Nanba successfully isolated the MD-Fraction, a powerful bioactive compound extracted from maitake, and was honored with a special award from the American Association of Cancer Therapy in 1995.</p>
              <p> He is also a member of the New York Academy of Sciences, and continues to contribute his expertise as a scientific advisor to Shogun Maitake.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="2xl:pt-[256px] 2xl:pb-[160px] xl:pt-[100px] xl:pb-[60px] pt-[60px] pb-[40px]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 md:gap-y-16 relative z-10">
            <div className="box1">
              <h3 className="2xl:text-[80px] lg:text-[60px] text-[40px] leading-none text-greenLeaf pb-4">Mission</h3>
              <h4 className="2xl:text-5xl lg:text-4xl text-3xl text-grey pb-8">Formation of Shogun Maitake & <span className="block">its footprint in Canada</span></h4>
              <p className="2xl:text-2xl text-lg text-grey pb-4">Maitake has enormous benefits, but the world was yet to know about it. Then Mr. Yoshinobu Odaira, an expert with over 35 years of Maitake growing expertise, decided to share the benefits to the rest of the world and founded Shogun Maitake Canada Co. Ltd., based in Ontario, Canada.</p>
              <p className="2xl:text-2xl text-lg text-grey">In the first phase a 13,993 Sq.Ft. (1,300㎡) unit was set up to check the viability of the project and after tasting success, it gradually developed in a way, that it can now cultivate Maitake everyday and deliver fresh Maitake in North America.</p>
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
            <h4 className="2xl:text-5xl lg:text-4xl text-3xl text-grey pb-8">The future is promising</h4>
            <p className="2xl:text-2xl text-lg text-grey pb-4">Rooted in tradition, Shogun Maitake Canada Co. Ltd., is growing beyond limits, for the benefit of the world. A new highly sophisticated facility spanning over 65,649 Sq.Ft. (6,100 ㎡) can cultivate fresh Maitake every day, through which we can easily deliver to the culinary and medicinal usage. The leadership of Mr. Yoshinobu Odaira and with his in-depth knowledge in Maitake production and emerging markets, opportunities are waiting.</p>
          </div>
          <div className="flex justify-center items-center xl:pt-28 lg:pt-12 pt-4">
            <Link href="/about" className="link-btn bg-greenLeaf text-white px-2 py-1 2xl:text-5xl lg:text-3xl text-2xl">
              Expansion of our Facility
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
