import React from "react"
import Menu from "../components/menu"
import Galeria from "../components/galeria"
import Footer from "../components/footer"
import { Container, Card, ListGroup, ListGroupItem } from "react-bootstrap"
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBView,
  MDBIcon,
} from "mdbreact"
import "bootstrap/dist/css/bootstrap.min.css"
import { useStaticQuery, graphql } from "gatsby"

export default function Header() {
  const data = useStaticQuery(graphql`
    query pasados {
      events: allAirtable(
        filter: { table: { eq: "pasados" } }
        sort: { fields: data___titulo, order: DESC }
      ) {
        nodes {
          data {
            titulo
            descripcion
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
      <Menu />
      <Galeria/>

      <MDBRow>
        {data.events.nodes.map((item, i) => (
          <MDBCol md="4">
            <MDBCard>
              <MDBCardImage
                hover
                overlay="white-light"
                className="card-img-top"
                src={item.data.imagen[0].url}
                alt="man"
              />

              <MDBCardBody cascade className="text-center">
                <MDBCardTitle className="card-title">
                  <strong>{item.data.titulo}</strong>
                </MDBCardTitle>

                <MDBCardText>{item.data.descripcion}</MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        ))}
      </MDBRow>

      <Footer />
    </div>
  )
}
