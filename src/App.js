import React from "react";
import Navbar from "./components/header/Navbar";
import ItemListContainer from "./containers/ItemListContainer";
import { ItemDetailContainer } from "./containers/ItemDetailContainer";
import Cart from "./containers/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActionArea,
  CardActions,
} from "@mui/material";

const App = () => {
  const userName = "Javier";
  const greeting = "Vea Toda nuestra selección";
  const greeting1 = "Vea por Categoría";
  const greeting2 = "Detalle producto";
  return (
    <div style={styles.container}>
      <BrowserRouter>
        <Navbar name={userName} />
        <Routes>

          <Route path="/" element={<ItemListContainer greeting={greeting} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="categories/:name" element={<ItemListContainer greeting={greeting1} />} />
          <Route path="product/:ident" element={<ItemDetailContainer greeting={greeting2} />} />


        </Routes>


      </BrowserRouter>
    </div>
  );
};

export default App;

const styles = {
  container: {
    margin: 20,
    textAlign: "center",
  }
}