import { motion } from "framer-motion"
import { Star, Trophy, TrendingUp, Award } from "lucide-react"
import * as Icons from '../assets/toppers'
import { Helmet } from "react-helmet-async"

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
    photo: Icons.Avni,
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
    class: "Class 10",
    subjects: [
      { name: "Mathematics", marks: "99/100" },
    ],
    photo: Icons.Vansh,
  },
  {
    name: "Dharmik Sivakumar",
    class: "Class 10",
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
  { name: "Student", class: "Class 10 — (Batch 2025)", text: "Omega Tutorials is an excellent coaching center in Gurgaon and truly deserves its high rating. The teachers are highly knowledgeable, supportive, and explain concepts in a very clear and practical way. Doubts are always encouraged, and individual attention is given to students, which really helps in building confidence and improving performance. I would highly recommend Omega Tutorials to anyone looking for quality education and reliable guidance." },
  { name: "Aryan Chaudhary", class: "Student", text: "Omega tutorials are truly a 100/10! The teachers are incredibly understanding, and their teaching methods are outstanding. They don’t just teach math and science—they also focus on moral values and skill development, which makes Omega Tutorials deserve another 100/10. The motivation they provide is truly inspiring! Students genuinely enjoy studying here. Best institute I’ve ever studied at!" },
  { name: "Mr. Shashi Jangra", class: "Parent", text: "Omega Tutorials has played a huge role in my child's outstanding performance. Both teachers Yogesh sir and Deepak sir are extremely dedicated, supportive and explain concepts in a very clear and practical manner." },
  { name: "Harshit Panwar", class: "Student", text: "I studied at Omega Tutorials and had a very good experience. The teaching quality is excellent and the environment is very supportive. Special thanks to Yogesh Sir and Deepak Sir — both are amazing teachers who explain concepts very clearly and are always ready to help with doubts. Their guidance really helped me improve a lot. I highly recommend Omega Tutorials to any student looking for quality coaching." },
  { name: "Vrinda Sharma", class: "Student", text: "I am blessed to be a part of Omega as all the teachers have best comprehensive skills, their teaching techniques are easily understandable. I have a wonderful experience to be studying in this institution. Moreover, this place has a homely atmosphere. Both my teachers- Yogesh sir and Deepak sir have given their the best in explaining each and every concept and many of the life lessons. I would suggest my dear friends not to hesitate in opting for Omega Tutorials." },
  { name: "Mr. Hemant", class: "Parent", text: "I have been teaching my son at Omega for 2 years now. Sir (entire Omega team) really works hard for the children.I see his class style, his way of taking exams, his way of explaining, everything is understandable to the children." },
];

const Results = () => {
  return (
    <>
      <Helmet>
        <title>Results & Toppers | Best Coaching Institute in Gurugram - Omega Tutorials</title>
        <meta name="description" content="Explore Omega Tutorials results in Gurugram with 90%+ scorers, board toppers, and real student success stories. Trusted coaching for Classes 9–12, IIT-JEE & NEET." />
        <meta name="keywords" content="Omega Tutorials results, coaching results Gurugram, IIT JEE toppers Gurgaon, NEET coaching results Gurgaon, best coaching institute Gurugram results" />
        <link rel="canonical" href="https://omegatutorials.in/results" />
        <meta property="og:title" content="Omega Tutorials Results & Toppers" />
        <meta property="og:description" content="See real student success stories, toppers, and 90%+ results from Omega Tutorials in Gurugram." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://omegatutorials.in/results" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Omega Tutorials Results & Toppers" />
        <meta name="twitter:description" content="Top coaching institute in Gurugram with proven results and student success stories." />
        <meta name="geo.region" content="IN-HR" />
        <meta name="geo.placename" content="Gurugram" />
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "Omega Tutorials",
            "url": "https://omegatutorials.in",
            "logo": "https://omegatutorials.in/favicon.png",
            "description": "Omega Tutorials is a leading coaching institute in Gurugram offering Classes 9–12, IIT-JEE, and NEET coaching with proven results.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Gurugram",
              "addressRegion": "Haryana",
              "addressCountry": "India"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "150"
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
          <div className="self-center px-4 py-2 rounded-full text-xs font-semibold tracking-wider bg-white/10 text-white">RESULTS & TESTIMONIALS</div>
          <h1 className="text-4xl font-bold text-white">Coaching Results in Gurugram <span className='hidden'>(Gurgaon)</span> – Omega Tutorials Success Stories & Toppers</h1>
          <p className="text-white/80">Discover why Omega Tutorials is one of the best coaching institutes in Gurugram <span className='hidden'>(Gurgaon)</span> with top results, board exam toppers, and student success stories.</p>
        </motion.div>
      </div>

      <div className="py-12 lg:py-24 px-4 lg:px-16 flex flex-col items-center gap-12 bg-[hsl(210_33%_98%)]">
        <h2 className="text-3xl font-bold text-center">Our Coaching Results in Gurugram <span className='hidden'>(Gurgaon)</span></h2>
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
          className='flex flex-col items-center gap-4 mx-auto max-w-4xl'
        >
          <div className="px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase bg-[hsl(215_85%_45%)]/10 text-[hsl(215_85%_45%)]">Toppers</div>
          <h2 className="text-3xl md:text-4xl font-bold text-[hsl(215_30%_15%)] text-center">Top Performers from Our Coaching Classes in Gurugram <span className='hidden'>(Gurgaon)</span></h2>
          <p className='text-gray-500 text-center'>Our students consistently achieve top results in board exams and competitive exams. These toppers from Omega Tutorials reflect our commitment to quality coaching in Gurugram <span className='hidden'>(Gurgaon)</span>.</p>
        </motion.div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {toppers.map((t, i) => (
            <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white rounded-xl p-6 shadow-[0_4px_24px_-6px_hsl(215_85%_45%/0.10)] flex flex-col items-center gap-4">
              <img src={t.photo} alt={`${t.name} topper from Omega Tutorials coaching in Gurugram`} className="w-24 h-32 rounded-full object-cover border-4 border-[#1162D4]/20" />
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
          <h2 className="text-3xl md:text-4xl font-bold text-[hsl(215_30%_15%)] text-center">Student Reviews of Our Coaching Institute in Gurugram <span className='hidden'>(Gurgaon)</span></h2>
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