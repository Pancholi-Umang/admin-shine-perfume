import React, { useState,useEffect } from "react";
import axios from "axios";

const Orders = () => {
  const [image, setImage] = useState(null);
  const [data, setData] = useState([])

  const onImageChange = (event) => {
    let files = event.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);

    reader.onload = (e) => {
        setImage(e.target.result);
    }
  };

  const ClickToPatchData = () => {
    const formData = {image};
    const url = `https://imagedemo-6e486-default-rtdb.firebaseio.com/items/0.json`;
    axios.patch(url, {
      imag:formData.image
    })
    console.log(formData.image)
  }
  
  useEffect(() => {
    const url = `https://imagedemo-6e486-default-rtdb.firebaseio.com/items/0.json`;
    axios.get(url).then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <div>
      <input type="file" onChange={onImageChange} className="filetype" />
      <button onClick={ClickToPatchData}> Upload Data </button>


      <div className="col-md-12 team-boxed">
      <div className="row people d-flex justify-content-center align-items-center">
        <div className="col-md-6 col-lg-4 item">
          <div className="box position-relative">
            <img className="rounded-circle" src={data.imag} />
            <h3 className="name">{data.name}</h3>
            <p className="title">{data.category}</p>
            <p className="description">{data.description}</p>
            <div className="social">
              <button type="button" className="btn btn-light positionButton">
                Edit
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <form className="col-md-8">
            <div className="form-outline mb-4">
              <input type="text" id="form4Example1" className="form-control" />
            </div>

            <div className="form-outline mb-4">
              <input type="email" id="form4Example2" className="form-control" />
            </div>

            <div className="form-outline mb-4">
              <textarea
                className="form-control"
                id="form4Example3"
                rows="2"
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary btn-block mb-4">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>

    </div>
  );
};

export default Orders;
