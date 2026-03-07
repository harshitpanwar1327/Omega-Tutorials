import Footer from "../components/Footer"
import Header from "../components/Header"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react";
import { useState } from "react";

const categories = ["All", "Classroom", "Events", "Activities"];

const galleryItems = [
  { src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&h=400&fit=crop", title: "Science Lab Session", cat: "Classroom" },
  { src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop", title: "Annual Function", cat: "Events" },
  { src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&h=400&fit=crop", title: "Group Study Session", cat: "Activities" },
  { src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop", title: "Interactive Learning", cat: "Classroom" },
  { src: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&h=400&fit=crop", title: "Sports Day", cat: "Events" },
  { src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop", title: "Library Time", cat: "Activities" },
  { src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=400&fit=crop", title: "Computer Lab", cat: "Classroom" },
];

const Gallery = () => {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = active === "All" ? galleryItems : galleryItems.filter((g) => g.cat === active);
  
  return (
    <>
      <div className='w-screen bg-center flex flex-col justify-between gap-16'>
        <Header />
      </div>

      <div className="py-20 bg-[linear-gradient(135deg,hsl(215_50%_18%),hsl(215_85%_45%))]">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-white/10 text-white mb-4">Gallery</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Life at Omega Tutorials</h1>
            <p className="text-white/80 max-w-2xl mx-auto">A glimpse into our vibrant learning environment.</p>
          </motion.div>
        </div>
      </div>

      <div className="py-20 bg-[hsl(210_33%_98%)]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActive(cat)} className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${active === cat ? "bg-[linear-gradient(135deg,hsl(215_85%_45%),hsl(205_80%_60%))] text-white shadow-[0_2px_20px_-4px_hsl(215_85%_45%_/_0.12)]" : "bg-[hsl(210_40%_94%)]/50 text-[hsl(215_30%_15%)] hover:bg[hsl(215_85%_45%)]/10"}`}>
                {cat}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <AnimatePresence mode="popLayout">
              {filtered.map((item) => (
                <motion.div
                  key={item.src}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative rounded-xl overflow-hidden shadow-[0_4px_24px_-6px_hsl(215_85%_45%_/_0.10)] cursor-pointer"
                  onClick={() => setLightbox(item.src)}
                >
                  <img src={item.src} alt={item.title} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(215_30%_15%)]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-5">
                    <div>
                      <p className="text-white font-semibold">{item.title}</p>
                      <p className="text-white/70 text-xs">{item.cat}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[hsl(215_30%_15%)]/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button className="absolute top-6 right-6 text-white" onClick={() => setLightbox(null)}>
              <X className="h-8 w-8" />
            </button>
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={lightbox.replace("w=600&h=400", "w=1200&h=800")}
              alt="Gallery"
              className="max-w-full max-h-[85vh] rounded-xl shadow-[0_12px_40px_-10px_hsl(215_85%_45%_/_0.18)]"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  )
}

export default Gallery