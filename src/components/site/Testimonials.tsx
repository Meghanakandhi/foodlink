import { useEffect, useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const REVIEWS = [
  {
    name: "Aanya Mehta",
    role: "Food writer · The Daily Bite",
    text: "Their saffron butter bowl ruined every other curry for me. Layered, balanced, and arrived steaming.",
    rating: 5,
  },
  {
    name: "Marcus Chen",
    role: "Regular since 2022",
    text: "I order Rasa twice a week. The truffle khichdi risotto is the kind of dish you describe to your friends for weeks.",
    rating: 5,
  },
  {
    name: "Priya Kapoor",
    role: "Home cook & supper-club host",
    text: "You can taste the care. Spices are fresh, sauces are deep, and the desserts are dangerously good.",
    rating: 5,
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const next = () => setI((p) => (p + 1) % REVIEWS.length);
  const prev = () => setI((p) => (p - 1 + REVIEWS.length) % REVIEWS.length);

  useEffect(() => {
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, []);

  const r = REVIEWS[i];

  return (
    <section className="py-24 lg:py-32 bg-secondary/40">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-4">
            Word of Mouth
          </p>
          <h2 className="font-display text-4xl lg:text-5xl font-semibold mb-12 text-balance">
            Loved by people with <span className="italic font-light">sharp palates.</span>
          </h2>

          <div className="relative bg-card border border-border rounded-3xl p-8 lg:p-12 shadow-soft">
            <div className="flex justify-center gap-1 mb-6">
              {Array.from({ length: r.rating }).map((_, k) => (
                <Star key={k} size={18} className="fill-accent text-accent" />
              ))}
            </div>
            <p className="font-display text-2xl lg:text-3xl leading-snug italic text-foreground/90 min-h-[120px] flex items-center justify-center">
              “{r.text}”
            </p>
            <div className="mt-6">
              <p className="font-semibold">{r.name}</p>
              <p className="text-sm text-muted-foreground">{r.role}</p>
            </div>

            <button
              onClick={prev}
              aria-label="Previous"
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              aria-label="Next"
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {REVIEWS.map((_, k) => (
              <button
                key={k}
                onClick={() => setI(k)}
                aria-label={`Review ${k + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  k === i ? "w-8 bg-primary" : "w-2 bg-border"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
