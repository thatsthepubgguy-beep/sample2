import React, { useState } from "react";
import { motion } from "motion/react";
import { Code2, Monitor, Phone, Cpu, FileJson, Layers, ExternalLink } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 }
};

export default function Content() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };
  const services = [
    { icon: <Monitor size={32} />, title: "UI/UX Design", desc: "Creating visually stunning and user-centric designs for digital products." },
    { icon: <Code2 size={32} />, title: "Web Development", desc: "Building high-performance, scalable websites with the latest technologies." },
    { icon: <Phone size={32} />, title: "App Design", desc: "Crafting intuitive mobile application interfaces for iOS and Android." },
  ];

  const projects = [
    { title: "Metaverse Dashboard", category: "Web Design", image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1974&auto=format&fit=crop", link: "https://project-one.ryan.dev" },
    { title: "Cyber Banking App", category: "UI/UX", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop", link: "https://project-two.ryan.dev" },
    { title: "AI Image SaaS", category: "Development", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop", link: "https://project-three.ryan.dev" },
  ];

  const skills = [
    { name: "React / Next.js", level: "90%", icon: <Layers size={20} /> },
    { name: "JavaScript / TS", level: "85%", icon: <FileJson size={20} /> },
    { name: "Tailwind CSS", level: "95%", icon: <Cpu size={20} /> },
  ];

  return (
    <div className="space-y-32 pb-40 px-6">
      {/* Services Section */}
      <section id="service" className="max-w-7xl mx-auto">
        <motion.div {...fadeIn} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">What I <span className="text-neon-red">Offer</span></h2>
          <div className="w-20 h-1 bg-neon-red mx-auto rounded-full" />
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              {...fadeIn}
              transition={{ delay: i * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="glass p-10 rounded-2xl group cursor-default"
            >
              <div className="text-neon-red mb-6 transition-transform group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(255,42,42,0.5)]">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold font-display mb-4">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="project" className="max-w-7xl mx-auto">
        <motion.div {...fadeIn} className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">Latest <span className="text-neon-red">Projects</span></h2>
            <p className="text-gray-400">Successfully delivered premium digital experiences.</p>
          </div>
          <button className="text-neon-red font-bold flex items-center gap-2 group">
            View All Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              {...fadeIn}
              transition={{ delay: i * 0.2 }}
              className="group relative rounded-2xl overflow-hidden glass aspect-video"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-matte-black/90 to-transparent flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0 transition-transform">
                <span className="text-neon-red text-xs font-bold uppercase tracking-widest mb-2">{project.category}</span>
                <h3 className="text-2xl font-bold font-display flex items-center justify-between">
                  {project.title}
                  <ExternalLink size={20} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skill" className="max-w-4xl mx-auto">
        <motion.div {...fadeIn} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">Professional <span className="text-neon-red">Skills</span></h2>
        </motion.div>

        <div className="space-y-8">
          {skills.map((skill, i) => (
            <motion.div 
              key={skill.name} 
              {...fadeIn} 
              transition={{ delay: i * 0.1 }}
              className="relative"
            >
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-neon-red">{skill.icon}</span>
                  <span className="font-bold tracking-tight">{skill.name}</span>
                </div>
                <span className="text-neon-red font-display font-bold">{skill.level}</span>
              </div>
              <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: skill.level }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  className="h-full bg-neon-red shadow-[0_0_10px_#ff2a2a]"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-5xl mx-auto glass p-12 md:p-20 rounded-3xl relative overflow-hidden">
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div {...fadeIn}>
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">Let's <span className="text-neon-red">Work</span> Together!</h2>
            <p className="text-gray-400 mb-8 max-w-md italic">
              "Every great design begins with an even better story. Let's make yours unforgettable."
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-neon-red"><Phone size={20} /></div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase">Call Me</p>
                  <p className="font-bold">+1 (234) 567-890</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-neon-red"><Monitor size={20} /></div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase">Email Me</p>
                  <p className="font-bold">hello@ryan.dev</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.form 
            {...fadeIn} 
            transition={{ delay: 0.2 }} 
            className="space-y-6"
            onSubmit={handleSubmit}
          >
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase text-gray-500 ml-2">Name</label>
              <input 
                type="text" 
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-neon-red focus:neon-glow transition-all" 
                placeholder="Your Name" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase text-gray-500 ml-2">Email</label>
              <input 
                type="email" 
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-neon-red focus:neon-glow transition-all" 
                placeholder="Your Email" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase text-gray-500 ml-2">Message</label>
              <textarea 
                rows={4} 
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-neon-red focus:neon-glow transition-all resize-none" 
                placeholder="Your Message"
              ></textarea>
            </div>
            <button 
              disabled={status === "loading"}
              className={`w-full bg-neon-red text-white py-4 rounded-2xl font-bold hover:neon-glow transition-all disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>
            
            {status === "success" && (
              <p className="text-green-500 text-center font-bold text-sm">Message sent successfully!</p>
            )}
            {status === "error" && (
              <p className="text-neon-red text-center font-bold text-sm">Something went wrong. Please try again.</p>
            )}
          </motion.form>
        </div>
        
        {/* Background decorative glow */}
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-neon-red/10 blur-[100px] -z-0" />
      </section>
    </div>
  );
}

function ArrowRight({ size, className }: { size: number; className?: string }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth={2} 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}
