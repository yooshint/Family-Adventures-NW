import { motion } from "framer-motion";
import { Award, Handshake } from "lucide-react";

const grantLogos = [
  "Grant Logo",
  "Grant Logo",
  "Grant Logo",
];

const partnerLogos = [
  "Partner Logo",
  "Partner Logo",
  "Partner Logo",
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

function LogoGrid({ labels, ariaPrefix }: { labels: string[]; ariaPrefix: string }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-6">
      {labels.map((label, i) => (
        <motion.div
          key={i}
          variants={{
            hidden: { opacity: 0, scale: 0.95 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: i * 0.1 } },
          }}
          className="bg-card border-2 border-dashed border-border rounded-2xl h-32 flex items-center justify-center shadow-sm"
          role="img"
          aria-label={`${ariaPrefix} placeholder — ${label}`}
        >
          <span className="font-sans text-sm font-medium text-muted-foreground">{label}</span>
        </motion.div>
      ))}
    </div>
  );
}

export default function Sponsors() {
  return (
    <div className="min-h-screen bg-background pt-24">

      {/* Page Header */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="max-w-3xl mx-auto"
        >
          <motion.div variants={fadeUp}>
            <h1 className="text-sm font-bold font-display tracking-widest uppercase text-accent mb-4">
              Our Support Network
            </h1>
            <p className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
              Grants &amp; Partners
            </p>
            <p className="text-lg text-muted-foreground font-sans leading-relaxed">
              We are grateful for the generous organizations and community partners who make our programs possible.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Grants */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <Award className="w-6 h-6 text-primary" aria-hidden="true" />
            </div>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">Grants</h2>
          </motion.div>
          <LogoGrid labels={grantLogos} ariaPrefix="Grant" />
        </motion.div>
      </section>

      {/* Partners */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <Handshake className="w-6 h-6 text-primary" aria-hidden="true" />
            </div>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">Partners</h2>
          </motion.div>
          <LogoGrid labels={partnerLogos} ariaPrefix="Partner" />
        </motion.div>
      </section>

    </div>
  );
}
