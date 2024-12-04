import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Css Files/AdditionalDetails.css";

const AdditionalDetails = ({ product, setProduct }) => {
  const navigate = useNavigate();
  const [benefits, setBenefits] = useState([]);
  const [details, setDetails] = useState([]);

  const handleAddBenefit = () => setBenefits([...benefits, ""]);
  const handleBenefitChange = (index, value) => {
    const updatedBenefits = benefits.map((b, i) => (i === index ? value : b));
    setBenefits(updatedBenefits);
  };

  const handleAddDetail = () =>
    setDetails([...details, { attribute: "", value: "" }]);
  const handleDetailChange = (index, field, value) => {
    const updatedDetails = details.map((d, i) =>
      i === index ? { ...d, [field]: value } : d
    );
    setDetails(updatedDetails);
  };

  const handleNext = () => {
    setProduct({ ...product, benefits, details }); // Save benefits and details
    navigate("/products");
  };

  return (
    <div className="container mt-4" id="Additionaldeatils">
      <h2>Additional Details</h2>
      <div id="benefits">
        <h5>Benefits</h5>
        <button className="btn btn-link" onClick={handleAddBenefit}>
          + Add
        </button>
      </div>
      {benefits.map((benefit, index) => (
        <div key={index} className="input-group mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Avoid talking about politics"
            value={benefit}
            onChange={(e) => handleBenefitChange(index, e.target.value)}
          />
          <button className="btn btn-danger">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#FFFFFF"
            >
              <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
            </svg>
          </button>
        </div>
      ))}
      <div id="details">
        <h5>Additional Details</h5>
        <button className="btn btn-link" onClick={handleAddDetail}>
          + Add
        </button>
      </div>
      {details.map((detail, index) => (
        <div className="input-group" key={index}>
          <input
            type="text"
            placeholder="Attribute"
            className="form-control"
            value={detail.attribute}
            onChange={(e) =>
              handleDetailChange(index, "attribute", e.target.value)
            }
          />
          <input
            type="text"
            placeholder="Value"
            className="form-control"
            value={detail.value}
            onChange={(e) => handleDetailChange(index, "value", e.target.value)}
          />
          <button className="btn btn-danger">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#FFFFFF"
            >
              <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
            </svg>
          </button>
        </div>
      ))}
      <select class="form-select">
        <option selected>Category</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      <div className="row">
      <button className="btn btn-primary mt-3" onClick={handleNext}>
        Next
      </button>
      </div>
    </div>
  );
};

export default AdditionalDetails;
