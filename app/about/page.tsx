import Link from 'next/link'
import React from 'react'
import style from './about.module.css'

export default function AboutPage() {
  return (
    <div>
 <header style={{background:"grey",color:"blue"}}><h1>This is AboutPage</h1></header>
 <br /><br /><br /><br />
<footer>
<Link href="./" style={{background:"green",color:"pink"}}>Go to HomePage</Link>
</footer>
    </div>
  )
}
