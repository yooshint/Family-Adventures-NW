import { motion } from "framer-motion";
import { HeartHandshake, UserRound } from "lucide-react";

const boardMembers = [
  { name: "Board Member Name", title: "Board Member Title" },
  { name: "Board Member Name", title: "Board Member Title" },
  { name: "Board Member Name", title: "Board Member Title" },
  { name: "Board Member Name", title: "Board Member Title" },
  { name: "Board Member Name", title: "Board Member Title" },
  { name: "Board Member Name", title: "Board Member Title" },
];

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

      {/* Meet Our Board */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={fadeUp} className="text-center mb-14">
            <h2 className="text-sm font-bold font-display tracking-widest uppercase text-accent mb-4">
              Leadership
            </h2>
            <p className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Meet Our Board
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {boardMembers.map((member, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.08 } },
                }}
                className="bg-card rounded-2xl p-8 border border-border/50 shadow-sm flex flex-col items-center text-center"
              >
                <div
                  className="w-24 h-24 rounded-full bg-muted border-2 border-border flex items-center justify-center mb-5"
                  role="img"
                  aria-label={`Placeholder profile photo for ${member.name}`}
                >
                  <UserRound className="w-12 h-12 text-muted-foreground" aria-hidden="true" />
                </div>
                <p className="font-display font-bold text-lg text-foreground mb-1">{member.name}</p>
                <p className="font-sans text-sm text-muted-foreground">{member.title}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

    </div>
  );
}
