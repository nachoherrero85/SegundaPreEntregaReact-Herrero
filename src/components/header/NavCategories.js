import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavCategories = () => {
    const categories = [
        { id: 1, name: "electronics", route: '/categories/electronics' },
        { id: 2, name: "jewelery", route: '/categories/jewelery' },
        { id: 3, name: "men's clothing", route: "/categories/men's clothing" },
        { id: 4, name: "women's clothing", route: "/categories/women's clothing" }
    ];

    return (
        <nav>
            {categories.map((category) => {
                return (
                    <Link key={category.id} style={styles.categorias} to={category.route}>
                        {category.name}
                    </Link>
                );
            })}
        </nav>
    );
};

export const styles = {
    categorias: {
        margin: 10,
        color: "white",
        listStyle: 'none'
    },
};

export default NavCategories;