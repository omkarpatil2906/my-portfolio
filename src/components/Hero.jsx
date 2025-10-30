import React from 'react'
import { motion } from 'framer-motion'
import { FaTwitter, FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

import hero from '../assets/img/PhotoRoom.png'

function Hero() {
    return (
        <div>
            <section
                id="hero"
                className="min-h-screen flex items-center pl-40 relative overflow-hidden"
            >
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-80"
                    style={{ backgroundImage: `url(${hero})` }}
                ></div>
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="text-center z-10 px-4"
                >
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="text-5xl md:text-7xl font-bold text-[#45505b] mb-4"
                    >
                        Omkar Patil
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="text-xl md:text-2xl text-[#45505b] mb-8"
                    >
                        I'm a <span className="text-[#0563bb] font-semibold">Frontend Developer</span>
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.9 }}
                    >
                        {[FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, i) => (
                            <motion.a
                                key={i}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.5, delay: 1.2 + i * 0.1 }}
                                whileHover={{ scale: 1.3, y: -8, rotate: 5 }}
                                href="#"
                                className="text-[#45505b] hover:text-[#0563bb] leading-0.5 transition-colors mr-6 inline-block duration-300"
                            >
                                <Icon size={16} />
                            </motion.a>
                        ))}
                    </motion.div>
                </motion.div>
            </section>
        </div>
    )
}

export default Hero
