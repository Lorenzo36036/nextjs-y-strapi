import Layout from "./components/Layout";
import Entrada from "./components/Entrada";
import style from "./../styles/blog.module.css";
import { gql, useQuery } from '@apollo/client';
import { client } from "./lib/client";

// Definir la consulta GraphQL
const  GET_BLOGS = gql`
  query {
  blogs {
    data {
      id
      attributes{
        titulo
        resumen
        contenido
        createdAt
        updatedAt
        publishedAt
        fotos{
          data{
            attributes{
              url
            }  
          }
        }
      }
    }
  }
}

`;

export default function Blog({data}) {
  
  // Asegurarse de que data.blogs.data existe antes de mapearlo
  return (
    <div>
      <Layout pagina={"blog"}>


        <div className={style.blog}>
          {data.map((entrada) => (
            <Entrada key={entrada.id} id={entrada.id} entrada={entrada.attributes} />
            ))}
        </div>
      </Layout>
    </div>
  );
}

export async function getServerSideProps() {
  // Ejecuta la consulta para obtener datos en el momento de la construcción 
  const { data } = await client.query({query : GET_BLOGS,})
  return {
    props: {
       data : data.blogs.data
    },
  };
}
