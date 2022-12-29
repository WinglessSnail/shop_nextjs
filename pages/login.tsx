import { useRouter } from "next/router"
import { FC } from "react"
import Header from "../components/login/header"
import { IUser } from "../interfaces/users"
import styles from "../styles/Login.module.css"

interface ILoginPage {
  users : IUser[]
}

const Login = () =>{

  const login: FC<ILoginPage> = useRouter()


  const handleLoginClick = ()=>{
    login.push("/products") 
  }

    return (
        <>
            <Header/>
            <div className={styles.loginform}>
        <label id={styles.label} >
          user name
        </label>
        <br />
        <input
          id={styles.user}
          placeholder="user name"
        ></input>
        <label id={styles.label} >
          password
        </label>
        <br />
        <input
          id={styles.password}
          type="password"
          placeholder="password"
        ></input>
        <button className={styles.login} onClick={handleLoginClick}>
          Login
        </button>
      </div>
        </>
    )
}

export default Login