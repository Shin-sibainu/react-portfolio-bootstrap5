import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/HeaderComponent/Header";
import HomePage from "./components/Pages/HomePage";
import Products from "./components/Pages/Products";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<Products />} />
        </Routes>
        {/* <HomePage />
        <Products /> */}
      </div>
    </Router>
  );
}

export default App;
