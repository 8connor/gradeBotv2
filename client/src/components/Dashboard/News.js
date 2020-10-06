import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Axios from "axios";

function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const newFunc = async () => {
      let newsCall = await Axios.get("/api/news").then((res) => res.data);

      console.log(newsCall);

      return setNews(newsCall);
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
          {news.map((article, i) => (
            <div key={i}>
              <h1>{article.title}</h1>
              <p>{article.contents}</p>
            </div>
          ))}
        </Row>
      </Container>
    </Col>
  );
}

export default News;
