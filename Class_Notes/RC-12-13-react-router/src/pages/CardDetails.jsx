import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import data from "../data";
import { Container, Col, Card } from "react-bootstrap";
const CardDetails = () => {
  const { namee } = useParams();

  //!tekrar bir önceki sayfaya dönebilmek icin **useNavigate** kullaniyorz⬇:

  const navigate = useNavigate();

  return (
    <div>
      {data.map(
        ({ name, text, yorum, img, id }) =>
          name === namee && (
            <Col
              className="col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center text-center"
              // react-bootstrap responsivliği
              // sm={12}
              // md={6}
              // lg={4}
              // key={id}
            >
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                  <Card.Title>{name}</Card.Title>
                  <Card.Text>{text}</Card.Text>
                  <Card.Text>{yorum}</Card.Text>
                  <button
                    className="btn btn-warning me-1"
                    onClick={() => navigate(-1)}
                  >
                    GO BACK
                  </button>
                  <button
                    className="btn btn-success"
                    onClick={() => navigate("/")}
                  >
                    GO HOME
                  </button>
                </Card.Body>
              </Card>
            </Col>
          )
      )}
    </div>
  );
};

export default CardDetails;
