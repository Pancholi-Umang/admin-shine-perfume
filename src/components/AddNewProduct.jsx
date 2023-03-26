import axios from "axios";
import React, { useState } from "react";

const AddNewProduct = () => {
  const [image, setImage] = useState(null);

  const initialValue = { id: Number(), name: "", price: Number(), category: "", status: "false", is_wishlist: "false", quantity: Number(1), description: "" };

  const [inputData, setInputData] = useState(initialValue);

  const handleChangedata = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const onImageChange = (event) => {
    let files = event.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (e) => {
      setImage(e.target.result);
    };
  }; 

  const clickToAddProduct = (e) => {
    e.preventDefault();
    if ( inputData.id.length < 2 && inputData.name.length == 0 && inputData.category.length == 0 && inputData.price.length < 3 && inputData.description.length == 0 ) {
      alert("Please Fill All The Field!!");
    } else {
      const formData = { image };
      axios({
        method: "post",
        url: `https://shine-perfumes-default-rtdb.firebaseio.com/items.json`,
        data: { id: Number(inputData.id), name: inputData.name, price: Number(inputData.price), category: inputData.category, status: inputData.status, is_wishlist: inputData.is_wishlist, quantity: inputData.quantity, description: inputData.description, imag: formData.image,
        },
      });
      setInputData(initialValue);
    }
  };

  return (
    <div className="container mt-5">
      <form>
        <div className="row mb-4">
          <div className="col-md-6 col-sm-12 mt-md-1 mt-3">
            <div className="form-outline">
              <input
                placeholder="Enter Perfume id"
                type="number"
                id="form6Example1"
                className="form-control"
                // disabled
                name="id"
                value={inputData.id}
                onChange={handleChangedata}
              />
            </div>
          </div>
          <div className="col-md-6 col-sm-12 mt-md-1 mt-3">
            <div className="form-outline">
              <input
                placeholder="Enter Perfume Name"
                type="text"
                id="form6Example2"
                className="form-control"
                onChange={handleChangedata}
                name="name"
                value={inputData.name}
              />
            </div>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-md-6 col-sm-12 mt-md-1 mt-3">
            <div className="form-outline">
              <input
                placeholder="Enter Perfume Price"
                type="number"
                id="form6Example3"
                className="form-control"
                onChange={handleChangedata}
                name="price"
                value={inputData.price}
              />
            </div>
          </div>

          <div className="col-md-6 col-sm-12 mt-md-1 mt-3">
            <div className="form-outline">
              <input
                placeholder="Enter Perfume Category"
                type="text"
                id="form6Example4"
                className="form-control"
                onChange={handleChangedata}
                name="category"
                value={inputData.category}
              />
            </div>
          </div>
        </div>

        <div className="row mb-4">

          <div className="col-md-6 col-sm-12 mt-md-1 mt-3">
            <div className="form-outline">
              <input
                placeholder="Enter Perfume status"
                type="text"
                id="form6Example5"
                className="form-control"
                disabled
                name="status"
                value={inputData.status}
              />
            </div>
          </div>
          
          <div className="col-md-6 col-sm-12 mt-md-1 mt-3">
            <div className="form-outline">
              <input
                placeholder="Enter Perfume wishlist"
                type="text"
                id="form6Example6"
                className="form-control"
                disabled
                name="is_wishlist"
                value={inputData.is_wishlist}
              />
            </div>
          </div>
        
        </div>

        <div className="row mb-4">
        
          <div className="col-md-6 col-sm-12 mt-md-1 mt-3">
            <div className="form-outline">
              <input
                placeholder="Enter Perfume Quantity"
                type="number"
                id="form6Example7"
                className="form-control"
                disabled
                name="quantity"
                value={inputData.quantity}
              />
            </div>
          </div>
        
          <div className="col-md-6 col-sm-12 mt-md-1 mt-3">
            <div className="form-outline">
              <input
                type="file"
                id="form6Example8"
                className="form-control"
                onChange={onImageChange}
              />
            </div>
          </div>
        
        </div>

        <div className="form-outline mb-4">
          <textarea
            placeholder="Enter description"
            className="form-control"
            id="form6Example9"
            rows="4"
            onChange={handleChangedata}
            name="description"
            value={inputData.description}
          ></textarea>
        </div>

        <div className="form-outline mb-4 d-flex justify-content-center">
          <button
            type="submit"
            className="btn btn-block mb-4 col-md-3 col-sm-12 mt-md-1 mt-3 mt-sm-md-2"
            style={{ backgroundColor: "#D8D8D8" }}
            onClick={clickToAddProduct}
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNewProduct;
