import React from "react";

const AboutUsComponent = () => {
  return (
    <section>
      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 lg:px-8">
        <div className="space-y-4 md:space-y-8">
          <div className="max-w-xl">
            <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl sm:mt-10">
              Who we are.
            </h2>

            <p className="mt-4 text-gray-700">
              We love what we do and create partnerships with our clients to
              ensure their digital transformation is positioned for long-term
              success.We believe that the human dimensions essential to start
              any successful project and that this is where splendid emotional
              relationships between the company and people are born.
            </p>
          </div>

          <img
            src="https://images.unsplash.com/photo-1731690415686-e68f78e2b5bd?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="object-cover w-full mx-auto mb-5 d-block h-96"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUsComponent;
