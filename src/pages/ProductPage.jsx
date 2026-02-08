import { useEffect, useState } from "react";

function ProductPage() {
  const API = process.env.REACT_APP_API_BASE_URL;

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [editingId, setEditingId] = useState(null);

  const [form, setForm] = useState({
    productName: "",
    fabricType: "",
    category: "",
    price: "",
    stockQuantity: "",
    available: true,
  });

  const fetchProducts = () => {
    fetch(`${API}/products`)
      .then(res => res.json())
      .then(setProducts)
      .catch(() => setProducts([]));
  };

  useEffect(() => {
    fetchProducts();
  }, [API]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const url = editingId
      ? `${API}/products/${editingId}`
      : `${API}/products`;

    const method = editingId ? "PUT" : "POST";

    fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    }).then(() => {
      fetchProducts();
      resetForm();
    });
  };

  const deleteProduct = (id) => {
    if (!window.confirm("Delete product?")) return;
    fetch(`${API}/products/${id}`, { method: "DELETE" })
      .then(fetchProducts);
  };

  const resetForm = () => {
    setEditingId(null);
    setForm({
      productName: "",
      fabricType: "",
      category: "",
      price: "",
      stockQuantity: "",
      available: true,
    });
  };

  const filteredProducts = products.filter((p) =>
    `${p.productName} ${p.fabricType} ${p.category}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="container">
      {/* form + table same as before */}
    </div>
  );
}

export default ProductPage;
