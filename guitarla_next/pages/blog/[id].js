import formatearFecha from "@/helpers"
import Layout from "../components/Layout"
import Image from "next/image"






const entradaBlog = ({ entrada }) => {
  const {titulo, resumen, contenido ,publishedAt, fotos} = entrada.attributes
  return (
    <div>
      <Layout pagina={`blog`}>
        <main className="contenedor"> 
          <h1 className="heading"></h1>
          <article>
           <h1></h1>
           <Image layout='responsive' src={`http://localhost:1337${fotos.data.attributes.url}`} width={650} height={200}/>
           <div>
            <p>{formatearFecha(publishedAt)}</p>
            <p>{contenido}</p>
           </div>
          </article>
        </main>

      </Layout>
    </div>
  )
}


export async function getStaticPaths() {
  const res = await fetch(`http://localhost:1337/api/blogs?populate=*`)
  const entrada = await res.json()
  const paths = entrada.data.map((entrada) => ({
    params : { id : entrada.id.toString()}
  }))

  console.log(paths)

  return {
    paths,
    fallback: true,
  }
}



export async function getStaticProps({ params : { id } }) {
  const res = await fetch(`http://localhost:1337/api/blogs/${id}?populate=*`)
  const entrada = await res.json()
  return{
    props: {
    entrada : entrada.data  
    }

  }
  
}







export default entradaBlog
