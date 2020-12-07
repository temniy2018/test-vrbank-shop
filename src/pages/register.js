import React, { useState } from "react"
import { navigate } from "gatsby"

import Layout from "../components/layout"
import s from "../styles/register.module.css"

const Register = () => {
  const [firstName, setFirstName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const sendData = async () => {
    const user = {
      firstName,
      phone: phoneNumber,
      email,
      password,
    }
    await fetch("http://localhost:1337/siteusers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(user),
    });
    navigate('/');
  }

  return (
    <Layout page="register">
      <h1 className={s.header}>Register</h1>
      <div className={s.registerBlock}>
        <span className={s.registerBlock__text}>First Name</span>
        <input
          className={s.registerBlock__input}
          type="text"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />
      </div>
      <div className={s.registerBlock}>
        <span className={s.registerBlock__text}>Phone number</span>
        <input
          className={s.registerBlock__input}
          type="text"
          value={phoneNumber}
          onChange={e => setPhoneNumber(e.target.value)}
        />
      </div>
      <div className={s.registerBlock}>
        <span className={s.registerBlock__text}>Email</span>
        <input
          className={s.registerBlock__input}
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <div className={s.registerBlock} style={{ marginBottom: 50 }}>
        <span className={s.registerBlock__text}>Password</span>
        <input
          className={s.registerBlock__input}
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <button className={s.register} onClick={() => sendData()}>
        <span className={s.registerText}>REGISTER</span>
      </button>
    </Layout>
  )
}

export default Register
