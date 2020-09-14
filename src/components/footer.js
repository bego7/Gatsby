import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { MDBIcon} from 'mdbreact';
import { Button } from "react-bootstrap"
import "../css/footer.css"
import { CardDeck } from "react-bootstrap";

const Footer = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol  className="contenedor">
           <Button  href="https://www.facebook.com/neurojk/" ><MDBIcon fab icon="facebook-square" className="iconos"/></Button>
           <Button href="https://www.youtube.com/channel/UCglkkIyNzYBOFOR5gp5Yt3Q/"><MDBIcon fab icon="youtube" className="iconos"/></Button>
          <Button href="https://twitter.com/JurgenKlaric/"> <MDBIcon fab icon="twitter" className="iconos"></MDBIcon></Button>
          <Button href="https://www.instagram.com/jurgenklaric/">          <MDBIcon fab icon="instagram" className="iconos" href ="https://www.instagram.com/?hl=es-la" />
          </Button>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: Begoña Montes
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;