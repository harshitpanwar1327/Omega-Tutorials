import { motion } from "framer-motion"
import { Star, Trophy, TrendingUp, Award } from "lucide-react"
import * as Icons from '../assets/toppers'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const stats = [
  { icon: Trophy, value: "500+", label: "Students Scored 90%+" },
  { icon: TrendingUp, value: "100%", label: "Average Pass Rate" },
  { icon: Award, value: "50+", label: "Board Exam Toppers" },
  { icon: Star, value: "29+", label: "Years of Excellence" },
];

const toppers = [
  {
    name: "Yatika Sharma",
    class: "Class 10",
    subjects: [
      { name: "Mathematics", marks: "100/100" },
      { name: "Science", marks: "97/100" },
    ],
    photo: Icons.Yatika,
  },
  {
    name: "Ishant Grover",
    class: "Class 10",
    subjects: [
      { name: "Mathematics", marks: "100/100" },
      { name: "Science", marks: "97/100" },
    ],
    photo: Icons.Ishant,
  },
  {
    name: "Kritagya Pandey",
    class: "Class 10",
    subjects: [
      { name: "Mathematics", marks: "100/100" },
      { name: "Science", marks: "95/100" },
    ],
    photo: Icons.Kritagya,
  },
  {
    name: "Dhwani Mehta",
    class: "Class 10",
    subjects: [
      { name: "Science", marks: "99/100" },
      { name: "Mathematics", marks: "97/100" },
    ],
    photo: Icons.Dhwani,
  },
  {
    name: "Avni Jain",
    class: "Class 12",
    subjects: [
      { name: "Mathematics", marks: "99/100" },
    ],
    photo: "/placeholder.svg",
  },
  {
    name: "Lavnish Janghu",
    class: "Class 10",
    subjects: [
      { name: "Mathematics", marks: "99/100" },
      { name: "Science", marks: "93/100" },
    ],
    photo: Icons.Lavnish,
  },
  {
    name: "Gracy Sharma",
    class: "Class 10",
    subjects: [
      { name: "Mathematics", marks: "99/100" },
    ],
    photo: Icons.Gracy,
  },
  {
    name: "Ekas Kaur",
    class: "Class 10",
    subjects: [
      { name: "Mathematics", marks: "99/100" },
    ],
    photo: Icons.Ekas,
  },
  {
    name: "Mitaksh Kataria",
    class: "Class 10",
    subjects: [
      { name: "Mathematics", marks: "99/100" },
    ],
    photo: Icons.Mitaksh,
  },
  {
    name: "Prerna",
    class: "Class 12",
    subjects: [
      { name: "Mathematics", marks: "98/100" },
    ],
    photo: Icons.Prerna,
  },
  {
    name: "Gaurav Gulia",
    class: "Class 10",
    subjects: [
      { name: "Mathematics", marks: "99/100" },
      { name: "Science", marks: "97/100" },
    ],
    photo: Icons.Gaurav,
  },
  {
    name: "Vansh Lakhani",
    class: "Class 12",
    subjects: [
      { name: "Mathematics", marks: "99/100" },
    ],
    photo: Icons.Vansh,
  },
  {
    name: "Dharmik Sivakumar",
    class: "Class 12",
    subjects: [
      { name: "Mathematics", marks: "99/100" },
    ],
    photo: Icons.Dharmik,
  },
  {
    name: "Lavanya",
    class: "Class 10",
    subjects: [
      { name: "Mathematics", marks: "98/100" },
      { name: "Science", marks: "93/100" },
    ],
    photo: Icons.Lavanya,
  },
];

