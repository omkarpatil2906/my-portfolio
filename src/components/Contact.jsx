import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import emailjs from "emailjs-com";

function Contact() {
    const isMobile = window.innerWidth < 768;

    const [loading, setLoading] = useState(false);
    const [sent, setSent] = useState(false);
    const [error, setError] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        emailjs
            .sendForm(
                "service_yk237vm",      // 👈 replace with your EmailJS service ID
                "template_4oivkms",     // 👈 replace with your template ID
                e.target,
                "ZibcPyDaqhwHQkCIJ"      // 👈 replace with your EmailJS public key
            )
            .then(
                () => {
                    setLoading(false);
                    setSent(true);
                    e.target.reset();
                },
                (err) => {
                    setLoading(false);
                    setError("Failed to send message. Please try again.");
                }
            );
    };

    return (
        <section id="contact" className="py-16 px-4 sm:px-6 lg:px-20">
            <motion.div
                initial={{ opacity: 0, y: isMobile ? 0 : 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2 }}
                className="max-w-6xl mx-auto"
            >
                {/* Title */}
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative inline-block text-3xl sm:text-[32px] font-bold uppercase mb-5 pb-5 text-[#45505b]"
                    >
                        Contact
                        <span className="absolute bottom-px left-1/2 -translate-x-1/2 block w-[120px] h-px bg-[#ddd]" />

                        <motion.span
                            initial={{ width: 0 }}
                            whileInView={{ width: "40px" }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] bg-[#0563bb]"
                        />
                    </motion.h2>
                </div>

                <div className="flex flex-col lg:flex-row gap-10">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: isMobile ? 0 : -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="bg-white p-6  w-full lg:w-[35%]"
                    >
                        <div className="space-y-10">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-[#0563bb]">
                                    <MapPin size={22} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold text-[#45505b]">Location:</h4>
                                    <p className="text-gray-600">Belgaum, Karnataka</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-[#0563bb]">
                                    <Mail size={22} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold text-[#45505b]">Email:</h4>
                                    <p className="text-gray-600">ompatil2906@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-[#0563bb]">
                                    <Phone size={22} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold text-[#45505b]">Call:</h4>
                                    <p className="text-gray-600">+91 7975789854 </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.form
                        onSubmit={sendEmail}
                        initial={{ opacity: 0, x: isMobile ? 0 : 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="bg-white p-6  w-full lg:w-[65%] space-y-4"
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                className="border border-gray-300 p-3 rounded-lg w-full"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                className="border border-gray-300 border-gray-300 p-3 rounded-lg w-full"
                                required
                            />
                        </div>

                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            className="border border-gray-300 p-3 rounded-lg w-full"
                            required
                        />

                        <textarea
                            name="message"
                            rows="5"
                            placeholder="Message"
                            className="border border-gray-300 p-3 rounded-lg w-full"
                            required
                        ></textarea>

                        {loading && (
                            <p className="text-blue-600 font-semibold">Sending message...</p>
                        )}
                        {sent && (
                            <p className="text-green-600 font-semibold">
                                Message sent successfully! Thank you.
                            </p>
                        )}
                        {error && <p className="text-red-600 font-semibold">{error}</p>}

                        <div>
                            <button
                                type="submit"
                                className="bg-[#0563bb] text-white px-6 py-3 rounded-full hover:bg-[#0678e3] transition"
                            >
                                Send Message
                            </button>
                        </div>
                    </motion.form>
                </div>
            </motion.div>
        </section>
    );
}

export default Contact;
