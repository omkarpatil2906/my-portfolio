import React from "react";
import { motion } from "framer-motion";

const Resume = () => {
  const isMobile = window.innerWidth < 1024; 

  return (
    <motion.section
      id="resume"
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-10 lg:px-20"
      initial={{ opacity: 0, y: isMobile ? 0 : 100 }} 
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* TITLE */}
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative inline-block font-montserrat text-3xl sm:text-[32px] font-bold uppercase mb-5 pb-5 text-[#45505b]"
        >
          Resume
          <span className="absolute bottom-px left-1/2 -translate-x-1/2 block w-[120px] h-px bg-[#ddd]" />
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: "40px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] bg-[#0563bb]"
          />
        </motion.h2>

        <p className="text-gray-600 max-w-3xl font-raleway mx-auto text-base sm:text-lg">
          Frontend Developer passionate about building modern, responsive web applications…
        </p>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto">
        
       
        <motion.div
          initial={{
            opacity: 0,
            x: isMobile ? 0 : -50, 
          }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-[#45505b] font-montserrat mb-4">Summary</h3>

          <div className="border-l-2 border-[#0563bb] pl-6 relative 
              before:content-[''] before:absolute before:w-4 before:h-4 before:rounded-full 
              before:bg-white before:border-2 before:border-[#0563bb] before:-left-2 before:top-0 mb-10">
            
            <h4 className="text-[#0563bb] font-belleza tracking-wider font-semibold text-base sm:text-lg uppercase">
              Omkar Patil
            </h4>

            <p className="italic text-gray-700 font-raleway mb-2 text-base sm:text-lg">
              Frontend Developer with 1+ years of experience…
            </p>

            <ul className="text-gray-700 text-xs font-raleway sm:text-sm space-y-1">
              <li>Belgaum, Karnataka, India</li>
              <li>+91 7975789854</li>
              <li>ompatil2906@gmail.com</li>
            </ul>
          </div>

          {/* EDUCATION */}
          <h3 className="text-xl sm:text-2xl font-montserrat font-semibold text-[#45505b] mb-4">Education</h3>

          <div className="border-l-2 border-[#0563bb] pl-6 space-y-8 relative">
            {[
              {
                title: "BCA (Bachelor of Computer Applications)",
                date: "Jun 2019 – Nov 2022",
                desc: "KLS Gogte College of Commerce, Belgaum (Karnataka)",
              },
              {
                title: "PUC Science",
                date: "Jun 2016 – Mar 2018",
                desc: "Maratha Mandal PU College, Belgaum (Karnataka)",
              }
            ].map((edu, i) => (
              <motion.div
                key={i}
                initial={{
                  opacity: 0,
                  y: isMobile ? 0 : 20, // ⭐ no slide on mobile
                }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="relative before:content-[''] before:absolute 
                  before:w-4 before:h-4 before:rounded-full before:bg-white before:border-2 
                  before:border-[#0563bb] before:-left-[33px] before:top-0"
              >
                <h4 className="text-[#0563bb] font-belleza tracking-wider font-semibold text-base sm:text-lg uppercase">
                  {edu.title}
                </h4>
                <h5 className="bg-[#f7f8f9] font-raleway inline-block px-3 py-1 font-semibold text-xs sm:text-sm rounded my-2">
                  {edu.date}
                </h5>
                <p className="italic text-gray-700 font-raleway text-base sm:text-lg">{edu.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT COLUMN */}
        <motion.div
          initial={{
            opacity: 0,
            x: isMobile ? 0 : 50, // ⭐ no slide on mobile
          }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-xl sm:text-2xl font-montserrat font-semibold text-[#45505b] mb-4">Professional Experience</h3>

          <div className="border-l-2 border-[#0563bb] pl-6 space-y-10 relative">
            {[
              {
                title: "React Developer – Appystack Pvt. Ltd.",
                date: "Apr 2024 – Present",
                desc: "Contributed to HRMS, HIMS, and Campus Management Systems…",
                list: [
                  "Developed HR modules improving efficiency by 40%",
                  "Built Fleet Master for automated transport scheduling",
                  "Created OPD EMR module for digital patient records"
                ]
              },
              {
                title: "Web Development Intern – CodeKul Pune",
                date: "Aug 2023 – Mar 2024",
                desc: "Completed corporate training in React, Node.js…",
              }
            ].map((exp, i) => (
              <motion.div
                key={i}
                initial={{
                  opacity: 0,
                  y: isMobile ? 0 : 20, // ⭐ no slide on mobile
                }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 * i }}
                className="relative before:content-[''] before:absolute 
                  before:w-4 before:h-4 before:rounded-full before:bg-white before:border-2 
                  before:border-[#0563bb] before:-left-[33px] before:top-0"
              >
                <h4 className="text-[#0563bb] font-belleza tracking-wider font-semibold text-base sm:text-lg uppercase">
                  {exp.title}
                </h4>

                <h5 className="bg-[#f7f8f9] inline-block px-3 py-1 font-raleway font-semibold text-xs sm:text-sm rounded my-2">
                  {exp.date}
                </h5>

                <p className="italic text-gray-700 text-sm font-raleway sm:text-base">{exp.desc}</p>

                {exp.list && (
                  <ul className="list-disc ml-6 text-gray-700 font-raleway space-y-1 text-xs sm:text-sm mt-2">
                    {exp.list.map((li, j) => <li key={j}>{li}</li>)}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
};

export default Resume;
