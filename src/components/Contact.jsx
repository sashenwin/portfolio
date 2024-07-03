import { useState } from "react";
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";

const Contact = () => {
  const [status, setStatus] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus("");

    const formData = new FormData(event.target);
    formData.append("access_key", "b41d1e68-6830-4392-a53e-63757827822c");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });
      const result = await res.json();

      if (result.success) {
        setStatus("Your message has been sent successfully!");
      } else {
        setStatus("Failed to send your message. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting the form", error);
      setStatus("An error occurred. Please try again later.");
    }
  };

  return (
    <section className="body-font relative border-gray-200 border-b border-gray-200 pb-40 lg:mb-35">
      <div className="container mx-auto px-5">
        <div className="mb-12 flex w-full flex-col text-center">
          <h1 className="my-20 text-center text-5xl font-semibold text-sky-700">
            Get in Touch
          </h1>
          <p className="mx-auto text-base leading-relaxed lg:w-2/3 text-gray-500">
            Feel free to reach out to me! Whether you have a question, feedback,
            or a collaboration proposal, I&apos;d love to hear from you.
          </p>
        </div>

        <div className="mx-auto md:w-2/3 lg:w-1/2">
          <form onSubmit={onSubmit}>
            <div className="-m-2 flex flex-wrap">
              <div className="w-1/2 p-2">
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="peer w-full rounded border border-gray-600 bg-gray-200 bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-sky-500 focus:bg-gray-800 focus:ring-2 focus:ring-sky-900"
                    placeholder="Name"
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-sky-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 font-medium peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-sky-500"
                  >
                    Name
                  </label>
                </div>
              </div>
              <div className="w-1/2 p-2">
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="peer w-full rounded border border-gray-600 bg-gray-200 bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-sky-500 focus:bg-gray-800 focus:ring-2 focus:ring-sky-900"
                    placeholder="Email"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-sky-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 font-medium peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-sky-500"
                  >
                    Email
                  </label>
                </div>
              </div>
              <div className="mt-4 w-full p-2">
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    required
                    className="peer w-full rounded border border-gray-600 bg-gray-200 bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-sky-500 focus:bg-gray-800 focus:ring-2 focus:ring-sky-900"
                    placeholder="Message"
                  ></textarea>
                  <label
                    htmlFor="message"
                    className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-sky-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 font-medium peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-sky-500"
                  >
                    Message
                  </label>
                </div>
              </div>
              <div className="w-full p-2">
                <button
                  type="submit"
                  className="mx-auto flex rounded border-0 bg-sky-600 py-2 px-8 text-lg text-white hover:bg-sky-700 focus:outline-none"
                >
                  Send Message
                </button>
              </div>
              <div className="w-full p-2 text-center">
                {status && (
                  <p className="mt-4 text-sm text-indigo-400">{status}</p>
                )}
              </div>
            </div>
          </form>

          <div className="mt-8 w-full border-t border-gray-200 p-2 pt-8 text-center">
            <a className="text-sky-500">work.sashen@gmail.com</a>
            <p className="my-5 leading-normal text-gray-500">
              Colombo 05 <br />
              Sri Lanka
            </p>
            <span className="inline-flex space-x-2 text-gray-700">
            <a
            href="https://www.linkedin.com/in/sashenw/"
            className="cursor-pointer"
          >
            <FaLinkedin />
          </a>
          <a href="https://github.com/sashenwin" className="cursor-pointer">
            <FaGithub />
          </a>
          <a
            href="https://www.facebook.com/SashenWindsor/"
            className="cursor-pointer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/sashe.n/"
            className="cursor-pointer"
          >
            <FaInstagram />
          </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
