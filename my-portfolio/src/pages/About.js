import React from 'react';
import { Container, Row, Col, Card, ListGroup, Badge } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="mt-5 p-5 min-vh-100">
      {/* Hero Section */}
      <Row className="align-items-center bg-light p-5 rounded">
        <Col md={4} className="text-center">
          <img
            src="/foto-cv.jpg"
            alt="About Me"
            className="img-fluid rounded-circle shadow-lg"
            style={{ width: '200px', height: '200px', objectFit: 'cover' }}
          />
        </Col>
        <Col md={8}>
          <h1>Hi, I'm Giuseppa!</h1>
          <p>
            I'm a passionate <strong>Software developer</strong> dedicated to delivering exceptional solutions in
            IT field.
          </p>
        </Col>
      </Row>

      {/* Skills Section */}
      <Row className="mt-5">
        <h2 className="mb-4">Skills</h2>
        <Col md={4}>
          <Card className="shadow">
            <Card.Body>
              <h4>Web Development</h4>
              <p>Building responsive and modern websites.</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow">
            <Card.Body>
              <h4>UI/UX Design</h4>
              <p>Creating intuitive and engaging user interfaces.</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow">
            <Card.Body>
              <h4>Project Management</h4>
              <p>Organizing and executing complex projects.</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Timeline Section */}
      <Row className="mt-5">
        <h2 className="mb-4">My Journey</h2>
        <Col>
          <ListGroup>
            <ListGroup.Item><strong>2020:</strong> Completed my degree in [field].</ListGroup.Item>
            <ListGroup.Item><strong>2021:</strong> Joined [company] as a [role].</ListGroup.Item>
            <ListGroup.Item><strong>2023:</strong> Launched my own [business/project].</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>

      {/* Testimonials */}
      <Row className="mt-5">
        <h2 className="mb-4">What People Say</h2>
        <Col md={6}>
          <Card>
            <Card.Body>
              <p>
                <em>"Fantastic work! Highly recommend for web development."</em>
              </p>
              <footer>- Client Name</footer>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <p>
                <em>"Delivered everything on time and with great quality."</em>
              </p>
              <footer>- Another Client</footer>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
