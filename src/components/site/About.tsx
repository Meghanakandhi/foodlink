import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-4">
              Our Story
            </p>
            <h2 className="font-display text-4xl lg:text-6xl font-semibold leading-tight text-balance">
              Born in a tiny kitchen.<br />
              <span className="italic font-light">Built on obsession.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-7 space-y-5 text-lg text-muted-foreground leading-relaxed"
          >
            <p>
              Rasa & Co. started in 2021 in a 200-square-foot rented kitchen
              with one cracked tandoor and a stubborn idea: street food
              deserves the same care a tasting menu gets.
            </p>
            <p>
              Today our chefs hand-mill spices every morning, cure their own
              meats, and refuse to use a single jarred sauce. Every dish that
              leaves our kitchen is built from base ingredients — because
              flavor that real can&apos;t be faked.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              {[
                { n: "120+", l: "Recipes perfected" },
                { n: "18", l: "Local farm partners" },
                { n: "0", l: "Preservatives, ever" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-4xl lg:text-5xl font-semibold text-primary">
                    {s.n}
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{s.l}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
