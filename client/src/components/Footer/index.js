import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "./style.css";

const Footer = () => {

return ( 
    <MDBFooter color="mdb-color" className="font-small pt-4 mt-4">
      <MDBContainer className="text-center text-md-left">
        <MDBRow className="text-center text-md-left mt-3 pb-3">
          <hr className="w-100 clearfix d-md-none" />
          <MDBCol md="4" lg="3" xl="3" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Jennifer Alejos</h6>
            <p>
            <a href="https://github.com/alejosjen"><i className="fab fa-github-square mr-3" /></a> Full Stack Web Developer
            </p>
            <p>
            <a href="https://www.linkedin.com/in/jennifer-alejos/"><i className="fab fa-linkedin mr-3" /></a> Arizona, USA
            </p>
            
          </MDBCol>
          <hr className="w-100 clearfix d-md-none" />
          <MDBCol md="4" lg="4" xl="3" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Dan Solomon</h6>
            <p>
            <a href="https://github.com/DanRSolomon"><i className="fab fa-github-square mr-3" /></a>Full Stack Web Developer
            </p>
            <p>
            <a href="https://www.linkedin.com/in/danrsolomon/"><i className="fab fa-linkedin mr-3" /></a> Arizona, USA
            </p>
            
          </MDBCol>
          <hr className="w-100 clearfix d-md-none" />
          <MDBCol md="4" lg="3" xl="3" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Melissa Perez</h6>
            <p>
            <a href="https://github.com/melperez19"><i className="fab fa-github-square mr-3" /></a> Full Stack Web Developer
            </p>
            <p>
            <a href="https://www.linkedin.com/in/melissa-perez19/"><i className="fab fa-linkedin mr-3" /></a> Relocating to Florida, USA
            </p>
            
          </MDBCol>
          <hr className="w-100 clearfix d-md-none" />
          <MDBCol md="4" lg="3" xl="3" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Keiran McDougall</h6>
            <p>
            <a href="https://github.com/LopTwo"><i className="fab fa-github-square mr-3" /></a> Full Stack Web Developer
            </p>
            <p>
            <a href="https://www.linkedin.com/in/kieran-mcdougall-110253117/"><i className="fab fa-linkedin mr-3" /></a>California, USA
            </p>
            
          </MDBCol>
          
        </MDBRow>
        <hr />
        <MDBRow className="d-flex align-items-center">
          <MDBCol md="12" lg="12">
            <p className="text-center text-md-left grey-text">
              &copy; {new Date().getFullYear()} Copyright {" "}
              <a href="https://github.com/melperez19/Project-3--Order-Me-This-App" className="title"> <b><em>Order Me This</em></b></a>
            </p>
          </MDBCol>
        
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
}

export default Footer;