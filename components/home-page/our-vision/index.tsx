import { useState, useEffect, useRef } from 'react'
import Image from "next/image"
import { Lightbulb, Users, Globe, Briefcase, ArrowRight } from 'lucide-react'
import { motion, useAnimation, useInView } from 'framer-motion'
import Link from 'next/link'

export default function AboutSection() {
    const controls = useAnimation()
    const ref = useRef(null)
    const inView = useInView(ref, { once: false, amount: 0.3 })

    useEffect(() => {
        if (inView) {
            controls.start("visible")
        } else {
            controls.start("hidden")
        }
    }, [controls, inView])

    const fadeIn = {
        hidden: { opacity: 0, y: 50 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    }

    const staggerChildren = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    return (
        <section ref={ref} className="bg-gradient-to-b from-white to-blue-50 py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    className="text-5xl font-bold text-[#007BB8] text-center mb-20"
                    initial="hidden"
                    animate={controls}
                    variants={fadeIn}
                >
                    Our Vision
                </motion.h2>
                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <motion.div
                        className="bg-white rounded-lg p-8 shadow-xl h-[585px]"
                        initial="hidden"
                        animate={controls}
                        variants={fadeIn}
                    >
                        <motion.div 
                            className="flex items-center mb-6"
                            variants={fadeIn}
                        >
                            <Lightbulb className="h-12 w-12 text-[#007BB8] mr-4" />
                            <h3 className="text-3xl font-semibold text-[#007BB8]">Our Goals</h3>
                        </motion.div>
                        <motion.p 
                            className="text-gray-700 mb-8 leading-relaxed"
                            variants={fadeIn}
                        >
                            We are passionate about delivering ethical, professional, and efficient
                            recruitment services. Our goal is to match Irish businesses with talented
                            global employees, while streamlining the entire hiring and immigration process.
                            We aim to grow alongside our clients by continuously expanding our services
                            to meet evolving workforce demands.
                        </motion.p>
                        <motion.div 
                            className="grid grid-cols-2 gap-6"
                            variants={staggerChildren}
                        >
                            {[
                                { Icon: Users, text: "Expert Team" },
                                { Icon: Globe, text: "Global Reach" },
                                { Icon: Briefcase, text: "Tailored Solutions" },
                                { Icon: Lightbulb, text: "Innovative Approach" }
                            ].map(({ Icon, text }, index) => (
                                <motion.div key={index} className="flex items-center" variants={fadeIn}>
                                    <Icon className="h-8 w-8 text-[#007BB8] mr-3" />
                                    <span className="text-gray-700">{text}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        animate={controls}
                        variants={fadeIn}
                    >
                        <Image
                            src="/our-vision.jpg"
                            alt="About Us"
                            className="w-full h-auto rounded-lg shadow-2xl"
                            width={600}
                            height={400}
                        />
                    </motion.div>
                </div>
            </div>

            <motion.div 
                className="text-center mt-20"
                initial="hidden"
                animate={controls}
                variants={fadeIn}
            >
                <Link href="/services" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#0095DA] hover:bg-[#007BB8] transition-all duration-300 hover:scale-105">
                    Learn more about our services
                    <ArrowRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
                </Link>
            </motion.div>
        </section>
    )
}