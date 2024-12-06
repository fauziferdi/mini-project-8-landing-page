import React from "react";
import { FaFacebookF, FaGooglePlusG, FaTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Logo from "../assets/image/Logo.svg";
import SmsNotification from "../assets/image/sms-notification.svg";

const FooterComponent = () => {
  return (
    <>
      <footer className="mt-16 bg-black">
        <div className="max-w-screen-xl px-4 pt-16 pb-6 mx-auto sm:px-6 lg:px-8 lg:pt-24">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <div className="flex justify-center text-white sm:justify-start">
                <img src={Logo} alt="" />
              </div>

              <p className="max-w-md mt-6 leading-relaxed text-center text-white sm:max-w-xs sm:text-left">
                Dsgnr. is an award winning creative and design agency based in
                New York, USA.
              </p>

              <div className="flex items-center justify-center p-2 mt-8 border w-72 border-primary sm:justify-start ">
                <img className="w-4 ml-2" src={SmsNotification} alt="" />
                <p className="ml-16 text-white"> info@dsgnr.com</p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
              <div className="text-center sm:text-left"></div>

              <div className="text-center sm:text-left">
                <p className="text-lg font-medium text-white">What We Do</p>

                <ul className="mt-8 space-y-4 text-sm">
                  <li>
                    <Link
                      className="text-white transition hover:text-white/75"
                      to="#"
                    >
                      Web Development
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-white transition hover:text-white/75"
                      to="#"
                    >
                      Web Design
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-white transition hover:text-white/75"
                      to="#"
                    >
                      Marketing
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-white transition hover:text-white/75"
                      to="#"
                    >
                      Google Ads
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="text-center sm:text-left">
                <p className="text-lg font-medium text-white">Who We Are</p>

                <ul className="mt-8 space-y-4 text-sm">
                  <li>
                    <Link
                      className="text-white transition hover:text-white/75"
                      to="/about"
                    >
                      About
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-white transition hover:text-white/75"
                      to="/blog"
                    >
                      News
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-white transition hover:text-white/75"
                      to="/our-works"
                    >
                      Testimonials
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="text-center sm:text-left"></div>
            </div>
          </div>

          <div className="pt-6 mt-12">
            <div className="text-center sm:flex sm:justify-between sm:text-left">
              <div className="pb-10 text-xl ">
                <ul className="flex justify-center gap-6 sm:justify-start md:gap-8">
                  <li>
                    <Link
                      to="#"
                      rel="noreferrer"
                      target="_blank"
                      className="text-white transition hover:text-white/75"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      rel="noreferrer"
                      target="_blank"
                      className="text-white transition hover:text-white/75"
                    >
                      Terms
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="pb-10 text-xl ">
                <ul className="flex justify-center gap-6 sm:justify-start md:gap-8">
                  <li>
                    <Link
                      to="#"
                      rel="noreferrer"
                      target="_blank"
                      className="text-white transition hover:text-white/75"
                    >
                      <FaTwitter />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      rel="noreferrer"
                      target="_blank"
                      className="text-white transition hover:text-white/75"
                    >
                      <FaFacebookF />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      rel="noreferrer"
                      target="_blank"
                      className="text-white transition hover:text-white/75"
                    >
                      <FaGooglePlusG />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterComponent;
