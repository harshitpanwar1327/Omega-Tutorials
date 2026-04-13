import { motion } from 'framer-motion'
import { Award, BookOpen, Eye, ShieldCheck, Target, Users } from 'lucide-react'
import { Helmet } from "react-helmet-async"
import Founder from '../assets/Founder.jpg'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const mission = [
  { icon: Eye, title: "Our Vision", text: "To be the most trusted and result-oriented coaching institute in Gurugram, shaping the future of every student through quality education." },
  { icon: Target, title: "Our Mission", text: "To provide a nurturing learning environment with experienced faculty, personalized attention, and proven teaching methodologies that empower students to achieve academic excellence." },
]

const methodology = [
  { icon: BookOpen, title: "Concept-Based Learning", desc: "We focus on understanding core concepts rather than rote memorization." },
  { icon: ShieldCheck, title: "Regular Assessments", desc: "Weekly tests and monthly exams to track progress and identify gaps." },
  { icon: Users, title: "Interactive Sessions", desc: "Engaging classroom sessions with Q&A and doubt clearing." },
  { icon: Award, title: "Performance Reports", desc: "Detailed reports shared with parents to keep them involved." },
];

const trustReasons = [
  "Transparent communication with parents",
  "Consistent track record of 90%+ scorers",
  "Safe and supportive learning environment",
  "Affordable fee structure",
  "Experienced and qualified faculty",
  "Proven board exam preparation strategies",
];

