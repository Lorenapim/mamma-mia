import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar";
import Router from "./components/router"
import Context from "./context";
import pizzasData from "./data/pizzas.json";
import { useEffect, useState } from "react";

function App() {

  const [pizzas, setPizzas] = useState([]);
  const globalState = { pizzas, setPizzas };

  useEffect(() => {
    setPizzas(pizzasData.map((pizza, index) => {
      return { 
        id: index + 1,
        name: pizza.name,
        ingredients: pizza.ingredients,
        image: pizza.img,
        precio: pizza.price,
        descripcion: pizza.desc
      }
    }));
  }, []);

  return (
    <Context.Provider value={globalState}>
      <BrowserRouter>
        <Navbar />
        <Router />
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;