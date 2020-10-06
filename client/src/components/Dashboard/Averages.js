import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import CanvasJSReact from "../../canvasjs.react";
import Axios from "axios";

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function Averages() {
  const [grades, setGrades] = useState([]);

  useEffect(() => {
    const average = async () => {
      let averageCall = await Axios.get("/api/averages").then(
        (res) => res.data
      );

      setGrades(averageCall);
    };

    average();
  }, []);

  const options = {
    animationEnabled: true,
    theme: "dark2",
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
    <Col
      sm={{ span: 6, offset: 0 }}
      md={{ span: 6, offset: 0 }}
      lg={{ span: 6, offset: 0 }}
    >
      <CanvasJSChart options={options} />
    </Col>
  );
}

export default Averages;
