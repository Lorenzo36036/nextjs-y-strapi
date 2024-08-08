import React from 'react'
import Layout from './components/Layout'
import Image from 'next/image'
import Style from './../styles/nosotros.module.css'
import { useEffect } from 'react'
const Nosotros = () => {
  
  return (
    <div>

      <Layout pagina={'Nosotros'}>
        <div><h4 className='heading'>Nosotros</h4></div>
        <main className='contenedor'>
        <div className={Style.contenido}> 
          <Image layout='responsive' width={500} height={200}  src='/imagen/guitarra.png' alt='guitarra'/>
          <p>The first use of Lorem ipsum is uncertain, though some have suggested the 1500s, when sections of Classical works were often used as dummy texts by printers to make type specimen books demonstrating different fonts. According to this account, the material was chosen based on Latin’s familiarity as a lingua franca across Europe and the popularity of Classical works during the Middle Ages. Whenever it was first created, Lorem ipsum did not gain widespread popularity until the 1960s, when Letraset manufactured preprinted transfer sheets that featured the passage for use in the advertising industry. The sheets allowed typesetters and designers to cut out and rub on the text in various fonts, sizes, and formats for mock-ups and prototypes.
            In the 1980s, during the rise of the personal computer, Aldus Corporation developed its PageMaker desktop publishing software, which included Lorem ipsum as a word processing feature. Other word processors, including Microsoft Word, adopted the feature, and it became ubiquitous as a placeholder in Web design. Most Web content management systems, such as Joomla! and Wordpress, also feature a plug-in that generates Lorem ipsum.
          </p>

          </div>  

        </main>
      </Layout>



    </div>
  )
}

export default Nosotros
