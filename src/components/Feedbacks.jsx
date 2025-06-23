import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({ index, testimonial, name, designation, company, image }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    // Ini diubah: Background card testimoni dari bg-black-200 ke warna terang (primaryLight atau putih)
    className="bg-[#F0F2F5] p-10 rounded-3xl xs:w-[320px] w-full shadow-lg" // Menggunakan primaryLight, ditambah shadow
  >
    {/* Ini diubah: Tanda kutip dari text-white ke warna yang kontras, bisa ungu (tertiaryLight) atau abu-abu gelap (secondaryLight) */}
    <p className="text-[#6A5ACD] font-black text-[48px]">"</p> {/* Menggunakan tertiaryLight */}
    <div className="mt-1">
      {/* Ini diubah: Teks testimoni dari text-white ke warna gelap (textDark) */}
      <p className="text-[#1A1A1A] tracking-wider text-[18px]">{testimonial}</p> {/* Menggunakan textDark */}
      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          {/* Ini diubah: Nama dari text-white ke warna gelap (textDark) */}
          <p className="text-[#1A1A1A] font-medium text-[16px]">
            {" "}
            {/* Menggunakan textDark */}
            {/* Ini diubah: Simbol @ dari blue-text-gradient ke warna ungu (tertiaryLight) */}
            <span className="text-[#6A5ACD]">@</span> {name} {/* Menggunakan tertiaryLight */}
          </p>
          {/* Ini diubah: Jabatan & Perusahaan dari text-secondary ke warna abu-abu gelap (secondaryLight) */}
          <p className="mt-1 text-[#6B6E70] text-[12px]">
            {" "}
            {/* Menggunakan secondaryLight */}
            {designation} of {company}
          </p>
        </div>

        {/* Gambar profil user, pastikan kontras dengan background terang */}
        <img src={image} alt={`feedback_by-${name}`} className="w-10 h-10 rounded-full object-cover" />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    // Ini diubah: Container utama dari bg-black-100 ke warna terang (misal, background kosong atau primaryLight)
    // Kalau mau ada sedikit background beda, bisa pakai primaryLight. Jika tidak, hapus saja `bg-black-100` atau ganti ke `bg-white`.
    // Aku sarankan pakai primaryLight untuk memberi 'base' warna di belakang card.
    <div className={`mt-12 bg-[#F0F2F5] rounded-[20px]`}>
      {" "}
      {/* Menggunakan primaryLight */}
      {/* Ini diubah: Header container dari bg-tertiary ke warna terang (misal primaryLight atau putih) */}
      <div className={`bg-white rounded-2xl ${styles.padding} min-h-[300px] shadow-lg`}>
        {" "}
        {/* Menggunakan putih bersih, ditambah shadow */}
        <motion.div variants={textVariant()}>
          {/* Ini aman, karena styles.sectionSubText dan styles.sectionHeadText sudah diubah di styles.js */}
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
