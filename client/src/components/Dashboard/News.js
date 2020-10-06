import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
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

  const options = {
    overflowY: "scroll",
  };

  return (
    <Col
      sm={{ span: 6, offset: 0 }}
      md={{ span: 6, offset: 0 }}
      lg={{ span: 6, offset: 0 }}
      className="bg-dark rounded shadow"
    >
      <Row className="justify-content-center">
        <h1 className="text-light">News</h1>
      </Row>

      <section style={options}>
        {news.map((article, i) => (
          <article key={i}>
            <Card className="animate__animated animate__fadeIn">
              <Card.Body>
                <Card.Title>{article.title}</Card.Title>
                <p>{article.contents}</p>
              </Card.Body>
            </Card>
          </article>
        ))}
      </section>
    </Col>
  );
}

export default News;
