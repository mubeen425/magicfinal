import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import PricingCard from "./PricingCard";
import { useDispatch } from "react-redux";
import { updatePlane } from "../../../store/actions/PlaneAction";

const UpdatePlane = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const id = searchParams.get("id");
  const price = searchParams.get("price");
  const heading = searchParams.get("heading");
  const duration = searchParams.get("duration");
  const validity = searchParams.get("validity");
  const details = searchParams.get("details");
  console.log(id);
  const [formData, setFormData] = useState({
    price: price, // Initial price value
    heading: heading, // Initial heading value
    duration: duration, // Initial duration value
    validity: validity, // Initial validity value
    details: details, // Initial details value
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Create a payload when you save
  const handleSave = () => {
    const payload = {
      price: formData.price,
      heading: formData.heading,
      duration: formData.duration,
      validity: formData.validity,
      details: formData.details,
    };
    dispatch(updatePlane(id, payload));
    // You can send the payload to your server or perform any other actions here
    navigate("/subs-mangement");
    console.log("Payload to send:", payload);
  };
  return (
    <div>
      CreatePlane
      <Row>
        <Col xl="6">
          <PricingCard data={formData} />
        </Col>
        <Col>
          <div className="row">
            <div className="col-xl-12 col-xxl-12 ">
              <div className="card">
                <div className="row p-3">
                  <div className="col-lg-6 mb-2">
                    <div className="form-group mb-3">
                      <label className="text-label">Price *</label>
                      <input
                        type="number"
                        name="price"
                        className="form-control"
                        placeholder="$5"
                        value={formData.price}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 mb-2">
                    <div className="form-group mb-3">
                      <label className="text-label">Heading *</label>
                      <input
                        type="text"
                        name="heading"
                        className="form-control"
                        placeholder="Unlimited Credits"
                        value={formData.heading}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 mb-2">
                    <div className="form-group mb-3">
                      <label className="text-label">Duration *</label>
                      <input
                        type="number"
                        name="duration"
                        className="form-control"
                        placeholder="For A Duration Of 1 Month"
                        value={formData.duration}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 mb-2">
                    <div className="form-group mb-3">
                      <label className="text-label">Validity *</label>
                      <input
                        type="number"
                        name="validity"
                        className="form-control"
                        placeholder="1 Month"
                        value={formData.validity}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 mb-3">
                    <div className="form-group mb-3">
                      <label className="text-label">Plane Descriptions*</label>
                      <textarea
                        type="text"
                        name="details"
                        className="form-control"
                        placeholder="Enter plane details (one point per line)"
                        value={formData.details}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
              <button className="btn btn-primary" onClick={handleSave}>
                Save
              </button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default UpdatePlane;
