import React, { useRef, useState } from "react";
import { Badge } from "react-bootstrap";
import AppointmentBooking from "../components/Appointment";
import AccordionComponent from "../components/Accordion";
import AvailabilityWithForm from "../components/AvailabilityForm";

const faqs = [
  {
    id: 1,
    question: "How can I help you?",
    answer: "React is a JavaScript library for building user interfaces.",
  },
  {
    id: 2,
    question: "How can you improve your website traffic?",
    answer: "Redux is a state management library.",
  },
];

// Hook per verificare se un elemento è visibile
const useOnScreen = (ref) => {
  const [isIntersecting, setIntersecting] = useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref]);

  return isIntersecting;
};

const Contacts = () => {
  const contactsRef = useRef(null);
  const isContactsVisible = useOnScreen(contactsRef);
  const [showCalendar, setShowCalendar] = useState(true);

  const toggleView = () => {
    setShowCalendar(!showCalendar);
  };

  return (
    <div
      ref={contactsRef}
      className={`contacts-container ${isContactsVisible ? "visible" : ""}`}
    >
      <div className="contacts-container-wrapper min-vh-100">
        <div className="contacts-image text-center p-4">
          <img className="foto-cv rounded-circle" src="foto-cv.jpg" alt="fotoCv" />
          <p className="mt-3">Get in touch with me!</p>

          <h4 className="mt-4">
            Availability{" "}
            <Badge
              bg={showCalendar ? "primary" : "success"}
              onClick={toggleView}
              style={{ cursor: "pointer" }}
            >
              {showCalendar ? "Switch to Form" : "Switch to Calendar"}
            </Badge>
          </h4>

          <div className="mt-4">
            {showCalendar ? <AppointmentBooking /> : <AvailabilityWithForm />}
          </div>

          <div className="mt-5">
            <AccordionComponent faqs={faqs} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
