import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          {/* Ini diubah: Lingkaran bullet dari ungu gelap ke ungu terang (tertiaryLight) */}
          <div className="w-5 h-5 rounded-full bg-[#6A5ACD]" /> {/* Menggunakan warna tertiaryLight */}
          {/* Ini diubah: Gradient line dari violet-gradient (gelap) ke violet-gradient-light (atau warna terang lainnya) */}
          {/* Kamu mungkin perlu definisikan 'violet-gradient-light' di CSS atau Tailwind config */}
          {/* Untuk sementara, kita pakai warna solid yang mendekati ungu terang */}
          <div className="w-1 sm:h-80 h-40 bg-[#915eff]" /> {/* Menggunakan warna ungu yang lebih terang, atau bisa dibuat gradient sendiri */}
        </div>

        <div>
          {/* Ini diubah: Teks utama dari putih ke warna teks gelap (textDark) */}
          <h1 className={`${styles.heroHeadText} text-[#1A1A1A]`}>
            {" "}
            {/* Menggunakan warna textDark (black-200 versi terang) */}
            Hi, I'm <span className="text-[#6A5ACD]">Mike</span> {/* Warna Mike tetap ungu terang (tertiaryLight) biar nge-pop */}
          </h1>
          {/* Ini diubah: Subteks dari putih-100 ke warna abu-abu gelap (secondaryLight) */}
          <p className={`${styles.heroSubText} mt-2 text-[#6B6E70]`}>
            {" "}
            {/* Menggunakan warna secondaryLight */}
            I develop 3D visuals, user <br className="sm:block hidden" />
            interfaces and web applications
          </p>
        </div>
      </div>
      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-[#6B6E70] flex justify-center items-start p-2">
            {" "}
            {/* Border dari secondary (gelap) ke secondaryLight (terang) */}
            {/* Ini diubah: Dot di dalam lingkaran scroll dari secondary (gelap) ke secondaryLight (terang) */}
            <motion.div animate={{ y: [0, 24, 0] }} transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }} className="w-3 h-3 rounded-full bg-[#FFFFFF] mb-1"></motion.div> {/* Menggunakan warna secondaryLight */}
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
