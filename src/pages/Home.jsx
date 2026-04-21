import { Link } from "react-router-dom";
import { getProducts, getProductById } from "../data/products.js"
import ProductCard from "../components/ProductCard.jsx";



export default function Home(){
  const products = getProducts()
  console.log(products);
  return(
    <div className="page">
      <div className="home-hero">
        <h1 className="home-title">Welcom to SOS Tech</h1>
        <p className="home-subtitle">Discover amazing tech products</p>
      </div>

      <div className="container">
        <h2 className="page-title">Our Products</h2>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard product={product} key={product.id}/>
          ))}
        </div>
      </div>
    </div>
  )
}