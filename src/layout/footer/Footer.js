import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from "react-i18next";
import {
  faFacebook,
  faLinkedin,
  faYoutube,
  faInstagram,
  faXTwitter
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  const { t } = useTranslation("footer");
  return (
    <div className="footer bg-grey2 lg:py-20 py-12 relative">
      <div className="container">
        <div className="flex flex-col sm:flex-col lg:flex-row justify-between gap-6 lg:gap-0">
          <div className="grid grid-cols-12 gap-4 bg-gray-100">
            <div className="col-span-12 md:col-span-8">
              <Image width={260} height={45} alt="logo" src="/logo/logo.png" />
              <div className="grid grid-flow-col items-center gap-8 mt-6">
                <Image width={71} height={50} alt="logo" src="/footer/logo-1.png" />
                <Image width={120} height={50} alt="logo" src="/footer/logo-2.png" />
                <Image width={65} height={50} alt="logo" src="/footer/logo-3.png" />
                <Image width={93} height={50} alt="logo" src="/footer/logo-4.png" />
              </div>
            </div>
            <div className="col-span-12 flex gap-2 items-end border-gray-300 text-sm text-gray-600 hidden lg:flex">
              <p>{t("copy")}</p>
              <Link href="https://www.facebook.com/ShogunMaitakeMushroom" target="_blank"><FontAwesomeIcon icon={faFacebook} /></Link>
              <Link href="https://www.instagram.com/shogunmaitake_official" target="_blank"><FontAwesomeIcon icon={faInstagram} /></Link>
              <Link href="https://www.youtube.com/@shogunmaitakecanada" target="_blank"><FontAwesomeIcon icon={faYoutube} /></Link>
              <Link href="https://x.com/ShogunMaitakeCa" target="_blank"><FontAwesomeIcon icon={faXTwitter} /></Link>
              <Link href="https://www.linkedin.com/company/shogun-maitake/?originalSubdomain=ca" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} />
              </Link>
            </div>
          </div>
          <div className="2xl:w-[400px] lg:w-[400px] w-full">
            <div className="grid grid-flow-col lg:gap-8 gap-4 items-end">
              <div className="grid gap-2">
                <p className="font-bold">{t("link1")}</p>
                <Link href="/about" className="block"><p>{t("link2")}</p></Link>
                <Link href="/culinary-maitake" className="block"><p>{t("link3")}</p></Link>
                <Link href="/fresh-maitake" className="block"><p>{t("link4")}</p></Link>
                <Link href="/maitake-supplement" className="block"><p>{t("link5")}</p></Link>
                <Link href="/order-now" className="block"><p>{t("link6")}</p></Link>
                <Link href="/our-affiliations" className="block"><p>{t("link7")}</p></Link>
                <Link href="/news" className="block"><p>{t("link8")}</p></Link>
                <Link href="allergen-information" className="block"><p>{t("link9")}</p></Link>
                <Link href="/contact-us" className="block"><p>{t("link10")}</p></Link>
              </div>
              <div>
                <div>
                  <p className="font-bold">{t("text1")}</p>
                  <p className="!mb-0 font-bold">{t("text2")}</p>
                  <p className="!mb-0">{t("text3")}</p>
                  <p className="!mb-0"><span className="font-bold">{t("text4")}</span> 519-652-5783</p>
                  <p className="!mb-0"><span className="font-bold">{t("text5")}</span> 519-488-4787</p>
                </div>
                <div className="mt-6">
                  <p className="!mb-0 font-bold">{t("address")}</p>
                  <p className="!mb-0">6188 Colonel Talbot Road, London, Ontario N6P 1J1</p>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="col-span-12 flex gap-2 items-end border-gray-300 text-sm text-gray-600 lg:hidden mt-6">
          <p>© 2025 Shogun Maitake.</p>
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
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
