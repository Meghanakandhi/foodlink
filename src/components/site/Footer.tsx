import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-charcoal text-cream pt-20 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 pb-12 border-b border-cream/10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="grid place-items-center w-10 h-10 rounded-full bg-gradient-warm font-display font-bold text-lg">R</span>
              <span className="font-display text-2xl font-semibold">Rasa <span className="text-accent">&</span> Co.</span>
            </div>
            <p className="text-cream/70 max-w-sm leading-relaxed">
              A premium cloud kitchen serving handcrafted, globally-inspired
              comfort food. Made with care, delivered hot.
            </p>
            <div className="flex gap-3 mt-6">
              {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social"
                  className="w-10 h-10 rounded-full grid place-items-center bg-cream/10 hover:bg-accent hover:text-charcoal transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="font-display text-lg font-semibold mb-4">Explore</p>
            <ul className="space-y-2.5 text-cream/70">
              <li><a href="#about" className="hover:text-accent">Story</a></li>
              <li><a href="#menu" className="hover:text-accent">Menu</a></li>
              <li><a href="#featured" className="hover:text-accent">Signature</a></li>
              <li><a href="#gallery" className="hover:text-accent">Gallery</a></li>
            </ul>
          </div>

          <div>
            <p className="font-display text-lg font-semibold mb-4">Hours</p>
            <ul className="space-y-2.5 text-cream/70 text-sm">
              <li>Mon — Thu · 11am – 10pm</li>
              <li>Fri — Sat · 11am – 12am</li>
              <li>Sun · 12pm – 9pm</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-cream/50">
          <p>© {new Date().getFullYear()} Rasa & Co. All rights reserved.</p>
          <p>Crafted with care · Brooklyn, NY</p>
        </div>
      </div>
    </footer>
  );
}
