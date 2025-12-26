import React from 'react'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import aboutImg from '../assets/img/OmkarP.png'

function About() {

    const isMobile = window.innerWidth < 768; // Detect mobile screen

    return (
        <div>
            <section
                id="about"
                className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-10 lg:px-20"
            >

                {/* MAIN WRAPPER ANIMATION */}
                <motion.div
                    initial={{ opacity: 0, y: isMobile ? 0 : 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.2 }}
                >

                    {/* TITLE */}
                    <div className="text-center mb-12">
                        <motion.h2
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative font-montserrat inline-block text-3xl sm:text-[32px] font-bold uppercase mb-5 pb-5 text-[#45505b]"
                        >
                            About

                            <span className="absolute bottom-px left-1/2 -translate-x-1/2 block w-[120px] h-px bg-[#ddd]" />

                            <motion.span
                                initial={{ width: 0 }}
                                whileInView={{ width: "40px" }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] bg-[#0563bb]"
                            />
                        </motion.h2>

                        {/* INTRO PARAGRAPH */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="mx-auto font-raleway max-w-7xl text-justify text-base sm:text-lg text-gray-600 leading-relaxed"
                        >
                            Hello! I'm <span className=" text-transparent bg-linear-to-r font-poppins font-bold from-blue-600 to-purple-600 bg-clip-text">Omkar Patil</span>, a passionate Frontend Developer from
                            Belgaum, Karnataka. I specialize in creating beautiful, responsive, and high-performing
                            web applications using <span className="font-semibold">React.js, Tailwind CSS, and modern JavaScript.</span> I also work with backend technologies including <span className="font-semibold ">Node.js, Express.js, and SQL databases.</span>
                   
                        </motion.p>
                    </div>

                    {/* ABOUT CONTENT */}
                    <div className="flex flex-col lg:flex-row justify-center gap-6 lg:gap-x-6 max-w-6xl mx-auto">

                        {/* LEFT IMAGE with FADE BOTTOM */}
                        <motion.div
                            initial={{ opacity: 0, x: isMobile ? 0 : -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="w-full lg:w-[40%]"
                        >
                            <motion.div 
                                whileHover={{ scale: 1.02 }} 
                                className="relative rounded-2xl overflow-hidden"
                            >
                                <img
                                    src={aboutImg}
                                    className="h-64 sm:h-80 lg:h-96 w-full object-cover"
                                    alt="Omkar Patil"
                                />

                                {/* WHITE FADE GRADIENT */}
                                <div
                                    className="absolute bottom-0 left-0 w-full h-24
                                               bg-linear-to-t from-white/95 via-white/70 to-transparent"
                                ></div>
                            </motion.div>
                        </motion.div>

                        {/* RIGHT CONTENT */}
                        <motion.div
                            initial={{ opacity: 0, x: isMobile ? 0 : 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className=" w-full  pt-8 lg:w-[60%] text-gray-700"
                        >

                            <h3 className="text-xl  font-montserrat sm:text-2xl font-bold text-[#45505b]">
                                Full-Stack Developer
                            </h3>

                            <p className="italic font-raleway pt-1 text-gray-600 text-base sm:text-lg">
                                I build clean, modern, and responsive user interfaces with smooth animations and
                                pixel-perfect precision.
                            </p>

                            {/* INFO GRID */}
                            <div className="grid grid-cols-1 pt-4 font-raleway sm:grid-cols-2 gap-3 sm:gap-4">
                                {[
                                    { label: 'Name', value: 'Omkar Patil' },
                                    { label: 'City', value: 'Belgaum, Karnataka' },
                                    { label: 'Email', value: 'ompatil2906@gmail.com' },
                                    { label: 'Freelance', value: 'Available' },
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: isMobile ? 0 : -30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8, delay: 0.5 + i * 0.1 }}
                                        whileHover={{ x: 5 }}
                                        className="flex items-start gap-2 text-base sm:text-lg"
                                    >
                                        <ChevronRight className="text-[#0563bb] mt-1 shrink-0" size={16} />
                                        <div><strong>{item.label}:</strong> {item.value}</div>
                                    </motion.div>
                                ))}
                            </div>

                            <p className="text-gray-600 pt-4 font-raleway leading-relaxed text-base sm:text-lg">
                                I enjoy taking on challenges that push my creativity and technical limits. I love
                                turning ideas into beautiful, functional websites.
                            </p>
                        </motion.div>
                    </div>

                </motion.div>
            </section>
        </div>
    )
}

export default About
