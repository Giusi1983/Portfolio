import React from 'react';
import { Container, Row, Col, Badge, Form, Button } from 'react-bootstrap';

const AvailabilityWithForm = () => {
  return (
    <Container className="mt-4">
      <Row>
        <Col className="bg-light text-center p-4 border">
          <h4>
            Availability <Badge bg="info">Open</Badge>
          </h4>
          <Form>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formDate">
              <Form.Label>Select Date</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AvailabilityWithForm;
