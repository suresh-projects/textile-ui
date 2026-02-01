import { useEffect, useState } from "react";

function OrderHistory() {
  const [orders, setOrders] = useState([]);

useEffect(() => {
  fetch("http://localhost:8081/api/orders")
    .then(res => res.json())
    .then(data => setOrders(Array.isArray(data) ? data : []))
    .catch(() => setOrders([]));
}, []);


  return (
    <div className="card">
      <h3>📜 Order History</h3>

      {orders.length === 0 ? (
        <p>No orders found</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Product ID</th>
              <th>Qty</th>
              <th>Total</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(o => (
              <tr key={o.orderId}>
                <td>{o.orderId}</td>
                <td>{o.productId}</td>
                <td>{o.quantity}</td>
                <td>₹{o.totalPrice}</td>
                <td>{o.orderDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default OrderHistory;
