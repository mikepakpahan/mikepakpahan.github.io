import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_ftzaslx",
        "template_oz696bn",
        {
          from_name: form.name,
          to_name: "Mike",
          from_email: form.email,
          to_email: "michael.babtista1407@mail.com",
          message: form.message,
        },
        "WnnYHVlddUOGnJiUK"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        // ➡️ PERUBAHAN DI SINI:
        // Dari bg-[#F0F2F5] (primaryLight) menjadi bg-white (putih bersih)
        // Ditambah border dan warna border agar ada pemisah yang jelas
        className="flex-[0.75] bg-white p-8 rounded-2xl shadow-xl border border-[#D1D5DB]" // Background putih, border abu-abu terang, shadow lebih kuat
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <label className="flex flex-col">
            <span className="text-[#1A1A1A] font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-[#F0F2F5] py-4 px-6 placeholder:text-[#6B6E70] text-[#1A1A1A] rounded-lg outline-none border border-transparent focus:border-[#6A5ACD] font-medium transition-colors duration-200" // Input field bg primaryLight, focus border ungu
            />
          </label>
          <label className="flex flex-col">
            <span className="text-[#1A1A1A] font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className="bg-[#F0F2F5] py-4 px-6 placeholder:text-[#6B6E70] text-[#1A1A1A] rounded-lg outline-none border border-transparent focus:border-[#6A5ACD] font-medium transition-colors duration-200"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-[#1A1A1A] font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="bg-[#F0F2F5] py-4 px-6 placeholder:text-[#6B6E70] text-[#1A1A1A] rounded-lg outline-none border border-transparent focus:border-[#6A5ACD] font-medium transition-colors duration-200"
            />
          </label>

          <button
            type="submit"
            className="bg-[#6A5ACD] py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-[#8A2BE2] hover:bg-[#8A2BE2] transition-colors duration-200" // Tambah hover effect
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div variants={slideIn("right", "tween", 0.2, 1)} className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
