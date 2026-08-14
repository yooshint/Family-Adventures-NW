import { motion } from "framer-motion";
import { HeartHandshake } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-background pt-24">

      {/* Mission Statement */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="max-w-5xl mx-auto"
        >
          <div className="relative bg-card rounded-3xl p-8 md:p-16 shadow-xl shadow-black/5 border border-border/50 overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
            <motion.div variants={fadeUp} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center mb-8 rotate-3">
                <HeartHandshake className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-sm font-bold font-display tracking-widest uppercase text-accent mb-6">
                Our Mission
              </h1>
              <blockquote className="text-xl md:text-2xl lg:text-3xl font-display font-medium leading-snug text-foreground text-center">
                "Family Adventures Northwest empowers immigrant families through meaningful, multi-generational outdoor and experiential learning activities, fostering character education, servant leadership, and connection with local communities. In collaboration with intersectional partners, we create culturally inclusive programs that nurture the physical, relational, emotional, and spiritual needs of every family."
              </blockquote>
            </motion.div>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
