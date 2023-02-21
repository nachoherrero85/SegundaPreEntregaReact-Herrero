import { style } from "@mui/material/styles";
import React from "react";
import Card from "@mui/material/Card";
import {
    CardContent,
    CardMedia,
    Typography,
    Button,
    CardActionArea,
    CardActions,
} from "@mui/material";

const ItemDetail = ({ product }) => {
    return (
        <Card sx={{ maxWidth: 400 }} style={styles.container}>


            <CardActionArea>
                <CardMedia
                    component="img"
                    height="200"

                    image={product.image}
                    alt={product.title}
                    textAlign="center"
                />



                <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    style={styles.title}
                >
                    <h5>{product.title}</h5>
                </Typography>
                <span>{product.description}</span>
                <Typography variant="body2" color="text.secondary">
                    <h2>${product.price}</h2>
                </Typography>



            </CardActionArea>
        </Card >

    );
};

export default ItemDetail;

const styles = {
    container: {

        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        margin: 20,
        backgroundColor: "rgb(110, 104, 104)",
        display: "flex",

        flexWrap: "wrap",
    },
    title: {
        textOverflow: "ellipsis",
        overflow: "hidden",
        height: 100,
    },

    Button: {
        textDecoration: "none",
        color: "red",
    },
};