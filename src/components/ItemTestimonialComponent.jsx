import React from "react";

const ItemTestimonialComponent = ({ testimonial }) => {
  return (
    <blockquote className="p-6 rounded-lg shadow-sm sm:p-8">
      <div className="flex items-start gap-4">
        <img className="w-7" src="fa-quote-left.svg" alt="" />
        <p className="text-gray-700 ">{testimonial.message}</p>
      </div>

      <div className="flex items-center gap-4 mt-5 ps-10">
        <img
          alt={testimonial.name}
          src={testimonial.foto_profile}
          className="object-cover rounded-full size-14"
        />

        <div>
          <p className="mt-0.5 text-lg font-bold text-gray-900">
            {testimonial.name}
          </p>
          <p className="mt-0.5 text-sm font-medium text-gray-500">
            {testimonial.title}
          </p>
        </div>
      </div>
    </blockquote>
  );
};
export default ItemTestimonialComponent;
