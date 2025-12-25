import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FaTwitter, FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

import hero from '../assets/img/PhotoRoom.png'
import heroMobile from '../assets/img/PhotoRoomMobile.png'

function Hero() {
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const roles = [
        "React.js Developer",
        "Frontend Developer",
        "Full-Stack Web Developer",
        "MERN Stack Developer",
    ];


    const typingSpeed = 90;
    const deletingSpeed = 50;
    const delayBetween = 1200;

    useEffect(() => {
        const current = roles[index];
        let timer;

        if (!isDeleting) {
            timer = setTimeout(() => {
                setText(current.substring(0, text.length + 1));
                if (text === current) {
                    setTimeout(() => setIsDeleting(true), delayBetween);
                }
            }, typingSpeed);
        } else {
            timer = setTimeout(() => {
                setText(current.substring(0, text.length - 1));
                if (text === "") {
                    setIsDeleting(false);
                    setIndex((prev) => (prev + 1) % roles.length);
                }
            }, deletingSpeed);
        }

        return () => clearTimeout(timer);
    }, [text, isDeleting, index]);


    return (

        <section
            id="hero"
            className="min-h-dvh flex flex-col justify-center w-full relative overflow-hidden"
        >
            {/* DESKTOP IMAGE USING IMG TAG WITH RIGHT-TO-LEFT ANIMATION */}
            <motion.img
                src={hero}
                alt="Omkar Patil"
                initial={{ x: 200, opacity: 0, scale: 1.05 }}   // start right side
                animate={{ x: 0, opacity: 1, scale: 1 }}        // slide into place
                transition={{
                    duration: 1.4,
                    ease: [0.25, 0.1, 0.25, 1],  // smooth cubic animation
                }}
                className=" hidden md:block  absolute inset-0  w-full h-full  object-right object-contain z-0 "
            />
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-white to-transparent z-20"></div>



            {/* MOBILE IMAGE USING IMG TAG */}
            <div className="md:hidden w-full flex justify-center relative overflow-hidden mt-4">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    className="relative w-[85%] mx-auto flex justify-center"
                >
                    <img
                        src={heroMobile}
                        alt="Omkar Patil"
                        className="w-full object-contain relative z-10 -mb-6"
                    />

                    {/* Fade bottom */}
                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-white to-transparent z-20"></div>
                </motion.div>
            </div>

            {/* BACKGROUND ANIMATED SHAPE */}
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
                    className="
                            absolute -top-20 -right-20 
                            w-64 md:w-96 h-64 md:h-96 
                            bg-blue-100 rounded-full 
                            opacity-20 blur-3xl
                        "
                />
            </div>

            {/* CONTENT */}
            <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="
                        relative z-20 
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
                    className="text-3xl font-montserrat sm:text-4xl md:text-7xl font-bold text-[#45505b] mb-1"
                >
                    Omkar Patil
                </motion.h1>

                {/* SUBTITLE */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="text-base sm:text-lg md:text-2xl font-raleway text-[#45505b] mb-5 flex items-center justify-center md:justify-start"
                >
                    I'm a&nbsp;
                    <motion.span
                        className="font-semibold  text-[#0563bb] whitespace-nowrap border-r-2 border-blue-600 pr-1 animate-cursor"
                    >
                        {text}
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

    )
}

export default Hero
