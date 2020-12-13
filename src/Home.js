import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";


const Home = () => {
  return (
    <div className="container-fluid bg-dark">
      <Row>
        <Col>
          <div className="d-flex justify-content-center align-items-center">
            <img
              className="m-5 shadow-lg"
              style={{
                borderRadius: "100%", width: "250px"
              }}
              src="https://avatars3.githubusercontent.com/u/33173075?s=400&u=86e85ed36c348977a899cb36cb8a9dfe226dda37&v=4"
              alt="Photo"
            />
          </div>
        </Col>
        <Col className="d-flex justify-content-center align-items-start  flex-column">
          <h1 style={{ fontSize: "72px", color: "#919191" }}>Jayraj Shah</h1>
          <br />
          <div>
            <h3 style={{ color: "#717171" }}>React Developer</h3>
          </div>
          <div >
            <a className="m-2" href="https://google.com ">
              <FaInstagram color="#EFEFEF" fontSize="32px" />
            </a>
            <a className="m-2" href="https://google.com " target="_blank">
              <FaLinkedinIn color="#EFEFEF" fontSize="32px" />
            </a>

            <a className="m-2" href="https://google.com ">
              <FaGithub color="#EFEFEF" fontSize="32px" />
            </a>

          </div>

        </Col>
      </Row>
    </div>
  );
};

export default Home;
