export default function LandingSection() {
  return (
    <div
      className="relative flex justify-center items-center mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 bg-white"
      style={{ height: '90vh' }}
    >
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/landing-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content on top of video */}
      <div className="relative z-10 text-center flex flex-col justify-center items-center">
        <h1
          className="text-4xl text-white font-extrabold sm:text-5xl md:text-6xl"
        >
          Providing Businesses with Professional Workforce Solutions
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-white sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Unrivaled delivery of service. Unmatchable performance and productivity. Unbeatable levels of discipline and attention to detail.
        </p>
      </div>
    </div>
  )
}
