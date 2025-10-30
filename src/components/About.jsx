import React from 'react'
import { motion } from 'framer-motion'
import { Award, BookOpen, ChevronRight, Headphones, Smile } from 'lucide-react'
import aboutImg from '../assets/img/OmkarP.webp'

function About() {
    return (
        <div>
            <section id="about" className="py-20 px-4 md:px-20">
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.2 }}
                >
                    <div className="text-center mb-12">
                        <motion.h2
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative inline-block text-[32px] font-bold uppercase mb-5 pb-5 text-[#45505b]"
                        >
                            About

                            {/* Gray underline (static) */}
                            <span className="absolute bottom-px left-1/2 -translate-x-1/2 block w-[120px] h-px bg-[#ddd]" />

                            {/* Blue underline (animated) */}
                            <motion.span
                                initial={{ width: 0 }}
                                whileInView={{ width: "40px" }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] bg-[#0563bb]"
                            />
                        </motion.h2>

                        <p className="mx-auto max-w-6xl text-justify text-gray-600  leading-relaxed">
                            Hello! I'm <span className="font-semibold text-[#0563bb]">Omkar Patil</span>, a passionate Frontend Developer from Belgaum, Karnataka.
                            I specialize in crafting beautiful, responsive, and high-performing web applications using
                            <span className="font-medium"> React.js, Tailwind CSS, and modern JavaScript frameworks.</span>
                            My goal is to create seamless digital experiences that are not only functional but also visually engaging.
                        </p>
                    </div>

                    <div className="flex  justify-center gap-x-6 max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className='w-[40%]'
                        >
                            <img src={aboutImg} className=' h-96 w-full object-cover' alt="" />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="space-y-6 w-[60%] text-gray-700"
                        >
                            <h3 className="text-2xl font-bold text-[#45505b]">
                                Frontend Developer
                            </h3>

                            <p className="italic text-gray-600">
                                I focus on building modern, responsive UIs with clean code and smooth animations.
                                Every project I work on reflects my dedication to detail and design precision.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { label: 'Name', value: 'Omkar Patil' },
                                    { label: 'City', value: 'Belgaum, Karnataka' },
                                    { label: 'Email', value: 'omkarpatil.dev@gmail.com' },
                                    { label: 'Freelance', value: 'Available' },
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8, delay: 0.5 + i * 0.1 }}
                                        className="flex items-start gap-2"
                                    >
                                        <ChevronRight className="text-[#0563bb] mt-1 shrink-0" size={16} />
                                        <div><strong>{item.label}:</strong> {item.value}</div>
                                    </motion.div>
                                ))}
                            </div>

                            <p className="text-gray-600  leading-relaxed">
                                I enjoy working on projects that challenge my creativity and technical skills.
                                Whether it’s creating pixel-perfect designs or implementing complex UI logic,
                                I love bringing ideas to life on the web.
                            </p>
                        </motion.div>


                    </div>
                </motion.div>
            </section>
        </div>
    )
}

export default About
