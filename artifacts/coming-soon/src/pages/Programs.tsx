import { motion } from "framer-motion";
import {
  Footprints,
  Tent,
  Map,
  Link2,
  Target,
  Leaf,
  ChevronRight,
  Bell,
  TreePine,
} from "lucide-react";

const programs = [
  {
    icon: Footprints,
    name: "Hiking",
    desc: "Multi-generational trail hikes through the beautiful Pacific Northwest wilderness.",
  },
  {
    icon: Tent,
    name: "Camping",
    desc: "Family overnight camping experiences that build lasting connection and resilience.",
  },
  {
    icon: Map,
    name: "Orienteering",
    desc: "Navigation and map-reading skills taught in engaging, hands-on outdoor settings.",
  },
  {
    icon: Link2,
    name: "Ropes Courses",
    desc: "Trust-building and teamwork through guided high and low ropes challenges.",
  },
  {
    icon: Target,
    name: "Archery",
    desc: "Focus, patience, and precision taught through beginner-friendly archery sessions.",
  },
  {
    icon: Leaf,
    name: "Horseback Riding",
    desc: "Guided horseback riding experiences that connect families with the natural world.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

export default function Programs() {
  return (
    <div className="min-h-screen bg-background pt-24">

      {/* Why Outdoor Adventure? */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={fadeUp}>
            <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center mb-8 mx-auto rotate-3">
              <TreePine className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-sm font-bold font-display tracking-widest uppercase text-accent mb-4">
              Our Philosophy
            </h1>
            <p className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-8 leading-tight">
              Why Outdoor Adventure?
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-sans max-w-3xl mx-auto">
              Shared outdoor experiences create a unique environment where families can grow together beyond the barriers of language and culture. For immigrant and multi-generational families, time in nature offers more than recreation — it builds trust, strengthens relationships, and develops the character and resilience needed to thrive in a new community. At Family Adventures Northwest, every program is designed to meet families where they are and journey forward together.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Program Offerings */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="max-w-3xl mx-auto"
        >
          <motion.div variants={fadeUp} className="text-center mb-12">
            <h2 className="text-sm font-bold font-display tracking-widest uppercase text-accent mb-4">
              What We Offer
            </h2>
            <p className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Our Programs
            </p>
          </motion.div>

          <div className="flex flex-col gap-4">
            {programs.map((program, i) => {
              const Icon = program.icon;
              return (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: i * 0.08 } },
                  }}
                  className="flex items-start gap-5 bg-card rounded-2xl px-6 py-5 border border-border/50 shadow-sm"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="w-5 h-5 text-primary" aria-hidden="true" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-display font-bold text-lg text-foreground mb-1">{program.name}</p>
                    <p className="font-sans text-muted-foreground text-sm leading-relaxed">{program.desc}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground/40 shrink-0 self-center" aria-hidden="true" />
                </motion.div>
              );
            })}

            {/* Coming Soon callout */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: programs.length * 0.08 + 0.1 } },
              }}
              className="flex items-center gap-4 bg-secondary/30 border-2 border-secondary/50 rounded-2xl px-6 py-5 mt-2"
            >
              <div className="w-11 h-11 rounded-xl bg-secondary/60 flex items-center justify-center shrink-0">
                <Bell className="w-5 h-5 text-secondary-foreground" aria-hidden="true" />
              </div>
              <p className="font-display font-semibold text-secondary-foreground">
                Coming Soon — More Programs &amp; Initiatives!
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
