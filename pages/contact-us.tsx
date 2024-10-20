import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Send, Loader } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Layout from '@/components/custom/layout'

type FormData = {
  name: string
  email: string
  subject: string
  message: string
}

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(data)
    setIsSubmitting(false)
    setSubmitSuccess(true)
    reset()
    setTimeout(() => setSubmitSuccess(false), 5000)
  }

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-xl"
        style={{margin: '7% auto'}}
      >
        <h2 className="text-2xl font-bold text-[#007BB8] mb-6">Contact Us</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              {...register("name", { required: "Name is required" })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#007BB8] focus:ring focus:ring-[#007BB8] focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:scale-105"
            />
            {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address"
                }
              })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#007BB8] focus:ring focus:ring-[#007BB8] focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:scale-105"
            />
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
            <input
              type="text"
              id="subject"
              {...register("subject", { required: "Subject is required" })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#007BB8] focus:ring focus:ring-[#007BB8] focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:scale-105"
            />
            {errors.subject && <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              rows={4}
              {...register("message", { required: "Message is required" })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#007BB8] focus:ring focus:ring-[#007BB8] focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:scale-105"
            ></textarea>
            {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#007BB8] hover:bg-[#006699] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#007BB8] transition duration-300 ease-in-out transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isSubmitting ? (
                <Loader className="animate-spin h-5 w-5" />
              ) : (
                <>
                  Send Message
                  <Send className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
                </>
              )}
            </motion.button>
          </motion.div>
        </form>
        <AnimatePresence>
          {submitSuccess && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="mt-4 p-4 bg-green-100 rounded-md"
            >
              <p className="text-green-700">Thank you for your message. We'll get back to you soon!</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </Layout>
  )
}