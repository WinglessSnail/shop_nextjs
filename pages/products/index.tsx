import { FC, useEffect, useReducer, useRef, useState, useSyncExternalStore } from "react"
import Footer from "../../components/footer"
import Header from "../../components/header"
import { Card } from "../../components/product/card"
import styles from "../../styles/Products.module.css"
import { IProduct } from "../../interfaces/product"
// import { getStaticProps } from "../Assets/getAllProducts"

interface IProductsPage {
    products: IProduct[]
}

enum ACTIONS {
    ASCENDING = "ascending",
    DESCENDING = "descending",
    SET = "set",
    TOGGLE_FAVORITE = "toggleFavorite",
};

interface stateAction {
    type: ACTIONS;
    payload: IProduct[]
}

function reducer(state: IProduct[], action: stateAction) {
    const { type, payload } = action
    switch (type) {
        case ACTIONS.ASCENDING:
            return [...state.sort((a: IProduct, b: IProduct) => a.price - b.price)];
        case ACTIONS.DESCENDING:
            return [...state.sort((a: IProduct, b: IProduct) => b.price - a.price)];
        case ACTIONS.SET:
            return action.payload;
        // case ACTIONS.TOGGLE_FAVORITE:
        //     return state.map((p: any) => {
        //         return p.id === action.productId
        //             ? { ...p, favestate: !p.favestate }
        //             : p;
        //     });
        default:
            return state;
    }
}


const Products: FC<IProductsPage> = (props) => {

    const [search, setSearch] = useState("");
    const [products, dispatch] = useReducer(reducer, []);

    useEffect(() => {   

        const searchResult = props.products.filter(
            (product) =>
                product.title.toLowerCase().includes(search) ||
                product.description.toLowerCase().includes(search)
        )
        // console.log(searchResult);
        dispatch({ type: ACTIONS.SET, payload: searchResult });
        console.log(dispatch({ type: ACTIONS.SET, payload: searchResult }));

    }
        , [search]);

    return (
        <>
            <Header searchBar={setSearch} />
            <form className={styles.filter_form}>
                <label className={styles.filter_label}>
                    Price filters :{" "}
                </label>
                <select name="filter" id={styles.filter}>
                    <option value="ascending" onClick={()=> dispatch({ type: ACTIONS.ASCENDING, payload: props.products})}>ascending</option>
                    <option value="descending" onClick={()=> dispatch({ type: ACTIONS.DESCENDING, payload: props.products})}>descending</option>
                </select>
            </form>
            <div className={styles.grid}>
                {props.products.map(Product =>
                    <Card key={Product.id} {...Product} />
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
