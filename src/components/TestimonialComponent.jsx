import React, { useEffect } from "react";
import ItemTestimonialComponent from "./ItemTestimonialComponent";
import { useDispatch, useSelector } from "react-redux";
import { fetchTestimonial } from "../redux/slices/TestimonialSlice";

const TestimonialComponent = () => {
  const dispatch = useDispatch();
  const { tetimonials } = useSelector((state) => state.testimonial);

  useEffect(() => {
    dispatch(fetchTestimonial());
  }, []);

  return (
    <section className="bg-white">
      <div className="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:px-8 lg:py-16">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900  sm:text-4xl sm:ps-32">
          What our clients say about us
        </h2>

        <div className="grid grid-cols-1 gap-4 mt-8 md:grid-cols-2 md:gap-8">
          {tetimonials.map((testimonial, index) => (
            <div key={index + 1}>
              <ItemTestimonialComponent testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialComponent;
