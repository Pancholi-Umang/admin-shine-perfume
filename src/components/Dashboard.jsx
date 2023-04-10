import axios from "axios";
import React, { useState, useEffect } from "react";
import PieRechartComponent from "./PieChart";
import { useDispatch, useSelector } from "react-redux";
import { getProduct, getAllOrder, getAllRegistration } from "../Redux/action";

const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  const getAllProduct = useSelector((state) => state.item.products);
  const getAllorders = useSelector((state)=>state.order.orders)
  const getAllUsers = useSelector((state)=>state.login.registrations)

   useEffect(() => {
    if(getAllProduct.length === 0){
      dispatch(getProduct());
      dispatch(getAllOrder());
      dispatch(getAllRegistration());
    }
  }, [getAllProduct,getAllorders]);

  var ALLproductGET = [];
  for (let key in getAllProduct) {
    if (key) {
      ALLproductGET.push(Object?.assign(getAllProduct[key], { id: key }));
    }
  }

  var AllOrderAchieve = [];
  for (let key in getAllorders) {
    if (key) {
      AllOrderAchieve.push(Object?.assign(getAllorders[key], { id: key }));
    }
  }  

  var ALLUSERS = [];
  for (let key in getAllUsers) {
    if (key) {
    ALLUSERS.push(Object.assign(getAllUsers[key], { id: key }))
    }
  }
  
  return (
    <div className="col-md-10  mx-auto mt-5">
      {loading ? (
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
                        {AllOrderAchieve.length}
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
                      <h2 className="d-flex align-items-center mb-0">
                        {ALLUSERS.length}
                      </h2>
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
                        {ALLproductGET.length}
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
