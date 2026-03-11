import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, Calculator, CheckCircle, ClipboardCheck, FlaskConical, HelpCircle, Languages, TrendingUp } from 'lucide-react'
import { motion } from 'framer-motion'
import { lazy } from 'react'

const SectionHeading = lazy(() => import('../components/SectionHeading'));

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const features = [
  { icon: ClipboardCheck, title: "Regular Mock Tests", desc: "Weekly and monthly tests simulating real exam patterns." },
  { icon: HelpCircle, title: "Doubt Clearing Sessions", desc: "Dedicated sessions to address individual queries and concepts." },
  { icon: TrendingUp, title: "Performance Tracking", desc: "Detailed analytics and reports for students and parents." },
];

const courseData = [
  {
    title: "Classes 6–8",
    badge: "Foundation",
    desc: "Building strong academic foundations with focus on conceptual clarity and curiosity-driven learning.",
    icon: BookOpen,
    color: "from-[hsl(205_80%_60%)] to-[hsl(215_85%_45%)]",
    subjects: ["Mathematics", "Science", "English", "Social Studies", "Hindi"],
  },
  {
    title: "Classes 9–10",
    badge: "Board Preparation",
    desc: "Intensive CBSE/ICSE board preparation with structured study plans and rigorous practice.",
    icon: Calculator,
    color: "from-[hsl(215_85%_45%)] to-[hsl(215_50%_18%)]",
    subjects: ["Mathematics", "Science (Physics, Chemistry, Biology)", "English", "Social Science", "Hindi"],
  },
  {
    title: "Classes 11–12 (Science)",
    badge: "Advanced",
    desc: "In-depth coaching for Science stream students preparing for boards and competitive exam foundations.",
    icon: FlaskConical,
    color: "from-[hsl(215_50%_18%)] to-[hsl(215_85%_45%)]",
    subjects: ["Physics", "Chemistry", "Mathematics", "Biology", "English"],
  },
  {
    title: "Classes 11–12 (Commerce)",
    badge: "Commerce Stream",
    desc: "Expert coaching for Commerce students with focus on accountancy and business concepts.",
    icon: Languages,
    color: "from-[hsl(215_85%_45%)] to-[hsl(205_80%_60%)]",
    subjects: ["Accountancy", "Business Studies", "Economics", "Mathematics", "English"],
  },
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

      <div className='pt-18'>
        {/* courses */}
        <div className="py-20 bg-[hsl(210_33%_98%)]">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="space-y-12 max-w-5xl mx-auto">
              {courseData.map((course, i) => (
                <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="bg-card rounded-2xl shadow-[0_4px_24px_-6px_hsl(215_85%_45%/0.10)] overflow-hidden md:flex hover:scale-102 transition-transform"
                >
                  <div className={`bg-linear-to-br ${course.color} p-8 md:w-1/3 flex flex-col justify-center items-center text-white`}>
                    <course.icon className="h-12 w-12 mb-4" />
                    <span className="text-xs font-semibold uppercase tracking-wider opacity-80">{course.badge}</span>
                    <h3 className="font-bold text-2xl mt-1">{course.title}</h3>
                  </div>
                  <div className="p-8 md:w-2/3">
                    <p className="text-[hsl(215_15%_50%)] mb-5">{course.desc}</p>
                    <h4 className="font-semibold mb-3">Subjects Offered:</h4>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {course.subjects.map((s, j) => (
                        <span key={j} className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[hsl(215_85%_45%)]/10 text-[hsl(215_85%_45%)] text-xs font-medium">
                          <CheckCircle className="h-3 w-3" /> {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      
        {/* features */}
        <div className="py-20 bg-[hsl(210_40%_94%)]/50">
          <div className="container mx-auto px-4 lg:px-8">
            <SectionHeading badge="Features" title="What Makes Our Courses Special" />
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {features.map((f, i) => (
                <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white rounded-xl p-8 shadow-[0_4px_24px_-6px_hsl(215_85%_45%/0.10)] text-center hover:scale-102 transition-all group">
                  <div className="w-14 h-14 rounded-xl bg-[linear-gradient(135deg,hsl(215_85%_45%),hsl(205_80%_60%))] flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <f.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
                  <p className="text-sm text-[hsl(215_15%_50%)]">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="py-20 bg-[linear-gradient(135deg,hsl(215_85%_45%),hsl(205_80%_60%))]">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-bold text-[hsl(0_0%_100%)] mb-4">
                Enroll Today & Start Your Journey
              </h2>
              <p className="text-[hsl(0_0%_100%)]/80 max-w-xl mx-auto mb-8">
                Limited seats available. Secure your spot for the upcoming academic session.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact">
                  <button className="flex items-center bg-[linear-gradient(135deg,hsl(45_93%_55%),hsl(35_95%_55%))] text-black font-bold text-base px-8 py-3 rounded-lg shadow-[0_12px_40px_-10px_hsl(215_85%_45%/0.18)] hover:scale-105 transition-transform" aria-label="Enroll Now">
                    Enroll Now <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Courses