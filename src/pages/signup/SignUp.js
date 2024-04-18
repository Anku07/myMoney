import styles from './SignUp.module.css'


import React, { useState } from 'react'

export default function SignUp() {
  const [email,setEmail] =useState('')
  const [password, setPassword] = useState('')
  const [Name, setName] = useState('')

   const handleSubmit = (e) => {
      e.preventDefault()
      console.log( Name, email,password)
   }

  return (
    <form onSubmit={handleSubmit} className={styles['signup-form']}>
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
       <span>email:</span>
       <input
          type ="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}/>
    </lable>
    <label>
    <span>password:</span>
    <input
     type="password"
     onChange={(e) => setPassword(e.target.value)}
     value={password}
     ></input>
     </label>
     
    <button className='btn'>Signup</button>
    </form>
  )
}
