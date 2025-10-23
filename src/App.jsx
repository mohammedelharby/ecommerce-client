import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import HeroCarousel from "./components/HeroCarousel";
import Categories from "./components/Categories";
import Banner from "./components/Banner";
import DealsOfTheDay from "./components/DealsOfTheDay";
import ProductGrid from "./components/ProductGrid";
import ProductDetails from "./components/ProductDetails";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Navbar />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroCarousel />
                  <Categories />
                  <DealsOfTheDay />
                  <Banner />
                  <ProductGrid />
                </>
              }
            />
            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
