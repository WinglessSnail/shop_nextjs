import Image from "next/image";
import Link from "next/link";
import Products from "../../pages/products";
import styles from "../../styles/Card.module.css";
import { IProduct } from "../../interfaces/product"
import { FC } from "react";
import Icon from "../atom/Icon";

export const Card :FC<IProduct> = (props) => {
   const {id} = props

  return (
    <>
      <div className={`${styles.pcard}`}>
        <div className={styles.imgBx}>
        <Link href={`/products/${props.id}`} key={props.id}>
            <Image alt="product-image" src={props.img} width={400} height={400}/>
        </Link>
        </div>
        <div className={styles.contentBx}>
          <div className={styles.favorite}>
              {/* <i className="fa fa-heart-o"/> */}
              <Icon name="fa-heart-o"/>
          </div>
          <h2>{props.title}</h2>
          <Link href={`${props.id}`} key={props.id}>
            <button>Buy Now</button>
          </Link>
          <h5 className={styles.price}>${props.price}</h5>
        </div>
      </div>
    </>
  );
};
