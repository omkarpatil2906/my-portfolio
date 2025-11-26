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

    // DISABLE SCROLL WHEN MOBILE NAV OPEN
    useEffect(() => {
        document.body.style.overflow = open && isMobile ? "hidden" : "auto";
    }, [open, isMobile]);

    // DETECT SCREEN RESIZE
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
        { id: "contact", icon: Mail, label: "Contact" },
    ];

    useEffect(() => {
    const onScroll = () => {
        const scrollPosition = window.scrollY;

        let currentSection = "hero"; // default = HOME section

        navItems.forEach(item => {
            const el = document.getElementById(item.id);
            if (!el) return;

            const offsetTop = el.offsetTop - 200; // adjust sensitivity

            if (scrollPosition >= offsetTop) {
                currentSection = item.id;
            }
        });

        setActive(currentSection);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
}, []);


    const scrollToSection = (id) => {
        setActive(id);
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
        if (isMobile) setOpen(false);
    };

    return (
        <>
            {/* MOBILE MENU */}
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
                        className="fixed top-0 left-0 h-screen bg-white lg:bg-transparent z-50 
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

                                        {/* TEXT LABEL */}
                                        <AnimatePresence>
                                            {hovered === item.id && (
                                                <motion.div
                                                    initial={{ scaleX: 0, opacity: 0 }}
                                                    animate={{ scaleX: 1, opacity: 1 }}
                                                    exit={{ scaleX: 0, opacity: 0 }}
                                                    transition={{ duration: 0.25 }}
                                                    className="absolute left-0 origin-left h-14 bg-[#0563BB] rounded-full
                                                    flex items-center overflow-hidden shadow-lg"
                                                    style={{
                                                        zIndex: 5,
                                                        paddingLeft: 70,
                                                        paddingRight: 18,
                                                    }}
                                                >
                                                    <span className="text-white font-raleway font-medium whitespace-nowrap">
                                                        {item.label}
                                                    </span>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>

                                        {/* ICON + ACTIVE + HOVER COLOR */}
                                        <motion.div
                                            whileHover={{
                                                rotate: 360,
                                                transition: { duration: 0.5 },
                                            }}
                                            className={`flex items-center justify-center z-10 transition-all duration-200 rounded-full
                                                ${
                                                    active === item.id || hovered === item.id
                                                        ? "bg-[#0563BB] text-white"
                                                        : "bg-gray-200 text-gray-700"
                                                }`}
                                            style={{
                                                width: 56,
                                                height: 56,
                                                borderRadius: "50%",
                                                boxShadow:
                                                    active === item.id || hovered === item.id
                                                        ? "0 6px 16px rgba(5,99,187,0.25)"
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
                                        className={`w-full h-14 flex items-center gap-4 px-6 rounded-full 
                                            ${
                                                active === item.id
                                                    ? "bg-[#0563BB] text-white shadow-md"
                                                    : "bg-gray-100 text-gray-700"
                                            }`}
                                    >
                                        <item.icon size={20} />
                                        <span className="font-medium font-belleza">{item.label}</span>
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
