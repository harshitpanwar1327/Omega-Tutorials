import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import ClipLoader from "react-spinners/ClipLoader";
import emailjs from "@emailjs/browser";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase/Firebase";
import { Helmet } from "react-helmet-async";

const contactInfo = [
  {
    icon: Phone,
    label: "Call Us",
    value: "+91 9868495901",
    link: "tel:+919868495901"
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "omegatutorials2@gmail.com",
    link: "mailto:omegatutorials2@gmail.com?subject=Course%20Enquiry"
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: "Omega Tutorials - Sector 4, First Floor, Huda Market, SCF - 33, above Kotak Mahindra Bank, Gurugram, Haryana 122001, India",
    link: "https://maps.app.goo.gl/VyPr8bBJYi5QULEv9",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.1968972820323!2d77.00667301065803!3d28.473616391179057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d178506a7fbcf%3A0x173b0a33e7453e18!2sOmega%20Tutorials%20-%20Sector%204%2C%20Gurgaon!5e0!3m2!1sen!2sus!4v1773732620755!5m2!1sen!2sus"
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: "Omega Tutorials - Railway Road, Gurugram, Haryana 122001, India",
    link: "https://maps.app.goo.gl/2wRFWpjZBsa8BfhU8",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1180.3656794312742!2d77.01261351615211!3d28.48216430024555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d93b2bab9f%3A0x5c70f660ecd2e06f!2sOmega%20Tutorials%20-%20Railway%20Road%2C%20Gurgaon!5e0!3m2!1sen!2sus!4v1773732535981!5m2!1sen!2sus"
  },
];

type ContactForm = {
  name: string;
  phone: string;
  school: string;
  class: string;
  message: string;
};

