import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Layout from '@/components/custom/layout'
import { motion } from 'framer-motion'
import { Briefcase, FileText, Plane, Home } from 'lucide-react'
import Link from 'next/link'

const icons = {
  Briefcase,
  FileText,
  Plane,
  Home
}

const iconRotate = {
  initial: {
    rotate: 0
  },
  animate: {
    rotate: [0, 360, 360],
    transition: {
      times: [0, 0.02, 1],
      duration: 0.5,
      repeat: Infinity,
      ease: ["easeInOut", "linear", "linear"],
      repeatType: "loop",
      delay: 1
    }
  }
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export default function ServiceDetail() {
  const router = useRouter()
  const { slug } = router.query
  const [service, setService] = useState(null)

  useEffect(() => {
    if (typeof window !== 'undefined' && slug) {
      const storedService = localStorage.getItem('selectedService')
      if (storedService) {
        const parsedService = JSON.parse(storedService)
        if (parsedService.id === slug) {
          setService(parsedService)
        } else {
          router.push('/services')
        }
      } else {
        router.push('/services')
      }
    }
  }, [slug, router])

  if (!service) {
    return (
      <Layout>
        <div className="flex items-center justify-center h-screen">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-[#007BB8] mb-4">Loading...</h1>
            <p className="text-gray-600">If this takes too long, please return to the services page.</p>
            <Link href="/services" className="mt-4 inline-block text-[#007BB8] hover:underline">
              Back to Services
            </Link>
          </div>
        </div>
      </Layout>
    )
  }

  const Icon = icons[service.icon] || Briefcase

  return (
    <Layout>
      <div className="bg-white"><div className="max-w-3xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          className="flex items-center" // Add flex and center items
        >
          <motion.div
            className="w-16 h-16"
            animate="animate"
            variants={iconRotate}
          >
            <Icon className="h-16 w-16 text-[#007BB8] mb-6" />
          </motion.div>
          <h1 className="text-3xl font-extrabold text-[#007BB8] sm:text-4xl ml-4"> {/* Add margin-left for spacing */}
            {service.title}
          </h1>
        </motion.div>

        <p className="mt-6 text-xl text-gray-600 text-left">
          {service.description}
        </p>

        {/* The rest of your code remains unchanged */}
        <motion.div
          className="mt-12"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <h2 className="text-2xl font-bold text-[#007BB8] mb-6 relative">
            Why Choose Our {service.title}?
          </h2>
          <div className="relative pl-6">
            <div className="absolute left-0 top-0 w-1 h-full bg-[#007BB8] rounded-full opacity-20"></div>
            <ul className="space-y-4">
              {[
                "Experienced team of professionals",
                "Tailored solutions for your business needs",
                "Efficient and timely service",
                "Comprehensive support throughout the process"
              ].map((item, index) => (
                <li
                  key={index}
                  className="relative pl-8 text-gray-600 leading-relaxed flex items-start group"
                >
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 bg-white border-2 border-[#007BB8] rounded-full flex items-center justify-center text-sm text-[#007BB8] font-medium group-hover:bg-[#007BB8] group-hover:text-white transition-all duration-300">
                    {index + 1}
                  </span>
                  <span className="hover:text-[#007BB8] transition-colors duration-300">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
        <motion.div
          className="mt-12"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <h2 className="text-2xl font-bold text-[#007BB8] mb-6 relative">
            Our Process
          </h2>
          <div className="relative pl-6">
            <div className="absolute left-0 top-0 w-1 h-full bg-[#007BB8] rounded-full opacity-20"></div>
            <ol className="space-y-4">
              {[
                "Initial consultation to understand your requirements",
                "Customized strategy development",
                "Implementation and execution",
                "Ongoing support and follow-up"
              ].map((item, index) => (
                <li
                  key={index}
                  className="relative pl-8 text-gray-600 leading-relaxed flex items-start group"
                >
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 bg-white border-2 border-[#007BB8] rounded-full flex items-center justify-center text-sm text-[#007BB8] font-medium group-hover:bg-[#007BB8] group-hover:text-white transition-all duration-300">
                    {index + 1}
                  </span>
                  <span className="hover:text-[#007BB8] transition-colors duration-300">
                    {item}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </motion.div>
        <motion.div
          className="mt-12 text-center"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#007BB8] hover:bg-[#005A8C] transition-colors duration-300"
            onClick={() => router.push('/contact-us')}
          >
            Schedule a Consultation
          </motion.button>
        </motion.div>
      </div>

      </div>
    </Layout>
  )
}