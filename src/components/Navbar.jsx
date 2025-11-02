import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
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
                className='lg:hidden fixed top-4 right-4 z-50 bg-blue-600 text-white p-2 rounded-full shadow-lg'
            >
                {open ? <X size={24} /> : <Menu size={24} />}
            </motion.button>

          
            {isMobile && open && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setOpen(false)}
                    className="fixed inset-0 bg-white bg-opacity-50 z-30 lg:hidden"
                />
            )}

          
            <motion.nav
                initial={false}
                animate={{
                    x: isMobile ? (open ? 0 : -300) : 0
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="fixed top-0 left-0 h-full bg-white border-r border-gray-200 z-40 p-4 lg:w-24 w-72 shadow-lg lg:shadow-none"
            >
                <div className="flex flex-col justify-center h-full gap-2">
                    {navItems.map((item, index) => (
                        <motion.button
                            key={item.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => scrollToSection(item.id)}
                            className="flex items-center lg:justify-center gap-3 p-3 rounded-full transition-all bg-gray-100 text-gray-600 hover:bg-[#0563BB] hover:text-white"
                        >
                            <item.icon size={20} />
                            <span className="lg:hidden">{item.label}</span>
                        </motion.button>
                    ))}
                </div>
            </motion.nav>
        </>
    );
}

export default Navbar;