import React from "react";
import PieRechartComponent from "./PieChart";

const Dashboard = () => {
  return (
    <div className="container-fluid ">
      <div className="row mt-2 d-flex justify-content-around">
        <div className="card col-md-3 col-sm-8 col-10 mt-5 mb-lg-5 rounded">
          <div className="card-body">
            <p className="text-uppercase small mb-2">
              <strong>Total Accounts</strong>
            </p>
            <h5 className="mb-0">
              <strong>51 354 </strong>
              <small className="text-success ms-2">
                <i className="fas fa-arrow-up fa-sm pe-1"></i>23,58%
              </small>
            </h5>

            <hr />

            <p className="text-uppercase text-muted small mb-2">Previous period</p>
            <h5 className="text-muted mb-0">38 454</h5>
          </div>
        </div>

        <div className="card col-md-3 col-sm-8 col-10 mb-lg-5 mt-5">
          <div className="card-body">
            <p className="text-uppercase small mb-2">
              <strong>Total Products</strong>
            </p>
            <h5 className="mb-0">
              <strong>51 354 </strong>
              <small className="text-success ms-2">
                <i className="fas fa-arrow-up fa-sm pe-1"></i>23,58%
              </small>
            </h5>

            <hr />

            <p className="text-uppercase text-muted small mb-2">Previous period</p>
            <h5 className="text-muted mb-0">38 454</h5>
          </div>
        </div>

        <div className="card col-md-3 col-sm-8 col-10 mb-lg-5 mt-5">
          <div className="card-body">
            <p className="text-uppercase small mb-2">
              <strong>Total Orders</strong>
            </p>
            <h5 className="mb-0">
              <strong>51 354 </strong>
              <small className="text-success ms-2">
                <i className="fas fa-arrow-up fa-sm pe-1"></i>23,58%
              </small>
            </h5>

            <hr />

            <p className="text-uppercase text-muted small mb-2">Previous period</p>
            <h5 className="text-muted mb-0">38 454</h5>
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-center mt-5">
        <PieRechartComponent/>    
      </div>
    </div>
  );
};

export default Dashboard;
