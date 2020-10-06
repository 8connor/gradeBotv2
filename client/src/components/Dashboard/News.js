import React, {useState, useEffect} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Axios from "axios";

function News() {
  const [news, setNews] = useState([])

  useEffect(async ()=>{
    const newFunc = async () =>{
      let newsCall = await Axios.get("/api/news").then(res => res.data);

      return setNews(newsCall)
    };

    newFunc();
  }, []);

  return (
    <Col
      sm={{ span: 6, offset: 0 }}
      md={{ span: 6, offset: 0 }}
      lg={{ span: 6, offset: 0 }}
      className="bg-dark rounded shadow text-light"
    >
      <Container>
        <Row className="justify-content-center mt-5">
          <div>News</div>
        </Row>
        <Row>
          {news}
        </Row>
      </Container>
    </Col>
  );
}

export default News;
