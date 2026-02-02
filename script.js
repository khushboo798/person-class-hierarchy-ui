import { useState } from "react";

const productsData = [
  { id: 1, name: "Wireless Headphones", price: 129.99, category: "electronics" },
  { id: 2, name: "Bluetooth Speaker", price: 89.99, category: "electronics" },
  { id: 3, name: "Cotton T-Shirt", price: 24.99, category: "clothing" },
  { id: 4, name: "Denim Jeans", price: 59.99, category: "clothing" },
];

export default function App() {
  const [filter, setFilter] = useState("all");

  const filteredProducts =
    filter === "all"
      ? productsData
      : productsData.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center p-10">
      <div className="w-full max-w-3xl bg-white p-8 rounded-xl shadow">
        
        <h1 className="text-3xl font-bold mb-6">Product Filter</h1>

        <div className="mb-6">
          <label className="mr-2 font-medium">Filter by:</label>
          <select
            className="border px-3 py-2 rounded"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All Products</option>
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {filteredProducts.map(product => (
            <div
              key={product.id}
              className="border p-5 rounded-xl shadow-sm"
            >
              <h2 className="text-lg font-bold">{product.name}</h2>
              <p className="text-gray-600 mt-1">${product.price}</p>

              <span
                className={`inline-block mt-3 px-4 py-1 rounded-full text-white text-sm ${
                  product.category === "electronics"
                    ? "bg-blue-600"
                    : "bg-blue-400"
                }`}
              >
                {product.category}
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

