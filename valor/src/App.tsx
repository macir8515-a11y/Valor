import { useState, useRef, ChangeEvent } from "react";
import { Instagram, MessageCircle, Star, ShieldCheck, Clock, MapPin, Phone, Upload } from "lucide-react";
import { motion } from "motion/react";
import { EtheralShadow } from "./components/ui/etheral-shadow";

export default function App() {
  const [aboutImage, setAboutImage] = useState("https://images.unsplash.com/photo-1590674852885-2c645e69e627?q=80&w=1000&auto=format&fit=crop");
  const [galleryImages, setGalleryImages] = useState([
    "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1512314889357-e157c22f938d?q=80&w=500&auto=format&fit=crop"
  ]);

  const aboutInputRef = useRef<HTMLInputElement>(null);
  const galleryInputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>, index?: number) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (index !== undefined) {
          const newGallery = [...galleryImages];
          newGallery[index] = reader.result as string;
          setGalleryImages(newGallery);
        } else {
          setAboutImage(reader.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-[#12100e] text-white font-sans selection:bg-[#C5A059] selection:text-black">
      {/* Navigation Header */}
      <header className="fixed top-0 w-full z-50 px-6 md:px-24 py-6 flex justify-between items-center bg-[#12100e]/80 backdrop-blur-md border-b border-[#C5A059]/10">
        <div className="text-xl font-medium tracking-[0.4em] text-[#C5A059]">VALOR</div>
        <nav className="hidden md:flex gap-12 text-[10px] uppercase tracking-[0.4em] text-gray-300">
          <a href="#about" className="hover:text-[#C5A059] transition-colors">About</a>
          <a href="#services" className="hover:text-[#C5A059] transition-colors">Services</a>
          <a href="#contacts" className="hover:text-[#C5A059] transition-colors">Contacts</a>
        </nav>
        <div className="md:hidden">
          <a href="https://wa.me/35795985100">
            <MessageCircle size={20} className="text-[#C5A059]" />
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <EtheralShadow
            color="rgba(197, 160, 89, 0.15)"
            animation={{ scale: 100, speed: 90 }}
            noise={{ opacity: 1, scale: 1.2 }}
            sizing="fill"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#12100e]/50 to-[#12100e]" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs uppercase tracking-[0.4em] text-[#C5A059] mb-6 block">restoration & care</span>
            <h1 className="text-5xl md:text-8xl font-light tracking-tighter mb-8 leading-none">
              VALOR
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              Professional restoration of branded items, bags, and shoes. We bring back the original beauty of your Chanel, Dior, and Prada.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="https://wa.me/35795985100" 
                className="w-full sm:w-auto px-8 py-4 bg-[#C5A059] text-black text-sm font-medium uppercase tracking-widest hover:bg-[#d4b06a] transition-all duration-300 flex items-center justify-center gap-2"
              >
                <MessageCircle size={18} />
                Write in WhatsApp
              </a>
              <a 
                href="https://www.instagram.com/" 
                className="w-full sm:w-auto px-8 py-4 border border-[#C5A059]/30 text-white text-sm font-medium uppercase tracking-widest hover:bg-[#C5A059]/10 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Instagram size={18} />
                Go to Instagram
              </a>
            </div>
          </motion.div>
        </div>
      </section>


      {/* About Section */}
      <section id="about" className="py-24 px-6 md:px-24 bg-[#1a1614]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[#C5A059] mb-4 block">Our Approach</span>
            <h2 className="text-3xl md:text-5xl font-light mb-8 leading-tight">Aesthetic of care and <span className="text-[#C5A059]">perfection</span>.</h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              At VALOR, we believe that luxury items deserve a second life. Our studio combines traditional craftsmanship with modern technology to restore your most precious belongings.
            </p>
            <p className="text-gray-400 leading-relaxed">
              We focus on trust and comfort, providing an individual approach to every client. Your items are handled with the utmost care in a sterile, professional environment.
            </p>
          </div>
          <div className="aspect-[4/5] bg-gray-900 overflow-hidden relative group border border-[#C5A059]/10">
            <img 
              src={aboutImage} 
              alt="Studio Atmosphere" 
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 border border-[#C5A059]/20 m-4"></div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button 
                onClick={() => aboutInputRef.current?.click()}
                className="bg-[#C5A059] text-black px-4 py-2 text-xs font-medium uppercase tracking-widest flex items-center gap-2"
              >
                <Upload size={14} />
                Upload Photo
              </button>
              <input 
                type="file" 
                ref={aboutInputRef} 
                className="hidden" 
                accept="image/*"
                onChange={(e) => handleImageUpload(e)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 md:px-24 bg-[#12100e]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-[#C5A059] mb-4 block">Services</span>
            <h2 className="text-3xl md:text-5xl font-light">Our <span className="italic font-serif">Expertise</span></h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Shoe Restoration", desc: "Full cleaning, painting, and heel prevention for your luxury footwear." },
              { title: "Bag Care", desc: "Professional cleaning and restoration of leather and suede bags." },
              { title: "Color Recovery", desc: "Suede and leather color restoration using premium dyes." }
            ].map((service, i) => (
              <div key={i} className="p-8 border border-[#C5A059]/10 bg-[#1a1614] hover:border-[#C5A059]/40 transition-colors duration-300">
                <h3 className="text-xl font-light mb-4 uppercase tracking-wider">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="aspect-square bg-gray-900 border border-[#C5A059]/10 flex items-center justify-center group overflow-hidden relative">
                <img 
                  src={img} 
                  alt="Work Sample" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button 
                    onClick={() => galleryInputRefs.current[i]?.click()}
                    className="bg-[#C5A059] text-black p-2 rounded-full"
                  >
                    <Upload size={16} />
                  </button>
                  <input 
                    type="file" 
                    ref={el => galleryInputRefs.current[i] = el} 
                    className="hidden" 
                    accept="image/*"
                    onChange={(e) => handleImageUpload(e, i)}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 grid md:grid-cols-2 gap-12">
            <div className="space-y-6 p-8 border border-[#C5A059]/5 bg-[#1a1614]">
              <h4 className="text-lg uppercase tracking-widest border-b border-[#C5A059]/20 pb-4 text-[#C5A059]">Shoes Care</h4>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400">Full Clean & Care</span>
                <span className="text-[#C5A059]">40€</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400">Leather Painting / Suede Dyeing</span>
                <span className="text-[#C5A059]">from 45€</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400">Sole Whitening</span>
                <span className="text-[#C5A059]">12€</span>
              </div>
            </div>
            <div className="space-y-6 p-8 border border-[#C5A059]/5 bg-[#1a1614]">
              <h4 className="text-lg uppercase tracking-widest border-b border-[#C5A059]/20 pb-4 text-[#C5A059]">Bags & Accessories</h4>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400">Professional Bag Cleaning</span>
                <span className="text-[#C5A059]">from 45€</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400">Cleanse, Moisturize & Touch-up</span>
                <span className="text-[#C5A059]">100 - 150€</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400">Complete Repaint / Complex Restoration</span>
                <span className="text-[#C5A059]">from 200€</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-6 md:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-light mb-4">How it <span className="italic font-serif text-[#C5A059]">works</span></h2>
            <p className="text-gray-500 uppercase tracking-widest text-[10px]">Simple steps to perfection</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Record", desc: "Contact us via WhatsApp or Instagram" },
              { step: "02", title: "Consultation", desc: "Detailed analysis of your item" },
              { step: "03", title: "Procedure", desc: "Professional restoration process" },
              { step: "04", title: "Result", desc: "Your item is ready for a new life" }
            ].map((item, i) => (
              <div key={i} className="relative">
                <span className="text-6xl font-serif italic text-[#C5A059]/10 absolute -top-8 -left-4">{item.step}</span>
                <h3 className="text-lg uppercase tracking-widest mb-4 relative z-10">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-24 px-6 md:px-24 bg-[#12100e]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Elena", text: "Restored my vintage Chanel bag. The result exceeded all expectations. It looks brand new!" },
              { name: "Alexander", text: "Excellent service for expensive shoes. Professional approach and attention to detail." },
              { name: "Maria", text: "The best restoration studio in Limassol. Very polite staff and high-quality work." }
            ].map((review, i) => (
              <div key={i} className="p-8 bg-[#1a1614] border border-[#C5A059]/10">
                <div className="flex gap-1 mb-4 text-[#C5A059]/60">
                  {[1, 2, 3, 4, 5].map(s => <Star key={s} size={12} fill="currentColor" />)}
                </div>
                <p className="text-sm text-gray-400 italic mb-6 leading-relaxed">"{review.text}"</p>
                <span className="text-xs uppercase tracking-widest text-gray-500">— {review.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-6 md:px-24 bg-[#1a1614]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { icon: <ShieldCheck size={32} />, title: "Quality", text: "Premium materials only" },
              { icon: <Clock size={32} />, title: "Experience", text: "Years of craftsmanship" },
              { icon: <Star size={32} />, title: "Individual", text: "Personal approach" },
              { icon: <MapPin size={32} />, title: "Comfort", text: "Convenient recording" }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="text-[#C5A059] mb-6">{item.icon}</div>
                <h3 className="text-sm uppercase tracking-widest mb-2 text-gray-300">{item.title}</h3>
                <p className="text-xs text-gray-500">{item.text}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-20 flex justify-center gap-12 text-[10px] uppercase tracking-[0.2em] text-[#C5A059]/40">
            <span>Experience</span>
            <span>Quality</span>
            <span>Comfort</span>
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-24 px-6 md:px-24 bg-[#1a1614] border-t border-[#C5A059]/10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-5xl font-light mb-12">Visit our <span className="italic font-serif text-[#C5A059]">studio</span></h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <MapPin className="text-[#C5A059] shrink-0" />
                <div>
                  <p className="text-sm uppercase tracking-widest mb-1 text-gray-500">Address</p>
                  <p className="text-gray-300 text-sm">Limassol, Cyprus Anexartisias 30, 3036 shop 39</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="text-[#C5A059] shrink-0" />
                <div>
                  <p className="text-sm uppercase tracking-widest mb-1 text-gray-500">Opening Hours</p>
                  <p className="text-gray-300 text-sm">Mon - Fri: 10:00 - 18:00<br/>Sat - Sun: 11:00 - 15:30</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="text-[#C5A059] shrink-0" />
                <div>
                  <p className="text-sm uppercase tracking-widest mb-1 text-gray-500">Phone</p>
                  <p className="text-gray-300 text-sm">+357 95985100</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-6">
            <a 
              href="https://wa.me/35795985100" 
              className="w-full px-8 py-6 bg-[#C5A059] text-black text-sm font-medium uppercase tracking-widest hover:bg-[#d4b06a] transition-all duration-300 flex items-center justify-center gap-4 shadow-lg shadow-[#C5A059]/10"
            >
              <MessageCircle size={20} />
              Book via WhatsApp
            </a>
            <a 
              href="https://www.instagram.com/" 
              className="w-full px-8 py-6 border border-[#C5A059]/30 text-white text-sm font-medium uppercase tracking-widest hover:bg-[#C5A059]/10 transition-all duration-300 flex items-center justify-center gap-4"
            >
              <Instagram size={20} />
              Follow on Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-24 border-t border-white/5 text-[10px] uppercase tracking-[0.2em] text-gray-600">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <p>© 2026 VALOR STUDIO. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <button className="hover:text-white transition-colors">Privacy Policy</button>
            <button className="hover:text-white transition-colors">Terms of Consent</button>
            <button className="hover:text-white transition-colors">Cookie Policy</button>
          </div>
        </div>
      </footer>
    </div>
  );
}
