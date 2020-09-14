import React from "react"
import { Link } from "gatsby"
import { Carousel } from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby"

import "bootstrap/dist/css/bootstrap.min.css"

const Galeria = () => {
  const data = useStaticQuery(graphql`
  query galeria {
    miGaleria: allAirtable(
      filter: { table: { eq: "galeria" } }
      sort: { fields: data___titulo, order: DESC }
    ) {
      nodes {
        data {
          titulo, 
          descripcion,
          imagen{
            url
          }
        }
      }
    }
  }
`)
  return (
    <div>
      <Carousel>
      {data.miGaleria.nodes.map((item, i) => (
        <Carousel.Item>
       
          <img
            className="d-block w-100"
            src={item.data.imagen[0].url}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>{item.data.titulo}</h3>
            <p>{item.data.descripcion}</p>
          </Carousel.Caption>
        </Carousel.Item>
        ))}
       
      </Carousel>
     
    </div>
  )
}

export default Galeria
