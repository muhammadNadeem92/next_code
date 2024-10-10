import Link from 'next/link'
import React from 'react'

export default function ServicesPage() {
  return (
    <div style={{background:"orange"}}>
        <h1>ServicesPage</h1> 
        <br /><br /><br />
        <h2 style={{color:"green",textAlign:"center"}}>Thank You For Visiting</h2>
       <br /><br />
        <Link href="./" style={{color:"blue"}}>Go to HomePage</Link>
        </div>
  )
}
