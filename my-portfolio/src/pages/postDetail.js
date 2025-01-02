import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Button } from "react-bootstrap";

// Un array di esempio di post del blog
const posts = [
  { id: "1", title: "Post 1", content: "Full content of Post 1", category: "Tech" },
  { id: "2", title: "Post 2", content: "Full content of Post 2", category: "Design" },
  { id: "3", title: "Post 3", content: "Full content of Post 3", category: "SEO" },
];

const PostDetail = () => {
  const { id } = useParams(); // Ottieni l'ID del post dalla URL
  const navigate = useNavigate();

  // Trova il post corrispondente all'ID
  const post = posts.find((post) => post.id === id);

  // Se il post non esiste, reindirizza alla pagina principale del blog
  if (!post) {
    navigate("/blog");
    return null;
  }

  return (
    <Container className="mt-5">
      <h1>{post.title}</h1>
      <h5>Category: {post.category}</h5>
      <p>{post.content}</p>
      {/* Bottone per tornare indietro alla lista dei blog */}
      <Button variant="secondary" onClick={() => navigate("/blog")}>Back to Blog</Button>
    </Container>
  );
};

export default PostDetail;
