import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./theme.css";
import {useNavigate} from "react-router-dom"

const EditItems = () => {
  const [data, setData] = useState({});
  const [inputValue, setInputValue] = useState({
    name: "",
    category: "",
    price: "",
    description: "",
  });
  const navigate = useNavigate();
  const { userId } = useParams();
  const baseURL = `https://shine-perfumes-default-rtdb.firebaseio.com/items/${userId}.json`;
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setData(response.data);
    });
  }, []);

  const getdataToInputField = () => {
    axios
      .get(
        `https://shine-perfumes-default-rtdb.firebaseio.com/items/${userId}.json`
      )
      .then((response) => {
        setInputValue(response.data);
      });
  };

  const onSubmitPatchRequest = () => {
    const url = `https://shine-perfumes-default-rtdb.firebaseio.com/items/${userId}.json`;

    axios.patch(url, {
      name: inputValue.name,
      category: inputValue.category,
      price: inputValue.price,
      description: inputValue.description,
    })

    navigate("/userproducts")
  };

  const handleChange = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  return (
    <div className="col-md-12 team-boxed">
      <div className="row people d-flex justify-content-center align-items-center">
        <div className="col-md-6 col-lg-4 item">
          <div className="box position-relative">
            <img className="rounded-circle" src={data.imag} />
            <h3 className="name">{data.name}</h3>
            <p className="title">{data.category}</p>
            <p className="description">{data.price}</p>
            <p className="description">{data.description}</p>
            <div className="social">
              <button
                type="button"
                className="btn btn-light positionButton"
                onClick={()=>getdataToInputField()}
              >
                Edit
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="col-md-8">
            {/* <div className="form-outline mb-4">
              <input  type="file"  id="form6Example1"  className="form-control"/>
            </div> */}

            <div className="form-outline mb-4">
              <span className="text-muted">Perfume Name:-</span>
              <input
                type="text"
                id="name"
                className="form-control"
                onChange={handleChange}
                placeholder="Enter Perfume Name"
                value={inputValue.name}
                name="name"
                required
              />
            </div>

            <div className="form-outline mb-4">
              <span className="text-muted">Perfume Category:-</span>
              <input
                type="text"
                id="category"
                className="form-control"
                onChange={handleChange}
                placeholder="Enter Perfume Category"
                value={inputValue.category}
                name="category"
                required
              />
            </div>

            <div className="form-outline mb-4">
              <span className="text-muted">Perfume Price:-</span>
              <input
                type="number"
                id="price"
                className="form-control"
                onChange={handleChange}
                placeholder="Enter Perfume Price"
                value={inputValue.price}
                name="price"
                required
              />
            </div>

            <div className="form-outline mb-4">
              <span className="text-muted">Perfume Description:-</span>
              <textarea
                className="form-control"
                id="description"
                rows="2"
                onChange={handleChange}
                placeholder="Enter Perfume Description"
                value={inputValue.description}
                name="description"
                required
              ></textarea>
            </div>

            <div className="form-outline mb-1 d-flex justify-content-center">
              <button
                onClick={()=>onSubmitPatchRequest()}
                // type="submit"
                className="btn btn-primary btn-block mb-4 col-md-6"
                style={{
                  backgroundColor: "#D8D8D8",
                  border: "none",
                  color: "black",
                }}
              >
                Update Data
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditItems;
