import React from "react";
import { motion } from "framer-motion";
import { Plus, Link } from "lucide-react";

import FusionPhotoFilms from "../assets/img/FusionPhotoFilms.jpg";
import ResortManagment from "../assets/img/Resort.avif";
import OpHealth from "../assets/img/HealthCare.avif";
import SellerList from "../assets/img/SellerList.jpg";
import lifoFy from "../assets/img/lifoFy.png";

const portfolioItems = [
    { id: 1, title: "Fusion Photo Films", img: FusionPhotoFilms },
    { id: 2, title: "Resort Management System", img: ResortManagment },
    { id: 3, title: "OP Healthcare Website", img: OpHealth },
    { id: 4, title: "Seller List", img: SellerList },
    { id: 5, title: "LifoFy Tech Portfolio", img: lifoFy },
];

const Portfolio = () => {
    const isMobile = window.innerWidth < 1024;

    return (
        <section id="portfolio" className="py-16">
            <div className="max-w-7xl mx-auto px-4">

                {/* ================= TITLE ================= */}
                <div className="text-center mb-10">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative inline-block font-montserrat text-3xl sm:text-[32px] font-bold uppercase mb-5 pb-5 text-[#45505b]"
                    >
                        Portfolio
                        <span className="absolute bottom-px left-1/2 -translate-x-1/2 block w-[120px] h-px bg-[#ddd]" />
                        <motion.span
                            initial={{ width: 0 }}
                            whileInView={{ width: "40px" }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] bg-[#0563bb]"
                        />
                    </motion.h2>

                    <p className="text-gray-600 font-raleway max-w-2xl text-base sm:text-lg text-justify mx-auto">
                        Explore the latest projects I’ve built — websites, systems and design work.
                    </p>
                </div>

                {/* ================= GRID ================= */}
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                    {portfolioItems.map((item, i) => (
                        <motion.div
                            key={item.id}
                            className="inline-block w-full mb-6 relative"

                            /* ⭐ Mobile = fade only | Desktop = slide */
                            initial={{
                                opacity: 0,
                                y: isMobile ? 0 : 40,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: 0.6,
                                delay: isMobile ? 0 : i * 0.15,
                            }}
                        >
                            <div
                                className={`
                  relative overflow-hidden rounded-lg cursor-pointer
                  ${!isMobile ? "group" : ""}
                `}
                            >
                                {/* IMAGE */}
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className={`
                    w-full rounded-lg transition-transform duration-300
                    ${!isMobile ? "group-hover:scale-110" : ""}
                  `}
                                />

                                {/* OVERLAY (desktop only) */}
                                {!isMobile && (
                                    <>
                                        <div className="absolute inset-0 bg-white/70 opacity-0 group-hover:opacity-100 transition duration-300" />

                                        <div className="absolute inset-0 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition duration-300">
                                            <h4 className="text-xl font-belleza tracking-wider font-semibold text-gray-700">
                                                {item.title}
                                            </h4>

                                            <div className="flex mt-3 space-x-4">
                                                <a
                                                    href={item.img}
                                                    className="text-gray-700 text-3xl hover:text-[#0563bb] transition"
                                                >
                                                    <Plus />
                                                </a>
                                                <a
                                                    href="#"
                                                    className="text-gray-700 text-3xl hover:text-[#0563bb] transition"
                                                >
                                                    <Link />
                                                </a>
                                            </div>
                                        </div>

                                        {/* CORNER BORDERS */}
                                        <span className="absolute top-3 left-3 w-12 h-12 border-l-2 border-t-2 border-gray-300 transition-all duration-500 group-hover:top-2 group-hover:left-2" />
                                        <span className="absolute bottom-3 right-3 w-12 h-12 border-r-2 border-b-2 border-gray-300 transition-all duration-500 group-hover:bottom-2 group-hover:right-2" />
                                    </>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Portfolio;
