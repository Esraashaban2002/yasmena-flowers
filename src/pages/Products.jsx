import React, { useState } from "react";
import products from "../data/products.json";
import ProductCard from "../components/ProductCard";

function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All");
const [searchTerm, setSearchTerm] = useState("");

  const categories = ["All", ...new Set(products.map(p => p.category))];

const filteredProducts = products.filter((p) => {
  const matchesCategory =
    selectedCategory === "All" || p.category === selectedCategory;

  const matchesSearch =
    p.name.toLowerCase().includes(searchTerm.toLowerCase());

  return matchesCategory && matchesSearch;
});

function handelSearch(e){
   setSearchTerm(e.target.value)
}
  return (
    <div className="container my-5">

      {/* Title */}
      <h2 className="text-center mb-4">Our Flowers 🌸</h2>

      {/* Filters */}
      <div className="text-center mb-4">
        <div className="search my-3">
          <input type="search" className="form-control" placeholder="Search by name" onChange={handelSearch}/>
        </div>
        {categories.map((cat, index) => (
          <button
            key={index}
            className={`btn filter-btn ${selectedCategory === cat ? "active" : ""}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Products */}
      <div className="row">
        {filteredProducts.map((p) => (
          <div key={p.id} className="col-md-3 mb-4">
            <ProductCard product={p} />
          </div>
        ))}
      </div>

    </div>
  );
}

export default Products;