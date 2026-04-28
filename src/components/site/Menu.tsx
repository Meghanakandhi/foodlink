import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Item = {
  name: string;
  desc: string;
  price: string;
  cat: "Starters" | "Mains" | "Desserts" | "Drinks";
  tag?: string;
};

const ITEMS: Item[] = [
  { name: "Charred Paneer Tikka", desc: "Hand-cubed paneer, smoked yogurt, ajwain crust.", price: "$9", cat: "Starters", tag: "Veg" },
  { name: "Crispy Calamari Pakora", desc: "Light chickpea batter, curry-leaf aioli.", price: "$12", cat: "Starters" },
  { name: "Papdi Chaat 2.0", desc: "Tamarind glaze, pomegranate, microgreens.", price: "$8", cat: "Starters", tag: "Vegan" },
  { name: "Saffron Butter Bowl", desc: "24-hour braised chicken, saffron rice, smoked ghee.", price: "$18", cat: "Mains", tag: "Signature" },
  { name: "Truffle Khichdi Risotto", desc: "Aged basmati, black truffle, reggiano, pickled shallot.", price: "$22", cat: "Mains" },
  { name: "Lamb Galouti Slider", desc: "Slow-cooked lamb patties, charred brioche, mint chutney.", price: "$16", cat: "Mains" },
  { name: "Goan Coconut Curry", desc: "Tiger prawns, kokum, fresh coconut milk.", price: "$24", cat: "Mains" },
  { name: "Gulab Jamun Cheesecake", desc: "Cardamom curd, rose gel, pistachio crumble.", price: "$10", cat: "Desserts", tag: "New" },
  { name: "Dark Chocolate Lava", desc: "70% Valrhona, raspberry coulis, edible gold.", price: "$11", cat: "Desserts" },
  { name: "Salted Jaggery Kulfi", desc: "Slow-churned, palm jaggery, sea salt flakes.", price: "$7", cat: "Desserts" },
  { name: "Smoked Mango Lassi", desc: "Alphonso pulp, hickory-smoked yogurt.", price: "$6", cat: "Drinks" },
  { name: "Masala Cold Brew", desc: "Single-origin coffee, cardamom, palm sugar.", price: "$5", cat: "Drinks" },
  { name: "Hibiscus Spritzer", desc: "House hibiscus syrup, lime, soda, mint.", price: "$6", cat: "Drinks", tag: "Vegan" },
];

const CATS = ["All", "Starters", "Mains", "Desserts", "Drinks"] as const;

export function Menu() {
  const [active, setActive] = useState<(typeof CATS)[number]>("All");
  const list = active === "All" ? ITEMS : ITEMS.filter((i) => i.cat === active);

  return (
    <section id="menu" className="py-24 lg:py-32 bg-secondary/40">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-4">
            The Menu
          </p>
          <h2 className="font-display text-4xl lg:text-6xl font-semibold text-balance">
            Built from <span className="italic font-light">real</span> ingredients.
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {CATS.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                active === c
                  ? "bg-primary text-primary-foreground shadow-warm"
                  : "bg-card border border-border hover:border-primary/50"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {list.map((item) => (
              <motion.article
                key={item.name}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="group bg-card border border-border rounded-2xl p-6 hover:shadow-warm hover:-translate-y-1 hover:border-primary/40 transition-all"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="font-display text-xl font-semibold leading-tight">
                    {item.name}
                  </h3>
                  <span className="font-display text-xl font-semibold text-primary whitespace-nowrap">
                    {item.price}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                    {item.cat}
                  </span>
                  {item.tag && (
                    <span className="text-[10px] uppercase tracking-widest font-semibold px-2 py-1 rounded-full bg-accent/15 text-accent-foreground border border-accent/30">
                      {item.tag}
                    </span>
                  )}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
