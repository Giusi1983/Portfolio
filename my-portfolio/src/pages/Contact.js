import React, { useRef } from "react";
import AppointmentBooking from "../components/Appointment";
import AccordionComponent from "../components/Accordion";

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

const useOnScreen = (ref) => {
  const [isIntersecting, setIntersecting] = React.useState(false);

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

  return (
    <div
      ref={contactsRef}
      className={`contacts-container ${isContactsVisible ? "visible" : ""}`}
    >
      <div className="contacts-container-wrapper">
        <div className="contacts-image">
          <img className="foto-cv" src="foto-cv.jpg" alt="fotoCv" />
          <p>Get in touch with me!</p>
          <AppointmentBooking />
          <AccordionComponent faqs={faqs} />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
