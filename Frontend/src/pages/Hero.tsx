import Footer from '../components/Footer'
import Header from '../components/Header'
import { ArrowRight } from "lucide-react";
import { Link } from 'react-router-dom';
import heroBg from "../assets/hero-bg.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <div className='w-screen bg-center flex flex-col justify-between gap-16'>
        <Header />
      </div>
        
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

      <Footer />
    </>
  )
}

export default Hero