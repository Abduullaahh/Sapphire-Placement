import { useEffect, useRef } from 'react'
import Image from "next/image"
import { Lightbulb, Users, Globe, Briefcase } from 'lucide-react'
import { motion, useAnimation, useInView } from 'framer-motion'

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
    <section ref={ref} className="bg-gradient-to-t from-white to-blue-50 py-24" id="about-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-5xl font-bold text-[#007BB8] text-center mb-20"
          initial="hidden"
          animate={controls}
          variants={fadeIn}
        >
          About Us
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={fadeIn}
          >
            <Image 
              src="/about-us.jpg" 
              alt="About Us" 
              className="w-full h-auto rounded-lg shadow-2xl" 
              width={600} 
              height={400} 
            />
          </motion.div>
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
              <h3 className="text-3xl font-semibold text-[#007BB8]">Our Mission</h3>
            </motion.div>
            <motion.p 
              className="text-gray-700 mb-8 leading-relaxed"
              variants={fadeIn}
            >
              We are a Dublin-based recruitment agency specializing in helping businesses 
              across Ireland recruit skilled and general workers from Non-EU countries. 
              With a focus on ethical recruitment, our team navigates work permits and 
              visa processes efficiently, allowing companies to focus on their core business. 
              Whether you're looking to fill critical roles or large workforce requirements, 
              we've got the experience to help you succeed.
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
        </div>
      </div>
    </section>
  )
}