import { ArrowRight, Atom, Award, BookOpen, Calculator, ClipboardCheck, FlaskConical, Heart, Star, Target, Users } from "lucide-react";
import { Link, NavLink } from 'react-router-dom';
import heroBg from "../assets/hero-bg.webp";
import { motion } from "framer-motion";

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
  { icon: Calculator, title: "Classes 9–10", desc: "CBSE and ICSE board preparation with structured study plans and regular practice.", color: "bg-[#0F5CD4]/10 text-[#0F5CD4]" },
  { icon: FlaskConical, title: "Classes 11–12", desc: "Focused coaching in Maths, Physics, Chemistry and Biology for senior [#EEF2F7] students.", color: "bg-[#F6C21A]/20 text-[#1B2633]" },
  { icon: Target, title: "IIT-JEE", desc: "Concept-driven preparation for JEE Main and Advanced with intensive problem solving.", color: "bg-[#EEF2F7] text-[#1B2633]" },
  { icon: Atom, title: "NEET", desc: "Complete syllabus coverage with strong practice support for medical aspirants.", color: "bg-[#0F5CD4]/15 text-[#0F5CD4]" },
  { icon: Award, title: "Olympiads", desc: "Specialised training for high-achieving students preparing for competitive academic exams.", color: "bg-[#F2F5F8] text-[#1B2633]" },
];

const testimonials = [
  { name: "Priya Sharma", class: "Class 10", text: "Omega Tutorials helped me score 95% in my board exams. The teachers are incredibly supportive!", rating: 5 },
  { name: "Rahul Verma", class: "Class 12 (Science)", text: "The small batch size made all the difference. I got personal attention whenever I needed it.", rating: 5 },
  { name: "Anita Gupta", class: "Parent", text: "My son's confidence and grades both improved significantly after joining Omega Tutorials.", rating: 5 },
];

const Hero = () => {

  return (
    <>
      <div className='pt-18'>  
        {/* landing section */}
        <div className="relative min-h-[90vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img src={heroBg} alt="Students studying at Omega Tutorials" className="w-full h-full object-cover" loading='eager' fetchPriority='high' decoding='async'/>
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
                Expert Guidance for Classes 9–12 | Personalized Coaching | Proven Results in Gurgaon
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <Link to="/contact">
                  <button className="flex items-center bg-[linear-gradient(135deg,hsl(45_93%_55%),hsl(35_95%_55%))] text-white font-bold text-base px-8 py-3 rounded-lg shadow-[0_12px_40px_-10px_hsl(215_85%_45%/0.18)] hover:scale-105 transition-transform" aria-label="Enroll Now">
                    Enroll Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-12 lg:py-24 px-4 lg:px-16 flex flex-col items-center gap-12 bg-[hsl(210_33%_98%)]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='flex flex-col items-center gap-4'
        >
          <div className="px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase bg-[hsl(215_85%_45%)]/10 text-[hsl(215_85%_45%)]">Why Choose Us</div>
          <h2 className="text-3xl md:text-4xl font-bold text-[hsl(215_30%_15%)] text-center">Why Students & Parents Trust Omega Tutorials</h2>
          <p className='text-gray-500 text-center'>We focus on building strong foundations and empowering students to achieve academic excellence.</p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, i) => (
            <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white rounded-xl p-6 shadow-[0_4px_24px_-6px_hsl(215_85%_45%/0.10)] hover:shadow-[0_12px_40px_-10px_hsl(215_85%_45%/0.18)] flex flex-col gap-4 transition duration-300 group">
              <div className="w-12 h-12 rounded-lg bg-[linear-gradient(135deg,hsl(215_85%_45%),hsl(205_80%_60%))] flex items-center justify-center group-hover:scale-110 transition duration-300">
                <item.icon className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Our Courses */}
      <div className="py-12 lg:py-24 px-4 lg:px-16 flex flex-col items-center gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='flex flex-col items-center gap-4'
        >
          <div className="px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase bg-[hsl(215_85%_45%)]/10 text-[hsl(215_85%_45%)]">Our Courses</div>
          <h2 className="text-3xl md:text-4xl font-bold text-[hsl(215_30%_15%)] text-center">Comprehensive Academic Programs</h2>
          <p className='text-gray-500 text-center'>Structured courses designed for every grade level with expert faculty.</p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {courses.map((course, i) => (
            <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white rounded-xl p-8 shadow-[0_4px_24px_-6px_hsl(215_85%_45%/0.10)] hover:shadow-[0_12px_40px_-10px_hsl(215_85%_45%/0.18)] flex flex-col gap-4 hover:-translate-y-1 transition duration-300"
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${course.color}`}>
                <course.icon className="h-7 w-7" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-bold text-xl">{course.title}</h3>
                <p className="text-gray-500 text-sm">{course.desc}</p>
                <Link to="/courses" className="text-blue-600 font-semibold text-sm flex items-center gap-1">
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-12 lg:py-24 px-4 lg:px-16 flex flex-col items-center gap-12 bg-[hsl(210_33%_98%)]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='flex flex-col items-center gap-4'
        >
          <div className="px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase bg-[hsl(215_85%_45%)]/10 text-[hsl(215_85%_45%)]">Testimonials</div>
          <h2 className="text-3xl md:text-4xl font-bold text-[hsl(215_30%_15%)] text-center">What Our Students & Parents Say</h2>
          <p className='text-gray-500 text-center'>Real stories from real families who trust Omega Tutorials.</p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white rounded-xl p-8 shadow-[0_4px_24px_-6px_hsl(215_85%_45%/0.10)]">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-[hsl(45_93%_55%)] text-[hsl(45_93%_55%)]" />
                ))}
              </div>
              <p className="text-[hsl(215_30%_15%)]/80 text-sm mb-5 italic">"{t.text}"</p>
              <div>
                <p className="font-semibold">{t.name}</p>
                <p className="text-xs text-[hsl(215_15%_50%)]">{t.class}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="py-12 lg:py-24 px-4 lg:px-16 bg-[linear-gradient(135deg,hsl(215_85%_45%),hsl(205_80%_60%))]">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className='flex flex-col items-center gap-4'>
          <h2 className="text-3xl md:text-4xl font-bold text-[hsl(0_0%_100%)] text-center">Ready to Excel Academically?</h2>
          <p className="text-[hsl(0_0%_100%)]/80 max-w-xl mx-auto text-center">oin hundreds of successful students at Omega Tutorials. Limited seats available for the new academic session.</p>
          <div className="flex items-center gap-4 mt-4">
            <NavLink to={'/contact'} className="flex items-center gap-2 bg-[linear-gradient(135deg,hsl(45_93%_55%),hsl(35_95%_55%))] text-black font-semibold px-8 py-3 rounded-lg shadow-[0_12px_40px_-10px_hsl(215_85%_45%/0.18)] hover:scale-105 transition duration-300">
              Enroll Now <ArrowRight className="h-5 w-5" />
            </NavLink>
            <NavLink to={'/courses'} className="bg-white/10 text-black font-semibold px-8 py-3 border border-white/40 rounded-lg shadow-[0_12px_40px_-10px_hsl(215_85%_45%/0.18)] hover:scale-105 transition duration-300">
              View Courses
            </NavLink>
          </div>
        </motion.div>
      </div>
    </>
  )
}

export default Hero