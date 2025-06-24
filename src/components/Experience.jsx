import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css"; // Perlu dicatat, file CSS ini juga mungkin perlu dimodif manual

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        // ➡️ PERUBAHAN UTAMA: Background card dari primaryLight ke PUTIH BERSIH
        background: "#FFFFFF", // Menggunakan PUTIH BERSIH
        color: "#1A1A1A", // Menggunakan textDark
        // ➡️ PENAMBAHAN: Shadow dan Border untuk membedakan dari background section
        boxShadow: "0px 10px 15px -3px rgba(0, 0, 0, 0.1)", // Shadow tipis
        border: "1px solid #E5E7EB", // Border abu-abu sangat muda
      }}
      contentArrowStyle={{
        // Warna panah diubah juga agar sesuai dengan background card yang putih
        // Kalau background card putih, panah abu-abu gelap (#6B6E70) udah pas, atau bisa disamakan dengan border card
        borderRight: "7px solid #6B6E70", // Menggunakan secondaryLight
      }}
      date={experience.date}
      iconStyle={{
        background: experience.iconBg, // Pastikan experience.iconBg di constants.js udah diupdate
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img src={experience.icon} alt={experience.company_name} className="w-[60%] h-[60%] object-contain" />
        </div>
      }
    >
      <div>
        <h3 className="text-[#1A1A1A] text-[24px] font-bold">{experience.title}</h3>
        <p className="text-[#6B6E70] text-[16px] font-semibold" style={{ margin: 0 }}>
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li key={`experience-point-${index}`} className="text-[#6B6E70] text-[14px] pl-1 tracking-wider">
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>What I have done so far</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Work Experience.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={`experience-${index}`} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "experience");
