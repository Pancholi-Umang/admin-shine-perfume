import axios from "axios";
import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Orders = () => {
  const [Items, setItems] = useState([]);
  const [FilterItems, setFilterItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [startDate, setStartDate] = useState(new Date("2023/03/29"));
  const [endDate, setEndDate] = useState(new Date());

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  const baseURL = "https://perfumeweb-60a0e-default-rtdb.firebaseio.com/invoice.json/";
  const GetData = () => {
    axios.get(baseURL).then(response => {
      setItems(response.data); 
      setFilterItems(response.data)
    })
  };

  useEffect(() => {
    GetData();
  }, [loading]);

  var ITEMSarr = [];
  for (let key in Items) {
    ITEMSarr.push(Object.assign(Items[key], { id: key }));
  }

  var productDateArray = [];
  for (let key in FilterItems) {
    productDateArray.push(Object.assign(FilterItems[key], { id: key }));
  }

  const handleSelectDate = () => {
    let filtered = productDateArray.filter((product) => {
      return (
          product.Date >= startDate.getDate() + "/" + (startDate.getMonth() + 1) + "/" + startDate.getFullYear() && 
          product.Date <= endDate.getDate() + "/" + (endDate.getMonth() + 1) + "/" + endDate.getFullYear()
      );
    });
    setStartDate(startDate);
    setEndDate(endDate);
    setItems(filtered);
  };

  return (
    <div className="container-fluid ">
      <div className="row my-2 d-flex align-items-end">
        <div className="col-md-3">
          <span className="col-md-6">Start date:</span>
          <DatePicker
            className="col-md-6"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
          />
        </div>
        <div className="col-md-3">
          <span className="col-md-6">End date:</span>
          <DatePicker
            className="col-md-6"
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
          />
        </div>
        <div className=" h-100 col-md-6 d-flex">
          <button
            onClick={handleSelectDate}
            className="btn-sm col-md-2 btn-primary align-self-start"
          >
            Filter Data
          </button>
        </div>
      </div>
      {loading ? (
        <div className="containes">
          <div className="item1-1"></div>
          <div className="item2-2"></div>
          <div className="item3-3"></div>
          <div className="item4-4"></div>
          <div className="item5-5"></div>
        </div>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Date</th>
              <th scope="col">name</th>
              <th scope="col">Product</th>
              <th scope="col">city</th>
              <th scope="col">State</th>
              <th scope="col">Address</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            {ITEMSarr.map((values, index) => {
              // console.log(values);
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{values.Date}</td>
                  <td>{values.CardOnName?.toUpperCase()}</td>
                  <td>{values.productname}</td>
                  <td>{values.City?.toUpperCase()}</td>
                  <td>{values.State?.toUpperCase()}</td>
                  <td>{values.Address}</td>
                  <td>{values.Total}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Orders;
