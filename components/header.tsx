import Link from "next/link";
import { FC, useEffect } from "react";
import { IQuary } from "../interfaces/quary";
import style from "../styles/Header.module.css"

interface IHeader { 
    searchBar : (s:string) => void
}


const Header: FC<IHeader> = (props) => {

    const updateQuery = (e: React.FormEvent<HTMLInputElement>) => props.searchBar(e.currentTarget.value)
    
    //debounce left undone

    

    return (
        <>
            <header className={style.header}>
                <span className={style.logo}>Nike shop</span>
                <ul className={style.ul}>
                    <li className={style.li}><Link href="/products" className={style.li_link}>Products page</Link></li>
                </ul>

                <span className={style.badge}>name</span>
                
                <Link href="/login" className={style.btn_link}>
                <button className={style.btn}>logout</button>
                </Link>

                <input
                    type="search"
                    className={style.searchBar}
                    placeholder="search here"
                    onChange={updateQuery}
                >
                </input>
            </header>
        </>
    );
};
export default Header;