import { Route, Routes, useLocation } from "react-router-dom"
import Navbar from "./components/Navbar"
import Products from "./pages/Products"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import './App.css'
import { useEffect } from "react"
import ProductDetail from "./pages/ProductDetail"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"
import Footer from "./components/Footer"

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
