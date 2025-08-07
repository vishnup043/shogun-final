import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import Navbar from "@layout/navbar/Navbar";
import Footer from "@layout/footer/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faWhatsapp, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {

  return (
    <div>
      <Navbar />
      <div className="relative pt-12">
        <div className="container">
          <div className="flex w-[60%] gap-12 mx-auto text-sm text-gray-700 justify-center pb-[416px]">
            <div>
              <div className="mt-6">
                <p className="!mb-0 font-bold">Address: </p>
                <p className="!mb-0">6188 Colonel Talbot Road,<span className="block"> London, Ontario N6P 1J1</span></p>
              </div>
              <div className="mt-6 flex gap-4 divide-x">
                <p className="!mb-0"><span className="font-bold">Phone Number:</span> <span className="block">(519) 652-5783</span></p>
                <p className="!mb-0 px-4"><span className="font-bold">Fax:</span> <span className="block">(519) 652-5783</span></p>
              </div>
              <div className="mt-6">
                <p className="!mb-0 font-bold">Hours Of Operation: </p>
                <p className="!mb-0">8:00 Am – 17:00 Pm</p>
              </div>
              <div className="mt-6">
                <p className="!mb-0 font-bold"> Primary Email Address: </p>
                <p className="!mb-0">Info@Shogunmaitake.Com</p>
              </div>
              <div className="mt-6">
                <p className="!mb-0 font-bold"> Social Media </p>
                <div className="flex gap-2">
                  <Link href="/">
                    <FontAwesomeIcon icon={faFacebook} />
                  </Link>
                  <Link href="/">
                    <FontAwesomeIcon icon={faInstagram} />
                  </Link>
                  <Link href="/">
                    <FontAwesomeIcon icon={faYoutube} />
                  </Link>
                  <Link href="/">
                    <FontAwesomeIcon icon={faWhatsapp} />
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <div className="max-w-md mx-auto bg-green p-6 shadow-sm">
                <form className="space-y-5 bg-white p-8 relative z-10 rounded-2xl">
                  <div>
                    <label className="text-sm font-medium">First name*</label>
                    <input
                      type="text"
                      placeholder="Write your name"
                      className="text-sm w-full border-0 border-b border-gray-300 focus:border-gray-600 focus:outline-none focus:shadow-none focus:ring-0 focus:ring-transparent placeholder-gray-400 px-0 py-1 bg-transparent"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Last name*</label>
                    <input
                      type="text"
                      placeholder="Write your last name"
                      className="text-sm w-full border-0 border-b border-gray-300 focus:border-gray-600 focus:outline-none focus:shadow-none focus:ring-0 focus:ring-transparent placeholder-gray-400 px-0 py-1 bg-transparent"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Email*</label>
                    <input
                      type="email"
                      placeholder="Write your email"
                      className="text-sm w-full border-0 border-b border-gray-300 focus:border-gray-600 focus:outline-none focus:shadow-none focus:ring-0 focus:ring-transparent placeholder-gray-400 px-0 py-1 bg-transparent"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Phone number*</label>
                    <input
                      type="tel"
                      placeholder="Write your phone number"
                      className="text-sm w-full border-0 border-b border-gray-300 focus:border-gray-600 focus:outline-none focus:shadow-none focus:ring-0 focus:ring-transparent placeholder-gray-400 px-0 py-1 bg-transparent"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Department Contact</label>
                    <input
                      type="text"
                      placeholder="Write your department contact"
                      className="text-sm w-full border-0 border-b border-gray-300 focus:border-gray-600 focus:outline-none focus:shadow-none focus:ring-0 focus:ring-transparent placeholder-gray-400 px-0 py-1 bg-transparent"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Subject*</label>
                    <input
                      type="text"
                      placeholder="I want to work with you"
                      className="text-sm w-full border-0 border-b border-gray-300 focus:border-gray-600 focus:outline-none focus:shadow-none focus:ring-0 focus:ring-transparent placeholder-gray-400 px-0 py-1 bg-transparent"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Comment*</label>
                    <textarea
                      placeholder="Write your Comment"
                      className="text-sm w-full border-0 border-b border-gray-300 focus:border-gray-600 focus:outline-none focus:shadow-none focus:ring-0 focus:ring-transparent placeholder-gray-400 px-0 py-1 bg-transparent"
                      rows={6}
                    />
                  </div>
                  <div className="pt-4 flex justify-center">
                    <button
                      type="submit"
                      className="lg:text-2xl text-lg p-2 rounded-md bg-sblack text-white leading-[26px]"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 w-full">
          <div className="maitake-box bg-limebg overflow-hidden w-full">
            <div className="container">
              <div className="w-[70%] mx-auto">
                <Image
                  width={284}
                  height={274}
                  alt="logo"
                  className='relative bottom-[-110px]'
                  src="/about/maitake.png"
                />
              </div>
            </div>
          </div>
          <div className="bg-green pt-16">
            <div className="container">
              <Image
                  width={1660}
                  height={479}
                  alt="logo"
                  className='w-full'
                  src="/footer/new-life.png"
                />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
