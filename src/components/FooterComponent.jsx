import React from "react";
import { FaFacebookF, FaGooglePlusG, FaTwitter } from "react-icons/fa6";

const FooterComponent = () => {
  return (
    <>
      <footer class="bg-black mt-16">
        <div class="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
          <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <div class="flex justify-center text-white sm:justify-start">
                <img src="../Logo.svg" alt="" />
              </div>

              <p class="mt-6 max-w-md text-center leading-relaxed text-white sm:max-w-xs sm:text-left">
                Dsgnr. is an award winning creative and design agency based in
                New York, USA.
              </p>

              <div className="flex w-72 justify-center items-center mt-8 border border-primary p-2 sm:justify-start ">
                <img
                  className="ml-2 w-4"
                  src="../sms-notification.svg"
                  alt=""
                />
                <p className="ml-16 text-white"> info@dsgnr.com</p>
              </div>
            </div>

            <div class="grid grid-cols-1 gap-8 sm:grid-cols-2  md:grid-cols-4 lg:col-span-2">
              <div class="text-center sm:text-left"></div>

              <div class="text-center sm:text-left">
                <p class="text-lg font-medium text-white">What We Do</p>

                <ul class="mt-8 space-y-4 text-sm">
                  <li>
                    <a
                      class="text-white transition hover:text-white/75"
                      href="#"
                    >
                      Web Development
                    </a>
                  </li>

                  <li>
                    <a
                      class="text-white transition hover:text-white/75"
                      href="#"
                    >
                      Web Design
                    </a>
                  </li>

                  <li>
                    <a
                      class="text-white transition hover:text-white/75"
                      href="#"
                    >
                      Marketing
                    </a>
                  </li>

                  <li>
                    <a
                      class="text-white transition hover:text-white/75"
                      href="#"
                    >
                      Google Ads
                    </a>
                  </li>
                </ul>
              </div>

              <div class="text-center sm:text-left">
                <p class="text-lg font-medium text-white">Who We Are</p>

                <ul class="mt-8 space-y-4 text-sm">
                  <li>
                    <a
                      class="text-white transition hover:text-white/75"
                      href="#"
                    >
                      About
                    </a>
                  </li>

                  <li>
                    <a
                      class="text-white transition hover:text-white/75"
                      href="#"
                    >
                      News
                    </a>
                  </li>

                  <li>
                    <a
                      class="text-white transition hover:text-white/75"
                      href="#"
                    >
                      Testimonials
                    </a>
                  </li>
                </ul>
              </div>

              <div class="text-center sm:text-left"></div>
            </div>
          </div>

          <div class="mt-12  pt-6">
            <div class="text-center sm:flex sm:justify-between sm:text-left">
              <div class="pb-10 text-xl ">
                <ul class=" flex justify-center gap-6 sm:justify-start md:gap-8">
                  <li>
                    <a
                      href="#"
                      rel="noreferrer"
                      target="_blank"
                      class="text-white transition hover:text-white/75"
                    >
                      <FaTwitter />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      rel="noreferrer"
                      target="_blank"
                      class="text-white transition hover:text-white/75"
                    >
                      <FaFacebookF />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      rel="noreferrer"
                      target="_blank"
                      class="text-white transition hover:text-white/75"
                    >
                      <FaGooglePlusG />
                    </a>
                  </li>
                </ul>
              </div>

              <p class="mt-4 text-sm text-white sm:order-first sm:mt-0">
                &copy; 2022 Company Name
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterComponent;
