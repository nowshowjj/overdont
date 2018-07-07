import React from "react";
import { Container, Row, Col } from 'reactstrap';

const Contact = props =>
<div>
<Col xs="6" sm="4">
  <h2>{props.name}</h2>
  <p>{props.email}</p>
  <p>{props.comments}</p>
</Col>
</div>;

export default Contact;