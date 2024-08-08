import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from './Footer'


const Layout = ({children, pagina}) => {
  return (
    <div>
      <Head>
        <title>Guitarla Nex - {pagina}</title>
        <meta name="description" content="Sitio Web de ventas de guitarras a buen precio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <Header/>
          {children}
      <Footer />

    </div>
  )
}

export default Layout
