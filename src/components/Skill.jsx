import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML5", level: 100 },
  { name: "CSS3", level: 95 },
  { name: "JavaScript", level: 85 },
  { name: "Tailwind CSS", level: 90 },
  { name: "Material UI (MUI)", level: 85 },
  { name: "React Hook Form", level: 80 },
  { name: "React.js", level: 90 },
  { name: "Node.js", level: 70 },
  { name: "SQL", level: 75 },
];

const Skill = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-[#0d1117] px-4 md:px-20">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
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
          className="relative inline-block text-[32px] font-bold uppercase mb-5 pb-5 text-[#45505b] dark:text-white"
        >
          Skills
          {/* Gray line */}
          <span className="absolute bottom-px left-1/2 -translate-x-1/2 block w-[120px] h-px bg-[#ddd]" />
          {/* Blue line animation */}
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: "40px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] bg-[#0563bb]"
          />
        </motion.h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          As a Frontend Developer passionate about crafting seamless, responsive, and
          modern user interfaces, I’ve honed my expertise across a range of technologies.
        </p>
      </motion.div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
          >
            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                  {skill.name}
                </span>
                <span className="text-sm font-medium text-[#0563bb]">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="h-3 bg-[#0563bb] rounded-full"
                ></motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skill;
