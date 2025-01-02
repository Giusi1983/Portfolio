import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';  // Importa Link da react-router-dom

const Blog = () => {
  const posts = [
    { id: 1, title: 'Post 1', summary: 'Summary of post 1', category: 'Tech', image: '/blog1.jpg' },
    { id: 2, title: 'Post 2', summary: 'Summary of post 2', category: 'Design', image: '/blog2.jpg' },
    { id: 3, title: 'Post 3', summary: 'Summary of post 3', category: 'SEO', image: '/blog3.jpg' },
    { id: 4, title: 'Post 4', summary: 'Summary of post 4', category: 'Tech', image: '/blog4.jpg' },
    { id: 5, title: 'Post 5', summary: 'Summary of post 5', category: 'Design', image: '/blog5.jpg' },
    { id: 6, title: 'Post 6', summary: 'Summary of post 6', category: 'SEO', image: '/blog6.jpg' },
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleFilter = (category) => {
    setSelectedCategory(category);
  };

  const filteredPosts = selectedCategory === 'All'
    ? posts
    : posts.filter((post) => post.category === selectedCategory);

  return (
    <Container className="mt-5 min-vh-100">
      <h1 className="text-center mb-4">Blog</h1>

      {/* Filter Categories */}
      <div className="text-center mb-4">
        <Badge 
          bg={selectedCategory === 'All' ? 'primary' : 'secondary'} 
          className="m-1" 
          style={{ cursor: 'pointer' }} 
          onClick={() => handleFilter('All')}
        >
          All
        </Badge>
        <Badge 
          bg={selectedCategory === 'Tech' ? 'primary' : 'secondary'} 
          className="m-1" 
          style={{ cursor: 'pointer' }} 
          onClick={() => handleFilter('Tech')}
        >
          Tech
        </Badge>
        <Badge 
          bg={selectedCategory === 'Design' ? 'primary' : 'secondary'} 
          className="m-1" 
          style={{ cursor: 'pointer' }} 
          onClick={() => handleFilter('Design')}
        >
          Design
        </Badge>
        <Badge 
          bg={selectedCategory === 'SEO' ? 'primary' : 'secondary'} 
          className="m-1" 
          style={{ cursor: 'pointer' }} 
          onClick={() => handleFilter('SEO')}
        >
          SEO
        </Badge>
      </div>

      {/* Blog Posts */}
      <Row className="g-4">
        {filteredPosts.map((post, index) => (
          <Col md={4} key={index}>
            <Card className="shadow">
              <Card.Img variant="top" src={post.image} />
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.summary}</Card.Text>
                {/* Link to the detailed post page */}
                <Link to={`/post/${post.id}`}>
                  <Button variant="primary">Read More</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Blog;