const Contact = () => {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactForm>();

  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit = async (data: ContactForm) => {
    try {
      setLoading(true);
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        {
          email: user.email,
          name: data.name,
          phone: data.phone,
          school: data.school,
          class: data.class,
          message: data.message
        },
        import.meta.env.VITE_PUBLIC_KEY
      );
      setLoading(false);
      setSubmitted(true);
      reset();
    } catch (error) {
      setLoading(false);
      console.log(error);
      toast.error("Message Not Sent! Please try again later.");
    }
  };
  
  return (
    <>
      <Helmet>
        <title>Contact Omega Tutorials | Best Coaching Institute in Gurugram</title>
        <meta  name="description" content="Contact Omega Tutorials in Gurugram for Class 9–12, IIT-JEE & NEET coaching. Call, visit our centers, or send enquiry online." />
        <meta name="keywords" content="Omega Tutorials contact, coaching institute Gurugram contact, tuition near me, IIT JEE coaching Gurgaon contact, NEET coaching Gurgaon" />
        <meta property="og:title" content="Contact Omega Tutorials Gurugram" />
        <meta property="og:description" content="Get in touch with Omega Tutorials for admissions, fees, and course details." />
        <meta property="og:type" content="website" />
        <meta name="geo.region" content="IN-HR" />
        <meta name="geo.placename" content="Gurugram" />
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
          <div className="self-center px-4 py-2 rounded-full text-xs font-semibold tracking-wider bg-white/10 text-white">CONTACT US</div>
          <h1 className="text-4xl font-bold text-white">Contact Omega Tutorials – Best Coaching Institute in Gurugram</h1>
          <p className="text-white/80">Looking for the best coaching institute in Gurugram? Contact Omega Tutorials today for expert guidance in Classes 9–12, IIT-JEE, and NEET preparation. Visit our centers in Sector 4 and Railway Road or call us for admission details.</p>
        </motion.div>
      </div>

      <div className="py-12 lg:py-24 px-4 lg:px-16 grid lg:grid-cols-2 gap-16">
        {/* Contact Form */}
        <motion.div className="flex flex-col gap-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            staggerChildren: 0.2
          }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold">Send Us a Message</h2>
          {submitted ? (
            <div className="bg-[hsl(145_63%_42%)]/10 rounded-xl p-16 text-center flex flex-col items-center gap-4">
              <CheckCircle className="h-16 w-16 text-[hsl(145_63%_42%)]" />
              <h3 className="text-xl font-bold mb-2">Thank You!</h3>
              <p className="text-[hsl(215_15%_50%)]">We've received your message and will contact you within 24 hours.</p>
              <button className="px-4 py-3 bg-[hsl(145_63%_42%)] text-white rounded-xl hover:bg-[hsl(145_63%_42%)]/90" onClick={() => { setSubmitted(false); }}>
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <label htmlFor="name" className="text-xs">Full Name <span className="text-red-500">*</span></label>
                <input id="name" className="flex w-full rounded-xl border border-gray-200 bg-white py-2 px-3" placeholder="Enter your full name" required
                  {...register("name", {
                    required: "Name is required",
                    pattern: {
                      value: /^[A-Za-z\s]{3,50}$/,
                      message: "Name should contain only letters and atleast to letters"
                    }
                  })}
                />
                {errors.name && (<p className="text-red-500 text-xs">{errors.name.message}</p>)}
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="phone" className="text-xs">Phone Number <span className="text-red-500">*</span></label>
                <input id="phone" className="flex w-full rounded-xl border border-gray-200 bg-white py-2 px-3" type="tel" inputMode="numeric" maxLength={13} placeholder="+91 XXXXX XXXXX" required
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^(\+91[-\s]?)?[6-9]\d{9}$/,
                      message: "Enter a valid phone number"
                    }
                  })}
                />
                {errors.phone && (<p className="text-red-500 text-xs">{errors.phone.message}</p>)}
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="school" className="text-xs">School Name <span className="text-red-500">*</span></label>
                <input id="school" className="flex w-full rounded-xl border border-gray-200 bg-white py-2 px-3" type="text" placeholder="e.g., Kendriya Vidyalaya" required
                  {...register("school", {
                    required: "School name is required"
                  })}
                />
                {errors.school && (<p className="text-red-500 text-xs">{errors.school.message}</p>)}
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="class" className="text-xs">Class <span className="text-red-500">*</span></label>
                <select id="class" className="flex w-full rounded-xl border border-gray-200 bg-white py-2 px-3" required
                  {...register("class", {
                    required: "Please select a class"
                  })}
                >
                  <option value="">Select Class</option>
                  <option value="Class 9th">Class 9th</option>
                  <option value="Class 10th">Class 10th</option>
                  <option value="Class 11th">Class 11th</option>
                  <option value="Class 12th">Class 12th</option>
                </select>
                {errors.class && (<p className="text-red-500 text-xs">{errors.class.message}</p>)}
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="message" className="text-xs">Message</label>
                <textarea id="message" className="flex w-full rounded-xl border border-gray-200 bg-white px-3 py-2" placeholder="Tell us about your requirements..." rows={4} {...register("message")} />
              </div>
              <button type="submit" className="w-full bg-[linear-gradient(135deg,hsl(215_85%_45%),hsl(205_80%_60%))] text-white font-bold shadow-[0_2px_20px_-4px_hsl(215_85%_45%/0.12)] flex items-center justify-center gap-2 p-3 rounded-xl hover:scale-102 transition duration-300" aria-label="Send Message">
                {loading ? <ClipLoader size={18} color="#ffffff" />: <><Send className="h-4 w-4" /> Send Message</>}
              </button>
            </form>
          )}
        </motion.div>

        <motion.div className="flex flex-col gap-6"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            staggerChildren: 0.2
          }}
          viewport={{ once: true }}
        >
          {/* Contact Information */}
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold">Contact Information</h2>
            <div className="flex flex-col gap-4">
              {contactInfo.map((item, i) => (
                <div key={i}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:opacity-90 transition duration-300">
                    <div className="w-10 h-10 rounded-lg bg-[linear-gradient(135deg,hsl(215_85%_45%),hsl(205_80%_60%))] flex items-center justify-center shrink-0">
                      <item.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">{item.label}</p>
                      <p className="text-sm font-medium wrap-break-word">{item.value}</p>
                    </div>
                  </a>

                  {item.mapEmbed && (
                    <div className="rounded-xl overflow-hidden shadow-[0_4px_24px_-6px_hsl(215_85%_45%/0.10)]">
                      <iframe
                        src={item.mapEmbed}
                        width="100%"
                        height="250"
                        style={{ border: 0 }}
                        loading="lazy"
                        title={`Map ${i}`}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Coaching Hours */}
          <div className="bg-white rounded-xl p-6 shadow-[0_4px_24px_-6px_hsl(215_85%_45%/0.10)] flex flex-col gap-4">
            <h3 className="font-semibold">Coaching Hours</h3>
            <div className="flex items-center justify-between gap-4 text-sm text-[hsl(215_15%_50%)]">
              <span>Monday – Saturday</span>
              <span className="text-black">3:30 PM – 8:30 PM</span>
            </div>
            <div className="flex items-center justify-between gap-4 text-sm text-[hsl(215_15%_50%)]">
              <span>Sunday</span>
              <span className="text-black">09:00 AM – 12:30 PM</span>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  )
}

export default Contact