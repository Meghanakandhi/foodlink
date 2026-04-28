import { useEffect, useState } from "react";

export function Loader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 700);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[100] grid place-items-center bg-background transition-opacity duration-500 ${
        done ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-5">
        <div className="loader-plate w-16 h-16 rounded-full border-4 border-border border-t-primary border-r-accent" />
        <p className="font-display text-xl tracking-tight">
          Rasa <span className="text-primary">&</span> Co.
        </p>
      </div>
    </div>
  );
}
