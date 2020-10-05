import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CanvasJSReact from "../../canvasjs.react";
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function Averages() {
  const options = {
    title: {
      text: "Example of student averages",
    },
    data: [
      {
        // Change type to "doughnut", "line", "splineArea", etc.
        type: "doughnut",
        dataPoints: [
          { label: "Apple", y: 10 },
          { label: "Orange", y: 15 },
          { label: "Banana", y: 25 },
          { label: "Mango", y: 30 },
          { label: "Grape", y: 28 },
        ],
      },
    ],
  };

  return (
    <Container>
      <Row className="mt-5">
        <Col
          sm={{ span: 6, offset: 0 }}
          md={{ span: 6, offset: 0 }}
          lg={{ span: 6, offset: 0 }}
        >
          <CanvasJSChart options={options} />
        </Col>
      </Row>
    </Container>
  );
}

export default Averages;
