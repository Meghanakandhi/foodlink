import { motion } from "framer-motion";
import dish1 from "@/assets/dish-1.jpg";
import dish2 from "@/assets/dish-2.jpg";
import dish3 from "@/assets/dish-3.jpg";

const FEATURED = [
  { img: dish1, name: "Truffle Khichdi Risotto", note: "Chef's pick", price: "$22" },
  { img: dish2, name: "Smashed Galouti Slider", note: "Best seller", price: "$16" },
  { img: dish3, name: "Dark Chocolate Lava", note: "New", price: "$11" },
];

export function Featured() {
  return (
    <section id="featured" className="py-24 lg:py-32 bg-charcoal text-cream relative overflow-hidden">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-accent/10 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.3em] text-accent font-semibold mb-4">
              Signature Plates
            </p>
            <h2 className="font-display text-4xl lg:text-6xl font-semibold leading-tight text-balance">
              The dishes guests <span className="italic font-light text-accent">come back for.</span>
            </h2>
          </div>
          <p className="text-cream/70 max-w-md">
            A rotating selection of our most-loved plates — built by hand,
            finished tableside, ready for delivery.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {FEATURED.map((f, i) => (
            <motion.article
              key={f.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative rounded-3xl overflow-hidden bg-charcoal border border-cream/10 cursor-pointer"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={f.img}
                  alt={f.name}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
              <div className="absolute top-5 left-5">
                <span className="px-3 py-1 rounded-full bg-cream/95 text-charcoal text-[10px] uppercase tracking-widest font-bold">
                  {f.note}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
                <h3 className="font-display text-2xl lg:text-3xl font-semibold text-cream max-w-[70%]">
                  {f.name}
                </h3>
                <span className="font-display text-2xl font-semibold text-accent">
                  {f.price}
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
