import { motion } from "framer-motion";
import { Leaf, Flame, Bike, ShieldCheck } from "lucide-react";

const FEATURES = [
  { icon: Leaf, title: "Farm-Fresh Daily", desc: "Produce sourced every morning from 18 partner farms within 50 miles." },
  { icon: Flame, title: "Slow-Built Flavor", desc: "Sauces simmered for hours, spices roasted and milled in-house." },
  { icon: Bike, title: "28-Min Delivery", desc: "Insulated thermal pouches keep every plate at the perfect temperature." },
  { icon: ShieldCheck, title: "Spotless Kitchen", desc: "Independently audited monthly. Full hygiene reports public on request." },
];

export function WhyUs() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-4">
            Why Rasa
          </p>
          <h2 className="font-display text-4xl lg:text-6xl font-semibold text-balance">
            We obsess so you can just <span className="italic font-light">enjoy.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {FEATURES.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group p-7 rounded-2xl border border-border bg-card hover:bg-gradient-warm hover:text-primary-foreground hover:border-transparent hover:-translate-y-1 transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 group-hover:bg-cream/20 grid place-items-center mb-5 transition-colors">
                  <Icon className="text-primary group-hover:text-cream transition-colors" size={26} />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground group-hover:text-cream/85 leading-relaxed transition-colors">
                  {f.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
