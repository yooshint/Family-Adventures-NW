import { motion } from "framer-motion";
import { Mountain, Mail, Instagram, Trees, Compass, ArrowRight, HeartHandshake, MapPin, ImageIcon } from "lucide-react";

export default function Home() {
  const heroImageUrl = `${import.meta.env.BASE_URL}images/hero-bg.png`;
  const galleryImages = [
    { src: `${import.meta.env.BASE_URL}images/photo-jingoo.jpg`, alt: "A child hanging fearlessly over a creek on a rope traverse" },
    { src: `${import.meta.env.BASE_URL}images/photo-sean.jpg`, alt: "A child swinging over a creek with family cheering from the bank" },
    { src: `${import.meta.env.BASE_URL}images/photo-lake.jpg`, alt: "Stunning alpine lake with driftwood and mountain cliffs in Washington" },
    { src: `${import.meta.env.BASE_URL}images/photo-mountain.jpg`, alt: "Hiker on a rocky ridge with dramatic Pacific Northwest mountain peaks" },
    { src: `${import.meta.env.BASE_URL}images/photo-sunset.jpg`, alt: "Serene sunset reflection of evergreens on a calm alpine lake" },
  ];

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  return (
    <div className="min-h-screen flex flex-col w-full overflow-hidden bg-background">
      
      {/* HEADER */}
      <header className="absolute top-0 left-0 right-0 z-50 px-6 py-6 md:px-12 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 text-primary"
        >
          <div className="bg-primary/10 p-2.5 rounded-xl text-primary backdrop-blur-md border border-primary/10">
            <Trees className="w-6 h-6" />
          </div>
          <span className="font-display font-bold text-xl md:text-2xl text-foreground tracking-tight drop-shadow-sm truncate hidden sm:inline-block">
            Family Adventures Northwest
          </span>
          <span className="font-display font-bold text-xl text-foreground tracking-tight drop-shadow-sm inline-block sm:hidden">
            Family Adventures NW
          </span>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="hidden md:flex"
        >
          <a 
            href="mailto:familyadventuresnw@gmail.com"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 hover:-translate-y-0.5 bg-background/50 hover:bg-background backdrop-blur-md border border-border shadow-sm hover:shadow-md text-foreground"
          >
            <Mail className="w-4 h-4" />
            <span>Contact Us</span>
          </a>
        </motion.div>
      </header>

      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center pt-24 px-4 sm:px-6 lg:px-8">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            src={heroImageUrl} 
            alt="Misty Pacific Northwest mountain landscape with soft light" 
            className="w-full h-full object-cover object-center animate-in fade-in duration-1000 zoom-in-105"
          />
          {/* Gradients to blend image softly into background */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80"></div>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-4xl mx-auto text-center mt-12"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 backdrop-blur-md border border-secondary-foreground/10 text-secondary-foreground mb-8 shadow-sm animate-gentle-pulse">
            <Compass className="w-4 h-4" />
            <span className="text-sm font-semibold tracking-wide uppercase font-sans">Coming Soon</span>
          </motion.div>
          
          <motion.h1 
            variants={fadeUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-[1.1] md:leading-[1.05] tracking-tight mb-6"
          >
            Empowering Families Through <span className="text-primary relative inline-block">
              Everyday Adventures
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-accent/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
              </svg>
            </span>
          </motion.h1>
          
          <motion.p 
            variants={fadeUp}
            className="text-lg md:text-xl text-muted-foreground max-w-prose mx-auto leading-relaxed mb-10 font-sans"
          >
            Something beautiful is on the way. We are getting ready to launch our full platform to connect, empower, and support immigrant families in the Pacific Northwest.
          </motion.p>
          
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="mailto:familyadventuresnw@gmail.com"
              className="group flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-primary-foreground bg-primary shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-1 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              <span>Get in touch</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* MISSION STATEMENT SECTION */}
      <section className="relative z-10 py-28 md:py-36 px-4 sm:px-6 lg:px-8 bg-background">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto"
        >
          <div className="relative bg-card rounded-3xl p-8 md:p-16 shadow-xl shadow-black/5 border border-border/50 overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
            
            <motion.div variants={fadeUp} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center mb-8 rotate-3">
                <HeartHandshake className="w-8 h-8 text-primary" />
              </div>
              
              <h2 className="text-sm font-bold font-display tracking-widest uppercase text-accent mb-6">Our Mission</h2>
              
              <blockquote className="text-2xl md:text-3xl lg:text-4xl font-display font-medium leading-tight text-foreground text-center">
                “Family Adventures Northwest empowers immigrant families through meaningful, multi-generational outdoor and experiential learning activities, fostering character education, servant leadership, and connection with local communities. In collaboration with intersectional partners, we create culturally inclusive programs that nurture the physical, relational, emotional, and spiritual needs of every family.”
              </blockquote>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* PHOTO GALLERY */}
      <section className="relative z-10 py-28 md:py-36 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={fadeUp} className="text-center mb-14">
            <h2 className="text-sm font-bold font-display tracking-widest uppercase text-accent mb-4">Adventures Await</h2>
            <p className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Life is better outdoors, together.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-col gap-4 md:gap-6">
            {/* Top row: 2 large activity photos side by side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {galleryImages.slice(0, 2).map((img, i) => (
                <motion.div 
                  key={i} 
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: i * 0.1 } }
                  }}
                  className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-muted border border-border/50 shadow-md group"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </div>
            {/* Bottom row: 3 landscape photos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {galleryImages.slice(2).map((img, i) => (
                <motion.div 
                  key={i + 2} 
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: (i + 2) * 0.1 } }
                  }}
                  className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-muted border border-border/50 shadow-md group"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-10 text-center">
            <div className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-card border border-border shadow-sm text-sm text-muted-foreground font-sans">
              <ImageIcon className="w-4 h-4 text-primary shrink-0" />
              <span>Want to share your own photos? Send them to <a href="mailto:familyadventuresnw@gmail.com" className="text-primary font-medium hover:underline">familyadventuresnw@gmail.com</a> and we'll feature them here!</span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* COMING SOON / STAY CONNECTED */}
      <section className="relative z-10 py-28 md:py-36 px-4 sm:px-6 lg:px-8 bg-muted/30 border-t border-border/50">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div variants={fadeUp}>
            <Mountain className="w-12 h-12 text-primary mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
              Join us on this journey.
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto font-sans">
              Our full website is currently under construction. We'd love for you to stay connected and be the first to know when we launch our new programs.
            </p>
          </motion.div>
          
          <motion.div variants={fadeUp} className="flex flex-col items-center gap-4 w-full">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
              <a 
                href="mailto:familyadventuresnw@gmail.com"
                className="flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-xl font-semibold bg-card text-foreground border-2 border-border shadow-sm hover:border-primary/30 hover:bg-primary/5 hover:-translate-y-1 transition-all duration-300"
              >
                <Mail className="w-5 h-5 text-primary" />
                <span>familyadventuresnw@gmail.com</span>
              </a>
              
              <a 
                href="#"
                onClick={(e) => e.preventDefault()}
                className="flex items-center justify-center w-full sm:w-auto p-4 rounded-xl font-semibold bg-card text-foreground border-2 border-border shadow-sm hover:border-accent/30 hover:bg-accent/5 hover:-translate-y-1 transition-all duration-300 group"
                title="Instagram (Coming Soon)"
              >
                <Instagram className="w-6 h-6 text-muted-foreground group-hover:text-accent transition-colors" />
              </a>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full sm:w-auto px-6 py-4 rounded-xl bg-card border-2 border-border shadow-sm text-muted-foreground mt-4">
              <MapPin className="w-5 h-5 text-primary shrink-0" />
              <div className="text-left font-sans">
                <p className="font-medium text-foreground text-sm">Our Location</p>
                <p className="text-sm">6328 180th St SW, Lynnwood, WA 98037</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-border bg-background py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-foreground">
            <Trees className="w-5 h-5 text-primary/80" />
            <span className="font-display font-semibold text-lg">Family Adventures NW</span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-sm">
              &copy; {new Date().getFullYear()} Family Adventures Northwest.<br className="md:hidden" /> All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground/60 mt-1">
              Full website coming soon.
            </p>
          </div>
        </div>
      </footer>
      
    </div>
  );
}
