import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";


const ApplicationMessage = () => {
  return (
    <div>
      <h3>Welcome to my blog</h3>
      <Jumbotron fluid>
        <Container>
          <p>
            This is a modified jumbotron that occupies the entire horizontal
            space of its parent.
          </p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default ApplicationMessage;