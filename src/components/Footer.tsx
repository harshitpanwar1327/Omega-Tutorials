import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";
import { NavLink } from "react-router-dom";
import Logo from '../assets/Logo.jpg';

const Footer = () => {
  return (
    <footer className="bg-[linear-gradient(135deg,hsl(215_50%_18%),hsl(215_85%_45%))] text-white flex flex-col">
      <div className="p-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-16">
        <div className="flex flex-col gap-4 md:col-span-3 lg:col-span-2">
          <NavLink to={'/'} className="flex items-center gap-2">
            <img src={Logo} alt="Logo" width={40} className="rounded-xl" />
            <h2 className="text-xl font-bold">Omega Tutorials</h2>
          </NavLink>

          <p className="text-white/70 leading-relaxed">Empowering students with quality education and personalized attention since 2004. Building strong academic foundations for Classes 9-12.</p>

          <div className="flex items-center gap-4 mt-2">
            <a href="https://www.facebook.com/p/OMEGA-TUTORIALS-100057223279205/" rel="noopener noreferrer" target="_blank" className="bg-gray-300/10 hover:bg-gray-200/30 p-3 rounded-full cursor-pointer transition duration-300"><Facebook size={18} />
            </a>
            <a href="https://www.instagram.com/omega_tutorials/" rel="noopener noreferrer" target="_blank" className="bg-gray-300/10 hover:bg-gray-200/30 p-3 rounded-full cursor-pointer transition duration-300"><Instagram size={18} />
            </a>
            <a href="https://www.youtube.com/@omegatutorials8326" rel="noopener noreferrer" target="_blank" className="bg-gray-300/10 hover:bg-gray-200/30 p-3 rounded-full cursor-pointer transition duration-300"><Youtube size={18} />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <div className="flex flex-col gap-2 text-white/70">
            <NavLink to="/" className={({ isActive }) => `w-fit transition duration-300 hover:text-white ${ isActive ? "text-white" : ""}`}>
              Home
            </NavLink>

            <NavLink to="/about-us" className={({ isActive }) => `w-fit transition duration-300 hover:text-white ${ isActive ? "text-white" : ""}`}>
              About Us
            </NavLink>

            <NavLink to="/courses" className={({ isActive }) => `w-fit transition duration-300 hover:text-white ${ isActive ? "text-white" : "" }`}>
              Courses
            </NavLink>
            <NavLink to="/results" className={({ isActive }) => `w-fit transition duration-300 hover:text-white ${ isActive ? "text-white" : "" }`}>
              Results
            </NavLink>
            <NavLink to="/gallery" className={({ isActive }) => `w-fit transition duration-300 hover:text-white ${ isActive ? "text-white" : "" }`}>
              Gallery
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => `w-fit transition duration-300 hover:text-white ${ isActive ? "text-white" : "" }`}>
              Contact
            </NavLink>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-semibold">Our Courses</h3>
          <div className="flex flex-col gap-2 text-white/70">
            <p className="hover:text-white cursor-pointer transition duration-300">Classes 9-10 (Maths & Science)</p>
            <p className="hover:text-white cursor-pointer transition duration-300">Classes 11-12 (Maths, Physics, Chemistry & Biology)</p>
            <p className="hover:text-white cursor-pointer transition duration-300">IIT-JEE</p>
            <p className="hover:text-white cursor-pointer transition duration-300">NEET</p>
            <p className="hover:text-white cursor-pointer transition duration-300">Olympiads</p>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <div className="flex flex-col gap-2 text-white/70">
            <a href="https://www.google.com/maps/place/Omega+Tutorials+-+Sector+4,+Gurgaon/@28.4736117,77.0066784,17z/data=!3m1!4b1!4m6!3m5!1s0x390d178506a7fbcf:0x173b0a33e7453e18!8m2!3d28.4736117!4d77.0092533!16s%2Fg%2F11n53fkb5v" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 cursor-pointer hover:text-white transition">
              <MapPin size={18} className="shrink-0" /> <span className="wrap-break-word">Sec 4 & 5 crossing, Old Railway Rd, near Panjiri Plant, Gurgaon, India</span>
            </a>

            <a href="tel:+919868495901" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 cursor-pointer hover:text-white transition">
              <Phone size={18} className="shrink-0" /> <span>+91 9868495901</span>
            </a>

            <a href="mailto:omegatutorials2@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 cursor-pointer hover:text-white transition break-all">
              <Mail size={18} className="shrink-0" /><span className="wrap-break-word">omegatutorials2@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      <hr className="text-white/10" id="site-footer" />

      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 px-4 md:px-12 py-6 text-blue-200">
        <p className="text-sm">© 2026 Omega Tutorials. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <NavLink to={'/privacy-policy'} className="hover:text-white transition duration-300">Privacy Policy</NavLink>
          <NavLink to={'/terms-and-conditions'} className="hover:text-white transition duration-300">Terms & Conditions</NavLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;