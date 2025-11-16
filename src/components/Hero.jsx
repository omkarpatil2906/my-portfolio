import React from 'react'
import { motion } from 'framer-motion'
import { FaTwitter, FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

import hero from '../assets/img/PhotoRoom.png'
import heroMobile from '../assets/img/PhotoRoomMobile.png'


function Hero() {
    return (
        <div className='border-b'>
            <section
                id="hero"
                className="min-h-screen w-full flex items-center relative overflow-hidden"
            >
                {/* Desktop Background */}
                <div
                    className="hidden md:flex absolute inset-0 bg-cover bg-right "
                    style={{ backgroundImage: `url(${hero})` }}
                ></div>

                {/* Mobile Background */}
                <div className="md:hidden absolute h-full inset-0 flex items-center justify-end pr-4">
                    <motion.img
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 0.15, x: 0 }}
                        transition={{ duration: 1.2 }}
                        src={heroMobile}
                        alt="Omkar Patil"
                        className="h-[70vh] w-auto object-cover"
                    />
                </div>

                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            rotate: [0, 180, 360],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="absolute -top-20 -right-20 w-64 md:w-96 h-64 md:h-96 bg-blue-100 rounded-full opacity-20 blur-3xl"
                    />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="text-center z-10 px-4 w-full"
                >
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="text-4xl sm:text-5xl md:text-7xl font-bold text-[#45505b] mb-4"
                    >
                        Omkar Patil
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="text-lg sm:text-xl md:text-2xl text-[#45505b] mb-8"
                    >
                        I'm a <motion.span 
                            animate={{ 
                                color: ['#0563bb', '#0452a0', '#0563bb']
                            }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="font-semibold"
                        >
                            Frontend Developer
                        </motion.span>
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.9 }}
                        className="flex justify-center gap-4 sm:gap-6"
                    >
                        {[FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, i) => (
                            <motion.a
                                key={i}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.5, delay: 1.2 + i * 0.1 }}
                                whileHover={{ scale: 1.3, y: -8, rotate: 360 }}
                                href="#"
                                className="text-[#45505b] hover:text-[#0563bb] transition-colors duration-300"
                            >
                                <Icon size={20} className="sm:w-6 sm:h-6" />
                            </motion.a>
                        ))}
                    </motion.div>
                </motion.div>
            </section>
        </div>
    )
}

export default Hero
