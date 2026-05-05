import { motion } from "motion/react";
import { Github, Instagram, Youtube, Twitter, ArrowRight, Download, Laptop, Code } from "lucide-react";

export default function Hero() {
  const stats = [
    { label: "Projects Completed", value: "40+" },
    { label: "Years Experience", value: "1+" },
    { label: "Happy Clients", value: "0+" },
  ];

  const socials = [
    { icon: <Github size={20} />, href: "https://github.com/your-username", name: "GitHub" },
    { icon: <Instagram size={20} />, href: "https://instagram.com/your-username", name: "Instagram" },
    { icon: <Youtube size={20} />, href: "https://youtube.com/@your-channel", name: "YouTube" },
    { icon: <Twitter size={20} />, href: "https://tiktok.com/@your-username", name: "TikTok" },
  ];

  return (
    <section id="home" className="min-h-screen pt-32 pb-20 px-6 flex items-center">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-neon-red font-display font-bold tracking-widest uppercase text-sm mb-4 block">
            Welcome
          </span>
          <h1 className="text-5xl md:text-7xl font-bold font-display leading-[1.1] mb-6">
            Hello Everyone <br /> I'm <span className="text-neon-red text-neon-glow">Ryan</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-xl mb-12 leading-relaxed">
            I am a web developer focused on building modern, responsive, and efficient websites. 
            With growing expertise in HTML, CSS, and JavaScript.
          </p>

          {/* Stats Bar */}
          <div className="grid grid-cols-3 gap-4 mb-12">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -5 }}
                className="glass p-6 rounded-2xl flex flex-col items-center text-center group"
              >
                <span className="text-3xl font-bold font-display text-neon-red mb-1 group-hover:text-neon-glow transition-all">
                  {stat.value}
                </span>
                <span className="text-[10px] uppercase tracking-tighter text-gray-500 font-bold">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-6 mb-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-neon-red text-white font-bold px-8 py-4 rounded-full flex items-center gap-2 group shadow-lg shadow-neon-red/20 hover:neon-glow transition-all"
            >
              Hire Me <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-neon-red text-neon-red font-bold px-8 py-4 rounded-full flex items-center gap-2 hover:bg-neon-red/10 transition-all"
            >
              Download CV <Download size={18} />
            </motion.button>
          </div>

          {/* Socials */}
          <div className="flex gap-6">
            {socials.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                whileHover={{ scale: 1.2, color: "#ff2a2a" }}
                className="text-gray-500 hover:text-neon-red hover:drop-shadow-[0_0_8px_rgba(255,42,42,0.8)] transition-all"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right Portrait */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative"
        >
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10"
          >
            <div className="glass p-4 rounded-3xl overflow-hidden relative group">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-white/5 relative">
                {/* Fallback pattern if image generation fails */}
                <div className="absolute inset-0 bg-gradient-to-br from-neon-red/20 to-transparent mix-blend-overlay" />
                <img 
                  src="https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=2070&auto=format&fit=crop" 
                  alt="Ryan Portrait" 
                  className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 transition-all duration-700" 
                />
              </div>

              {/* Floating Badges */}
              <motion.div
                animate={{ x: [0, 10, 0], y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 -left-6 glass px-4 py-2 rounded-full flex items-center gap-2 shadow-xl"
              >
                <div className="w-8 h-8 rounded-full bg-neon-red flex items-center justify-center">
                  <Laptop size={16} />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest">Responsive</span>
              </motion.div>

              <motion.div
                animate={{ x: [0, -10, 0], y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-12 -right-6 glass px-4 py-2 rounded-full flex items-center gap-2 shadow-xl"
              >
                <div className="w-8 h-8 rounded-full bg-neon-red flex items-center justify-center">
                  <Code size={16} />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest">Clean Code</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Decorative Glow elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-neon-red/20 blur-[120px] rounded-full -z-10" />
        </motion.div>
      </div>
    </section>
  );
}
