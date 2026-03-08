import { useState } from "react";
import Footer from "../components/Footer"
import Header from "../components/Header"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";
import { toast } from "react-toastify";
import WhatsappChat from "../components/WhatsappChat";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", classLevel: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Message Sent! We'll get back to you within 24 hours.");
  };
  
  return (
    <>
      <Header />

      <div className='pt-18'>         
        <div className="py-20 bg-[linear-gradient(135deg,hsl(215_50%_18%),hsl(215_85%_45%))]">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-white/10 text-white mb-4">Contact Us</span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Get in Touch</h1>
              <p className="text-white/80 max-w-2xl mx-auto">Have questions? We're here to help you start your academic journey.</p>
            </motion.div>
          </div>
        </div>

        <div className="py-20 bg-[hsl(210_33%_98%)]">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Form */}
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                {submitted ? (
                  <div className="bg-[hsl(145_63%_42%)]/10 rounded-xl p-12 text-center">
                    <CheckCircle className="h-16 w-16 text-[hsl(145_63%_42%)] mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">Thank You!</h3>
                    <p className="text-[hsl(215_15%_50%)]">We've received your message and will contact you within 24 hours.</p>
                    <button className="mt-6 p-3 bg-[hsl(145_63%_42%)] text-white rounded-xl hover:bg-[hsl(145_63%_42%)]/90" onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", classLevel: "", message: "" }); }}>
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Full Name *</label>
                      <input className="flex h-10 w-full rounded-md border border-[hsl(214_25%_90%)] bg-[hsl(210_33%_98%)] px-3 py-2 text-base ring-offset-[hsl(210_33%_98%)] file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-[hsl(215_30%_15%)] placeholder:text-[hsl(215_15%_50%)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:text-sm" placeholder="Enter your full name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required/>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Phone Number *</label>
                      <input className="flex h-10 w-full rounded-md border border-[hsl(214_25%_90%)] bg-[hsl(210_33%_98%)] px-3 py-2 text-base ring-offset-[hsl(210_33%_98%)] file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-[hsl(215_30%_15%)] placeholder:text-[hsl(215_15%_50%)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:text-sm" required type="tel" placeholder="+91 9868495901" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Class *</label>
                      <select className="flex h-10 w-full rounded-md border border-[hsl(214_25%_90%)] bg-[hsl(210_33%_98%)] px-3 py-2 text-base ring-offset-[hsl(210_33%_98%)] file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-[hsl(215_30%_15%)] placeholder:text-[hsl(215_15%_50%)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:text-sm" value={form.classLevel} onChange={(e) => setForm({ ...form, classLevel: e.target.value })} required>
                        <option value="">Select Class</option>
                        <option value="Class 1">Class 1</option>
                        <option value="Class 2">Class 2</option>
                        <option value="Class 3">Class 3</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Message</label>
                      <textarea className="flex min-h-[80px] w-full rounded-md border border-[hsl(214_25%_90%)] bg-[hsl(210_33%_98%)] px-3 py-2 text-sm ring-offset-[hsl(210_33%_98%)] placeholder:text-[hsl(215_15%_50%)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Tell us about your requirements..." rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
                    </div>
                    <button type="submit" className="w-full bg-[linear-gradient(135deg,hsl(215_85%_45%),hsl(205_80%_60%))] text-white font-bold shadow-[0_2px_20px_-4px_hsl(215_85%_45%_/_0.12)] inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium h-12 duration-300">
                      <Send className="mr-2 h-4 w-4" /> Send Message
                    </button>
                  </form>
                )}
              </motion.div>

              {/* Info + Map */}
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                  <div className="space-y-5">
                    {[
                      { icon: MapPin, label: "Visit Us", value: "Sec 4 & 5 crossing, Old Railway Rd, near Panjiri Plant, Gurgoan, India", link: "https://www.google.com/maps/place/Omega+Tutorials+-+Sector+4,+Gurgaon/@28.4736117,77.0066784,17z/data=!3m1!4b1!4m6!3m5!1s0x390d178506a7fbcf:0x173b0a33e7453e18!8m2!3d28.4736117!4d77.0092533!16s%2Fg%2F11n53fkb5v" },
                      { icon: Phone, label: "Call Us", value: "+91 9868495901", link: "tel:+919868495901" },
                      { icon: Mail, label: "Email Us", value: "omegatutorials2@gmail.com", link: "mailto:omegatutorials2@gmail.com?subject=Course%20Enquiry" },
                    ].map((item, i) => (
                      <a key={i} href={item.link} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 hover:opacity-80 transition">
                        <div className="w-10 h-10 rounded-lg bg-[linear-gradient(135deg,hsl(215_85%_45%),hsl(205_80%_60%))] flex items-center justify-center shrink-0">
                          <item.icon className="h-5 w-5 text-white" />
                        </div>

                        <div>
                          <p className="text-sm font-medium text-[hsl(215_15%_50%)]">
                            {item.label}
                          </p>
                          <p className="font-medium break-words">{item.value}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Map */}
                <div className="rounded-xl overflow-hidden shadow-[0_4px_24px_-6px_hsl(215_85%_45%_/_0.10)]">
                  <iframe src="https://www.google.com/maps?q=28.4736117,77.0092533&z=16&output=embed" width="100%" height="300" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Omega Tutorials Location" />
                </div>

                <div className="bg-white rounded-xl p-6 shadow-[0_4px_24px_-6px_hsl(215_85%_45%_/_0.10)]">
                  <h3 className="font-semibold mb-3">Coaching Hours</h3>
                  <div className="space-y-2 text-sm text-[hsl(215_15%_50%)]">
                    <div className="flex justify-between"><span>Monday – Saturday</span><span className="font-medium text-[hsl(215_30%_15%)]">8:00 AM – 8:00 PM</span></div>
                    <div className="flex justify-between"><span>Sunday</span><span className="font-medium text-[hsl(215_30%_15%)]">10:00 AM – 2:00 PM</span></div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <WhatsappChat />
      <Footer />
    </>
  )
}

export default Contact