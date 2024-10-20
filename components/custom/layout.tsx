import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { ForwardRefExoticComponent, RefAttributes, useState } from 'react'
import { Briefcase, Phone, Mail, ChevronDown, Users, FileText, Plane, Home, LucideProps } from 'lucide-react'
import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

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
  const router = useRouter()

  const handleServiceClick = (service: { id: any; title: any; description: any; icon?: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>> }) => {
    if (typeof window !== 'undefined') {
      const serviceData = {
        id: service.id,
        title: service.title,
        description: service.description
      };
      localStorage.setItem('selectedService', JSON.stringify(serviceData));
      router.push(`/services/${service.id}`);
    } else {
      console.log('Window object is undefined');
    }
  }


  useEffect(() => {
    // Close the dropdown when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Head>
        <title>Sapphire Placement Limited</title>
        <meta name="description" content="Dublin-based recruitment agency specializing in Non-EU workers" />
        <link rel="icon" href="/sapphire-placement-small-logo.svg" />
      </Head>

      <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between py-3">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0 flex items-center">
                <Image src="/sapphire-placement-small-logo.svg" alt="Logo" className="text-xl font-bold text-blue-600" width={80} height={80} />
              </Link>
            </div>
            <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
              <Link href="/" className="text-gray-400 hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
              <div className="relative group">
                <button className="text-gray-400 hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium inline-flex items-center">
                  <Link href="/services">
                    Services
                  </Link>
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {/* Adjust dropdown positioning */}
                <div ref={servicesRef} className="absolute left-0 top-full mt-0 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto">
                  <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <button onClick={() => handleServiceClick(services[0])} className="w-full text-left block px-4 py-2 text-sm text-gray-400 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                      <Users className="inline-block mr-2 h-5 w-5 text-blue-500" />
                      Recruitment Services
                    </button>
                    <button onClick={() => handleServiceClick(services[1])} className="w-full text-left block px-4 py-2 text-sm text-gray-400 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                      <FileText className="inline-block mr-2 h-5 w-5 text-green-500" />
                      Work Permit Application
                    </button>
                    <button onClick={() => handleServiceClick(services[2])} className="w-full text-left block px-4 py-2 text-sm text-gray-400 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                      <Plane className="inline-block mr-2 h-5 w-5 text-purple-500" />
                      Visa Application Support
                    </button>
                    <button onClick={() => handleServiceClick(services[3])} className="w-full text-left block px-4 py-2 text-sm text-gray-400 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                      <Home className="inline-block mr-2 h-5 w-5 text-orange-500" />
                      Additional Support
                    </button>
                  </div>
                </div>
              </div>

              <Link href="/#about-us" className="text-gray-400 hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">About Us</Link>
              <Link href="/contact-us" className="text-gray-400 hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Contact Us</Link>
            </div>
            <div className="flex items-center">
              <Link href="/contact-us" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#0095DA] hover:bg-[#007BB8]">
                Free Consultation
              </Link>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isMenuOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </nav>

        {isMenuOpen && (
          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/" className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Home</Link>
              <Link href="/#about-us" className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">About Us</Link>
              <Link href="/services" className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Services</Link>
              <Link href="/contact-us" className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Contact Us</Link>
              <Link href="/contact-us" className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Free Consultation</Link>
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow pt-16">
        {children}
      </main>

      <footer className="bg-blue-50 text-gray-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Link href="/" className="text-xl font-bold text-[#0095DA]">Sapphire Placement Limited</Link>
              <p className="mt-2">We deliver innovative workforce solutions that drive success and transform businesses.</p>
              <div className="mt-4 flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span>+111 1 111 1111</span>
              </div>
              <div className="mt-2 flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <span>support@sapphireplacement.com</span>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link href="/#about-us" className="hover:text-blue-600">About Us</Link></li>
                <li><Link href="/services" className="hover:text-blue-600">Our Services</Link></li>
                <li><Link href="/contact-us" className="hover:text-blue-600">Contact Us</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="hover:text-blue-600">FAQ</Link></li>
                <li><Link href="/" className="hover:text-blue-600">Blog</Link></li>
                <li><Link href="/" className="hover:text-blue-600">Terms & Conditions</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
              <p className="mb-4">Stay connected for updates and offers:</p>
              <div className="space-y-4">
                <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-md" placeholder="Enter your email" />
                <button className="w-full px-4 py-2 bg-[#0095DA] text-white rounded-md hover:bg-[#007BB8]">Subscribe</button>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 pt-8 text-sm text-center">
            &copy; 2024 Sapphire Placement Limited. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
