import styles from "./SignUp.module.css";
import { useSignup } from "../../hooks/useSignup.js";

import React, { useState } from "react";

export default function SignUp() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Name, setName] = useState("");
  const { Signup, isPending, error } = useSignup();

  const HandleSubmit = (e) => {
    e.preventDefault();
    Signup(Email, Password, Name);
  };

  return (
    <form onSubmit={HandleSubmit} className={styles["signup-form"]}>
      <h2> SignUp </h2>
      <label>
        <span>Name:</span>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={Name}
        />
      </label>
      <lable>
        <span>Email:</span>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={Email}
        />
      </lable>
      <label>
        <span>Password:</span>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={Password}
        ></input>
      </label>

      {!isPending && <button className="btn">Signup</button>}
      {isPending && (<button className="btn" disabled>loading</button>)}
      {error && <p>{error}</p>}
    </form>
  );
}
