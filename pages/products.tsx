import { FC, useEffect, useReducer, useRef, useState, useSyncExternalStore } from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import { Card } from "../components/product/card"
import styles from "../styles/Products.module.css"
import { IProduct } from "../interfaces/product"
// import { getStaticProps } from "../Assets/getAllProducts"

interface IProductsPage {
    products: IProduct[]
}

const Products: FC<IProductsPage> = (props) => {


    return (
        <>
            <Header />
            <form className={styles.filter_form}>
                <label className={styles.filter_label}>
                    Price filters :{" "}
                </label>
                <select name="filter" id={styles.filter}>
                    <option value="ascending">ascending</option>
                    <option value="descending">descending</option>
                </select>
            </form>
            <div className={styles.grid}>
                {props.products.map(Product =>
                    <Card key={Product.id} {...Product}/>    
                )}
            </div>
            <Footer />
        </>

    )
}
export async function getStaticProps() {
    const res = await fetch('http://localhost:3000/api/products')
    const products = await res.json()

    return {
        props: {
            products,
        },
    }
}

export default Products