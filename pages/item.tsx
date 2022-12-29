import Image from "next/image";
import Header from "../components/header";
import styles from "../styles/Item.module.css";

const Item = () => {

    return (
        <>
            <Header />
            <div className={styles.card}>
                <div className={styles.card_head}>
                    <button className={styles.backBtn}></button>
                    <h3 className={styles.promo}>air jordan</h3>
                </div>
                <div className={styles.card_body}>
                    <div className={styles.left}>
                        <h1 className={styles.card_title}>title</h1>
                        <Image src="/pics/CMFT.jpg" alt="product-image" height={400} width={400} className={styles.image} />
                    </div>
                    <div className={styles.right}>
                        <div className={styles.card_text}>
                            <p className={styles.description}>description</p>
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

export default Item