import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import formatearFecha from '@/helpers'
import style from "./../../styles/entrada.module.css"


const Entrada = ({entrada, id, imagen}) => {
  const {titulo, resumen, contenido ,publishedAt, fotos} = entrada
   
  
  //console.log(fotos.data.attributes.url)
  
  console.log(fotos)
  return (
    <article>
      
      <div className={style.contenido}>
      <h3>{titulo}</h3>
      <Image layout='cover' src={`http://localhost:1337${fotos.data.attributes.url}`} width={650} height={200}/>
      <p className={style.fecha}>{formatearFecha(publishedAt)}</p>
      <p>{resumen}</p>
      <p className={style.resumen}>{contenido}</p>   
      <Link  className={style.enlace} href={`blog/${id}`}>
       
        Leer Entrada

       

      </Link>
    </div>
    </article>
  )
}

export default Entrada
