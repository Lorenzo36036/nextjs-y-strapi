import React from 'react'
import Link from 'next/link'
import Style from './../../styles/footer.module.css'

const Footer = () => {
    return (
        <div className={Style.footer}>
            <div className={`contenedor ${Style.contenido}`} >
                <nav className={Style.navegacion}>
                    <Link href='/'>inicio</Link>
                    <Link href='/nosotros'>nosotros</Link>
                    <Link href='/blog'>blog</Link>
                    <Link href='/tienda'>tienda</Link>
                </nav>
                <p className={Style.copyright}>TODOS LOS DERECHOS RESERVADOS</p>
            </div>
        </div>
    )
}

export default Footer

