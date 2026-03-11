import { motion } from "framer-motion"
import { Star, Trophy, TrendingUp, Award } from "lucide-react";
import { lazy } from "react";

const SectionHeading = lazy(() => import('../components/SectionHeading'));

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const stats = [
  { icon: Trophy, value: "500+", label: "Students Scored 90%+" },
  { icon: TrendingUp, value: "95%", label: "Average Pass Rate" },
  { icon: Award, value: "50+", label: "Board Exam Toppers" },
  { icon: Star, value: "12+", label: "Years of Excellence" },
];

const toppers = [
  { name: "Aarav Mehta", score: "97.2%", class: "Class 10 (2024)", board: "CBSE" },
  { name: "Sneha Patel", score: "94.8%", class: "Class 12 Science (2024)", board: "CBSE" },
  { name: "Rohit Jain", score: "96.4%", class: "Class 10 (2024)", board: "CBSE" },
  { name: "Ananya Gupta", score: "93.6%", class: "Class 12 Commerce (2024)", board: "CBSE" },
  { name: "Ishaan Reddy", score: "95.0%", class: "Class 10 (2023)", board: "CBSE" },
  { name: "Meera Nair", score: "92.4%", class: "Class 12 Science (2023)", board: "CBSE" },
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

      <div className='pt-18'>
        {/* stats */}
        <div className="py-16 bg-[hsl(210_33%_98%)]">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((s, i) => (
                <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white rounded-xl p-6 shadow-[0_4px_24px_-6px_hsl(215_85%_45%/0.10)] text-center">
                  <div className="w-12 h-12 rounded-lg bg-[linear-gradient(135deg,hsl(215_85%_45%),hsl(205_80%_60%))] flex items-center justify-center mx-auto mb-3">
                    <s.icon className="h-6 w-6 text-white" />
                  </div>
                  <p className="text-3xl font-bold text-[hsl(215_85%_45%)]">{s.value}</p>
                  <p className="text-xs text-[hsl(215_15%_50%)] mt-1">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* toppers */}
        <div className="py-20 bg-[hsl(210_40%_94%)]/50">
          <div className="container mx-auto px-4 lg:px-8">
            <SectionHeading badge="Toppers" title="Our Star Performers" subtitle="Students who achieved outstanding results with Omega Tutorials." />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {toppers.map((t, i) => (
                <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white rounded-xl p-6 shadow-[0_4px_24px_-6px_hsl(215_85%_45%/0.10)] flex items-center gap-4">
                  <div className="w-18 h-18 rounded-full bg-[linear-gradient(135deg,hsl(45_93%_55%),hsl(35_95%_55%))] flex items-center justify-center shrink-0">
                    <span className="font-bold text-lg text-[hsl(215_30%_15%)]">{t.score}</span>
                  </div>
                  <div>
                    <p className="font-bold">{t.name}</p>
                    <p className="text-xs text-[hsl(215_15%_50%)]">{t.class}</p>
                    <p className="text-xs text-[hsl(215_85%_45%)] font-medium">{t.board}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* testimonials */}
        <div className="py-20 bg-[hsl(210_33%_98%)]">
          <div className="container mx-auto px-4 lg:px-8">
            <SectionHeading badge="Testimonials" title="What Students & Parents Say" />
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
        </div>
      </div>
    </>
  )
}

export default Results