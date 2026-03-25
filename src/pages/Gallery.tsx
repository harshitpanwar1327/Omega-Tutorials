import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { useState } from "react"
import * as Icons from '../assets/gallery'
import { Helmet } from "react-helmet-async"

const categories = ["All", "Classroom", "Infrastructure", "Results", "Events"];

const galleryItems = [
  { src: Icons.Classroom1, title: "Concept-Based Teaching in Action", cat: "Classroom" },
  { src: Icons.Classroom2, title: "Interactive Doubt Solving Session", cat: "Classroom" },
  { src: Icons.Classroom3, title: "Personal Attention for Every Student", cat: "Classroom" },
  { src: Icons.Classroom4, title: "Focused Classroom Learning", cat: "Classroom" },
  { src: Icons.Infrastructure1, title: "Modern Classroom Environment", cat: "Infrastructure" },
  { src: Icons.Infrastructure2, title: "Comfortable Learning Spaces", cat: "Infrastructure" },
  { src: Icons.Infrastructure3, title: "Well-Equipped Study Rooms", cat: "Infrastructure" },
  { src: Icons.Infrastructure4, title: "Reception", cat: "Infrastructure" },
  { src: Icons.Results1, title: "Our Star Performers", cat: "Results" },
  { src: Icons.Events1, title: "Cyber Security Awareness", cat: "Events" },
  { src: Icons.Events2, title: "Student Engagement Activities", cat: "Events" },
];

const Gallery = () => {
  const [active, setActive] = useState<string>("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = active === "All" ? galleryItems : galleryItems.filter((g) => g.cat === active);

  return (
    <>
      <Helmet>
        <title>Gallery | Coaching Classes in Gurugram - Omega Tutorials</title>
        <meta name="description" content="View photos of Omega Tutorials coaching institute in Gurugram including classrooms, infrastructure, student activities, and results." />
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
          <div className="self-center px-4 py-2 rounded-full text-xs font-semibold tracking-wider bg-white/10 text-white">GALLERY</div>
          <h1 className="text-4xl font-bold text-white">Coaching Classes in Gurugram – Omega Tutorials Gallery & Classroom Photos</h1>
          <p className="text-white/80">Explore our coaching institute in Gurugram through classroom photos, infrastructure, student activities, and results.</p>
        </motion.div>
      </div>

      <div className="py-12 lg:py-24 px-4 lg:px-16 flex flex-col gap-12">
        <h2 className="text-3xl font-bold text-center">Inside Our Coaching Institute in Gurugram</h2>
        <div className="flex flex-wrap justify-center items-center gap-2">
          {categories.map((cat) => (
            <button key={cat} onClick={()=>setActive(cat)} className={`px-4 py-2 rounded-full text-sm font-medium transition duration-300 ${active === cat ? "bg-[linear-gradient(135deg,hsl(215_85%_45%),hsl(205_80%_60%))] text-white shadow-[0_2px_20px_-4px_hsl(215_85%_45%/0.12)]" : "bg-gray-200 hover:bg-blue-100"}`}>
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filtered.map((item, index) => (
              <motion.div key={index} className="group relative rounded-xl overflow-hidden shadow-[0_4px_24px_-6px_hsl(215_85%_45%/0.10)] cursor-pointer" onClick={()=>setLightbox(item.src)}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <img src={item.src} alt={`${item.title} at Omega Tutorials coaching institute in Gurugram`} className="w-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                <div className="absolute inset-0 bg-linear-to-t from-[hsl(215_30%_15%)]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-5">
                  <p className="text-white font-semibold">{item.title}</p>
                  <p className="text-white/70 text-xs">{item.cat}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
              
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 bg-[hsl(215_30%_15%)]/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={()=>setLightbox(null)}
          >
            <X className="absolute top-6 right-6 text-white h-5 w-5 cursor-pointer hover:scale-105 transition duration-300" onClick={()=>setLightbox(null)} />
            <motion.img src={lightbox.replace("w=600&h=400", "w=1200&h=800")} alt="Omega Tutorials coaching institute Gurugram gallery image" className="max-w-full max-h-[85vh] rounded-xl shadow-[0_12px_40px_-10px_hsl(215_85%_45%/0.18)]" onClick={(e)=>e.stopPropagation()}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="hidden">
        <h2>Best Coaching Institute in Gurugram Photos</h2>
        <p>Browse Omega Tutorials gallery showcasing classroom sessions, infrastructure, student achievements, and events. Our coaching institute in Gurugram provides a structured and engaging learning environment.</p>
      </div>
    </>
  )
}

export default Gallery