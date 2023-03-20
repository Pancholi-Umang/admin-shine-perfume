import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./theme.css";

const EditItems = () => {
  const [data, setData] = useState({});
  const [inputValue, setInputValue] = useState({
    name: "",
    category: "",
    price: "",
    description: "",
  });
  const { userId } = useParams();
  console.log(userId, "userid");
  const baseURL = `https://shine-perfumes-default-rtdb.firebaseio.com/items/${userId}.json`;
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setData(response.data);
    });
  }, []);
  return (
    <div className="col-md-12 team-boxed">
      <div className="row people d-flex justify-content-center align-items-center">
        <div className="col-md-6 col-lg-4 item">
          <div className="box position-relative">
            <img className="rounded-circle" src={data.imag} />
            <h3 className="name">{data.name}</h3>
            <p className="title">{data.category}</p>
            <p className="description">{data.description}</p>
            <div className="social">
              <button type="button" className="btn btn-light positionButton">Edit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditItems;
