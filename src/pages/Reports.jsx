import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem, updateQty } from "../store/cartSlice.js";
import StatCard from "../components/StatCard.jsx";
import { useTheme } from "../context/ThemeContext.jsx";

export default function Reports() {
  const dispatch = useDispatch();
  const items = useSelector((s) => s.cart.items);

  const { theme } = useTheme(); // ✅ context used here (2nd component)

  // ✅ useMemo: derived calculations from Redux state
  const summary = useMemo(() => {
    const totalQty = items.reduce((sum, i) => sum + i.qty, 0);
    const subtotal = items.reduce((sum, i) => sum + i.qty * i.price, 0);
    const uniqueItems = items.length;
    return { totalQty, subtotal, uniqueItems };
  }, [items]);

  return (
    <section className="stack">
      <div className="row wrap">
        <div>
          <h2>Reports (Exp-5 Page)</h2>
          <p className="muted">
            Theme: <b>{theme}</b> • Redux cart summary computed with <b>useMemo</b>.
          </p>
        </div>

        <button className="btn danger" onClick={() => dispatch(clearCart())} disabled={items.length === 0}>
          Clear Cart
        </button>
      </div>

      <div className="stats">
        <StatCard label="Unique Items" value={summary.uniqueItems} hint="Count of different products" />
        <StatCard label="Total Quantity" value={summary.totalQty} hint="Sum of quantities" />
        <StatCard label="Subtotal" value={`₹${summary.subtotal}`} hint="qty × price (useMemo)" />
      </div>

      <div className="card">
        <div className="row">
          <div className="card-title">Cart Items</div>
          <div className="muted">{items.length === 0 ? "No items added yet." : "Edit qty or remove items."}</div>
        </div>

        {items.length > 0 && (
          <>
            <div className="divider" />
            <div className="table">
              <div className="t-head">
                <div>Product</div>
                <div>Price</div>
                <div>Qty</div>
                <div>Total</div>
                <div></div>
              </div>

              {items.map((i) => (
                <div className="t-row" key={i.id}>
                  <div>{i.name}</div>
                  <div>₹{i.price}</div>
                  <div>
                    <input
                      className="input small"
                      value={i.qty}
                      onChange={(e) => dispatch(updateQty({ id: i.id, qty: e.target.value }))}
                    />
                  </div>
                  <div>₹{i.qty * i.price}</div>
                  <div>
                    <button className="btn ghost" onClick={() => dispatch(removeItem(i.id))}>
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}