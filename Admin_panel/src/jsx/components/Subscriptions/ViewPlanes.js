import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { deletePlane, fetchPlanes } from "../../../store/actions/PlaneAction";

import { Row, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import UiAlert from "../bootstrap/Alert";
const ViewPlanes = () => {
  const dispatch = useDispatch();
  const planes = useSelector((state) => state.planes.planes);
  const loading = useSelector((state) => state.users.loading);
  const error = useSelector((state) => state.users.error);
  const [data, setData] = useState([]);
  const renderDetails = (details) => {
    const points = details.split("\n");
    return (
      <ul>
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    );
  };
  useEffect(() => {
    dispatch(fetchPlanes());
  }, [dispatch, planes]);
  useEffect(() => {
    if (!loading && !error) {
      setData(planes);
    }
  }, [loading, error, planes]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }
  console.log(planes);
  return (
    <div>
      ViewPlanes
      <Row>
        {data.map((plane) => {
          return (
            <Col xl="6">
              <Card>
                <Card.Header className=" border-0 pb-0">
                  <Card.Title>
                    <h2>${plane.price}</h2>
                    <Card.Text>
                      <h3>{plane.heading} </h3>
                      <h4>For a duration of {plane.duration} month</h4>
                    </Card.Text>
                  </Card.Title>
                </Card.Header>
                <Card.Body>
                  <ul>{renderDetails(plane.details)}</ul>
                </Card.Body>
                <Card.Footer className=" border-0 pt-0">
                  <Card.Link className="float-start">
                    <Link
                      // to={{
                      //   pathname: `/subs-mangement/update-plane/${plane._id}`,

                      // }}
                      onClick={() => {
                        dispatch(deletePlane(plane._id));
                      }}
                    >
                      Delete
                    </Link>
                  </Card.Link>
                  <Card.Link className="float-end">
                    <Link
                      to={{
                        pathname: `/subs-mangement/update-plane/${plane._id}`,
                        search: `?price=${plane.price}&heading=${plane.heading}&details=${plane.details}&validity=${plane.validity}&id=${plane._id}`,
                      }}
                    >
                      Update
                    </Link>
                  </Card.Link>
                </Card.Footer>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default ViewPlanes;
