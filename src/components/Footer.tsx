import { GraduationCap, MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[linear-gradient(135deg,hsl(215_50%_18%),hsl(215_85%_45%))] text-white flex flex-col">
      <div className="p-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-16">
        <div className="flex flex-col gap-4 md:col-span-3 lg:col-span-2">
          <NavLink to={'/hero'} className="flex items-center gap-2">
            <GraduationCap size={28} />
            <h2 className="text-xl font-bold">Omega Tutorials</h2>
          </NavLink>

          <p className="text-blue-100 leading-relaxed">Empowering students with quality education and personalized attention since 2001. Building strong academic foundations for Classes 6-12.</p>

          <div className="flex items-center gap-4 mt-2">
            <a href="https://www.facebook.com/p/OMEGA-TUTORIALS-100057223279205/" target="_blank" aria-label="Visit Omega Tutorials on Facebook" className="bg-gray-300/10 hover:bg-gray-200/30 p-3 rounded-full cursor-pointer transition duration-300"><Facebook size={18} />
            </a>
            <a href="https://www.instagram.com/omega_tutorials/" target="_blank" aria-label="Visit Omega Tutorials on Instagram" className="bg-gray-300/10 hover:bg-gray-200/30 p-3 rounded-full cursor-pointer transition duration-300"><Instagram size={18} />
            </a>
            <a href="https://www.youtube.com/@omegatutorials8326" target="_blank" aria-label="Visit Omega Tutorials on YouTube" className="bg-gray-300/10 hover:bg-gray-200/30 p-3 rounded-full cursor-pointer transition duration-300"><Youtube size={18} />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <div className="flex flex-col gap-2 text-blue-100">
            <p className="hover:text-white cursor-pointer transition duration-300">Home</p>
            <p className="hover:text-white cursor-pointer transition duration-300">About Us</p>
            <p className="hover:text-white cursor-pointer transition duration-300">Courses</p>
            <p className="hover:text-white cursor-pointer transition duration-300">Results</p>
            <p className="hover:text-white cursor-pointer transition duration-300">Gallery</p>
            <p className="hover:text-white cursor-pointer transition duration-300">Contact</p>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-semibold">Our Courses</h3>
          <div className="flex flex-col gap-2 text-blue-100">
            <p className="hover:text-white cursor-pointer transition duration-300">Classes 6–8 (Foundation)</p>
            <p className="hover:text-white cursor-pointer transition duration-300">Classes 9–10 (Board Prep)</p>
            <p className="hover:text-white cursor-pointer transition duration-300">Classes 11–12 (Science)</p>
            <p className="hover:text-white cursor-pointer transition duration-300">Classes 11–12 (Commerce)</p>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <div className="flex flex-col gap-2 text-blue-100">
            <a href="https://www.google.com/maps/place/Omega+Tutorials+-+Sector+4,+Gurgaon/@28.4736117,77.0066784,17z/data=!3m1!4b1!4m6!3m5!1s0x390d178506a7fbcf:0x173b0a33e7453e18!8m2!3d28.4736117!4d77.0092533!16s%2Fg%2F11n53fkb5v" target="_blank" aria-label="View location on Google Maps" rel="noopener noreferrer" className="flex items-center gap-2 cursor-pointer hover:text-white transition">
              <MapPin size={18} className="shrink-0" /> <span className="break-words">Sec 4 & 5 crossing, Old Railway Rd, near Panjiri Plant, Gurgaon, India</span>
            </a>

            <a href="tel:+919868495901" aria-label="Call Omega Tutorials" className="flex items-center gap-2 cursor-pointer hover:text-white transition">
              <Phone size={18} className="shrink-0" /> <span>+91 9868495901</span>
            </a>

            <a href="mailto:omegatutorials2@gmail.com" aria-label="Send email to Omega Tutorials" className="flex items-center gap-2 cursor-pointer hover:text-white transition break-all">
              <Mail size={18} className="shrink-0" /><span className="break-words">omegatutorials2@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 p-6 text-center text-blue-200 text-sm">© 2026 Omega Tutorials. All rights reserved.</div>
    </div>
  );
};

export default Footer;