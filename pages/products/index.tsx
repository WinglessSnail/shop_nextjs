import { ChangeEvent, FC, useEffect, useReducer, useRef, useState, useSyncExternalStore } from "react"
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
            console.log("state action", [...state.sort((a: IProduct, b: IProduct) => a.price - b.price)]);
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
    const [products, dispatch] = useReducer(reducer, props.products);

    useEffect(() => {

        const searchResult = props.products.filter(
            (product) =>
                product.title.toLowerCase().includes(search) ||
                product.description.toLowerCase().includes(search)
        )
        dispatch({ type: ACTIONS.SET, payload: searchResult });

    }, [search]);


    const handleSort = (e: ChangeEvent<HTMLSelectElement>) => {
        console.log(e.target.value);
        if (e.target.value === ACTIONS.ASCENDING) {
            dispatch({ type: ACTIONS.ASCENDING, payload: products })
        } else {
            dispatch({ type: ACTIONS.DESCENDING, payload: products })
        }
    }



    return (
        <>
            <Header searchBar={setSearch} />
            <form className={styles.filter_form}>
                <label className={styles.filter_label}>
                    Price filters :{" "}
                </label>
                <select name="filter" onChange={handleSort} id={styles.filter}>
                    <option value={ACTIONS.ASCENDING} >ascending</option>
                    <option value={ACTIONS.DESCENDING}>descending</option>
                </select>
            </form>
            <div className={styles.grid}>
                {products.map(Product =>
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
