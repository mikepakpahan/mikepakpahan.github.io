import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        // Ini diubah: Background card dari bg-tertiary (ungu gelap) ke warna terang (primaryLight)
        className="bg-[#F0F2F5] p-5 rounded-2xl sm:w-[360px] w-full shadow-lg" // Menggunakan primaryLight, ditambah shadow biar ada depth
      >
        <div className="relative w-full h-[230px]">
          <img src={image} alt="project_image" className="w-full h-full object-cover rounded-2xl" />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            {/* Ini diubah: Background tombol GitHub dari black-gradient ke warna terang (misalnya putih atau abu-abu muda) */}
            {/* Kita pakai warna putih bersih, dan tambahin border biar keliatan jelas */}
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="bg-black w-10 h-10 rounded-full flex justify-center items-center cursor-pointer border border-[#6B6E70]" // Menggunakan putih, ditambah border secondaryLight
            >
              {/* Ini diubah: Icon GitHub, kalau aslinya putih perlu diganti icon gelap atau invert warna di CSS */}
              <img src={github} alt="source code" className="w-1/2 h-1/2 object-contain" />
            </div>
          </div>
        </div>

        <div className="mt-5">
          {/* Ini diubah: Judul project dari text-white ke warna gelap (textDark) */}
          <h3 className="text-[#1A1A1A] font-bold text-[24px]">{name}</h3> {/* Menggunakan textDark */}
          {/* Ini diubah: Deskripsi project dari text-secondary ke warna abu-abu gelap (secondaryLight) */}
          <p className="mt-2 text-[#6B6E70] text-[14px]">{description}</p> {/* Menggunakan secondaryLight */}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            // Ini diubah: Warna tag, pastikan `tag.color` di `constants.js` juga udah disesuaikan untuk light mode
            // Kalau `tag.color` itu kelas Tailwind yang kamu custom (misal `blue-text-gradient`),
            // kamu perlu definisikan ulang warna gradiennya untuk light mode.
            // Jika `tag.color` langsung berisi `text-blue-500` dll., mungkin sudah aman.
            <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        {/* Ini aman, karena styles.sectionSubText dan styles.sectionHeadText sudah diubah di styles.js */}
        <p className={`${styles.sectionSubText} text-center`}>My Works</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Projects</h2>
      </motion.div>

      <div className="w-full flex">
        {/* Ini diubah: Teks paragraf pendahuluan dari text-secondary ke warna abu-abu gelap (secondaryLight) */}
        <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-3 text-[#6B6E70] text-[17px] max-w-3xl leading-[30px]">
          {" "}
          {/* Menggunakan secondaryLight */}
          Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex
          problems, work with different technologies, and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};
export default SectionWrapper(Works, "");
