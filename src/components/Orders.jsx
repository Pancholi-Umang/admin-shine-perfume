import axios from "axios";
import React, { useState, useEffect } from "react";

const Orders = () => {
  const [Items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  const baseURL =
    "https://perfumeweb-60a0e-default-rtdb.firebaseio.com/invoice.json/";
  const GetData = () => {
    axios.get(baseURL).then((response) => {
      setItems(response.data);
    });
  };

  useEffect(() => {
    GetData();
  }, [loading]);

  var ITEMSarr = [];
  for (let key in Items) {
    ITEMSarr.push(Object.assign(Items[key], { id: key }));
  }

  return (
    <div className="container-fluid">
      {loading ? (
        <div className="containes">
          <div className="item1-1"></div>
          <div className="item2-2"></div>
          <div className="item3-3"></div>
          <div className="item4-4"></div>
          <div className="item5-5"></div>
        </div>
      ) : (
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
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
              return (
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{values.CardOnName.toUpperCase()}</td>
                  <td>{values.productname.toUpperCase()}</td>
                  <td>{values.City}</td>
                  <td>{values.State}</td>
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
