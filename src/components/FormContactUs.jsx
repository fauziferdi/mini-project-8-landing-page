import React from "react";
import { useDispatch, useSelector } from "react-redux";
import useForm from "../assets/hooks/useForm";
import { addContact } from "../redux/slices/ContactSlice";
import Swal from "sweetalert2";
import sideImageContact from "../assets/image/sideImageContact.png";

const FormContactUs = () => {
  const dispatch = useDispatch();
  const { contact, loading, error } = useSelector((state) => state.contact);
  const { form, handleChange, setForm } = useForm({
    name: "",
    email: "",
    website: "",
    message: "",
  });

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log("Form data:", form);
      await dispatch(addContact(form));

      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Your message has been sent.",
      });
      setForm({
        name: "",
        email: "",
        website: "",
        message: "",
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong! Please try again later.",
      });
      console.error("Error submitting contact:", error);
    }
  };

  return (
    <>
      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 mx-10 mt-10 lg:grid-cols-2 lg:gap-8">
          <div className="flex items-center justify-center">
            <img className="w-2/3" src={sideImageContact} alt="" />
          </div>
          <div className="">
            <h1 className="my-5 font-sans text-2xl font-extrabold text-right">
              We'd love to hear <br /> from you
            </h1>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Name*"
                className="w-full my-2 border-gray-400 shadow-sm sm:text-sm"
                required
              />
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email*"
                className="w-full my-2 border-gray-400 shadow-sm sm:text-sm"
                required
              />
              <input
                type="text"
                id="website"
                name="website"
                value={form.website}
                onChange={handleChange}
                placeholder="Website url*"
                className="w-full my-2 border-gray-400 shadow-sm sm:text-sm"
                required
              />
              <textarea
                type="text"
                rows="4"
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="message Detail*"
                className="w-full my-2 border-gray-400 shadow-sm sm:text-sm"
                required
              />
              <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-black rounded hover:bg-gray-800 sm:text-sm"
              >
                Send Proposal
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormContactUs;
