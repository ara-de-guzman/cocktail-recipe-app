import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import RandomRecipePage from "./pages/RandomRecipePage";
import CockTailRecipeDetail from "./pages/CockTailRecipeDetail";
import { useState } from "react";
import { UserContext } from "./components/UserInput";
import NonAlcholicPage from "./pages/NonAlcholicPage";
import AlcoholicPage from "./pages/AlcoholicPage";
import Header from "./components/Header";

function App() {
  const [recipe, setRecipe] = useState("");

  function handleEventKey(e) {
    setRecipe(e.target.value);
    if (e.code === "Enter") {
      setRecipe(e.target.value);
    }
  }
  function handleChange(e) {
    if (e.target.value === "") {
      setRecipe(" ");
    }
  }

  return (
    <div>
      <UserContext.Provider value={recipe}>
        <Router>
          <Header
            onKeyDownHandle={handleEventKey}
            onChangeHandle={handleChange}
          />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/category" element={<CategoryPage />} />
            <Route path="/random" element={<RandomRecipePage />} />
            <Route path="/recipe/:id" element={<CockTailRecipeDetail />} />
            <Route path="/non-alcohol" element={<NonAlcholicPage />} />
            <Route path="/alcohol" element={<AlcoholicPage />} />
          </Routes>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
