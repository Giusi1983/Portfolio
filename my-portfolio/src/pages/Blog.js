import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';

const Blog = () => {
  const posts = [
    { title: 'Post 1', summary: 'Summary of post 1', category: 'Tech', image: '/blog1.jpg' },
    { title: 'Post 2', summary: 'Summary of post 2', category: 'Design', image: '/blog2.jpg' },
    { title: 'Post 3', summary: 'Summary of post 3', category: 'SEO', image: '/blog3.jpg' },
  ];

  return (
    <Container className="mt-5 min-vh-100">
      <h1 className="text-center mb-4">Blog</h1>

      {/* Filter Categories */}
      <div className="text-center mb-4">
        <Badge bg="secondary" className="m-1">Tech</Badge>
        <Badge bg="secondary" className="m-1">Design</Badge>
        <Badge bg="secondary" className="m-1">SEO</Badge>
      </div>

      {/* Blog Posts */}
      <Row className="g-4">
        {posts.map((post, index) => (
          <Col md={4} key={index}>
            <Card className="shadow">
              <Card.Img variant="top" src={post.image} />
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.summary}</Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Blog;
