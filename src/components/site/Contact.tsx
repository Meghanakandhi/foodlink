import { useState, type FormEvent } from "react";
import { MapPin, Phone, Mail, Check } from "lucide-react";

const ITEMS = [
  "Saffron Butter Bowl",
  "Truffle Khichdi Risotto",
  "Lamb Galouti Slider",
  "Goan Coconut Curry",
  "Charred Paneer Tikka",
  "Gulab Jamun Cheesecake",
];

export function Contact() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "").trim();
    const phone = String(fd.get("phone") || "").trim();
    const item = String(fd.get("item") || "");

    const next: Record<string, string> = {};
    if (name.length < 2) next.name = "Please enter your name.";
    if (!/^[\d+\s()-]{7,}$/.test(phone)) next.phone = "Enter a valid phone number.";
    if (!item) next.item = "Please pick a dish.";

    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSent(true);
      e.currentTarget.reset();
      setTimeout(() => setSent(false), 4500);
    }
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-secondary/40">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-10">
          {/* Form */}
          <div className="lg:col-span-7 bg-card border border-border rounded-3xl p-8 lg:p-12 shadow-soft">
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-3">
              Place an Order
            </p>
            <h2 className="font-display text-3xl lg:text-5xl font-semibold mb-8 text-balance">
              Hot, fresh, and on its way.
            </h2>

            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div>
                <label className="block text-sm font-semibold mb-2">Name</label>
                <input
                  name="name"
                  type="text"
                  placeholder="Your full name"
                  className="w-full px-4 py-3 rounded-xl bg-background border border-input focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
                />
                {errors.name && <p className="text-xs text-destructive mt-1.5">{errors.name}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Phone</label>
                <input
                  name="phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-4 py-3 rounded-xl bg-background border border-input focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
                />
                {errors.phone && <p className="text-xs text-destructive mt-1.5">{errors.phone}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Pick a dish</label>
                <select
                  name="item"
                  defaultValue=""
                  className="w-full px-4 py-3 rounded-xl bg-background border border-input focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
                >
                  <option value="" disabled>Select an item…</option>
                  {ITEMS.map((i) => <option key={i} value={i}>{i}</option>)}
                </select>
                {errors.item && <p className="text-xs text-destructive mt-1.5">{errors.item}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Notes (optional)</label>
                <textarea
                  name="notes"
                  rows={3}
                  placeholder="Allergies, spice level, delivery instructions…"
                  className="w-full px-4 py-3 rounded-xl bg-background border border-input focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-semibold shadow-warm hover:scale-[1.01] transition-transform"
              >
                {sent ? (
                  <span className="inline-flex items-center gap-2"><Check size={18}/> Order received — we'll call to confirm</span>
                ) : "Send Order Request"}
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-card border border-border rounded-3xl p-8 shadow-soft">
              <h3 className="font-display text-2xl font-semibold mb-6">Visit · Call · Write</h3>
              <ul className="space-y-5">
                <li className="flex gap-4">
                  <span className="grid place-items-center w-11 h-11 rounded-xl bg-primary/10 text-primary shrink-0"><MapPin size={20}/></span>
                  <div>
                    <p className="font-semibold">Kitchen</p>
                    <p className="text-sm text-muted-foreground">42 Curry Lane, Brooklyn, NY 11211</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="grid place-items-center w-11 h-11 rounded-xl bg-primary/10 text-primary shrink-0"><Phone size={20}/></span>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-sm text-muted-foreground">+1 (555) 010-0420</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="grid place-items-center w-11 h-11 rounded-xl bg-primary/10 text-primary shrink-0"><Mail size={20}/></span>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-sm text-muted-foreground">hello@rasaandco.com</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="rounded-3xl overflow-hidden border border-border shadow-soft aspect-[4/3]">
              <iframe
                title="Map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-73.96%2C40.70%2C-73.93%2C40.72&layer=mapnik"
                className="w-full h-full grayscale-[20%]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
