import Link from 'next/link'
import React from 'react'
import style from './../../styles/Header.module.css'
import Image from 'next/image'


const Header = () => {


  return (
    
 
 <header className={style.header}>

        <div className='contenedor'>
          <div className={style.barra}>

            <div>
              <Image className={style.img} width={150} height={100} src='/imagen/Logo.png' alt='logo' />
            </div>

            <nav className={style.navegacion}>
              <Link href={'/signUp'}></Link>
              <Link href='/'>inicio</Link>
              <Link href='/nosotros'>nosotros</Link>
              <Link href='/blog'>bloga</Link>
              <Link href='/tienda'>tienda</Link>
            </nav>
          </div>
        </div>
      </header>
 
 
 
 )
}

export default Header