const testimonials = [
  { name: "Aarav Mehta", class: "Class 10 — 97.2%", text: "Omega Tutorials transformed my approach to studying. The regular tests and personalized feedback helped me achieve my dream score." },
  { name: "Sneha Patel", class: "Class 12 (Science) — 94.8%", text: "The faculty at Omega is exceptional. They made complex Physics and Chemistry concepts easy to understand." },
  { name: "Mrs. Kavita Singh", class: "Parent", text: "As a parent, I appreciate the transparent communication and regular progress reports. My daughter improved significantly." },
  { name: "Rohit Jain", class: "Class 10 — 96.4%", text: "The small batch sizes meant I always got attention when I was stuck. Highly recommend Omega Tutorials!" },
  { name: "Ananya Gupta", class: "Class 12 (Commerce) — 93.6%", text: "The Accountancy and Economics coaching here is top-notch. I owe my results to Omega Tutorials." },
  { name: "Mr. Deepak Sharma", class: "Parent", text: "Both my children studied at Omega and both scored in the top 5% of their boards. The quality is consistent." },
];

const Results = () => {
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
          <div className="self-center px-4 py-2 rounded-full text-xs font-semibold tracking-wider bg-white/10 text-white">RESULTS & TESTIMONIALS</div>
          <h1 className="text-4xl font-bold text-white">Our Proven Track Record</h1>
          <p className="text-white/80">Years of consistent results that speak for themselves.</p>
        </motion.div>
      </div>

      <div className="py-12 lg:py-24 px-4 lg:px-16 flex flex-col items-center gap-12 bg-[hsl(210_33%_98%)]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {stats.map((s, i) => (
            <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white rounded-xl p-6 shadow-[0_4px_24px_-6px_hsl(215_85%_45%/0.10)] flex flex-col items-center gap-4 text-center">
              <div className="w-12 h-12 rounded-lg bg-[linear-gradient(135deg,hsl(215_85%_45%),hsl(205_80%_60%))] flex items-center justify-center">
                <s.icon className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-3xl font-bold text-[hsl(215_85%_45%)]">{s.value}</p>
                <p className="text-xs text-gray-500">{s.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Toppers */}
      <div className='py-12 lg:py-24 px-4 lg:px-16 flex flex-col items-center gap-12'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='flex flex-col items-center gap-4'
        >
          <div className="px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase bg-[hsl(215_85%_45%)]/10 text-[hsl(215_85%_45%)]">Toppers</div>
          <h2 className="text-3xl md:text-4xl font-bold text-[hsl(215_30%_15%)] text-center">Our Star Performers</h2>
          <p className='text-gray-500'>Students who achieved outstanding results with Omega Tutorials.</p>
        </motion.div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {toppers.map((t, i) => (
            <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white rounded-xl p-6 shadow-[0_4px_24px_-6px_hsl(215_85%_45%/0.10)] flex flex-col items-center gap-4">
              <img src={t.photo} alt={t.name} className="w-24 h-32 rounded-full object-cover border-4 border-[#1162D4]/20" />
              <div className="flex flex-col gap-1 text-center">
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-gray-500">{t.class}</p>
              </div>
              <div className="w-full space-y-2">
                {t.subjects.map((subject) => (
                  <div key={subject.name} className="flex items-center justify-between rounded-full bg-[#1162D4]/10 px-4 py-2 text-xs font-medium text-[#1162D4]">
                    <span>{subject.name}</span>
                    <span>{subject.marks}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className='py-12 lg:py-24 px-4 lg:px-16 flex flex-col items-center gap-12 bg-[hsl(210_33%_98%)]'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='flex flex-col items-center gap-4'
        >
          <div className="px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase bg-[hsl(215_85%_45%)]/10 text-[hsl(215_85%_45%)]">Testimonials</div>
          <h2 className="text-3xl md:text-4xl font-bold text-[hsl(215_30%_15%)] text-center">What Students & Parents Say</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white rounded-xl p-8 shadow-[0_4px_24px_-6px_hsl(215_85%_45%/0.10)]">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-[hsl(45_93%_55%)] text-[hsl(45_93%_55%)]" />
                ))}
              </div>
              <p className="text-[hsl(215_30%_15%)]/80 text-sm italic mb-5">"{t.text}"</p>
              <p className="font-semibold">{t.name}</p>
              <p className="text-sm text-[hsl(215_15%_50%)]">{t.class}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Results