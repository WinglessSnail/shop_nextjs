import { GetStaticPropsContext } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import Header from "../../components/header";
import { IProduct } from "../../interfaces/product";
import styles from "../../styles/Item.module.css";

const Item = (props:{product: IProduct} ) => {

    const backButton = useRouter()

    return (
        <>
            {/* <Header /> */}
            <div className={styles.card}>
                <div className={styles.card_head}>
                    <button className={styles.backBtn} onClick={()=>backButton.push("/products")}>Back</button>
                    <h3 className={styles.promo}>air jordan</h3>
                </div>
                <div className={styles.card_body}>
                    <div className={styles.left}>
                        <h1 className={styles.card_title}>{props.product.title}</h1>
                        <Image src={props.product.img} alt="product-image" height={400} width={400} className={styles.image} />
                    </div>
                    <div className={styles.right}>
                        <div className={styles.card_text}>
                            <p className={styles.description}>{props.product.description}</p>
                        </div>
                    </div>
                </div>
                <div className={styles.item_footer}>
                    <button className={styles.orderBtn}>Add to cart</button>
                </div>
            </div>
        </>
    );
};

export async function getStaticPaths() {
    const res = await fetch(`http://localhost:3000/api/products`)
    const products = await res.json();

    const paths = products.map((product:IProduct) => ({
      params: { id: String(product.id) },
    }))
  
    return { paths, fallback: 'blocking' }
  }

export async function getStaticProps(context : GetStaticPropsContext) {
    const id = context.params?.id;
    
    const res = await fetch(`http://localhost:3000/api/product?id=${id}`);
    
    const product = await res.json();

    return {
        props: {
            product,
        },
    }
}


export default Item