
// Install dependencies: react-redux, @reduxjs/toolkit, react-calendar

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Container, Row, Col, Card, Button, Form, ListGroup, Alert } from 'react-bootstrap';


// Appointment Booking Component
const AppointmentBooking = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const dispatch = useDispatch();
  const appointments = useSelector((state) => state.appointments);

  const handleBooking = () => {
    if (selectedDate && selectedTime) {
      const appointment = {
        date: selectedDate.toISOString().split('T')[0],
        time: selectedTime,
      };
      dispatch({ type: 'appointments/addAppointment', payload: appointment });
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000); // Nasconde l'alert dopo 3 secondi
      setSelectedTime('');
    } else {
      alert('Please select both a date and time.');
    }
  };

  return (
    <Container className='mt-4 contacts-wrapper'>
      <Row className='justify-content-center'>
        <Col xs={12} md={8}>
        <Card className='shadow-lg p-4'>
          <h1 className="text-center mb-4">Book an appointment</h1> 
          {showAlert && (
              <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
                Appointment successfully booked!
              </Alert>
            )}
            <Row className="mb-4">
              <Col>
                <Calendar
                  onChange={setSelectedDate}
                  value={selectedDate}
                  minDate={new Date()} // Impedisce la selezione di date passate
                  className="w-100"
                />
              </Col>
            </Row>
            {selectedDate && (
              <div className="mb-4">
                <h5 className="mb-3">Selected Date: {selectedDate.toDateString()}</h5>
                <Form.Group>
                  <Form.Label>Select Time:</Form.Label>
                  <Form.Control
                    as="select"
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                  >
                    <option value="">--Select a time--</option>
                    <option value="09:00">09:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="14:00">02:00 PM</option>
                    <option value="15:00">03:00 PM</option>
                  </Form.Control>
                </Form.Group>
                <Button
                  variant="primary"
                  className="mt-3 w-100"
                  onClick={handleBooking}
                  disabled={!selectedTime}
                >
                  Book Appointment
                </Button>
              </div>
            )}
          </Card>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col xs={12} md={8}>
          <Card className="shadow-lg p-4">
            <h2 className="text-center mb-4">Appointments</h2>
            <ListGroup>
              {appointments.length === 0 ? (
                <ListGroup.Item>No appointments booked yet.</ListGroup.Item>
              ) : (
                appointments.map((appt, index) => (
                  <ListGroup.Item key={index}>
                    {appt.date} at {appt.time}
                  </ListGroup.Item>
                ))
              )}
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AppointmentBooking;
