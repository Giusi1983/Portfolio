import React from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';

const AccordionComponent = ({ faqs }) => {
  return (
    <Accordion defaultActiveKey="0">
      {faqs.map((faq, index) => (
        <Accordion.Item key={faq.id} eventKey={index.toString()}>
          <Accordion.Header>{faq.question}</Accordion.Header>
          <Accordion.Body>{faq.answer}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default AccordionComponent;
