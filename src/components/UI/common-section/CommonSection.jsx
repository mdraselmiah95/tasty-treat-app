import React from "react";
import { Container } from "reactstrap";

const CommonSection = (props) => {
  return (
    <section>
      <Container>
        <h2>{props.title}</h2>
      </Container>
    </section>
  );
};

export default CommonSection;
