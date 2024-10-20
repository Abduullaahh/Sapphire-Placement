import Layout from '@/components/custom/layout'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Briefcase, FileText, Plane, Home } from 'lucide-react'
import { useRouter } from 'next/router'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const services = [
  {
    id: 'recruitment-services',
    title: 'Recruitment Services',
    description: 'We offer recruitment services for both skilled and general workforce categories at competitive rates. Whether you need highly skilled professionals or general labor, we can match you with the right talent.',
    icon: Briefcase
  },
  {
    id: 'work-permit-application',
    title: 'Work Permit Application',
    description: 'Our experts handle the entire work permit application process, ensuring compliance with all Irish immigration regulations.',
    icon: FileText
  },
  {
    id: 'visa-application-support',
    title: 'Visa Application Support',
    description: 'We provide visa application assistance for workers to make their transition to Ireland as seamless as possible.',
    icon: Plane
  },
  {
    id: 'additional-support',
    title: 'Additional Support',
    description: 'We also offer help in finding accommodation for employees moving to Ireland, making the relocation process easier for everyone involved.',
    icon: Home
  }
]

export default function Services() {
  const router = useRouter()

  const handleServiceClick = (service) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('selectedService', JSON.stringify(service))
      router.push(`/services/${service.id}`)
    }
  }

  return (
    <Layout>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial="initial"
            animate="animate"
            variants={fadeInUp}
          >
            <h1 className="text-5xl text-left font-light text-[#007BB8] sm:text-4xl">
              Our Services
            </h1>
            <div className="mt-4 relative">
              <div className="absolute left-0 top-0 w-1 h-full bg-[#007BB8] rounded-full opacity-20"></div>
              <p className="text-lg text-left text-gray-600 pl-6 leading-relaxed relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-[#007BB8] before:rounded-full">
              We offer a comprehensive range of recruitment and support services{" "}
                <span className="font-medium text-[#007BB8]">
                for businesses in Ireland.
                </span>
              </p>
            </div>
          </motion.div>
          <motion.div 
            className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-2"
            variants={stagger}
            initial="initial"
            animate="animate"
          >
            {services.map((service) => (
              <motion.div 
              key={service.id}
              className="group bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#007BB8] cursor-pointer hover:shadow-xl transition-shadow duration-300 relative overflow-hidden"
              variants={fadeInUp}
              onClick={() => handleServiceClick(service)}
            >
              <div className="absolute inset-0 bg-[#007BB8] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
              
              <div className="relative z-10">
                <service.icon className="h-8 w-8 text-[#007BB8] group-hover:text-white transition-colors duration-300 mb-4" />
                <h2 className="text-xl font-bold text-[#007BB8] group-hover:text-white transition-colors duration-300">
                  {service.title}
                </h2>
                <p className="mt-2 text-gray-600 group-hover:text-white transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            </motion.div>
            ))}
          </motion.div>
          <motion.div 
            className="mt-16"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <h2 className="text-2xl font-bold text-[#007BB8]">Pricing</h2>
            <div className="mt-4 relative">
              <div className="absolute left-0 top-0 w-1 h-full bg-[#007BB8] rounded-full opacity-20"></div>
              <p className="text-lg text-gray-600 pl-6 leading-relaxed relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-[#007BB8] before:rounded-full">
                We are highly competitive in terms of service quality.{" "}
                <span className="font-medium text-[#007BB8]">
                  Schedule a free 15-minute initial consultation
                </span>{" "}
                to discuss further.
              </p>
            </div>
            <div className="mt-8 text-center" id='consultation'>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/contact-us" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#007BB8] hover:bg-[#005A8C] transition-colors duration-300">
                  Schedule Free Consultation
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  )
}