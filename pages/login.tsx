import { useRouter } from "next/router"
import { FC, useRef, useState } from "react"
import Header from "../components/login/header"
import { IUser } from "../interfaces/users"
import styles from "../styles/Login.module.css"

interface ILoginPage {
  users: IUser[]
}

const Login: FC<ILoginPage> = (props) => {

  const [name, setName] = useState("")
  const [password, setPassword] = useState("")

  const passFocus = useRef()
  const login = useRouter()

  const handleLoginClick = () => {
    const user = props.users.find(
      (u) => u.name === name && u.password === password
    );
    if (user) {
      login.push("/products")
    } else {
      // login.push("/signUp")
      alert("wrong user name or password")
    }
  }

  const handleNameKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === "Enter"){
      passFocus.current.focus()
    }
  }

  const handlePassKeypress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
    const user = props.users.find(
      (u) => u.name === name && u.password === password
    );
    if (user) {
      login.push("/products")
    } else {
      // login.push("/signUp")
      alert("wrong user name or password")
    }
    }
  }

  const handlePasswordChange = (e: React.FormEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value)
  }
  const handleNameChange = (e: React.FormEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
    localStorage.setItem("name", e.currentTarget.value)
  };
  return (
    <>
      <Header />
      <div className={styles.loginform}>
        <label id={styles.label} >
          user name
        </label>
        <br />
        <input
          id={styles.user}
          placeholder="user name"
          onChange={handleNameChange}
          onKeyUp={handleNameKeyPress}
        ></input>
        <label id={styles.label} >
          password
        </label>
        <br />
        <input
          id={styles.password}
          type="password"
          placeholder="password"
          ref={passFocus}
          onChange={handlePasswordChange}
          onKeyUp={handlePassKeypress}
        ></input>
        <button className={styles.login} onClick={handleLoginClick} >
          Login
        </button>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/users')
  const users = await res.json()

  return {
    props: {
      users,
    },
  }
}

export default Login