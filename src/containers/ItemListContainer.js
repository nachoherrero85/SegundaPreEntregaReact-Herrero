import React, { useEffect, useState } from "react";
import ItemList from "../containers/ItemList";
import { useParams } from "react-router-dom";







export const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loadings, setLoadings] = useState(false);
  const [error, setError] = useState(false)
  const { name } = useParams();
  const ruta = name ? `https://fakestoreapi.com/products/category/${name}` : `https://fakestoreapi.com/products`;
  const URL = ruta;


  useEffect(() => {


    const getProducts = async () => {
      try {
        const res = await fetch(URL);
        const data = await res.json();
        setProducts(data);
      } catch {
        setError(true);
      }


    };

    getProducts();
  }, [name]);



  return (
    <>
      <h3 >{greeting}</h3>
      {<>{loadings ? <h1>Cargando ...</h1> : <ItemList products={products} />}</>}
    </>
  );


};

export default ItemListContainer;