import { GraduationCap, Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const navClass = ({ isActive }: { isActive: boolean }) => isActive ? "px-3 py-2 bg-blue-100 rounded-lg text-blue-600" : "px-3 py-2 rounded-lg hover:text-blue-600 hover:bg-blue-100/70";

  return (
    <div className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <NavLink to="/hero" className="flex items-center gap-2">
          <GraduationCap size={28} className="text-blue-600" />
          <h2 className="text-xl font-bold text-blue-600">Omega Tutorials</h2>
        </NavLink>

        <div className="hidden md:flex items-center gap-3 text-gray-700 font-medium">
          <NavLink to="/hero" className={navClass}>Home</NavLink>
          <NavLink to="/about-us" className={navClass}>About Us</NavLink>
          <NavLink to="/courses" className={navClass}>Courses</NavLink>
          <NavLink to="/results" className={navClass}>Results</NavLink>
          <NavLink to="/gallery" className={navClass}>Gallery</NavLink>
          <NavLink to="/contact" className={navClass}>Contact</NavLink>
          <NavLink to="/contact" className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white px-4 py-2 rounded-xl font-medium transition">Enroll Now</NavLink>
        </div>
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 py-4 flex flex-col gap-3">
          <NavLink to="/hero" className={navClass}>Home</NavLink>
          <NavLink to="/about-us" className={navClass}>About Us</NavLink>
          <NavLink to="/courses" className={navClass}>Courses</NavLink>
          <NavLink to="/results" className={navClass}>Results</NavLink>
          <NavLink to="/gallery" className={navClass}>Gallery</NavLink>
          <NavLink to="/contact" className={navClass}>Contact</NavLink>
          <NavLink to="/contact" className="mt-3 text-center bg-gradient-to-r from-blue-600 to-blue-400 text-white px-4 py-3 rounded-xl font-medium">Enroll Now</NavLink>
        </div>
      )}
    </div>
  )
}

export default Header