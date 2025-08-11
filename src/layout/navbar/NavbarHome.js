import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const NavbarHome = ({ videoRef }) => {
  const [isAfterSeconds, setIsAfterSeconds] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => setIsOpen(!isOpen);
  useEffect(() => {
    const interval = setInterval(() => {
      if (videoRef?.current) {
        const currentTime = videoRef.current.currentTime;
        if (currentTime > 3 && !isAfterSeconds) {
          setIsAfterSeconds(true);
        } else if (currentTime <= 3 && isAfterSeconds) {
          setIsAfterSeconds(false);
        }
      }
    }, 300); // check every 0.5s

    return () => clearInterval(interval);
  }, [videoRef, isAfterSeconds]);

  const logoSrc = isAfterSeconds ? "/logo/logo.png" : "/logo/logo-white.png";
  return (
    <>
      <div className="absolute top-0 z-20 w-full 2xl:py-12 py-6">
        <div className='container'>
          <div className="flex justify-between">
            <div className="2xl:w-[260px] xl:w-[220px]"
            >
              <Link
                href="/"
              >
                <Image
                  width={260}
                  height={65}
                  className="w-full"
                  alt="logo"
                  src={logoSrc}
                />
              </Link>
            </div>
            <div className="w-1/3 relative flex items-center gap-4">
              <Link href="/order-now" className="text-white bg-darkgreen2 text-uppercase 2xl:text-2xl xl:text-lg px-6 rounded-3xl">
                order online
              </Link>
              <Link href="" className="text-white bg-darkgreen2 text-uppercase 2xl:text-2xl xl:text-lg px-6 rounded-3xl">
                Create Account
              </Link>
              <div className='h-[30px] w-[30px] ml-auto'>
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="bg-darkgreen2 focus:outline-none p-1 text-white rounded-[50%]"
                  aria-label="Toggle menu"
                >
                  <svg
                    className={`w-full h-full'
                        }`}
                    fill="#fff"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >

                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
              <div
                className={`absolute top-16 right-0 h-full w-80 transform transition-transform duration-500 ease-in-out ${isOpen ? '' : 'opacity-0'
                  }`}
              >
                <div className="text-right">
                  <nav className=
                    {`grid grid-flow-row gap-2 text-lg ${isAfterSeconds ? "text-black" : "text-white"
                      }`}>
                    <Link href="about" className="block"><p>About</p></Link>
                    <Link href="/culinary-maitake" className="block"><p>Culinary Maitake</p></Link>
                    <Link href="/maitake-supplement" className="block"><p>Maitake Supplements</p></Link>
                    <Link href="/our-affiliations" className="block"><p>Our Affiliations</p></Link>
                    <Link href="/news" className="block"><p>News & Publications</p></Link>
                    <Link href="allergen-information" className="block"><p>Allergen Information</p></Link>
                    <Link href="/contact-us" className="block"><p>Contact Us</p></Link>
                  </nav>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};
export default NavbarHome;
