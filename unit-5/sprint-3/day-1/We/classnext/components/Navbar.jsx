import React from 'react';
import Link from "next/link"

const Navbar = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-around"}}>
      <h1>Navbar</h1>
      <Link href="/">Home</Link>
      <Link href="/todo">Todo</Link>
      <Link href="/counter">Counter</Link>
    </div>
  )
}

export default Navbar
