import { motion, type Variants } from "framer-motion";
import {
  Mountain,
  Mail,
  Trees,
  Compass,
  ArrowRight,
  HeartHandshake,
  MapPin,
  Backpack,
  Users,
} from "lucide-react";

export default function Home() {
  const heroImageUrl = `${import.meta.env.BASE_URL}images/photo-mountain.jpg`;
  const galleryImages = [
    {
      src: `${import.meta.env.BASE_URL}images/photo-jingoo.jpg`,
      alt: "A child hanging fearlessly over a creek on a rope traverse",
    },
    {
      src: `${import.meta.env.BASE_URL}images/photo-sean.jpg`,
      alt: "A child swinging over a creek with family cheering from the bank",
    },
    {
      src: `${import.meta.env.BASE_URL}images/photo-lake.jpg`,
      alt: "Stunning alpine lake with driftwood and mountain cliffs in Washington",
    },
    {
      src: `${import.meta.env.BASE_URL}images/photo-mountain.jpg`,
      alt: "Hiker on a rocky ridge with dramatic Pacific Northwest mountain peaks",
    },
    {
      src: `${import.meta.env.BASE_URL}images/photo-sunset.jpg`,
      alt: "Serene sunset reflection of evergreens on a calm alpine lake",
    },
  ];

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  return (
    <div className="min-h-screen flex flex-col w-full overflow-hidden bg-background">
      {/* SKIP TO MAIN CONTENT — WCAG 2.1 keyboard accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded-lg focus:font-semibold focus:shadow-lg"
      >
        Skip to main content
      </a>

      {/* HEADER */}
      <header
        role="banner"
        className="absolute top-0 left-0 right-0 z-50 px-6 py-6 md:px-12 flex items-center justify-between"
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3"
        >
          <div
            className="bg-white/10 p-2.5 rounded-xl backdrop-blur-md border border-white/20"
            aria-hidden="true"
          >
            <Trees className="w-6 h-6 text-white" />
          </div>
          <span className="font-display font-bold text-xl md:text-2xl text-white tracking-tight drop-shadow-sm truncate hidden sm:inline-block">
            Family Adventures Northwest
          </span>
          <span
            className="font-display font-bold text-xl text-white tracking-tight drop-shadow-sm inline-block sm:hidden"
            aria-hidden="true"
          >
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
            aria-label="Contact us by email at familyadventuresnw@gmail.com"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 hover:-translate-y-0.5 bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 shadow-sm hover:shadow-md text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <Mail className="w-4 h-4" aria-hidden="true" />
            <span>Contact Us</span>
          </a>
        </motion.div>
      </header>

      {/* MAIN CONTENT */}
      <main id="main-content">
        {/* HERO SECTION */}
        <section
          aria-label="Hero — Empowering Families Through Everyday Adventures"
          className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center pt-24 px-4 sm:px-6 lg:px-8"
        >
          <div
            className="absolute inset-0 z-0 overflow-hidden"
            aria-hidden="true"
          >
            <img
              src={heroImageUrl}
              alt=""
              aria-hidden="true"
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-background"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30"></div>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="relative z-10 max-w-4xl mx-auto text-center mt-12"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white mb-8 shadow-sm"
              aria-label="Status: Coming Soon"
            >
              <Compass className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold tracking-wide uppercase font-sans">
                Coming Soon
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.1] md:leading-[1.05] tracking-tight mb-6 drop-shadow-lg"
            >
              Empowering Families Through{" "}
              <span className="text-emerald-300 relative inline-block">
                Everyday Adventures
                <svg
                  className="absolute w-full h-3 -bottom-1 left-0 text-emerald-300/40"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    d="M0 5 Q 50 10 100 5"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                  />
                </svg>
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl text-white/80 max-w-prose mx-auto leading-relaxed mb-10 font-sans drop-shadow"
            >
              Something beautiful is on the way. We are getting ready to launch
              our full list of programs to connect and empower immigrant
              families in the Pacific Northwest.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a
                href="mailto:familyadventuresnw@gmail.com"
                aria-label="Get in touch — send us an email"
                className="group flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-white bg-emerald-600 shadow-lg shadow-emerald-900/30 hover:bg-emerald-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <Mail className="w-5 h-5" aria-hidden="true" />
                <span>Get in touch</span>
                <ArrowRight
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  aria-hidden="true"
                />
              </a>
            </motion.div>
          </motion.div>
        </section>

        {/* MISSION STATEMENT SECTION */}
        <section
          aria-labelledby="mission-heading"
          className="relative z-10 py-28 md:py-36 px-4 sm:px-6 lg:px-8 bg-background"
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-5xl mx-auto"
          >
            <div className="relative bg-card rounded-3xl p-8 md:p-16 shadow-xl shadow-black/5 border border-border/50 overflow-hidden">
              <div
                className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
                aria-hidden="true"
              ></div>
              <div
                className="absolute -bottom-24 -left-24 w-64 h-64 bg-accent/5 rounded-full blur-3xl"
                aria-hidden="true"
              ></div>

              <motion.div
                variants={fadeUp}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div
                  className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center mb-8 rotate-3"
                  aria-hidden="true"
                >
                  <HeartHandshake className="w-8 h-8 text-primary" />
                </div>
                <h2
                  id="mission-heading"
                  className="text-sm font-bold font-display tracking-widest uppercase text-accent mb-6"
                >
                  Our Mission
                </h2>
                <blockquote className="text-2xl md:text-3xl lg:text-4xl font-display font-medium leading-tight text-foreground text-center">
                  "Family Adventures Northwest empowers immigrant families
                  through meaningful, multi-generational outdoor and
                  experiential learning activities, fostering character
                  education, servant leadership, and connection with local
                  communities. In collaboration with intersectional partners, we
                  create culturally inclusive programs that nurture the
                  physical, relational, emotional, and spiritual needs of every
                  family."
                </blockquote>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* PROGRAMS SECTION */}
        <section
          aria-labelledby="programs-heading"
          className="relative z-10 py-28 md:py-36 px-4 sm:px-6 lg:px-8 bg-muted/20"
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-5xl mx-auto"
          >
            <motion.div variants={fadeUp} className="text-center mb-14">
              <p
                className="text-sm font-bold font-display tracking-widest uppercase text-accent mb-4"
                aria-hidden="true"
              >
                Our Programs
              </p>
              <h2
                id="programs-heading"
                className="text-3xl md:text-4xl font-display font-bold text-foreground"
              >
                Built for families. Rooted in the outdoors.
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Card 1 */}
              <motion.article
                variants={fadeUp}
                className="bg-card rounded-3xl p-8 border border-border/50 shadow-lg shadow-black/5 flex flex-col"
                aria-labelledby="program-1-heading"
              >
                <div
                  className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6"
                  aria-hidden="true"
                >
                  <Backpack className="w-7 h-7 text-primary" />
                </div>
                <h3
                  id="program-1-heading"
                  className="text-xl font-display font-bold text-foreground mb-3"
                >
                  Family Outdoor Adventures
                </h3>
                <p className="text-muted-foreground font-sans mb-6 leading-relaxed">
                  Challenge your family in the wild beauty of the Pacific
                  Northwest through hands-on outdoor experiences built for all
                  ages.
                </p>
                <ul
                  className="space-y-3 mt-auto"
                  aria-label="Family Outdoor Adventures activities"
                >
                  {[
                    "Challenge hikes",
                    "Obstacle courses",
                    "Trust-building activities",
                    "Orienteering courses",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-foreground font-sans"
                    >
                      <div
                        className="w-2 h-2 rounded-full bg-primary flex-shrink-0"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.article>

              {/* Card 2 */}
              <motion.article
                variants={fadeUp}
                className="bg-card rounded-3xl p-8 border border-border/50 shadow-lg shadow-black/5 flex flex-col"
                aria-labelledby="program-2-heading"
              >
                <div
                  className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6"
                  aria-hidden="true"
                >
                  <Users className="w-7 h-7 text-primary" />
                </div>
                <h3
                  id="program-2-heading"
                  className="text-xl font-display font-bold text-foreground mb-3"
                >
                  Families Serving, Learning, and Growing Together
                </h3>
                <p className="text-muted-foreground font-sans mb-6 leading-relaxed">
                  Multi-generational programs that bring families closer through
                  shared purpose, community service, and experiential learning
                  rooted in cultural inclusion.
                </p>
                <div className="mt-auto inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold w-fit">
                  <Compass className="w-4 h-4" aria-hidden="true" />
                  More programs coming soon
                </div>
              </motion.article>
            </div>
          </motion.div>
        </section>

        {/* PHOTO GALLERY */}
        <section
          aria-labelledby="gallery-heading"
          className="relative z-10 py-28 md:py-36 px-4 sm:px-6 lg:px-8 bg-background"
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={fadeUp} className="text-center mb-14">
              <p
                className="text-sm font-bold font-display tracking-widest uppercase text-accent mb-4"
                aria-hidden="true"
              >
                Adventures Await
              </p>
              <h2
                id="gallery-heading"
                className="text-3xl md:text-4xl font-display font-bold text-foreground"
              >
                Life is better outdoors, together.
              </h2>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="flex flex-col gap-4 md:gap-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                {galleryImages.slice(0, 2).map((img, i) => (
                  <motion.div
                    key={i}
                    variants={
                      {
                        hidden: { opacity: 0, y: 30 },
                        visible: {
                          opacity: 1,
                          y: 0,
                          transition: {
                            duration: 0.8,
                            ease: "easeOut",
                            delay: i * 0.1,
                          },
                        },
                      } as Variants
                    }
                    className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-muted border border-border/50 shadow-md group"
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      aria-hidden="true"
                    />
                  </motion.div>
                ))}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {galleryImages.slice(2).map((img, i) => (
                  <motion.div
                    key={i + 2}
                    variants={
                      {
                        hidden: { opacity: 0, y: 30 },
                        visible: {
                          opacity: 1,
                          y: 0,
                          transition: {
                            duration: 0.8,
                            ease: "easeOut",
                            delay: (i + 2) * 0.1,
                          },
                        },
                      } as Variants
                    }
                    className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-muted border border-border/50 shadow-md group"
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      aria-hidden="true"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* COMING SOON / STAY CONNECTED */}
        <section
          aria-labelledby="connect-heading"
          className="relative z-10 py-28 md:py-36 px-4 sm:px-6 lg:px-8 bg-muted/30 border-t border-border/50"
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.div variants={fadeUp}>
              <Mountain
                className="w-12 h-12 text-primary mx-auto mb-6 opacity-80"
                aria-hidden="true"
              />
              <h2
                id="connect-heading"
                className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6"
              >
                Join us on this journey.
              </h2>
              <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto font-sans">
                Our full website is currently under construction. We'd love for
                you to stay connected and be the first to know when we launch
                our new programs.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="flex flex-col items-center gap-4 w-full"
            >
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
                <a
                  href="mailto:familyadventuresnw@gmail.com"
                  aria-label="Email us at familyadventuresnw@gmail.com"
                  className="flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-xl font-semibold bg-card text-foreground border-2 border-border shadow-sm hover:border-primary/30 hover:bg-primary/5 hover:-translate-y-1 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  <Mail className="w-5 h-5 text-primary" aria-hidden="true" />
                  <span>familyadventuresnw@gmail.com</span>
                </a>
              </div>

              <address className="not-italic flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full sm:w-auto px-6 py-4 rounded-xl bg-card border-2 border-border shadow-sm text-muted-foreground mt-4">
                <MapPin
                  className="w-5 h-5 text-primary shrink-0"
                  aria-hidden="true"
                />
                <div className="text-left font-sans">
                  <p className="font-medium text-foreground text-sm">
                    Our Location
                  </p>
                  <p className="text-sm">
                    6328 180th St SW, Lynnwood, WA 98037
                  </p>
                </div>
              </address>
            </motion.div>
          </motion.div>
        </section>
      </main>

      {/* FOOTER */}
      <footer
        role="contentinfo"
        className="relative z-10 border-t border-border bg-background py-12 px-6"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-foreground">
            <Trees className="w-5 h-5 text-primary/80" aria-hidden="true" />
            <span className="font-display font-semibold text-lg">
              Family Adventures NW
            </span>
          </div>
          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-sm">
              &copy; {new Date().getFullYear()} Family Adventures Northwest.
              <br className="md:hidden" /> All rights reserved.
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
