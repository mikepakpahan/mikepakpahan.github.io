import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#6A5ACD]" />
          <div className="w-1 sm:h-80 h-40 bg-[#915eff]" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-[#1A1A1A]`}>
            {" "}
            Hi, I'm <span className="text-[#6A5ACD]">Mike</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-[#6B6E70]`}>
            {" "}
            Building web experiences
            <br className="sm:block hidden" />
            that are anything but flat.
          </p>
        </div>
      </div>
      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-[#6B6E70] flex justify-center items-start p-2">
            {" "}
            <motion.div animate={{ y: [0, 24, 0] }} transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }} className="w-3 h-3 rounded-full bg-[#FFFFFF] mb-1"></motion.div> {/* Menggunakan warna secondaryLight */}
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
