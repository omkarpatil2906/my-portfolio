import React from 'react'
import { motion } from 'framer-motion'
import { Award, BookOpen, ChevronRight, Headphones, Smile } from 'lucide-react'

function About() {
    return (
        <div>
            <section id="about" className="py-20 px-4 md:px-20">
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.2 }}
                >
                    <div className="text-center mb-12">
                        <motion.h2
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl font-bold text-gray-800 mb-4 relative inline-block"
                        >
                            About
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: '80px' }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.5 }}
                                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-blue-600"
                            ></motion.div>
                        </motion.h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="space-y-4"
                        >
                            <h3 className="text-2xl font-bold text-gray-700">UI/UX Designer & Web Developer</h3>
                            <div className="grid grid-cols-1 gap-4">
                                {[
                                    { label: 'Birthday', value: '1 May 1995' },
                                    { label: 'Phone', value: '+123 456 7890' },
                                    { label: 'City', value: 'New York, USA' },
                                    { label: 'Email', value: 'email@example.com' }
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8, delay: 0.5 + i * 0.1 }}
                                        className="flex items-start gap-2"
                                    >
                                        <ChevronRight className="text-blue-600 mt-1 shrink-0" size={16} />
                                        <div><strong>{item.label}:</strong> {item.value}</div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="grid grid-cols-2 gap-8"
                        >
                            {[
                                { icon: Smile, count: 232, label: 'Happy Clients' },
                                { icon: BookOpen, count: 521, label: 'Projects' },
                                { icon: Headphones, count: 1463, label: 'Hours Of Support' },
                                { icon: Award, count: 25, label: 'Awards' }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.5, y: 50 }}
                                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.6 + i * 0.15 }}
                                    whileHover={{ scale: 1.1, y: -10 }}
                                    className="bg-white p-6 rounded-lg shadow-lg text-center"
                                >
                                    <item.icon className="mx-auto mb-2 text-blue-600" size={32} />
                                    <div className="text-3xl font-bold text-gray-800">{item.count}</div>
                                    <div className="text-sm text-gray-600">{item.label}</div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </section>
        </div>
    )
}

export default About
