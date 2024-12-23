import React from "react";
import OurProcess from "../assets/image/ourProcess.png";
import Idea from "../assets/image/idea.png";
import Execution from "../assets/image/iexecution.png";
import Launch from "../assets/image/ilaunch.png";

const OurProcessComponent = () => {
  return (
    <section>
      <div className="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-4 mt-8 md:grid-cols-2 md:gap-8">
          <div className="flex items-center justify-center pl-20">
            <img className="w-full" src={OurProcess} alt="Our Process" />
          </div>
          <div className="flex flex-col items-center justify-left md:mt-20">
            <h3 className="text-3xl font-bold text-gray-900">
              A simple, yet <br /> effective three step <br /> process.
            </h3>
            <div className="flex gap-4 mt-5 ">
              <img
                alt="Idea"
                src={Idea}
                className="object-cover rounded-full size-16"
              />

              <div>
                <p className="mt-0.5 text-lg font-bold text-gray-900">
                  Idea Initiation
                </p>
                <p className="mt-0.5 max-w-60 text-sm font-medium text-gray-500">
                  For a start, we’ll uncover what makes you stand apart and
                  creatively position your brand and business.
                </p>
              </div>
            </div>
            <div className="flex gap-4 mt-5 ">
              <img
                alt="Execution"
                src={Execution}
                className="object-cover rounded-full size-16"
              />

              <div>
                <p className="mt-0.5 text-lg font-bold text-gray-900">
                  Execution
                </p>
                <p className="mt-0.5 max-w-60 text-sm font-medium text-gray-500">
                  To deliver exceptionally, we dig deep into a brand’s essence
                  and values, clearly understand them, then inject them into the
                  design
                </p>
              </div>
            </div>
            <div className="flex gap-4 mt-5 ">
              <img
                alt="Launch"
                src={Launch}
                className="object-cover rounded-full size-16"
              />

              <div>
                <p className="mt-0.5 text-lg font-bold text-gray-900">Launch</p>
                <p className="mt-0.5 max-w-60 text-sm font-medium text-gray-500">
                  We provide full-service solutions to help you launch, market,
                  and grow your business.
                </p>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-32 font-normal text-center">
          Wherever you are in your journey, we’d love to hear from you.
          <span className="font-bold"> Book a free call</span>
        </p>
      </div>
    </section>
  );
};

export default OurProcessComponent;
