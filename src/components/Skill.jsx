import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML5", level: 100 },
  { name: "CSS3", level: 95 },
  { name: "JavaScript", level: 85 },
  { name: "Tailwind CSS", level: 90 },
  { name: "React.js", level: 90 },
  { name: "React Hook Form", level: 80 },
  { name: "Material UI (MUI)", level: 85 },
  { name: "Node.js", level: 55 },
  { name: "Express.js", level: 60 },  
  { name: "SQL", level: 50 },
];

const Skill = () => {
  const isMobile = window.innerWidth < 768; // ⭐ Mobile detection

  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-10 lg:px-20">

      {/* TITLE SECTION */}
      <motion.div
        initial={{ opacity: 0, y: isMobile ? 0 : 100 }}   // ⭐ no slide on mobile
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        className="text-center mb-12"
      >
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative inline-block text-3xl font-montserrat sm:text-[32px] font-bold uppercase mb-5 pb-5 text-[#45505b]"
        >
          Skills
          <span className="absolute bottom-px left-1/2 -translate-x-1/2 block w-[120px] h-px bg-[#ddd]" />
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: "40px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] bg-[#0563bb]"
          />
        </motion.h2>

        <p className="text-gray-600 font-raleway text-justify sm:text-center max-w-3xl mx-auto text-base sm:text-lg">
          As a Frontend Developer passionate about crafting seamless, responsive, and
          modern user interfaces, I’ve honed my expertise across a range of technologies.
        </p>
      </motion.div>

      {/* SKILLS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 font-raleway gap-6 sm:gap-8 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              x: isMobile ? 0 : index % 2 === 0 ? -100 : 100,  // ⭐ no left/right slide on mobile
            }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >

            {/* LABEL + PERCENT */}
            <div className="flex justify-between mb-2 sm:mb-3">
              <span className="text-base sm:text-lg font-medium text-gray-800">
                {skill.name}
              </span>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="text-base sm:text-lg font-medium text-[#0563bb]"
              >
                {skill.level}%
              </motion.span>
            </div>

            {/* PROGRESS BAR */}
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 + index * 0.1 }}
                className="h-3 bg-[#0563bb] rounded-full relative overflow-hidden"
              >
                {/* Shine animation */}
                <motion.div
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-linear-to-r from-transparent via-white to-transparent opacity-30"
                />
              </motion.div>
            </div>

          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skill;
