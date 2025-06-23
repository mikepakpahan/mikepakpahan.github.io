import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => (
  <>
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right", "spring", index * 0.5, 0.75)} className="w-full light-gradient p-[1px] rounded-[20px] shadow-card">
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          // Ini diubah: Background card dari bg-tertiary (gelap) ke warna terang (misal: primaryLight atau putih)
          className="bg-[#F0F2F5] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col" // Menggunakan primaryLight
        >
          <img src={icon} alt="web-development" className="w-16 h-16 object-contain" />
          {/* Ini diubah: Teks di dalam card dari text-white ke text-dark (black-200 versi terang) */}
          <h3 className="text-[#1A1A1A] text-[20px] font-bold text-center">{title}</h3> {/* Menggunakan textDark */}
        </div>
      </motion.div>
    </Tilt>
  </>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        {/* Ini diubah: sectionSubText dari abu-abu terang ke abu-abu gelap (secondaryLight) */}
        <p className={styles.sectionSubText}>
          Introduction
          {/* Ini diubah: sectionHeadText dari putih ke warna teks gelap (textDark) */}
          <h2 className={styles.sectionHeadText}>Overwiew of My Journey</h2>
        </p>
      </motion.div>
      {/* Ini diubah: Teks paragraf dari text-secondary (gelap) ke secondaryLight (abu-abu gelap) */}
      <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-[#6B6E70] text-[17px] max-w-3xl leading-[30px]">
        I am a passionate and dedicated web developer with a strong foundation in HTML, CSS, and JavaScript. I have a keen interest in creating dynamic and responsive web applications that provide exceptional user experiences. My journey in
        web development has been fueled by a desire to learn and grow, and I am always eager to take on new challenges. I thrive in collaborative environments where I can contribute my skills and learn from others. My goal is to leverage my
        technical expertise and creativity to build innovative solutions that make a positive impact. I am excited to continue learning and contributing to the world of web development.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
