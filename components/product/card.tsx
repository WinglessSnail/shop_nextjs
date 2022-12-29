import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Card.module.css";

export const Card = (props) => {
   

  return (
    <>
      <div className={styles.pcard}>
        <div className={styles.imgBx}>
        <Link href="#">
            <Image alt="product-image" src={props.img} width={400} height={400}/>
        </Link>
        </div>
        <div className={styles.contentBx}>
          <div className={styles.favorite}>
              {/* <i className="fa fa-heart-o"/> */}
          </div>
          <h2>{props.title}</h2>
          <Link href="#">
            <button>Buy Now</button>
          </Link>
          <h5 className={styles.price}>{props.price}</h5>
        </div>
      </div>
    </>
  );
};
