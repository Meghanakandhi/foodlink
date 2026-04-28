import { motion } from "framer-motion";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const SHOTS = [
  { src: g1, span: "lg:col-span-2 lg:row-span-2", alt: "Tandoori skewers" },
  { src: g2, span: "", alt: "Wood-fired pizza" },
  { src: g3, span: "", alt: "Poke bowl" },
  { src: g4, span: "lg:row-span-2", alt: "Craft cocktail" },
  { src: g5, span: "", alt: "Sushi platter" },
  { src: g6, span: "", alt: "Pancake stack" },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-4">
              Gallery
            </p>
            <h2 className="font-display text-4xl lg:text-6xl font-semibold leading-tight text-balance">
              A taste of the <span className="italic font-light">kitchen.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[200px] lg:auto-rows-[240px] gap-4">
          {SHOTS.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer ${s.span}`}
            >
              <img
                src={s.src}
                alt={s.alt}
                loading="lazy"
                width={800}
                height={800}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <p className="absolute bottom-4 left-4 font-display text-lg text-cream opacity-0 group-hover:opacity-100 transition-opacity">
                {s.alt}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
