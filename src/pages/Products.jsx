import React, { useState } from "react";
import products from "../data/products.json";
import ProductCard from "../components/ProductCard";
import { useLang } from "../context/LanguageContext";

function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const { t } = useLang()

  const categories = ["All", ...new Set(products.map(p => p.category))];

  const filteredProducts = products.filter((p) => {
    const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">{t('products_title')}</h2>

      <div className="text-center mb-4">
        <div className="search my-3">
          <input
            type="search"
            className="form-control"
            placeholder={t('products_search')}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        {categories.map((cat, index) => (
          <button
            key={index}
            className={`btn filter-btn ${selectedCategory === cat ? "active" : ""}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat === "All" ? t('products_all') : cat}
          </button>
        ))}
      </div>

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
