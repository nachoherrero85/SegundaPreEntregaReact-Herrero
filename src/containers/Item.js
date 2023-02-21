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
import { Link } from 'react-router-dom'

const Item = ({ product }) => {
    return (

        <Card sx={{ maxWidth: 345 }} style={styles.container}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="150"
                    image={product.image}
                    alt={product.title}
                />
                <CardContent>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        style={styles.title}
                    >
                        {product.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        ${product.price}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Link to={`/product/${product.id}`}>
                    <Button size="small" color="primary" textDecoration="none">
                        Ver Detalles
                    </Button>
                </Link>
            </CardActions>
        </Card>
    );
};

const styles = {
    container: {
        width: window.innerHeight > 900 ? "25%" : "90%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        margin: 20,
        backgroundColor: "rgb(242, 234, 234)",
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

export default Item;