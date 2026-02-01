import { useState } from "react";
import "./Order.css";

function OrderPage() {
  const [order, setOrder] = useState({
    name: "",
    address: "",
    product: "",
    quantity: 1,
  });

  const handleChange = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };

  const placeOrder = () => {
    alert("✅ Order placed successfully!");
    setOrder({ name: "", address: "", product: "", quantity: 1 });
  };

  return (
    <div className="card">
      <h3>🛒 Place Order</h3>

      <input
        name="name"
        placeholder="Customer Name"
        value={order.name}
        onChange={handleChange}
      />

      <input
        name="address"
        placeholder="Delivery Address"
        value={order.address}
        onChange={handleChange}
      />

      <input
        name="product"
        placeholder="Product Name"
        value={order.product}
        onChange={handleChange}
      />

      <input
        type="number"
        name="quantity"
        placeholder="Quantity"
        value={order.quantity}
        onChange={handleChange}
      />

      <button className="btn primary" onClick={placeOrder}>
        Place Order
      </button>
    </div>
  );
}

export default OrderPage;
