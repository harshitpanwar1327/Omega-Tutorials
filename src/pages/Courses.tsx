import { NavLink } from 'react-router-dom'
import { ArrowRight, Atom, Award, BookOpen, Calculator, CheckCircle, ClipboardCheck, FlaskConical, HelpCircle, Target, TrendingUp } from 'lucide-react'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const courseData = [
  {
    title: "Classes 9–10",
    badge: "Board Preparation",
    desc: "Intensive CBSE/ICSE board preparation with structured study plans and rigorous practice.",
    icon: Calculator,
    color: "from-[#0F5BD3] to-[#17263F]",
    subjects: ["Mathematics", "Science (Physics, Chemistry, Biology)"],
  },
  {
    title: "Classes 11–12",
    badge: "Advanced",
    desc: "In-depth coaching for students preparing for boards and competitive exam foundations.",
    icon: FlaskConical,
    color: "from-[#17263F] to-[#0F5BD3]",
    subjects: ["Mathematics", "Physics", "Chemistry", "Biology"],
  },
  {
    title: "IIT-JEE",
    badge: "Competitive",
    desc: "Comprehensive preparation for JEE Main & Advanced with concept-driven teaching and intensive problem solving.",
    icon: Target,
    color: "from-[#4DA6EB] to-[#0F5BD3]",
    subjects: ["Mathematics", "Physics", "Chemistry"],
  },
  {
    title: "NEET",
    badge: "Medical",
    desc: "Focused coaching for NEET aspirants covering the complete syllabus with regular practice and test series.",
    icon: Atom,
    color: "from-[#0F5BD3] to-[#4DA6EB]",
    subjects: ["Physics", "Chemistry", "Biology"],
  },
  {
    title: "Olympiads",
    badge: "Excellence",
    desc: "Specialised training for national and international Olympiads to nurture exceptional talent.",
    icon: Award,
    color: "from-[#17263F] to-[#4DA6EB]",
    subjects: ["Mathematics Olympiad", "Science Olympiad", "Physics Olympiad", "Chemistry Olympiad"],
  },
];

const features = [
  { icon: ClipboardCheck, title: "Regular Mock Tests", desc: "Weekly and monthly tests simulating real exam patterns." },
  { icon: HelpCircle, title: "Doubt Clearing Sessions", desc: "Dedicated sessions to address individual queries and concepts." },
  { icon: TrendingUp, title: "Performance Tracking", desc: "Detailed analytics and reports for students and parents." },
  { icon: CheckCircle, title: "Individual Attention", desc: "Small batch sizes ensuring personalised focus on every student." },
  { icon: BookOpen, title: "Proven Results", desc: "Consistent track record of top scores in board examinations." },
  { icon: Calculator, title: "Experienced Faculty", desc: "Highly qualified teachers with years of expertise in their subjects." },
];

const Courses = () => {
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
          <div className="self-center px-4 py-2 rounded-full text-xs font-semibold tracking-wider bg-white/10 text-white">COURSES</div>
          <h1 className="text-4xl font-bold text-white">Our Academic Programs</h1>
          <p className="text-white/80">Comprehensive courses designed for every grade level with expert faculty and proven results.</p>
        </motion.div>
      </div>

      {/* Courses */}
      <div className='py-12 lg:py-24 px-4 lg:px-16 max-w-6xl mx-auto flex flex-col gap-8'>
        {courseData.map((course, i) => (
          <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="bg-white rounded-2xl shadow-[0_4px_24px_-6px_hsl(215_85%_45%/0.10)] overflow-hidden flex flex-col md:flex-row hover:scale-102 transition duration-300"
          >
            <div className={`bg-linear-to-br ${course.color} p-8 w-full md:w-1/3 flex flex-col gap-4 justify-center items-center text-white`}>
              <course.icon className="h-12 w-12" />
              <div className='flex flex-col gap-1'>
                <span className="text-xs font-semibold uppercase tracking-wider opacity-80">{course.badge}</span>
                <h3 className="font-bold text-2xl">{course.title}</h3>
              </div>
            </div>
            <div className="p-8 w-full md:w-2/3 flex flex-col gap-4">
              <p className="text-gray-500">{course.desc}</p>
              <h4 className="font-semibold">Subjects Offered:</h4>
              <div className="flex flex-wrap gap-2">
                {course.subjects.map((s, j) => (
                  <div key={j} className="flex items-center gap-1 px-3 py-1 rounded-full bg-[hsl(215_85%_45%)]/10 text-[hsl(215_85%_45%)] text-xs font-medium">
                    <CheckCircle className="h-3 w-3" /> {s}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Features */}
      <div className="py-12 lg:py-24 px-4 lg:px-16 flex flex-col gap-12 bg-[hsl(210_40%_94%)]/50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='flex flex-col items-center gap-4'
        >
          <div className="px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase bg-[hsl(215_85%_45%)]/10 text-[hsl(215_85%_45%)]">Features</div>
          <h2 className="text-3xl md:text-4xl font-bold text-[hsl(215_30%_15%)] text-center">What Makes Our Courses Special</h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((f, i) => (
            <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex flex-col gap-4 bg-white rounded-xl p-8 shadow-[0_4px_24px_-6px_hsl(215_85%_45%/0.10)] text-center hover:scale-102 transition duration-300 group">
              <div className="w-14 h-14 rounded-xl bg-[linear-gradient(135deg,hsl(215_85%_45%),hsl(205_80%_60%))] flex items-center justify-center mx-auto group-hover:scale-110 transition duration-300">
                <f.icon className="h-7 w-7 text-white" />
              </div>
              <div className='flex flex-col gap-1'>
                <h3 className="font-semibold text-lg">{f.title}</h3>
                <p className="text-sm text-gray-500">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="py-12 lg:py-24 px-4 lg:px-16 bg-[linear-gradient(135deg,hsl(215_85%_45%),hsl(205_80%_60%))]">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className='flex flex-col items-center gap-4'>
          <h2 className="text-3xl md:text-4xl font-bold text-[hsl(0_0%_100%)] text-center">Enroll Today & Start Your Journey</h2>
          <p className="text-[hsl(0_0%_100%)]/80 max-w-xl mx-auto text-center">Limited seats available. Secure your spot for the upcoming academic session.</p>
          <NavLink to={'/contact'} className="flex items-center gap-2 bg-[linear-gradient(135deg,hsl(45_93%_55%),hsl(35_95%_55%))] text-black font-bold px-8 py-3 mt-4 rounded-lg shadow-[0_12px_40px_-10px_hsl(215_85%_45%/0.18)] hover:scale-105 transition duration-300">
            Enroll Now <ArrowRight className="h-5 w-5" />
          </NavLink>
        </motion.div>
      </div>
    </>
  )
}

export default Courses