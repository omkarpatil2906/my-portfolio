import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Facebook, FileText, Home, Instagram, Linkedin, Mail, Menu, Server, Twitter, User, X } from 'lucide-react';

function Hero() {
    return (
        <div>
            <section
                id="hero"
                className="min-h-screen flex items-center justify-center relative overflow-hidden"
            >
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDAsIDAsIDAsIDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
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
                        className="text-5xl md:text-7xl font-bold text-gray-800 mb-4"
                    >
                        Omkar Patil
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="text-xl md:text-2xl text-gray-600 mb-8"
                    >
                        I'm a <span className="text-blue-600 font-semibold">Frontend Developer</span>
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.9 }}
                        className="flex gap-4 justify-center"
                    >
                        {[Twitter, Facebook, Instagram, Linkedin].map((Icon, i) => (
                            <motion.a
                                key={i}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.5, delay: 1.2 + i * 0.1 }}
                                whileHover={{ scale: 1.3, y: -8, rotate: 5 }}
                                href="#"
                                className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                            >
                                <Icon size={24} />
                            </motion.a>
                        ))}
                    </motion.div>
                </motion.div>
            </section>
        </div>
    )
}

export default Hero
