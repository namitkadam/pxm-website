// import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Products from "./Components/Products";
import ProductCard from "./Components/ProductCard";
import Hub from "../src/Components/Hub";
import Futures from "./Components/Futures";
import Achieved from "./Components/Achieved";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="h-full app relative">
      <Header />
      <ProductCard />
      <Products />
      <Hub />
      <Futures />
      <Achieved />
      <Footer />
      <div class="bg-noise"></div>
    </div>
  );
}

export default App;
