import Menu from "../components/menu"
import Footer from "../components/footer"
import "bootstrap/dist/css/bootstrap.min.css"
import React from "react"
import { MDBMask, MDBView } from 'mdbreact';
import { useStaticQuery, graphql } from "gatsby"


export default function Main() {
    const data = useStaticQuery(graphql`
    query HeaderQuery {
      events: allAirtable(
        filter: { table: { eq: "inicio" } }
      ) {
        nodes {
          data {
            titulo
            imagen {
              url
            }
          }
        }
      }
    }
    
`)
return (
    <div>
    <Menu/>
    {data.events.nodes.map((item, i) => (
    <MDBView src={item.data.imagen[0].url}>
    <MDBMask overlay="black-strong" className="flex-center flex-column text-white text-center">
      <h2>{item.data.titulo}</h2>
    </MDBMask>
    </MDBView>
    ))}
    <Footer/>
    </div>
)

}

