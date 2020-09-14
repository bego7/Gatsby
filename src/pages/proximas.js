import Menu from "../components/menu"
import Footer from "../components/footer"
import { Container, Card, ListGroup, ListGroupItem } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import React from "react"
import ReactDOM from 'react-dom';
import Countdown from 'react-countdown';
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBBadge,
  MDBView,
  MDBMask
} from "mdbreact"
import "../css/proximas.css"
import "../css/countdown.css"
import { useStaticQuery, graphql } from "gatsby"
export default function Header() {
  const data = useStaticQuery(graphql`
    query ProximaQuery {
      events: allAirtable(
        filter: { table: { eq: "events" } }
        sort: { fields: data___inicio, order: ASC }
      ) {
        nodes {
          data {
            titulo
            descripcion
            inicio(formatString: " MMM DD, YYYY, h:mm:ss")
            final(formatString: "MMM DD, YYYY, h:mm:ss")
            link
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

        <MDBView src={data.events.nodes[0].data.imagen[0].url}>
        <MDBMask overlay="black-strong" className="flex-center flex-column text-white text-center">
        <h1>{data.events.nodes[0].data.titulo}</h1>
        <Countdown className="countDown" date={new Date(data.events.nodes[0].data.inicio)}></Countdown>
        <Card.Link href="/contacto"><MDBBtn outline color="warning">Contacto </MDBBtn></Card.Link>

        <br />
        </MDBMask>
        </MDBView>
    
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
                  <hr></hr>
                  <MDBCol md="12" className="d-flex justify-content-center">
                   
                      <Card.Link href={item.data.link}> <MDBBtn outline color="cyan">
                      <i className="fas fa-video"></i></MDBBtn></Card.Link>
                      <Card.Link href="/contacto"><MDBBtn outline color="warning">Contacto </MDBBtn></Card.Link>
                   
                  </MDBCol>
                  
                  <MDBCol>
                    <MDBBadge size="lg" pill color="default" className="badge">
                   {item.data.inicio}
                    </MDBBadge>
                  </MDBCol>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))}
        </MDBRow>
      <Footer />
    </div>
  )
}
