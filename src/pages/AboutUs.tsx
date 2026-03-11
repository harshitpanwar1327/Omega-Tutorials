import { motion } from 'framer-motion'
import { Award, BookOpen, Eye, ShieldCheck, Target, Users } from 'lucide-react'
import { lazy } from 'react'

const SectionHeading = lazy(() => import('../components/SectionHeading'));

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

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
      <div className="mt-15 px-4 py-30 bg-[linear-gradient(135deg,hsl(215_50%_18%),hsl(215_85%_45%))]">
        <motion.div className="text-center flex flex-col gap-4"
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
          <h1 className="text-4xl font-bold text-white">About Omega Tutorials</h1>
          <p className="text-white/80">Empowering students with quality education and personalized attention since 2001.</p>
        </motion.div>
      </div>

      <div className='pt-18'>
        <div className="py-20 bg-[hsl(210_33%_98%)]">
          <div className="max-w-4xl mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-[hsl(215_30%_15%)]/80 leading-relaxed mb-6">Omega Tutorials is a premier coaching centre located in Delhi NCR, dedicated to nurturing academic excellence among school students from Classes 6 to 12. Founded with the vision of providing quality, accessible education, we have helped thousands of students achieve outstanding results in board examinations.</p>

              <p className="text-lg text-[hsl(215_30%_15%)]/80 leading-relaxed">Our approach combines traditional teaching values with modern pedagogical methods. We believe every student has the potential to excel, and with the right guidance, they can achieve their academic goals.</p>
            </motion.div>
          </div>
        </div>

        {/* vision and mission */}
        <div className="py-20 bg-[hsl(210_40%_94%)]/50">
          <div className="max-w-6xl mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
              {[
                {
                  icon: Eye,
                  title: "Our Vision",
                  text: "To be the most trusted and result-oriented coaching institute in Delhi NCR, shaping the future of every student through quality education.",
                },
                {
                  icon: Target,
                  title: "Our Mission",
                  text: "To provide a nurturing learning environment with experienced faculty, personalized attention, and proven teaching methodologies that empower students to achieve academic excellence.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="bg-white rounded-xl p-8 shadow-[0_4px_24px_-6px_hsl(215_85%_45%/0.10)] transition-shadow group"
                >
                  <div className="w-12 h-12 rounded-lg bg-[linear-gradient(135deg,hsl(215_85%_45%),hsl(205_80%_60%))] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-['Space_Grotesk'] font-bold text-xl mb-3 text-[hsl(215_30%_15%)]">{item.title}</h3>
                  <p className="text-[hsl(215_15%_50%)]">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Director's message */}
        <div className="py-20 bg-[hsl(210_33%_98%)]">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <SectionHeading badge="Director's Message" title="A Word from Our Founder" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 md:p-12 shadow-[0_4px_24px_-6px_hsl(215_85%_45%/0.10)] border-l-4 border-[hsl(215_85%_45%)] hover:scale-102 transition-transform"
            >
              <p className="text-[hsl(215_30%_15%)]/80 leading-relaxed italic text-lg mb-6">
                "Education is not just about marks and grades — it's about building character, confidence, and a lifelong love for learning. At Omega Tutorials, we are committed to providing every student with the tools and support they need to reach their full potential. Our experienced team of educators works tirelessly to ensure each child receives individual attention and a clear path to success."
              </p>
              <div>
                <p className="font-heading font-bold text-lg">Dr. Rajesh Kumar</p>
                <p className="text-[hsl(215_15%_50%)] text-sm">Founder & Director, Omega Tutorials</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* our approach */}
        <div className="py-20 bg-[hsl(210_40%_94%)]/50">
          <div className="container mx-auto px-4 lg:px-8">
            <SectionHeading badge="Our Approach" title="Teaching Methodology" subtitle="A proven system that focuses on understanding, practice, and performance." />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {methodology.map((item, i) => (
                <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white rounded-xl p-6 shadow-[0_4px_24px_-6px_hsl(215_85%_45%/0.10)] text-center group hover:scale-102 transition-all duration-300">
                  <div className="w-12 h-12 rounded-lg bg-[linear-gradient(135deg,hsl(215_85%_45%),hsl(205_80%_60%))] flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-[hsl(215_15%_50%)]">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* trust */}
        <div className="py-20 bg-[hsl(210_33%_98%)]">
          <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
            <SectionHeading badge="Trust" title="Why Parents Trust Us" />
            <div className="grid sm:grid-cols-2 gap-4">
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
        </div>
      </div>
    </>
  )
}

export default AboutUs