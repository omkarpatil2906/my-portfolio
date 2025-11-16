import React from 'react'
import { motion } from 'framer-motion'
import { FaTwitter, FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

import hero from '../assets/img/PhotoRoom.png'
import heroMobile from '../assets/img/PhotoRoomMobile.png'

function Hero() {
    return (
        <div className="border-b">
            <section
                id="hero"
                className="min-h-dvh flex flex-col justify-center w-full relative overflow-hidden"
            >

                {/* DESKTOP BACKGROUND IMAGE */}
                <div
                    className="hidden md:flex absolute inset-0 bg-cover bg-right"
                    style={{ backgroundImage: `url(${hero})` }}
                ></div>

                {/* MOBILE IMAGE (TOP) */}
                <div className="md:hidden w-full flex justify-center relative overflow-hidden mt-4">

                    {/* Parent Motion Wrapper */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        className="relative w-[85%] mx-auto flex justify-center"
                    >
                        {/* Mobile Image */}
                        <img
                            src={heroMobile}
                            alt="Omkar Patil"
                            className="w-full object-contain relative z-10 -mb-6"
                        />

                        {/* Bottom Fade Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-20"></div>
                    </motion.div>
                </div>

                {/* BACKGROUND ANIMATED BLOB */}
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

                {/* CONTENT */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="
                        relative z-10 
                        text-center md:text-left 
                        px-4 md:px-12 lg:px-36 
                        mt-2 md:mt-0
                    "
                >
                    {/* NAME */}
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.9, delay: 0.2 }}
                        className="text-3xl sm:text-4xl md:text-7xl font-bold text-[#45505b] mb-1"
                    >
                        Omkar Patil
                    </motion.h1>

                    {/* SUBTITLE */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="text-base sm:text-lg md:text-2xl text-[#45505b] mb-5"
                    >
                        I'm a{" "}
                        <motion.span
                            animate={{ color: ['#0563bb', '#0452a0', '#0563bb'] }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="font-semibold"
                        >
                            Frontend Developer
                        </motion.span>
                    </motion.p>

                    {/* SOCIAL ICONS */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="flex justify-center md:justify-start gap-6"
                    >
                        {[FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, i) => (
                            <motion.a
                                key={i}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.4, delay: 0.8 + i * 0.1 }}
                                whileHover={{ scale: 1.25 }}
                                href="#"
                                className="text-[#45505b] hover:text-[#0563bb]"
                            >
                                <Icon size={22} />
                            </motion.a>
                        ))}
                    </motion.div>
                </motion.div>

            </section>
        </div>
    )
}

export default Hero
