import { useEffect, useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";

const NAV = [
  { href: "#about", label: "Story" },
  { href: "#menu", label: "Menu" },
  { href: "#featured", label: "Signature" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Order" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border/60 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 group">
          <span className="grid place-items-center w-10 h-10 rounded-full bg-gradient-warm text-primary-foreground font-display font-bold text-lg shadow-warm group-hover:scale-105 transition-transform">
            R
          </span>
          <span className="font-display text-2xl font-semibold tracking-tight">
            Rasa <span className="text-primary">&</span> Co.
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="px-4 py-2 text-sm font-medium text-foreground/75 hover:text-primary transition-colors relative group"
            >
              {n.label}
              <span className="absolute left-4 right-4 -bottom-0.5 h-px bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setDark((d) => !d)}
            aria-label="Toggle theme"
            className="p-2.5 rounded-full hover:bg-secondary transition-colors"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold shadow-warm hover:scale-[1.03] transition-transform"
          >
            Order Now
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden p-2.5 rounded-full hover:bg-secondary"
            aria-label="Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden mt-3 mx-6 rounded-2xl bg-card border border-border shadow-soft p-4">
          <ul className="flex flex-col">
            {NAV.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 rounded-lg hover:bg-secondary font-medium"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
