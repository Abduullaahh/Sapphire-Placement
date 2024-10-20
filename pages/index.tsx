import Layout from '@/components/custom/layout'
import LandingSection from '@/components/home-page/landing'
import AboutSection from '@/components/home-page/about-us'
import VisionSection from '@/components/home-page/our-vision'

export default function Home() {
  return (
    <Layout>
      <div className="mx-auto bg-white">
        <LandingSection/>
        <AboutSection/>
        <VisionSection/>
      </div>
    </Layout>
  )
}
