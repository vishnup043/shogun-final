import React from "react";
import Image from "next/image";
import Navbar from "@layout/navbar/Navbar";
import Footer from "@layout/footer/Footer";
import Link from 'next/link';
import WhatsAppButton from "@components/whatsapp/WhatsAppButton";

const Allergen = () => {

  return (

    <div>
      <Navbar />
      <section className="relative before:content-[''] before:absolute before:left-0 before:w-full before:h-[30%] before:bottom-0 before:bg-green 2xl:py-16 py-12">
        <div className="container">
          <div className="lg:w-[80%] w-full mx-auto text-sm text-gray-700 bg-limebg md:p-16 p-6 relative overflow-hidden">
            <h2 className="text-green 2xl:text-7xl md:text-5xl text-3xl">
              TO ALL SHOGUN BLACK MAITAKE<span className="block"> MUSHROOM LOVERS</span>
            </h2>
            <h5 class="text-grey 2xl:text-4xl md:text-3xl text-2xl md:pb-8 pb-4">ALLERGEN DISCLAIMER</h5>
            <p>We at Shogun Maitake Canada Co. Ltd made every effort to prevent food allergies during growing, packaging, and shipping so that you and your loved ones can enjoy Black Maitake recipes safely without any potential effects of food allergens.</p>
            <p>
              Shogun Black Maitake Mushrooms are tested at licensed laboratories in Canada, randomly selected Maitake from different production lots every quarterly intervals to prove our mushrooms are free from below major allergens.
            </p>

            <p>
              In Canada, there are 11 priority allergens (allergens of concern):
            </p>
            <p>1. Peanuts 2. Tree nuts (almonds, Brazil nuts, cashews, hazelnuts, macadamia nuts, pecans, pine nuts, pistachios, walnuts) 3. Fish and crustaceans 4. Shellfish 5. Milk 6. Eggs 7. Soy and soy products 8. Wheat and wheat products 9. Sesame seeds 10. Sulphites 11. Mustard</p>

            <p>NOTE: If present, gluten must be indicated on labels due to sensitivity by certain individuals. In United States, there are 9 priority allergens (allergens of concern):</p>
            <p> 1. Milk 2. Eggs. 3. Fish. 4. Crustacean shellfish. 5. Tree nuts. 6. Peanuts 7. Wheat. 8. Soybeans. 9. Sesame</p>
            <p className="font-bold">ALLERGENS ADVISORY & FOOD ALLERGY DISCLAIMER:</p>
            <p className="!mb-0">The safety checks of ingredients used in production are based on the information provided by the suppliers or manufacturers. Shogun’s final packed products do not contain any allergens (according to lab reports) provided here to download. If Maitake mushrooms are prepared in the same kitchen, where other foods contain allergens or in close contact with other allergens products, or all dishes are washed in the same dishwasher, all these has chance the risk of allergens. Even a specially prepared meal for those with food allergies may still contain a traceable amount of allergens.</p>
            <p>For the reasons mentioned above, Shogun cannot guarantee a total absence of these allergens in any of the prepared food with Shogun maitake mushrooms. Please note that you may choose to refuse to serve who have severe mushroom allergies in order to protect their safety and health. Distributors, Retailers and Customers are requested to make their own final decisions to consume cross contaminated allergens based on the conditions described above. </p>
            <p>Thank you for your understanding.</p>
            <p className="font-bold !mb-0">For Support & Advice Contact</p>
            <p className="!mb-0">Shogun Maitake Canada Co., Ltd.</p>
            <p className="!mb-0">6188 Colonel Talbot Rd, London, On N6P 1J1 </p>
            <p className="!mb-0">Canada Office : 1-(519)652-5783</p>
            <div className="flex 2xl:gap-10 xl:gap-8 2xl:mt-10 mt-8">
              <Link href="https://shogunmaitake.s3.eu-north-1.amazonaws.com/shogun-pdf/Disclaimer-Allergen.pdf" target="_blank" className="link-btn bg-green text-white px-2 py-1 2xl:text-2xl md:text-lg text-base rounded-xl">
                <p>Download PDF</p>
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