const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>About Omega Tutorials | Coaching Institute in Gurugram</title>
        <meta name="description" content="Learn about Omega Tutorials, a trusted coaching institute in Gurugram with 29+ years of experience in teaching Maths, Science, IIT-JEE & NEET students." />
        <meta name="keywords" content="about omega tutorials, coaching institute in gurugram, best tuition gurgaon, experienced teachers gurugram, IIT JEE coaching institute gurgaon" />
        <link rel="canonical" href="https://omegatutorials.in/about-us" />
        <meta property="og:title" content="About Omega Tutorials Gurugram" />
        <meta property="og:description" content="Trusted coaching institute in Gurugram with 29+ years of teaching excellence." />
        <meta property="og:url" content="https://omegatutorials.in/about-us" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "Omega Tutorials",
            "url": "https://omegatutorials.in/about-us",
            "description": "Coaching institute in Gurugram offering IIT-JEE, NEET and school coaching.",
            "founder": {
              "@type": "Person",
              "name": "Yogesh Kumar"
            }
          }`}
        </script>
      </Helmet>

      <div className="mt-15 px-4 py-30 bg-[linear-gradient(135deg,hsl(215_50%_18%),hsl(215_85%_45%))]">
        <motion.div className="text-center flex flex-col gap-4 mx-auto max-w-4xl"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            staggerChildren: 0.2
          }}
          viewport={{ once: true }}
        >
          <div className="self-center px-4 py-2 rounded-full text-xs font-semibold tracking-wider bg-white/10 text-white">ABOUT US</div>
          <h1 className="text-4xl font-bold text-white">About Omega Tutorials – Best Coaching Institute in Gurugram <span className='hidden'>(Gurgaon)</span></h1>
          <p className="text-white/80">Omega Tutorials is a leading coaching institute in Gurugram  <span className='hidden'>(Gurgaon)</span> offering expert coaching for Classes 9–12, IIT-JEE, and NEET with proven academic results.</p>
        </motion.div>
      </div>

      <div className='py-12 lg:py-24 px-4 lg:px-16 flex flex-col gap-8 bg-white'>
        <motion.p className='text-lg text-[hsl(215_30%_15%)]/80 leading-relaxed text-justify max-w-5xl mx-auto'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Omega Tutorials is one of the best coaching institutes in Gurugram <span className='hidden'>(Gurgaon)</span>, providing high-quality coaching for students from Classes 9 to 12. We specialize in Maths, Science, IIT-JEE, and NEET preparation with a strong focus on concept clarity and exam performance.
        </motion.p>
        <motion.p className='text-lg text-[hsl(215_30%_15%)]/80 leading-relaxed text-justify max-w-5xl mx-auto'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          With over 29 years of teaching experience, Omega Tutorials has helped thousands of students achieve excellent results in board exams and competitive exams. Our personalized teaching approach, small batch sizes, and regular assessments make us a trusted name among parents and students in Gurugram <span className='hidden'>(Gurgaon)</span>.
        </motion.p>
      </div>

      {/* Vision and Mission */}
      <div className='py-12 lg:py-24 px-4 lg:px-16 max-w-6xl mx-auto flex flex-col gap-12'>
        <h2 className="text-3xl font-bold text-center mx-auto max-w-4xl">Our Vision & Mission as a Leading Coaching Institute in Gurugram <span className='hidden'>(Gurgaon)</span></h2>
        <div className='grid md:grid-cols-2 gap-10'>
          {mission.map((item, i) => (
            <motion.div key={i} className="bg-white rounded-xl p-8 shadow-[0_4px_24px_-6px_hsl(215_85%_45%/0.10)] transition duration-300 group flex flex-col gap-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
            >
              <div className="w-12 h-12 rounded-lg bg-[linear-gradient(135deg,hsl(215_85%_45%),hsl(205_80%_60%))] flex items-center justify-center group-hover:scale-110 transition duration-300">
                <item.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-bold text-xl">{item.title}</h3>
              <p className="text-gray-500">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Director's message */}
      <div className='py-12 lg:py-24 px-4 lg:px-16 flex flex-col items-center gap-12 bg-[hsl(210_33%_98%)]'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='flex flex-col items-center gap-4'
        >
          <div className="px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase bg-[hsl(215_85%_45%)]/10 text-[hsl(215_85%_45%)]">Director's Message</div>
          <h2 className="text-3xl md:text-4xl font-bold text-[hsl(215_30%_15%)] text-center mx-auto max-w-4xl">Message from the Founder of Omega Tutorials – Gurugram’s Trusted Coaching Institute</h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col-reverse lg:flex-row lg:items-center gap-6 bg-white rounded-xl p-8 md:p-12 shadow-[0_4px_24px_-6px_hsl(215_85%_45%/0.10)] border-l-4 border-[hsl(215_85%_45%)] hover:scale-102 transition duration-300 text-[hsl(215_30%_15%)]/80 leading-relaxed italic text-lg"
        >
          <div className='flex flex-col gap-6'>
            <p>"As stated by Swami Vivekananda, "Get up and set your shoulder to the wheel... what is this life for?... Leave some mark behind. Otherwise what is the difference between you and the stones? Yes, at OMEGA we wake up, become aware, become sensitive and touch lives around us.</p>
            <p>Omega came into existence back in 2004 with an aim to impart quality education to the students. From there onwards there has been no looking back for us as we thrive to attain excellence through our sheer determination and perseverance. I would like to express my heartfelt gratitude to all the students and parents for their immense support and cooperation throughout this journey which has helped us to carve a niche in the coaching world in Gurugram <span className='hidden'>(Gurgaon)</span>.</p>
            <p>Last but not the least I hope to lay down a foundation of an exemplary learning community here at Omega."</p>
            <div>
              <p className="font-heading font-bold text-lg">Yogesh Kumar</p>
              <p className="text-gray-500 text-sm">Founder - Omega Tutorials</p>
            </div>
          </div>
          <img src={Founder} alt="Omega Tutorial's Founder" className='w-full lg:w-1/2 rounded-2xl' />
        </motion.div>
      </div>

      {/* Our approach */}
      <div className='py-12 lg:py-24 px-4 lg:px-16 flex flex-col items-center gap-12'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='flex flex-col items-center gap-4 mx-auto max-w-4xl'
        >
          <div className="px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase bg-[hsl(215_85%_45%)]/10 text-[hsl(215_85%_45%)]">Our Approach</div>
          <h2 className="text-3xl md:text-4xl font-bold text-[hsl(215_30%_15%)] text-center">Our Teaching Methodology for Academic Success in Gurugram <span className='hidden'>(Gurgaon)</span></h2>
          <p className='text-gray-500 text-center'>A proven system that focuses on understanding, practice, and performance.</p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {methodology.map((item, i) => (
            <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white rounded-xl p-6 shadow-[0_4px_24px_-6px_hsl(215_85%_45%/0.10)] text-center group hover:scale-102 transition duration-300 flex flex-col items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-[linear-gradient(135deg,hsl(215_85%_45%),hsl(205_80%_60%))] flex items-center justify-center group-hover:scale-110 transition duration-300">
                <item.icon className="h-6 w-6 text-white" />
              </div>
              <div className='flex flex-col gap-1'>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Trust */}
      <div className='py-12 lg:py-24 px-4 lg:px-16 flex flex-col items-center gap-12 bg-[hsl(210_33%_98%)]'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='flex flex-col items-center gap-4 mx-auto max-w-4xl'
        >
          <div className="px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase bg-[hsl(215_85%_45%)]/10 text-[hsl(215_85%_45%)]">Trust</div>
          <h2 className="text-3xl md:text-4xl font-bold text-[hsl(215_30%_15%)] text-center">Why Parents Choose Our Coaching Classes in Gurugram  <span className='hidden'>(Gurgaon)</span></h2>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-4">
          {trustReasons.map((reason, i) => (
            <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-[0_4px_24px_-6px_hsl(215_85%_45%/0.10)] hover:scale-102 transition-transform">
              <div className="w-8 h-8 rounded-full bg-[linear-gradient(135deg,hsl(215_85%_45%),hsl(205_80%_60%))] flex items-center justify-center shrink-0">
                <ShieldCheck className="h-4 w-4 text-white" />
              </div>
              <span className="text-sm font-medium">{reason}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  )
}

export default AboutUs