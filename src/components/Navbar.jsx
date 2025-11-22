import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Briefcase,
    FileText,
    Home,
    Mail,
    Menu,
    Server,
    User,
    X,
} from "lucide-react";

function Navbar() {
    const [open, setOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
    const [hovered, setHovered] = useState(null);
    const [active, setActive] = useState("hero");

    useEffect(() => {
        document.body.style.overflow = open && isMobile ? "hidden" : "auto";
    }, [open, isMobile]);

    useEffect(() => {
        const onResize = () => {
            const mobile = window.innerWidth < 1024;
            setIsMobile(mobile);
            if (!mobile) setOpen(false);
        };
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    const navItems = [
        { id: "hero", icon: Home, label: "Home" },
        { id: "about", icon: User, label: "About" },
        { id: "resume", icon: FileText, label: "Resume" },
        { id: "portfolio", icon: Briefcase, label: "Portfolio" },
        { id: "services", icon: Server, label: "Services" },
        { id: "contact", icon: Mail, label: "Contact" },
    ];

    const scrollToSection = (id) => {
        setActive(id);
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
        if (isMobile) setOpen(false);
    };

    return (
        <>
            {/* MOBILE MENU BUTTON */}
            <button
                onClick={() => setOpen(!open)}
                className="lg:hidden fixed top-4 right-4 z-50 bg-[#0563BB] text-white p-3 rounded-full shadow-lg"
            >
                {open ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* MOBILE OVERLAY */}
            {isMobile && open && (
                <div
                    className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
                    onClick={() => setOpen(false)}
                />
            )}

            <AnimatePresence>
                {(open || !isMobile) && (
                    <motion.nav
                        initial={isMobile ? { x: "-100%" } : {}}
                        animate={{ x: 0 }}
                        exit={isMobile ? { x: "-100%" } : {}}
                        transition={{ type: "spring", stiffness: 130, damping: 22 }}
                        className="fixed top-0 left-0 h-screen bg-transparent z-50 
                       w-64 lg:w-24 flex flex-col justify-center gap-4 p-4"
                    >
                        {navItems.map((item) => (
                            <div
                                key={item.id}
                                className="relative cursor-pointer"
                                onMouseEnter={() => !isMobile && setHovered(item.id)}
                                onMouseLeave={() => !isMobile && setHovered(null)}
                                onClick={() => scrollToSection(item.id)}
                            >
                                {/* DESKTOP MODE */}
                                {!isMobile && (
                                    <div className="relative flex items-center">

                                        {/* BLUE LABEL — AUTO FIT WIDTH */}
                                        <AnimatePresence>
                                            {hovered === item.id && (
                                                <motion.div
                                                    initial={{ scaleX: 0, opacity: 0 }}
                                                    animate={{ scaleX: 1, opacity: 1 }}
                                                    exit={{ scaleX: 0, opacity: 0 }}
                                                    transition={{ duration: 0.25, ease: "easeOut" }}
                                                    className="absolute left-0 origin-left h-16 bg-[#0563BB] rounded-full
                                     flex items-center overflow-hidden shadow-lg"
                                                    style={{
                                                        zIndex: 5,
                                                        paddingLeft: 76,
                                                        paddingRight: 20,
                                                    }}
                                                >
                                                    <span className="text-white font-medium whitespace-nowrap">
                                                        {item.label}
                                                    </span>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>

                                        {/* ICON — SAME SIZE ALWAYS + SHAKE ANIMATION */}
                                        <motion.div
                                            whileHover={{
                                                rotate: 360,
                                                transition: { duration: 0.5 },
                                            }}
                                            className={`flex items-center justify-center z-10 transition-all rounded-full duration-200
                      ${hovered === item.id
                                                    ? "bg-[#0563BB] text-white"
                                                    : "bg-gray-200 text-gray-700"
                                                }`}
                                            style={{
                                                width: 64,
                                                height: 64,
                                                // borderRadius: "50%", // SAME ALWAYS
                                                boxShadow:
                                                    hovered === item.id
                                                        ? "0 6px 18px rgba(5,99,187,0.25)"
                                                        : "none",
                                            }}
                                        >
                                            <item.icon size={22} />
                                        </motion.div>
                                    </div>
                                )}

                                {/* MOBILE MODE */}
                                {isMobile && (
                                    <div
                                        className={`w-full h-14 flex items-center gap-4 px-6 rounded-full ${active === item.id
                                            ? "bg-[#0563BB] text-white shadow-md"
                                            : "bg-gray-100 text-gray-700"
                                            }`}
                                    >
                                        <item.icon size={20} />
                                        <span className="font-medium">{item.label}</span>
                                    </div>
                                )}
                            </div>
                        ))}
                    </motion.nav>
                )}
            </AnimatePresence>
        </>
    );
}

export default Navbar;
