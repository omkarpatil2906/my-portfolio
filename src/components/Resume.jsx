import React from "react";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.section
      id="resume"
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-10 lg:px-20"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative inline-block text-3xl sm:text-[32px] font-bold uppercase mb-5 pb-5 text-[#45505b]"
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
        <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base">
          Frontend Developer passionate about building modern, responsive web applications with clean,
          scalable, and optimized code using React.js and Tailwind CSS.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-[#45505b] mb-4">Summary</h3>
          <div className="border-l-2 border-[#0563bb] pl-6 relative before:content-[''] before:absolute before:w-4 before:h-4 before:rounded-full before:bg-white before:border-2 before:border-[#0563bb] before:-left-2 before:top-0 mb-10">
            <h4 className="text-[#0563bb] font-semibold text-base sm:text-lg uppercase">Omkar Patil</h4>
            <p className="italic text-gray-700 mb-2 text-sm sm:text-base">
              Frontend Developer with 1+ years of experience building responsive web apps using React.js and modern UI frameworks.
              Skilled in MUI and React Hook Form for clean component design and API integration.
            </p>
            <ul className="text-gray-700 text-xs sm:text-sm space-y-1">
              <li>Belgaum, Karnataka, India</li>
              <li>+91 7975789854</li>
              <li>ompatil2906@gmail.com</li>
            </ul>
          </div>

          <h3 className="text-xl sm:text-2xl font-semibold text-[#45505b] mb-4">Education</h3>
          <div className="border-l-2 border-[#0563bb] pl-6 space-y-8 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ x: 10 }}
              className="relative before:content-[''] before:absolute before:w-4 before:h-4 before:rounded-full before:bg-white before:border-2 before:border-[#0563bb] before:-left-[33px] before:top-0"
            >
              <h4 className="text-[#0563bb] font-semibold text-base sm:text-lg uppercase">BCA (Bachelor of Computer Applications)</h4>
              <h5 className="bg-[#f7f8f9] inline-block px-3 py-1 font-semibold text-xs sm:text-sm rounded my-2">Jun 2019 – Nov 2022</h5>
              <p className="italic text-gray-700 text-sm sm:text-base">
                KLS Gogte College of Commerce, Belgaum (Karnataka)
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ x: 10 }}
              className="relative before:content-[''] before:absolute before:w-4 before:h-4 before:rounded-full before:bg-white before:border-2 before:border-[#0563bb] before:-left-[33px] before:top-0"
            >
              <h4 className="text-[#0563bb] font-semibold text-base sm:text-lg uppercase">PUC Science</h4>
              <h5 className="bg-[#f7f8f9] inline-block px-3 py-1 font-semibold text-xs sm:text-sm rounded my-2">Jun 2016 – Mar 2018</h5>
              <p className="italic text-gray-700 text-sm sm:text-base">
                Maratha Mandal PU College, Belgaum (Karnataka)
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Column */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-[#45505b] mb-4">Professional Experience</h3>
          <div className="border-l-2 border-[#0563bb] pl-6 space-y-10 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ x: 10 }}
              className="relative before:content-[''] before:absolute before:w-4 before:h-4 before:rounded-full before:bg-white before:border-2 before:border-[#0563bb] before:-left-[33px] before:top-0"
            >
              <h4 className="text-[#0563bb] font-semibold text-base sm:text-lg uppercase">React Developer – Appystack Pvt. Ltd.</h4>
              <h5 className="bg-[#f7f8f9] inline-block px-3 py-1 font-semibold text-xs sm:text-sm rounded my-2">
                Apr 2024 – Present
              </h5>
              <p className="italic text-gray-700 text-sm sm:text-base">
                Contributed to HRMS, HIMS, and Campus Management Systems with modern React architecture and API integration.
              </p>
              <ul className="list-disc ml-6 text-gray-700 space-y-1 text-xs sm:text-sm mt-2">
                <li>Developed modules like Master KRA, Criteria, and Employee Registration Form – boosting HR efficiency by 40%.</li>
                <li>Built Fleet Master and Vehicle Registration features, automating campus transport scheduling (50% manual reduction).</li>
                <li>Created OPD EMR module for digital patient record management in healthcare (HIMS project).</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ x: 10 }}
              className="relative before:content-[''] before:absolute before:w-4 before:h-4 before:rounded-full before:bg-white before:border-2 before:border-[#0563bb] before:-left-[33px] before:top-0"
            >
              <h4 className="text-[#0563bb] font-semibold text-base sm:text-lg uppercase">Web Development Intern – CodeKul Pune</h4>
              <h5 className="bg-[#f7f8f9] inline-block px-3 py-1 font-semibold text-xs sm:text-sm rounded my-2">
                Aug 2023 – Mar 2024
              </h5>
              <p className="italic text-gray-700 text-sm sm:text-base">
                Completed corporate web development training focusing on React, Node.js, and database-driven applications.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Resume;
