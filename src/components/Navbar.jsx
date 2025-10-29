import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Briefcase, FileText, Home, Mail, Menu, Server, User, X } from 'lucide-react';

function Navbar() {
    const [open, setOpen] = useState(false);

    const navItems = [
        { id: 'hero', icon: Home, label: 'Home' },
        { id: 'about', icon: User, label: 'About' },
        { id: 'resume', icon: FileText, label: 'Resume' },
        { id: 'portfolio', icon: Briefcase, label: 'Portfolio' },
        { id: 'services', icon: Server, label: 'Services' },
        { id: 'contact', icon: Mail, label: 'Contact' }
    ]

    const handleNavClick = (id) => {

    }

    return (
        <>
            <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                // transition={{ duration: 1 }}
                onClick={() => setOpen(!open)}
                className='lg:hidden fixed right-4 z-50 bg-blue-500 text-white p-2 rounded-full'
            >
                {open ? <X size={24} /> : <Menu size={24} />}
            </motion.button>

            <motion.nav
                initial={{ x: -300 }}
                animate={{ x: open || window.innerWidth >= 1024 ? 0 : -300 }}
                className="fixed top-0 left-0 h-full  z-40 p-4  shadow-lg lg:shadow-none"

            >
                <div className="flex flex-col  justify-center h-full gap-2">
                    {navItems.map((item) => (
                        <motion.button
                            key={item.id}
                            whileHover={{ scale: 1.05, width: '100%' }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => scrollToSection(item.id)}
                            className={`flex justify-center items-center gap-3 p-5 rounded-full transition-all ${item.id
                                ? 'bg-[#0563BB] text-white'
                                : 'bg-gray-100 text-gray-600 hover:bg-[#0563BB] hover:text-white'
                                }`}
                        >
                            <item.icon size={15} />
                            {/* <span className="lg:hidden">{item.label}</span> */}
                        </motion.button>
                    ))}
                </div>
            </motion.nav>

        </>
    )
}

export default Navbar
