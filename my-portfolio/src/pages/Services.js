import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Services = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="text-black text-center py-5">
        <h1>My Services</h1>
        <p>Discover the solutions I offer to help your business succeed.</p>
      </div>

      <Container className="mt-5">
        {/* Detailed Services */}
        <Row className="g-4">
          <Col md={4}>
            <Card className="shadow">
              <Card.Img variant="top" src="/service1.jpg" />
              <Card.Body>
                <Card.Title>Web Development</Card.Title>
                <Card.Text>Building modern, scalable websites for your needs.</Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="shadow">
              <Card.Img variant="top" src="/service2.jpg" />
              <Card.Body>
                <Card.Title>SEO Optimization</Card.Title>
                <Card.Text>Improving your search engine rankings effectively.</Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="shadow">
              <Card.Img variant="top" src="/service3.jpg" />
              <Card.Body>
                <Card.Title>UI/UX Design</Card.Title>
                <Card.Text>Creating intuitive designs that users love.</Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Work Process */}
        <Row className="mt-5">
          <Col>
            <h2>Our Process</h2>
            <p>
              <strong>Step 1:</strong> Understand your needs.
              <br />
              <strong>Step 2:</strong> Plan and strategize.
              <br />
              <strong>Step 3:</strong> Deliver with precision.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Services;
