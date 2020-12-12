import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Home = () => {
  return (
    <div className="container-fluid bg-dark">
      <Row>
        <Col>
          <div className="d-flex justify-content-center align-items-center">
            <img
              className="m-5 shadow-lg"
              style={{ borderRadius: "100%" }}
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
        </Col>
      </Row>
    </div>
  );
};

export default Home;
