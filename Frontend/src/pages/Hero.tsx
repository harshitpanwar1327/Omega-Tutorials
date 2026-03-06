import Footer from '../components/Footer'
import Header from '../components/Header'
import { ArrowRight, BookOpen, Calculator, ClipboardCheck, FlaskConical, GraduationCap, Heart, Users } from "lucide-react";
import { Link } from 'react-router-dom';
import heroBg from "../assets/hero-bg.jpg";
import { motion } from "framer-motion";
import SectionHeading from '../components/SectionHeading';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const highlights = [
  { icon: Users, title: "Experienced Faculty", desc: "Qualified teachers with years of academic coaching experience." },
  { icon: BookOpen, title: "Small Batch Sizes", desc: "Limited students per batch for focused, quality learning." },
  { icon: ClipboardCheck, title: "Regular Tests", desc: "Weekly assessments to track and boost performance." },
  { icon: Heart, title: "Personal Attention", desc: "Individual focus on every student's strengths and weaknesses." },
];

const courses = [
  { icon: Calculator, title: "Classes 6–8", desc: "Foundation building with strong concepts in Maths, Science & English.", color: "bg-[hsl(205_80%_60%)]/10 text-[hsl(205_80%_60%)]" },
  { icon: GraduationCap, title: "Classes 9–10", desc: "Board exam preparation with comprehensive study plans.", color: "bg-[hsl(215_85%_45%)]/10 text-[hsl(215_85%_45%)]" },
  { icon: FlaskConical, title: "Classes 11–12", desc: "Advanced Science & Commerce coaching for board and competitive exams.", color: "bg-[hsl(45_93%_55%)]/20 text-[hsl(215_30%_15%)]" },
];

const Hero = () => {

  return (
    <>
      <div className='w-screen bg-center flex flex-col justify-between gap-16'>
        <Header />
      </div>
        
      {/* landing section */}
      <div className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Students studying at Omega Tutorials" className="w-full h-full object-cover"/>
          <div className="absolute inset-0 bg-[linear-gradient(135deg,hsl(215_50%_18%),hsl(215_85%_45%))] opacity-80"></div>
        </div>
        <div className="relative max-w-7xl px-4 lg:px-18 py-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-[hsl(45_93%_55%)]/20 text-[hsl(45_93%_55%)] mb-6">
              Gurgaon's Trusted Coaching Centre
            </span>
            <h1 className="font-['Space_Grotesk'] text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Build Strong Academic Foundations with{" "}
              <span className="text-[hsl(45_93%_55%)]">Omega Tutorials</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl">
              Expert Guidance for Classes 6–12 | Personalized Coaching | Proven Results in Gurgaon
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link to="/contact">
                <button className="flex items-center bg-[linear-gradient(135deg,hsl(45_93%_55%),hsl(35_95%_55%))] text-white font-bold text-base px-8 py-3 rounded-lg shadow-[0_12px_40px_-10px_hsl(215_85%_45%_/_0.18)] hover:scale-105 transition-transform">
                  Enroll Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </Link>
              <Link to="/contact">
                <button className="border border-white/30 text-white hover:bg-white/10 font-semibold text-base px-8 py-3 rounded-lg transition">
                  Contact Us
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* why choose us */}
      <div className="py-20 bg-[hsl(210_33%_98%)]">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading badge="Why Choose Us" title="Why Students & Parents Trust Omega Tutorials" subtitle="We focus on building strong foundations and empowering students to achieve academic excellence." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-white rounded-xl p-6 shadow-[0_4px_24px_-6px_hsl(215_85%_45%_/_0.10)] hover:shadow-[0_12px_40px_-10px_hsl(215_85%_45%_/_0.18)] transition-shadow group"
              >
                <div className="w-12 h-12 rounded-lg bg-[linear-gradient(135deg,hsl(215_85%_45%),hsl(205_80%_60%))] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="h-6 w-6 text-[hsl(0_0%_100%)]" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-[hsl(215_15%_50%)]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* our courses */}
      <section className="py-20 bg-[hsl(210_40%_94%)]/50">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading badge="Our Courses" title="Comprehensive Academic Programs" subtitle="Structured courses designed for every grade level with expert faculty." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courses.map((course, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-white rounded-xl p-8 shadow-[0_4px_24px_-6px_hsl(215_85%_45%_/_0.10)] hover:shadow-[0_12px_40px_-10px_hsl(215_85%_45%_/_0.18)] transition-all hover:-translate-y-1"
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${course.color}`}>
                  <course.icon className="h-7 w-7" />
                </div>
                <h3 className="font-heading font-bold text-xl mb-3">{course.title}</h3>
                <p className="text-[hsl(215_15%_50%)] text-sm mb-5">{course.desc}</p>
                <Link to="/courses" className="text-blue-600 font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all">
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Hero