import { useState } from "react";
import { GraduationCap, Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const navClass = ({ isActive }: { isActive: boolean }) => isActive ? "w-full lg:w-fit px-4 py-2 bg-[#1162D4]/10 rounded-lg text-[#1162D4]" : "w-full lg:w-fit px-4 py-2 rounded-lg hover:text-[#1162D4] hover:bg-[#1162D4]/5 transition duration-300";

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md px-8 py-4 flex items-center justify-between gap-4">
        <NavLink to="/hero" className="flex items-center gap-2 text-[#1162D4]">
          <GraduationCap size={28} />
          <h2 className="text-xl font-bold">Omega Tutorials</h2>
        </NavLink>
        <div className="hidden lg:flex items-center gap-1 text-gray-700 font-medium">
          <NavLink to="/hero" className={navClass}>Home</NavLink>
          <NavLink to="/about-us" className={navClass}>About Us</NavLink>
          <NavLink to="/courses" className={navClass}>Courses</NavLink>
          <NavLink to="/results" className={navClass}>Results</NavLink>
          <NavLink to="/gallery" className={navClass}>Gallery</NavLink>
          <NavLink to="/contact" className={navClass}>Contact</NavLink>
          <NavLink to="/contact" className="ml-3 bg-[linear-gradient(135deg,hsl(215_85%_45%),hsl(205_80%_60%))] text-white px-4 py-2 rounded-xl font-semibold shadow-[0_2px_20px_-4px_hsl(215_85%_45%/0.12)] hover:scale-102 transition duration-300">Enroll Now</NavLink>
        </div>
        <button className="lg:hidden" aria-label="Open navigation menu" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: -400 }}
            animate={{ y: 0 }}
            exit={{ y: -400 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="lg:hidden fixed top-0 left-0 z-50 bg-white/90 backdrop-blur-md p-6 w-full flex flex-col gap-4"
          >
            <div className="flex items-center justify-between gap-4">
              <NavLink to="/hero" className="flex items-center gap-2 text-[#1162D4]">
                <GraduationCap size={28} />
                <h2 className="text-xl font-bold">Omega Tutorials</h2>
              </NavLink>
              <X className="cursor-pointer" onClick={()=>setMenuOpen(false)}/>
            </div>
            <div className="lg:hidden flex flex-col items-center gap-1 text-gray-700 font-medium">
              <NavLink to="/hero" className={navClass}>Home</NavLink>
              <NavLink to="/about-us" className={navClass}>About Us</NavLink>
              <NavLink to="/courses" className={navClass}>Courses</NavLink>
              <NavLink to="/results" className={navClass}>Results</NavLink>
              <NavLink to="/gallery" className={navClass}>Gallery</NavLink>
              <NavLink to="/contact" className={navClass}>Contact</NavLink>
              <NavLink to="/contact" className="mt-3 w-full text-center bg-[linear-gradient(135deg,hsl(215_85%_45%),hsl(205_80%_60%))] text-white px-4 py-2 rounded-xl font-semibold shadow-[0_2px_20px_-4px_hsl(215_85%_45%/0.12)] hover:scale-102 transition duration-300"
              >Enroll Now</NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header