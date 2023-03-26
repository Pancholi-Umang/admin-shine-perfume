import axios from "axios";
import React, { useState, useEffect } from "react";
import PieRechartComponent from "./PieChart";

const Dashboard = () => {
  const [Items, setItems] = useState([]);
  const [data, setData] = useState([]);
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

  const URL = "https://shine-perfumes-default-rtdb.firebaseio.com/items.json/";
  const Datas = () => {
    axios.get(URL).then((response) => {
      setData(response.data);
    });
  };

  useEffect(() => {
    Datas();
  }, [loading]);

  var DATAarr = [];
  for (let key in data) {
    DATAarr.push(Object.assign(data[key], { id: key }));
  }

  // const URL = "https://shine-perfumes-default-rtdb.firebaseio.com/items.json/";
  // const Datas = () => {
  //   axios.get(URL).then((response) => {
  //     setData(response.data);
  //   });
  // };

  // useEffect(() => {
  //   Datas();
  // }, [loading]);

  // var DATAarr = [];
  // for (let key in data) {
  //   DATAarr.push(Object.assign(data[key], { id: key }));
  // }

  return (
    <div className="col-md-10  mx-auto mt-5">
      { loading ? (
        <div className="containes">
          <div className="item1-1"></div>
          <div className="item2-2"></div>
          <div className="item3-3"></div>
          <div className="item4-4"></div>
          <div className="item5-5"></div>
        </div>
      ) : (
        <>
          <div className="row">
            <div className=" col-sm-6 col-lg-4 mt-2">
              <div className="card l-bg-cherry">
                <div className="card-statistic-3 p-4">
                  <div className="card-icon card-icon-large">
                    <i className="fas fa-shopping-cart"></i>
                  </div>
                  <div className="mb-4">
                    <h5 className="card-title mb-0">Total Orders</h5>
                  </div>
                  <div className="row align-items-center mb-2 d-flex">
                    <div className="col-8">
                      <h2 className="d-flex align-items-center mb-0">
                        {ITEMSarr.length}
                      </h2>
                    </div>
                    <div className="col-4 text-right">
                      <span>
                        12%<i className="fa fa-arrow-up"></i>
                      </span>
                    </div>
                  </div>
                  <div
                    className="progress mt-1 "
                    data-height="8"
                    style={{ height: "8px" }}
                  >
                    <div
                      className="progress-bar l-bg-cyan"
                      role="progressbar"
                      data-width="25%"
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4 mt-2">
              <div className="card l-bg-blue-dark">
                <div className="card-statistic-3 p-4">
                  <div className="card-icon card-icon-large">
                    <i className="fas fa-users"></i>
                  </div>
                  <div className="mb-4">
                    <h5 className="card-title mb-0">Customers</h5>
                  </div>
                  <div className="row align-items-center mb-2 d-flex">
                    <div className="col-8">
                      <h2 className="d-flex align-items-center mb-0">2</h2>
                    </div>
                    <div className="col-4 text-right">
                      <span>
                        9% <i className="fa fa-arrow-up"></i>
                      </span>
                    </div>
                  </div>
                  <div
                    className="progress mt-1 "
                    data-height="8"
                    style={{ height: "8px" }}
                  >
                    <div
                      className="progress-bar l-bg-green"
                      role="progressbar"
                      data-width="25%"
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4 mt-2">
              <div className="card l-bg-green-dark">
                <div className="card-statistic-3 p-4">
                  <div className="card-icon card-icon-large">
                    <i className="fa-solid fa-bag-shopping"></i>
                  </div>
                  <div className="mb-4">
                    <h5 className="card-title mb-0">Total Products</h5>
                  </div>
                  <div className="row align-items-center mb-2 d-flex">
                    <div className="col-8">
                      <h2 className="d-flex align-items-center mb-0">
                        {DATAarr.length}
                      </h2>
                    </div>
                    <div className="col-4 text-right">
                      <span>
                        10% <i className="fa fa-arrow-up"></i>
                      </span>
                    </div>
                  </div>
                  <div
                    className="progress mt-1 "
                    data-height="8"
                    style={{ height: "8px" }}
                  >
                    <div
                      className="progress-bar l-bg-orange"
                      role="progressbar"
                      data-width="25%"
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center mt-5">
            <PieRechartComponent />
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
