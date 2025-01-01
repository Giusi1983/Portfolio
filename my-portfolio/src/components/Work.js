import React from "react";
// import { Box, Typography } from "@mui/material";

const services = [
  "Messaging Strategy",
  "Email Marketing",
  "UX UI Strategy",
  "Web Development",
  "Digital Marketing",
  "Social Media Management",
  "Content Creation",
  "SEO Optimization",
  "Analytics and Reporting",
  "Project Management",
];

const HowWeWork = () => {
  return (
    <div className="how-we-work-container">
      <h2 className="how-we-work-title">How we can work together</h2>
      <div className="how-we-work-grid">
        {services.map((service, index) => (
          <div key={index} className="how-we-work-item">
            <span className="how-we-work-text">{service}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowWeWork;
