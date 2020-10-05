import React from "react";
import Scrollspy from "react-scrollspy";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Features() {
  return (
    <div className="featuresCon">
      <Container>
        <Scrollspy
          items={["features"]}
          currentClassName="animate__animated animate__fadeIn"
        >
          <Row className="justify-content-center" id="features">
            <h1 className="bg-info shadow p-3 text-light rounded">Features</h1>
          </Row>
        </Scrollspy>

        <Scrollspy
          items={["tracking"]}
          currentClassName="animate__animated animate__fadeInLeft"
        >
          <Row id="tracking">
            <Col
              sm={{ span: 6, offset: 0 }}
              md={{ span: 6, offset: 0 }}
              lg={{ span: 6, offset: 0 }}
            >
              <Card className="mt-5">
                <Card.Body>
                  <Card.Title>Grade tracking</Card.Title>
                  <p>The ability to track student grades</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Scrollspy>

        <Scrollspy
          items={["messaging"]}
          currentClassName="animate__animated animate__fadeInRight"
        >
          <Row id="messaging">
            <Col
              sm={{ span: 6, offset: 6 }}
              md={{ span: 6, offset: 6 }}
              lg={{ span: 6, offset: 6 }}
            >
              <Card className="mt-5">
                <Card.Body>
                  <Card.Title>Messaging</Card.Title>
                  <p>Student and teacher interaction made easy.</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Scrollspy>

        <Scrollspy
          items={["classRoom"]}
          currentClassName="animate__animated animate__fadeInLeft"
        >
          <Row id="classRoom">
            <Col
              sm={{ span: 6, offset: 0 }}
              md={{ span: 6, offset: 0 }}
              lg={{ span: 6, offset: 0 }}
            >
              <Card className="mt-5">
                <Card.Body>
                  <Card.Title>Classroom creation and management</Card.Title>
                  <p>
                    Seamlessly create classrooms and add students/teachers to
                    the classrooms.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Scrollspy>

        <Scrollspy
          items={["assignment"]}
          currentClassName="animate__animated animate__fadeInRight"
        >
          <Row id="assignment">
            <Col
              sm={{ span: 6, offset: 6 }}
              md={{ span: 6, offset: 6 }}
              lg={{ span: 6, offset: 6 }}
            >
              <Card className="mt-5">
                <Card.Body>
                  <Card.Title>Assignment creation and tracking</Card.Title>
                  <p>
                    You will be able to create assignments for students and
                    track their grades easily.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Scrollspy>
      </Container>
    </div>
  );
}

export default Features;
