import { Helmet } from "react-helmet-async"

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Omega Tutorials Gurugram</title>
        <meta name="description" content="Read the privacy policy of Omega Tutorials, Gurugram. Learn how we collect, use, and protect student and parent information." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://omegatutorials.in/privacy-policy" />
        <meta property="og:title" content="Privacy Policy - Omega Tutorials" />
        <meta property="og:description" content="Understand how Omega Tutorials collects and protects your personal information." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Privacy Policy - Omega Tutorials" />
        <meta name="twitter:description" content="Privacy practices of Omega Tutorials, Gurugram." />
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Privacy Policy",
            "description": "Privacy policy of Omega Tutorials in Gurugram.",
            "url": "https://omegatutorials.in/privacy-policy"
          }`}
        </script>
      </Helmet>

      <div className='mt-15 px-4 md:px-8 py-12 lg:py-24 max-w-5xl mx-auto flex flex-col gap-6'>
        <div className='flex flex-col items-center gap-2'>
          <h1 className='text-2xl md:text-4xl font-bold'>Privacy Policy</h1>
          <p className='md:text-lg text-gray-500'>Last Updated: 11 Mar, 2026</p>
        </div>

        <div className='flex flex-col gap-3'>
          <h2 className='text-xl font-semibold'>1. Information We Collect</h2>
          <p>We collect personal information such as name, phone number, email address, and class/grade when you fill out our contact or enrollment forms.</p>
        </div>

        <div className='flex flex-col gap-3'>
          <h2 className='text-xl font-semibold'>2. How We Use Your Information</h2>
          <p>Your information is used to process enrollments, communicate about courses, send updates, and improve our services. We do not sell or share your data with third parties for marketing purposes.</p>
        </div>

        <div className='flex flex-col gap-3'>
          <h2 className='text-xl font-semibold'>3. Data Security</h2>
          <p>We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure.</p>
        </div>

        <div className='flex flex-col gap-3'>
          <h2 className='text-xl font-semibold'>4. Cookies</h2>
          <p>Our website may use cookies to enhance your browsing experience. You can disable cookies through your browser settings.</p>
        </div>

        <div className='flex flex-col gap-3'>
          <h2 className='text-xl font-semibold'>5. Contact Us</h2>
          <p>If you have questions about this Privacy Policy, please contact us at <a href="mailto:omegatutorials2@gmail.com" className='text-blue-500'>omegatutorials2@gmail.com</a>.</p>
        </div>
      </div>
    </>
  )
}

export default PrivacyPolicy