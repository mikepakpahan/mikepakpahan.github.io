import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
// INI DIUBAH: Kita import `skillCategories` bukan `services` lagi
import { skillCategories } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import React from "react"; // Import React untuk menggunakan Fragment

const ServiceCard = ({ index, title, icon }) => (
  // Kode ServiceCard tetap sama, tidak perlu diubah
  <Tilt className="xs:w-[250px] w-full">
    <motion.div variants={fadeIn("right", "spring", index * 0.5, 0.75)} className="w-full light-gradient p-[1px] rounded-[20px] shadow-card">
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-[#F0F2F5] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-[#1A1A1A] text-[20px] font-bold text-center">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  // Kita butuh index global untuk animasi framer-motion agar tetap berurutan
  let globalSkillIndex = 0;

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview of My Journey.</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-[#6B6E70] text-[17px] max-w-3xl leading-[30px]">
        For me, technology is a canvas for innovation. I'm Mike, an Informatics Engineering student from Universitas Sumatera Utara, on a mission to paint solutions onto this digital canvas. I believe great software is born from a blend of
        precise logic and human-centric design. This is a gallery of my work so far.
      </motion.p>

      {/* INI BAGIAN UTAMA YANG DIUBAH */}
      <div className="mt-20 flex flex-wrap justify-center gap-10">
        {skillCategories.map((categoryData) => (
          // React.Fragment digunakan agar kita tidak menambah div yang tidak perlu dan merusak flexbox
          <React.Fragment key={categoryData.category}>
            {/* Judul Kategori */}
            <h3 className="w-full text-[#1A1A1A] font-bold text-[24px] mb-2">{categoryData.category}</h3>

            {/* Mapping untuk setiap skill di dalam kategori ini */}
            {categoryData.skills.map((skill) => {
              // Naikkan index global setiap kali kita render card
              const currentIndex = globalSkillIndex++;
              return <ServiceCard key={skill.title} index={currentIndex} {...skill} />;
            })}
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
