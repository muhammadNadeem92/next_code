import React from "react";
import Link from "next/link";
import style from "./cssStyle/style.module.css"
export default function HomePage() {
  return (
   
     <div>
      
      <header>
    <div>
        <nav className={style.navbar}>
          <ul>
            <li className={style.ul}><Link href="/"  className={style.link}>Home</Link></li>
            <li className={style.ul}><Link href="/about" target="_blank" className={style.link}>About</Link></li>
            <li className={style.ul}><Link href="/contact" target="_blank"className={style.link}>Contact</Link></li>
            <li className={style.ul}><Link href="/services"  target="_blank"className={style.link}>Services</Link></li>
          </ul>
          
        </nav>
        <br /><br /><br /><br /><br /><br />
        <h1 className={style.heading}>Hello World!</h1>
        <br/> <br/> <br/>
        <h1 className={style.heading2}>Welcome To My HomePage</h1>
        </div>
      </header>
      </div>
  )
}
