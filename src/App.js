import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <Container>
      <header>West</header>
      <div>
        <Row>
          <Col>
            <Card id='1' className='defaultCard'>
              <Card.Body>T</Card.Body>
            </Card>
          </Col>
          <Col>
            <Card id='1' className='defaultCard'>
              <Card.Body>T</Card.Body>
            </Card>
          </Col>
          <Col>
            <Card id='1' className='defaultCard'>
              <Card.Body>T</Card.Body>
            </Card>
          </Col>
          <Col>
            <Card id='1' className='defaultCard'>
              <Card.Body>T</Card.Body>
            </Card>
          </Col>
          <Col>
            <Card id='1' className='defaultCard'>
              <Card.Body>T</Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default App;
