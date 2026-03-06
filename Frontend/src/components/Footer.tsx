import { GraduationCap, MapPin, Phone, Mail, Facebook, Instagram, Youtube, Twitter } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll"

const Footer = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleScroll = (route: string, section: string) => {
    if (location.pathname !== route) {
      navigate(route);

      setTimeout(() => {
        if (section) {
          scroller.scrollTo(section, {
            smooth: true,
            duration: 600,
            offset: -80,
          });
        }
      }, 200);
    } else {
      if (section) {
        scroller.scrollTo(section, {
          smooth: true,
          duration: 600,
          offset: -80,
        });
      }
    }
  };

  return (
    <div className="bg-[linear-gradient(135deg,hsl(215_50%_18%),hsl(215_85%_45%))] text-white py-10 flex flex-col justify-between">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <GraduationCap size={28} />
            <h2 className="text-xl font-bold">Omega Tutorials</h2>
          </div>
          <p className="text-blue-100 leading-relaxed">Empowering students with quality education and personalized attention since 2010. Building strong academic foundations for Classes 6–12.</p>

          <div className="flex gap-4 mt-6">
            <div className="bg-gray-600/70 p-3 rounded-full hover:bg-blue-600/50 cursor-pointer"><Facebook size={18} />
            </div>
            <div className="bg-gray-600/70 p-3 rounded-full hover:bg-blue-600/50 cursor-pointer"><Instagram size={18} />
            </div>
            <div className="bg-gray-600/70 p-3 rounded-full hover:bg-blue-600/50 cursor-pointer"><Youtube size={18} />
            </div>
            <div className="bg-gray-600/70 p-3 rounded-full hover:bg-blue-600/50 cursor-pointer"><Twitter size={18} />
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <div className="flex flex-col text-blue-100 gap-2">
            <p className="hover:text-white cursor-pointer" onClick={() => handleScroll("/", "hero")}>Home</p>
            <p className="hover:text-white cursor-pointer" onClick={() => handleScroll("/about-us", "about-us")}>About Us</p>
            <p className="hover:text-white cursor-pointer" onClick={() => handleScroll("/courses", "courses")}>Courses</p>
            <p className="hover:text-white cursor-pointer" onClick={() => handleScroll("/results", "results")}>Results</p>
            <p className="hover:text-white cursor-pointer" onClick={() => handleScroll("/gallery", "gallery")}>Gallery</p>
            <p className="hover:text-white cursor-pointer" onClick={() => handleScroll("/contact", "contact")}>Contact</p>
          </div>
        </div>

        <div className="space-y-5">
          <h3 className="text-lg font-semibold">Our Courses</h3>
          <ul className="space-y-2 text-blue-100">
            <li>Classes 6–8 (Foundation)</li>
            <li>Classes 9–10 (Board Prep)</li>
            <li>Classes 11–12 (Science)</li>
            <li>Classes 11–12 (Commerce)</li>
          </ul>
        </div>

        <div className="space-y-5">
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <div className="space-y-3 text-blue-100">
            <p className="flex items-start gap-4"><MapPin size={18} />Sec 4 & 5 crossing, Old Railway Rd, near Panjiri Plant, Gurgoan, India</p>
            <p className="flex items-center gap-4"><Phone size={18} />+91 9868495901</p>
            <p className="flex items-center gap-4"><Mail size={18} />omegatutorials2@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 mt-10 pt-6 text-center text-blue-200 text-sm">© 2026 Omega Tutorials. All rights reserved.</div>

      {/* chat with us */}
      <div className="fixed bottom-6 right-6">
        <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-medium shadow-lg">Chat with us</button>
      </div>

    </div>
  );
};

export default Footer;