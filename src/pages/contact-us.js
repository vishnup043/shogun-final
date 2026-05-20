import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@layout/navbar/Navbar";
import Footer from "@layout/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";
import {
  faFacebook,
  faLinkedin,
  faYoutube,
  faInstagram,
  faXTwitter
} from "@fortawesome/free-brands-svg-icons";
import WhatsAppButton from "@components/whatsapp/WhatsAppButton";

const Contact = () => {
    const { t } = useTranslation("contact");
  const [showPopup, setShowPopup] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    department: "",
    subject: "",
    comment: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    const errors = {};

    if (!form.firstName.trim()) errors.firstName = true;
    if (!form.lastName.trim()) errors.lastName = true;
    if (!form.email.trim()) {
      errors.email = true;
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      errors.email = true;
    }
    if (!form.phone.trim()) errors.phone = true;
    if (!form.department.trim()) errors.department = true;
    if (!form.subject.trim()) errors.subject = true;

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const result = await res.json();
      setStatus(result.success ? "success" : "error");

      if (result.success) {
        setForm({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          department: "",
          subject: "",
          comment: "",
        });
        setShowPopup(true);
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="relative pt-12">
        <div className="container">
          <div className="flex w-[60%] gap-12 mx-auto text-sm text-gray-700 justify-center pb-[416px]">
            <div>
              <div className="mt-6">
                <p className="!mb-0 font-bold">{t("address")}</p>
                <p className="!mb-0">
                  <Trans
                    i18nKey="maintitle"
                    ns="allergen"
                    components={{
                      span: <span className="block" />,
                    }}
                  />
                </p>
              </div>
              <div className="mt-6 flex gap-4 divide-x">
                <p className="!mb-0">
                  <span className="font-bold">{t("phone")}</span>
                  <span className="block">(519) 652-5783</span>
                </p>
                <p className="!mb-0 px-4">
                  <span className="font-bold">{t("fax")}</span>
                  <span className="block">(519) 652-5783</span>
                </p>
              </div>
              <div className="mt-6">
                <p className="!mb-0 font-bold">{t("hours")}</p>
                <p className="!mb-0">8:00 AM – 5:00 PM</p>
              </div>
              <div className="mt-6">
                <p className="!mb-0 font-bold">{t("email")}</p>
                <p className="!mb-0">Info@Shogunmaitake.Com</p>
              </div>
              <div className="mt-6">
                <p className="!mb-0 font-bold">{t("social")}</p>
                <div className="flex gap-2 mt-2 text-xl">
                  <Link href="https://www.facebook.com/ShogunMaitakeMushroom" target="_blank"><FontAwesomeIcon icon={faFacebook} /></Link>
                  <Link href="https://www.instagram.com/shogunmaitake_official" target="_blank"><FontAwesomeIcon icon={faInstagram} /></Link>
                  <Link href="https://www.youtube.com/@shogunmaitakecanada" target="_blank"><FontAwesomeIcon icon={faYoutube} /></Link>
                  <Link href="https://x.com/ShogunMaitakeCa" target="_blank"><FontAwesomeIcon icon={faXTwitter} /></Link>
                  <Link href="https://www.linkedin.com/company/shogun-maitake/?originalSubdomain=ca" target="_blank">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </Link>
                </div>
              </div>
            </div>

            <div className="max-w-md mx-auto bg-green p-6 shadow-sm">
              <form
                onSubmit={handleSubmit}
                className="space-y-5 bg-white p-8 relative z-10 rounded-2xl"
              >
                <div>
                  <label className="text-sm font-medium">{t("firstname")}</label>
                  <input
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    type="text"
                    placeholder={t("writeyourname")}
                    className="text-sm w-full border-0 border-b border-gray-300 focus:border-gray-600 focus:outline-none focus:shadow-none focus:ring-0 focus:ring-transparent placeholder-gray-400 px-0 py-1 bg-transparent"
                  />
                  {formErrors.firstName && (
                    <p className="text-red-500 text-xs">{t("firstrequired")}</p>
                  )}
                </div>

                <div>
                  <label className="text-sm font-medium">{t("lastname")}</label>
                  <input
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    type="text"
                    placeholder={t("writeyourlname")}
                    className="text-sm w-full border-0 border-b border-gray-300 focus:border-gray-600 focus:outline-none focus:shadow-none focus:ring-0 focus:ring-transparent placeholder-gray-400 px-0 py-1 bg-transparent"
                  />
                  {formErrors.lastName && (
                    <p className="text-red-500 text-xs">{t("lastrequired")}</p>
                  )}
                </div>

                <div>
                  <label className="text-sm font-medium">{t("emailform")}</label>
                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    type="email"
                    placeholder={t("writeemail")}
                    className="text-sm w-full border-0 border-b border-gray-300 focus:border-gray-600 focus:outline-none focus:shadow-none focus:ring-0 focus:ring-transparent placeholder-gray-400 px-0 py-1 bg-transparent"
                  />
                  {formErrors.email && (
                    <p className="text-red-500 text-xs">{t("emailrequired")}</p>
                  )}
                </div>

                <div>
                  <label className="text-sm font-medium">{t("phonenumber")}</label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    type="tel"
                    placeholder={t("writephone")}
                    className="text-sm w-full border-0 border-b border-gray-300 focus:border-gray-600 focus:outline-none focus:shadow-none focus:ring-0 focus:ring-transparent placeholder-gray-400 px-0 py-1 bg-transparent"
                  />
                  {formErrors.phone && (
                    <p className="text-red-500 text-xs">{t("phonerequired")}</p>
                  )}
                </div>

                <div>
                  <label className="text-sm font-medium">{t("department")}</label>
                  <input
                    name="department"
                    value={form.department}
                    onChange={handleChange}
                    type="text"
                    placeholder={t("writedepartment")}
                    className="text-sm w-full border-0 border-b border-gray-300 focus:border-gray-600 focus:outline-none focus:shadow-none focus:ring-0 focus:ring-transparent placeholder-gray-400 px-0 py-1 bg-transparent"
                  />
                  {formErrors.department && (
                    <p className="text-red-500 text-xs">{t("departmentrequired")}</p>
                  )}
                </div>

                <div>
                  <label className="text-sm font-medium">{t("subject")}</label>
                  <input
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    type="text"
                    placeholder={t("writesubject")}
                    className="text-sm w-full border-0 border-b border-gray-300 focus:border-gray-600 focus:outline-none focus:shadow-none focus:ring-0 focus:ring-transparent placeholder-gray-400 px-0 py-1 bg-transparent"
                  />
                  {formErrors.subject && (
                    <p className="text-red-500 text-xs">{t("subjectrequired")}</p>
                  )}
                </div>

                <div>
                  <label className="text-sm font-medium">{t("comment")}</label>
                  <textarea
                    name="comment"
                    value={form.comment}
                    onChange={handleChange}
                    placeholder={t("writecomment")}
                    rows={5}
                    className="text-sm w-full border-0 resize-none focus:border-gray-600 focus:outline-none focus:shadow-none focus:ring-0 focus:ring-transparent placeholder-gray-400 px-0 py-1 bg-transparent"
                  />
                </div>

                <div className="pt-4 flex justify-center">
                  <button
                    type="submit"
                    className="text-lg px-6 py-2 rounded-md bg-sblack text-white"
                    disabled={status === "loading"}
                  >
                    {status === "loading" ? "Sending..." : "Submit"}
                  </button>
                </div>

                {status === "success" && (
                  <p className="text-green-600 mt-2">
                    ✅ Email sent successfully!
                  </p>
                )}
                {status === "error" && (
                  <p className="text-red-600 mt-2">
                    ❌ Failed to send email. Please try again.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* Bottom images and footer */}
        <div className="absolute bottom-0 w-full">
          <div className="maitake-box bg-limebg overflow-hidden w-full">
            <div className="container">
              <div className="w-[70%] mx-auto">
                <Image
                  width={284}
                  height={274}
                  alt="logo"
                  className="relative bottom-[-110px]"
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
                alt="footer"
                className="w-full"
                src="/footer/new-life.png"
              />
            </div>
          </div>
        </div>
      </div>
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96 text-center shadow-lg">
            <h2 className="text-3xl mb-2 text-green-600">Thank you!</h2>
            <p className="text-gray-700 mb-4">Your message has been sent successfully.</p>
            <button
              onClick={() => setShowPopup(false)}
              className="bg-green hover:bg-green-700 text-white px-4 py-2 rounded"
            >
              <p>Close</p>
            </button>
          </div>
        </div>
      )}
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Contact;
