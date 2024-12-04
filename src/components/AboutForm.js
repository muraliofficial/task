import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Css Files/AboutForm.css";

const AboutForm = ({ setProduct }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    images: [],
  });

  const [imagePreviews, setImagePreviews] = useState([]);  // Added state for image previews

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Files upload function with image preview
  const handleFileChange = (e, index) => {
    const files = Array.from(e.target.files);
    const updatedImages = [...formData.images];
    updatedImages[index] = files[0];

    const updatedPreviews = [...imagePreviews];
    updatedPreviews[index] = URL.createObjectURL(files[0]); // Create preview URL

    setFormData({ ...formData, images: updatedImages });
    setImagePreviews(updatedPreviews); // Update image previews
  };

  const handleNext = () => {
    setProduct(formData);
    navigate("/additional");
  };

  return (
    <div className="container mt-4" id="About">
      <p>About</p>
      <div className="mb-3">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          autoComplete="off"
        />
      </div>
      <div className="mb-3">
        <textarea
          name="description"
          className="form-control"
          placeholder="Description"
          rows="4"
          value={formData.description}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="mb-3">
        <label className="form-label">Price</label>
        <input
          type="number"
          name="price"
          className="form-control"
          placeholder="$0.00"
          value={formData.price}
          onChange={handleChange}
        />
      </div>
      <div className="row">
        <label htmlFor="inputfield">
          Cover Photo
          <span>
            <p>(Upload up to 5 photos)</p>
          </span>
        </label>
        <div className="inputfieldbox">
          {[...Array(3)].map((_, index) => (
            <div className="card" key={index}>
              <input
                type="file"
                accept=".jpg, .jpeg, .png"
                id={`file${index}`}
                onChange={(e) => handleFileChange(e, index)}
                className="form-control-file"
              />
              <label htmlFor={`file${index}`}>+</label>

              {/* Display image preview */}
              {imagePreviews[index] && (
                <img
                  src={imagePreviews[index]}
                  alt={`Preview ${index}`}
                  style={{ width: "100px", height: "100px", objectFit: "cover" }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="row">
        <button className="btn btn-primary" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default AboutForm;
