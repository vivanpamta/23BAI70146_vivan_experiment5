import { useDispatch, useSelector } from "react-redux";
import { addItem, updateQty, removeItem } from "../store/cartSlice.js";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const inCart = useSelector((s) => s.cart.items.find((i) => i.id === product.id));

  return (
    <div className="card">
      <div className="row">
        <div>
          <div className="card-title">{product.name}</div>
          <div className="muted">{product.tag}</div>
        </div>
        <div className="price">₹{product.price}</div>
      </div>

      <div className="divider" />

      {!inCart ? (
        <button
          className="btn"
          onClick={() => dispatch(addItem({ id: product.id, name: product.name, price: product.price }))}
        >
          Add to Cart
        </button>
      ) : (
        <div className="row">
          <div className="qty">
            <button className="btn ghost" onClick={() => dispatch(updateQty({ id: product.id, qty: inCart.qty - 1 }))}>
              −
            </button>
            <input
              className="input"
              value={inCart.qty}
              onChange={(e) => dispatch(updateQty({ id: product.id, qty: e.target.value }))}
            />
            <button className="btn ghost" onClick={() => dispatch(updateQty({ id: product.id, qty: inCart.qty + 1 }))}>
              +
            </button>
          </div>

          <button className="btn danger" onClick={() => dispatch(removeItem(product.id))}>
            Remove
          </button>
        </div>
      )}
    </div>
  );
}