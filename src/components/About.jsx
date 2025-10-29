import React from 'react'
import { motion } from 'framer-motion'
import { Award, BookOpen, ChevronRight, Headphones, Smile } from 'lucide-react'
import aboutImg from '../assets/img/OmkarP.webp'

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

                    <div className="flex items-center justify-center gap-8 max-w-6xl mx-auto">
                        <motion.div>
                            <img src={aboutImg} className='h-96' alt="" />
                        </motion.div>
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


                    </div>
                </motion.div>
            </section>
        </div>
    )
}

export default About
