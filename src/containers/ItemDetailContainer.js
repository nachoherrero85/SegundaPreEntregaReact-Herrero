import React, { useEffect, useState } from "react"
import ItemDetail from "../containers/ItemDetail"
import { useParams } from "react-router-dom"



export const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const { ident } = useParams();


    useEffect(() => {

        const getProduct = async () => {

            try {
                const res = await fetch(`https://fakestoreapi.com/products/${ident}`);
                const data = await res.json();
                setProduct(data);
            } finally {
                setLoading(false);
            }
        };

        getProduct();
    }, [ident]);

    return (
        <>
            {<>{loading ? <h1>Cargando ...</h1> : <ItemDetail product={product} />}</>}
        </>
    );
};