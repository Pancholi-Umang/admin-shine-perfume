import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./theme.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchSingleRecord,
  getProduct,
  updateSingleRecord,
} from "../Redux/action";

const EditItems = () => {
  const [inputValue, setInputValue] = useState({
    name: "",
    category: "",
    price: "",
    description: "",
  });

  const handleChange = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();
  const { userId } = useParams();

  const productsData = useSelector((state) => state.item.products);
  const singleItem = useSelector((state) => state.item.product);

  useEffect(() => {
    setInputValue(singleItem); //setInputValue({...singleItem})
  }, [singleItem]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct());
    dispatch(fetchSingleRecord(userId));
  }, []);

  var allItemsData = [];
  for (let key in productsData) {
    allItemsData.push(Object.assign(productsData[key], { id: key }));
  }

  const onSubmitPatchRequest = () => {
    let updateData = [];
    allItemsData?.map((data) => {
      if (data.id == userId) {
        updateData.push(inputValue);
      } else {
        updateData.push(data);
      }
    });
    // ahiya edit thai gya pachhi badho data send kari devano ae pan chhe ne redux store ne update karva mate
    // and value change karva mate put method mate single record mokli devano
    dispatch(updateSingleRecord(updateData, inputValue));
    navigate("/userproducts");
  };

  return (
    <div className="col-md-12 team-boxed">
      <div className="row people d-flex justify-content-center align-items-center">
        <div className="col-md-6 col-lg-4 item">
          <div className="box position-relative">
            <img className="rounded-circle" src={inputValue?.imag} />
            <h3 className="name">{inputValue?.name}</h3>
            <p className="title">{inputValue?.category}</p>
            <p className="description">{inputValue?.price}</p>
            <p className="description">{inputValue?.description}</p>
            <div className="social"></div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="col-md-8">
            <div className="form-outline mb-4">
              <span className="text-muted">Perfume Name:-</span>
              <input
                type="text"
                id="name"
                className="form-control"
                onChange={handleChange}
                placeholder="Enter Perfume Name"
                value={inputValue?.name || ""}
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
                value={inputValue?.category || ""}
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
                value={inputValue?.price || ""}
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
                value={inputValue?.description || ""}
                name="description"
                required
              ></textarea>
            </div>

            <div className="form-outline mb-1 d-flex justify-content-center">
              <button
                onClick={() => onSubmitPatchRequest()}
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
