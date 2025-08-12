import React from "react";
import Image from "next/image";
import Navbar from "@layout/navbar/Navbar";
import Footer from "@layout/footer/Footer";
import Link from 'next/link';
import { Autoplay, Controller, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
const FreshMaitake = () => {

  return (

    <div>
      <Navbar />
      <div className="fresh-maitake relative 2xl:pt-[200px] 2xl:pb-[300px] xl:pt-[120px] xl:pb-[220px]">
        <Image
          src="/fresh-maitake/maitake-on-plate.png"
          alt="Banner"
          className="absolute bottom-0 left-1/2 -translate-x-1/2 mx-auto 2xl:w-[38%] w-[40%]"
          width={732}
          height={365}
        />
        <h1 className="2xl:text-[340px] xl:text-[240px] text-center text-limeGreen 2xl:leading-[290px] xl:leading-[200px]">Fresh Maitake</h1>

        <Image
          src="/fresh-maitake/hand.png"
          alt="Banner"
          className="absolute top-0 left-1/2 -translate-x-1/2 2xl:w-[38%] w-[35%]"
          width={1104}
          height={634}
        />
      </div>
      <div className="text-center 2xl:py-36 xl:py-28 relative">
        <div className="container mx-auto relative z-10">
          <h2 className="text-greenLeaf text-[80px] ">Fresh Maitake comes as the following</h2>
        </div>
      </div>
      <section className="bg-limebg pb-32">
        <div className="container">
          <Swiper className="relative top-[-100px]"
            spaceBetween={10}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            breakpoints={{
              1200: {
                slidesPerView: 5,
              },
              992: {
                slidesPerView: 4,
              },
              768: {
                slidesPerView: 3,
              },
              500: {
                slidesPerView: 2,
              },
            }}
          >
            <SwiperSlide>
              <Image
                src="/fresh-maitake/1LB.png"
                alt=""
                className=""
                width={300}
                height={330}
              />
              <span className="text-xl text-grey text-center block mt-4">1LB</span>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/fresh-maitake/3lb.png"
                alt=""
                className=""
                width={300}
                height={330}
              />
              <span className="text-xl text-grey text-center block mt-4">3 lb (for restaurant)</span>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/fresh-maitake/85G.png"
                alt=""
                className=""
                width={300}
                height={330}
              />
              <span className="text-xl text-grey text-center block mt-4">85 G</span>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/fresh-maitake/230G.png"
                alt=""
                className=""
                width={300}
                height={330}
              />
              <span className="text-xl text-grey text-center block mt-4">230 G</span>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/fresh-maitake/drymaitake.png"
                alt=""
                className=""
                width={300}
                height={330}
              />
              <span className="text-xl text-grey text-center block mt-4">Dry Maitake</span>
            </SwiperSlide>
          </Swiper>
          <div className="px-12">
            <div className="flex gap-12 2xl:justify-between xl:justify-center text-black">
              <div className="text-left 2xl:w-[35%] xl:w[28%]">
                <h3 className="2xl:text-[40px] lg:text-[30px] text-lg text-forestGreen leading-none">
                  Fresh Maitake is available for <span className="block">purchase at the following grocers</span>
                </h3>
                <div className="2xl:text-[40px] lg:text-[30px] text-lg mt-8 grid gap-4 leading-none">
                  <Link href="https://www.farmboy.ca/" target="_blank"><h5><span className="text-black">FARM BOY</span></h5></Link>
                  <h5>
                    <span className="text-black">
                      Costco – Select Locations
                      <br />
                      (GTA, QC, AB)
                    </span>
                  </h5>
                </div>
              </div>

              <div className="2xl:w-[25%] xl:w-[22%]">
                <Image
                  src="/fresh-maitake/maitake-green.png"
                  alt="Fresh Maitake Mushroom"
                  className=""
                  width={318}
                  height={318}
                />
              </div>

              <div className="text-left 2xl:w-[35%] xl:w[28%]">
                <h3 className="2xl:text-[40px] lg:text-[30px] text-lg text-forestGreen leading-none">
                  Fresh Maitake is served at <span className="block">the following restaurants</span>
                </h3>
                <div className="2xl:text-[40px] lg:text-[30px] text-lg mt-8 grid gap-4 leading-none">
                  <Link href="https://www.abruzzi.ca/" target="_blank"><h5><span className="text-black">Abruzzi</span></h5></Link>
                  <Link href="https://www.gracelondon.ca/" target="_blank"><h5>
                    <span className="text-black">
                      Grace Restaurant
                    </span>
                  </h5>
                  </Link>
                  <Link href="https://www.taverna1331.ca/" target="_blank"><h5><span className="text-black">Taverna 1331</span></h5></Link>
                 <Link href="https://wolfpackbars.com/" target="_blank"><h5><span className="text-black">Wolfe Pack Company Bar</span></h5></Link>

                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      <section className="2xl:pb-[272px] xl:pb-[180px] relative bg-limebg">
        <div className="bg-white 2xl:pt-[155px] xl:pt-[100px]">
          <div className="container">
            <h1 className="text-greenLeaf text-[80px] ">Maitake Recipes</h1>
            <div className="w-[26%]">
              <div className="grid gap-6">
                <div>
                  <h2 className="text-forestGreen 2xl:text-5xl text-3xl">How to prepare</h2>
                  <div className="2xl:text-2xl text-lg">
                    <p className="!mb-0">Do not eat Maitake raw. </p>
                    <p className="!mb-0">Maitake stems are delicious and edible. Pull apart from the bottom by hands into smaller sizes.</p>
                  </div>
                </div>
                <div className="mb-6">
                  <h2 className="text-forestGreen 2xl:text-5xl text-3xl">How to prepare</h2>
                  <div className="2xl:text-2xl text-lg">
                    <p className="!mb-0">It can be kept refrigerated for 10-12 days.</p>
                    <p className="!mb-0">Maitake can be kept frozen. Break apart into smaller parts and keep them frozen in a sealed bag. Cook from frozen, do not defrost.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image
          src="/fresh-maitake/maitake-receip.png"
          alt="Fresh Maitake Mushroom"
          className="absolute bottom-0 w-full 2xl:w-full"
          width={1920}
          height={830}
        />
      </section>
      <section className="relative z-10 pt-36 pb-24 before:content-[''] before:absolute before:left-0 2xl:before:w-[21%] 2xl:before:h-[50%] xl:before:w-[18%] xl:before:h-[45%] xl:before:top-[42%] 2xl:before:top-[42%] before:translate-y-[-50%] before:bg-limebg">
        <div className="container">
          <div className="2xl:w-[53%] xl:w-[45%] text-end">
            <h2 className="text-greenLeaf text-[70px] ">Recipes for Download</h2>
            <h3 className="text-sblack 2xl:text-5xl text-3xl pb-4">Pickled Maitakes</h3>
          </div>
          <div className="flex gap-12 items-center relative">
            <div className="2xl:w-[53%] xl:w-[45%]">
              <Image
                src="/fresh-maitake/maitake-cooked.jpg"
                alt=""
                className="w-full"
                width={750}
                height={511}
              />
            </div>
            <div>
              <p className="text-3xl pb-4">Ingredients </p>
              <ul className="list-none grid 2xl:gap-3 gap-1 2xl:text-[25px] text-lg">
                <li>1 Pound Maitake Mushrooms</li>
                <li>1 ½ Cup White Sugar</li>
                <li>1 ½ Cup Soy Sauce</li>
                <li>1 ½ Cup Rice Wine Vinegar</li>
                <li>½ Tablespoon Kosher Salt</li>
                <li>1 Tablespoon Black Peppercorns</li>
                <li>2 Garlic Cloves</li>
                <li>1 Small Knob of Ginger</li>
                <li>1 Star Anise Pod</li>
              </ul>
            </div>
          </div>
          <div className="grid mt-16">
            <div className="xl:w-[55%] 2xl:w-[63%] mx-auto">
              <p className="text-3xl pb-4">Directions </p>
              <ul className="list-none grid 2xl:gap-3 xl:gap-2 2xl:text-xl text-base">
                <li className="flex gap-1"><span>1.</span> Peel garlic cloves and lightly smash with the back of a knife.</li>
                <li className="flex gap-1"><span>2.</span> Peel a small knob of ginger and roughly cut it into large pieces.</li>
                <li className="flex gap-1"><span>3.</span> Place white sugar, soy sauce, rice wine vinegar, kosher salt, black peppercorns, garlic, ginger, and star anise pod into a medium-sized pot.</li>
                <li className="flex gap-1"><span>4.</span> Heat the pot over medium heat and bring to a boil.</li>
                <li className="flex gap-1"><span>5.</span> Once the pickling liquid has come to a boil, remove from heat and allow it to steep for 15 minutes.</li>
                <li className="flex gap-1"><span>6.</span> Prepare maitake mushrooms by removing the bottom inch. Pull maitake mushrooms where they naturally want to break. Pieces should be no bigger than 4 inches long and ½ an inch wide.</li>
                <li className="flex gap-1"><span>7.</span> Place maitake pieces into a heat-safe container and pour hot pickling liquid over them.</li>
                <li className="flex gap-1"><span>8.</span> Place a small amount of cling film on the surface to ensure the maitakes stay submerged in the pickling liquid.</li>
              </ul>
              <div className="flex 2xl:gap-10 xl:gap-8 2xl:mt-10 xl:mt-8">
                <Link href="https://www.youtube.com/watch?v=Ir9vU8BCPFQ&feature=youtu.be" target="_blank" className="link-btn bg-limeGreen text-white px-2 py-1 2xl:text-2xl md:text-lg text-base rounded-xl">
                  <p>Watch On Youtube</p>
                </Link>
                <Link href="https://shogunmaitake.s3.eu-north-1.amazonaws.com/shogun-pdf/Shogun-PICKLED-MAITAKES-recipe.pdf" target="_blank" className="link-btn bg-limeGreen text-white px-2 py-1 2xl:text-2xl md:text-lg text-base rounded-xl">
                  <p>Download PDF</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Image
          src="/fresh-maitake/maitake-half-vertical.png"
          alt=""
          className="absolute right-0 top-[30%] translate-y-[-18%] w-[12%] 2xl:block hidden"
          width={438}
          height={438}
        />
      </section>
      <section className="relative z-10 pt-28 pb-32 bg-limebg">
        <div className="container">
          <div className="flex gap-12 items-center relative">
            <div className="2xl:w-[53%] xl:w-[45%]">
              <h3 className="text-sblack 2xl:text-5xl text-3xl pb-4">CHICKEN FRIED MAITAKES</h3>

              <Image
                src="/fresh-maitake/chiken-maitake.jpg"
                alt=""
                className="w-full"
                width={750}
                height={511}
              />
            </div>
            <div>
              <p className="text-3xl pb-4">Ingredients </p>

              <ul className="list-none grid 2xl:gap-3 gap-1 2xl:text-[25px] text-lg">
                <li>1 Pound Maitake Mushrooms</li>
                <li>2 Cups Buttermilk</li>
                <li className="font-semibold mt-2">Dredge Ingredients</li>
                <li>4 Cups Unbleached All Purpose Flour</li>
                <li>1 Tablespoon Kosher Salt</li>
                <li>1 Tablespoon Ground Sage</li>
                <li>1 Tablespoon Onion Powder</li>
                <li>1 Teaspoon Garlic Powder</li>
                <li>1 Teaspoon Mustard Powder</li>
                <li>1 Teaspoon Baking Powder</li>
                <li>1 Teaspoon Ground Black Pepper</li>
                <li>½ Teaspoon Cayenne</li>
                <li>Canola Oil for Frying</li>
              </ul>

            </div>
          </div>
          <div className="grid mt-16">
            <div className="xl:w-[65%] 2xl:w-[73%]">
              <p className="text-3xl pb-4">Directions </p>
              <ul className="list-none grid 2xl:gap-3 xl:gap-2 2xl:text-xl text-base">
                <li className="flex gap-1"><span>1.</span> Fill a tall-sided pot ½ way full with canola oil. Place on a stovetop and turn on medium heat. Heat oil to 350℉.</li>
                <li className="flex gap-1"><span>2.</span> Meanwhile, prepare your maitakes by removing the bottom inch with a knife and pulling maitake mushrooms where it naturally want to break. Pieces should be no bigger than 4 inches long and ½ an inch wide.</li>
                <li className="flex gap-1"><span>3.</span> Place Maitakes in buttermilk to soak.</li>
                <li className="flex gap-1"><span>4.</span> Prepare the chicken dredge by combining all ingredients & mixing well.</li>
                <li className="flex gap-1"><span>5.</span> Coat maitakes one at a time in the chicken dredge. Dip the back in the buttermilk & coat again in the dredge. Ensure that maitakes are evenly & well coated in the dredge.</li>
                <li className="flex gap-1"><span>6.</span> Once the oil is heated, carefully fry maitakes in batches. Turn the Maitakes until all sides are evenly golden brown.</li>
                <li className="flex gap-1"><span>7.</span> Transfer fried maitakes to a sheet tray or plate lined with a paper towel. Season with salt or any seasoning of your choosing.</li>
                <li className="flex gap-1"><span>8.</span> Chicken-fried maitakes should be enjoyed immediately. Serve as a snack with your favorite dip or on a sandwich.</li>
              </ul>
              <div className="flex 2xl:gap-10 xl:gap-8 2xl:mt-10 xl:mt-8">
                <Link href="https://www.youtube.com/watch?v=cKxvjTHkjEs" target="_blank" className="link-btn bg-limeGreen text-white px-2 py-1 2xl:text-2xl md:text-lg text-base rounded-xl">
                  <p>Watch On Youtube</p>
                </Link>
                <Link href="https://shogunmaitake.s3.eu-north-1.amazonaws.com/shogun-pdf/Shogun-MAITAKES-COOKED-IN-PAPER.pdf" target="_blank" className="link-btn bg-limeGreen text-white px-2 py-1 2xl:text-2xl md:text-lg text-base rounded-xl">
                  <p>Download PDF</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative z-10 pt-28 pb-32 before:content-[''] before:absolute before:right-0 2xl:before:w-[28%] 2xl:before:h-[44%] xl:before:w-[18%] xl:before:h-[40%] 2xl:before:top-[28%] xl:before:top-[27%] before:translate-y-[-50%] before:bg-limebg">
        <div className="container">
          <div className="flex gap-12 items-flex-start justify-between relative">
            <div>
              <p className="text-3xl pb-4">Ingredients </p>
              <ul className="list-none grid 2xl:gap-3 gap-1 2xl:text-[25px] text-lg">
                <li>1 Pound Maitake Mushrooms</li>
                <li>⅓ Cup Cold Unsalted Butter</li>
                <li>5 Sprigs of Thyme</li>
                <li>1 Shallot</li>
                <li>1 Garlic Clove</li>
                <li>1 Lemon, Zested</li>
                <li>½ Tablespoon Kosher Salt</li>
                <li>½ Tablespoon Ground Fennel Seed</li>
                <li>1 Teaspoon Ground Black Pepper</li>
                <li className="font-semibold mt-2">Garnish Ingredients</li>
                <li>1 Tablespoon Lemon Juice</li>
                <li>2 Large Eggs</li>
                <li>Thai Basil</li>
                <li>Chervil</li>
                <li>Mustard Greens</li>
                <li>Arugula</li>
              </ul>
              <div className="flex 2xl:gap-10 xl:gap-8 2xl:mt-10 xl:mt-8">
                <Link href="https://www.youtube.com/watch?v=2mlG_ICdSZ0&feature=youtu.be" target="_blank" className="link-btn bg-limeGreen text-white px-2 py-1 2xl:text-2xl md:text-lg text-base rounded-xl">
                  <p>Watch On Youtube</p>
                </Link>
                <Link href="https://shogunmaitake.s3.eu-north-1.amazonaws.com/shogun-pdf/Shogun-MAITAKES-COOKED-IN-PAPER.pdf" target="_blank" className="link-btn bg-limeGreen text-white px-2 py-1 2xl:text-2xl md:text-lg text-base rounded-xl">
                  <p>Download PDF</p>
                </Link>
              </div>
            </div>
            <div className="2xl:w-[53%] xl:w-[45%]">
              <h3 className="text-sblack 2xl:text-5xl text-3xl 2xl:pb-12 xl:pb-8">MAITAKES COOKED IN PAPER</h3>
              <Image
                src="/fresh-maitake/maitake-cooked.jpg"
                alt=""
                className="w-full"
                width={750}
                height={511}
              />
            </div>
          </div>
          <div className="grid mt-16">
            <div className="w-[77%]">
              <p className="text-3xl pb-4">Directions </p>
              <ul className="list-none grid 2xl:gap-3 xl:gap-2 2xl:text-xl text-base">
                <li className="flex gap-1"><span>1.</span>Preheat the oven to 375℉ and bring a small pot of water to a boil.</li>
                <li className="flex gap-1"><span>2.</span>Start by preparing maitake mushrooms. Remove the bottom inch with a knife and pull maitake mushrooms where they naturally want to break. Pieces should be no bigger than 4 inches long and ½ an inch wide and set aside.</li>
                <li className="flex gap-1"><span>3.</span>Prepare the remaining ingredients. Cut ⅓ cup of cold unsalted butter into ½ inch cubes. Pick 5 sprigs of thyme leaves and roughly chop. Slice shallots into ⅛ inch rings and gently separate each ring. Mince 1 clove of garlic. Zest 1 lemon and save the juice to finish the dish.</li>
                <li className="flex gap-1"><span>4.</span>To prepare the parchment parcels, lay 2 large sheets of parchment out flat. Fold them both in half to establish the center. Open them back up and separate the two. Lightly toss the maitake mushrooms with chopped thyme, shallot rings, minced garlic, lemon zest, salt, fennel & black pepper.</li>
                <li className="flex gap-1"><span>5.</span>Divide into two portions. Place one portion of the seasoned maitakes near the crease of the parchment. Evenly distribute half the diced butter on top of the maitakes. Fold the parchment over and tightly roll or fold the edges to seal. Repeat with the second portion.</li>
                <li className="flex gap-1"><span>6.</span>Place parchment parcels onto a baking sheet. Place the sheet on the middle rack of the oven. Bake the parcels for 15 minutes.</li>
                <li className="flex gap-1"><span>7.</span>Meanwhile, prepare the eggs by placing them in boiling water for exactly 6 minutes. Once 6 minutes have elapsed, crack the top and bottom of the shells, place into tepid water, and carefully peel.</li>
                <li className="flex gap-1"><span>8.</span>Remove the parcels from the oven and place on a serving tray or plate. Carefully cut open with a sharp knife. Use caution — steam will be hot.</li>
                <li className="flex gap-1"><span>9.</span>To garnish, drizzle maitakes with a little of the reserved lemon juice. Place one peeled 6-minute egg on each parcel. Toss herbs & greens with lemon juice, oil, and kosher salt. Finish by topping the Maitakes.</li>
              </ul>
            </div>
            <div className="flex items-center gap-8 mt-16">
              <h2 className="text-forestGreen 2xl:text-5xl text-3xl">Maitake Toast</h2>
              <div className="text-3xl flex w-[56px] text-greenLeaf">
                <FontAwesomeIcon icon={faChevronRight} />
                <FontAwesomeIcon icon={faChevronRight} className="opacity-[57%]" />
                <FontAwesomeIcon icon={faChevronRight} className="opacity-[28%]" />
              </div>
              <Link href="https://shogunmaitake.s3.eu-north-1.amazonaws.com/shogun-pdf/Shogun-MAITAKE-TOAST.pdf" target="_blank" className="link-btn bg-limeGreen text-white px-2 py-1 2xl:text-2xl md:text-lg text-base rounded-xl">
                <p>Download PDF</p>
              </Link>
            </div>
            <div className="flex items-center gap-8 mt-8">
              <h2 className="text-green 2xl:text-5xl text-3xl">Karrage Maitakes (Gluten Free)</h2>
              <div className="text-3xl flex w-[56px] text-greenLeaf">
                <FontAwesomeIcon icon={faChevronRight} />
                <FontAwesomeIcon icon={faChevronRight} className="opacity-[57%]" />
                <FontAwesomeIcon icon={faChevronRight} className="opacity-[28%]" />
              </div>
              <Link href="https://shogunmaitake.s3.eu-north-1.amazonaws.com/shogun-pdf/Shogun-KARAAGE-MAITAKES.pdf" target="_blank" className="link-btn bg-limeGreen text-white px-2 py-1 2xl:text-2xl md:text-lg text-base rounded-xl">
                <p>Download PDF</p>
              </Link>
            </div>
          </div>
        </div>
        <Image
          src="/fresh-maitake/maitake-half-vertical-right.png"
          alt=""
          className="absolute left-0 top-[30%] translate-y-[-18%] w-[12%] 2xl:block hidden"
          width={438}
          height={438}
        />
      </section>
      <Footer />
    </div>
  );
};

export default FreshMaitake;
