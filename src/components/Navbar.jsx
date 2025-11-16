import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Briefcase, FileText, Home, Mail, Menu, Server, User, X } from 'lucide-react';

function Navbar() {
    const [open, setOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth < 1024;
            setIsMobile(mobile);

            if (!mobile) {
                setOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isMobile && open && !event.target.closest('nav') && !event.target.closest('button')) {
                setOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [open, isMobile]);

    const navItems = [
        { id: 'hero', icon: Home, label: 'Home' },
        { id: 'about', icon: User, label: 'About' },
        { id: 'resume', icon: FileText, label: 'Resume' },
        { id: 'portfolio', icon: Briefcase, label: 'Portfolio' },
        { id: 'services', icon: Server, label: 'Services' },
        { id: 'contact', icon: Mail, label: 'Contact' }
    ];

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }

        if (isMobile) {
            setOpen(false);
        }
    };

    return (
        <>

            <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                onClick={() => setOpen(!open)}
                className='lg:hidden fixed top-4 right-4 z-50 bg-gradient-to-r from-[#0563BB] to-[#0452a0] text-white p-3 rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all'
            >
                <motion.div
                    animate={{ rotate: open ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {open ? <X size={24} /> : <Menu size={24} />}
                </motion.div>
            </motion.button>

            <AnimatePresence>
                {isMobile && open && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setOpen(false)}
                        className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden backdrop-blur-sm"
                    />
                )}
            </AnimatePresence>

            <motion.nav
                initial={false}
                animate={{
                    x: isMobile ? (open ? 0 : -300) : 0
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="fixed top-0 left-0 h-full bg-white border-r border-gray-200 z-40 p-4 lg:w-24 w-72 shadow-2xl lg:shadow-none overflow-y-auto"
            >
                <div className="flex flex-col justify-center h-full gap-3">
                    {navItems.map((item, index) => (
                        <motion.button
                            key={item.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.05, x: 5 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => scrollToSection(item.id)}
                            className="flex items-center lg:justify-center gap-3 p-3 rounded-2xl transition-all duration-300 bg-gray-100 text-gray-600 hover:bg-[#0563BB] hover:text-white hover:shadow-lg group"
                        >
                            <motion.div
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.5 }}
                            >
                                <item.icon size={20} />
                            </motion.div>
                            <span className="lg:hidden font-medium">{item.label}</span>
                        </motion.button>
                    ))}
                </div>
            </motion.nav>
        </>
    );
}

export default Navbar;