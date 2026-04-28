import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import heroImg from "@/assets/hero.jpg";

export function Hero() {
  return (
    <section id="top" className="relative pt-32 lg:pt-40 pb-20 overflow-hidden">
      {/* glow */}
      <div className="absolute inset-0 bg-gradient-glow pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-accent/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-forest/20 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary border border-border text-xs font-medium uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Cloud Kitchen · Open Now
            </div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-semibold leading-[0.95] text-balance">
              Bold flavor,{" "}
              <span className="italic font-light text-primary">
                handcrafted
              </span>{" "}
              every plate.
            </h1>

            <p className="mt-7 text-lg lg:text-xl text-muted-foreground max-w-[55ch] leading-relaxed">
              We blend street-food soul with fine-dining detail. Peak-season
              ingredients, slow-built sauces, and zero shortcuts — delivered
              hot to your door.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-primary text-primary-foreground font-semibold shadow-warm hover:scale-[1.03] transition-transform"
              >
                Order Now
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#menu"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full border-2 border-foreground/15 hover:border-primary hover:text-primary font-semibold transition-colors"
              >
                View Menu
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-8">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-9 h-9 rounded-full border-2 border-background bg-gradient-to-br from-saffron to-spice"
                      style={{ filter: `hue-rotate(${i * 18}deg)` }}
                    />
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} size={14} className="fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground">12,400+ happy bellies</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.15 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-square">
              <div className="absolute inset-0 rounded-full bg-gradient-warm opacity-20 blur-3xl scale-110" />
              <div className="relative aspect-square rounded-[2rem] overflow-hidden shadow-warm border border-border/50">
                <img
                  src={heroImg}
                  alt="Saffron rice with rich curry"
                  width={1024}
                  height={1024}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* floating badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="absolute -bottom-6 -left-6 bg-card border border-border rounded-2xl p-4 shadow-soft max-w-[200px]"
              >
                <div className="text-3xl font-display font-bold text-primary">28<span className="text-base text-muted-foreground">min</span></div>
                <p className="text-xs text-muted-foreground mt-1">Avg. delivery time across the city</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute -top-4 -right-4 bg-forest text-cream rounded-2xl px-5 py-3 shadow-soft animate-float"
              >
                <p className="text-xs uppercase tracking-widest opacity-80">Fresh today</p>
                <p className="font-display text-lg font-semibold">Saffron Butter Bowl</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* marquee strip */}
      <div className="mt-20 border-y border-border/60 bg-card/40 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap py-4 gap-12 text-2xl font-display italic text-foreground/40">
          {Array.from({ length: 2 }).flatMap((_, i) =>
            ["Fresh ingredients", "·", "Slow-built sauces", "·", "No shortcuts", "·", "Globally inspired", "·", "Locally sourced", "·"].map((w, j) => (
              <span key={`${i}-${j}`}>{w}</span>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
