import React from "react";
import { Row, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const PricingCard = ({ data }) => {
  const renderDetails = () => {
    const points = data.details?.split("\n");
    return (
      <ul>
        {points?.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    );
  };
  return (
    <div>
      <Row>
        <Col xl="6">
          <Card>
            <Card.Header className=" border-0 pb-0">
              <Card.Title>
                <h2>${data.price}</h2>
                <Card.Text>
                  <h3>{data.heading} </h3>
                  <h4>For a duration of {data.duration} month</h4>
                </Card.Text>
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <ul>{renderDetails()}</ul>
            </Card.Body>
            <Card.Footer className=" border-0 pt-0"></Card.Footer>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default PricingCard;
