import { useMemo, useState } from "react";
import { PRODUCTS } from "../data/products.js";
import ProductCard from "../components/ProductCard.jsx";

export default function Home() {
  const [q, setQ] = useState("");

  // ✅ useMemo example: filtered list (performance optimization)
  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return PRODUCTS;
    return PRODUCTS.filter((p) => (p.name + " " + p.tag).toLowerCase().includes(s));
  }, [q]);

  return (
    <section className="stack">
      <div className="hero">
        <div>
          <h1>Modern React App (Exp-5)</h1>
          <p className="muted">
            Uses Router, Theme Context, Redux Toolkit cart, and useMemo optimizations.
          </p>
        </div>

        <input
          className="input search"
          placeholder="Search products (useMemo)…"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
      </div>

      <div className="grid">
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}