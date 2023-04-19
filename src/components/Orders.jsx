import axios from "axios";
import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../App.css";
import { getFilterDate, getAllOrder } from "../Redux/action";
import { useDispatch, useSelector } from "react-redux";

const Orders = () => {
  const [loading, setLoading] = useState(false);
  const [startDate, setStartDate] = useState(new Date("2023/04/01"));
  const [endDate, setEndDate] = useState(new Date());
  const [toggle, setToggle] = useState(false);
  const [dropdownname, setDropdownName] = useState("All");

  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  const getAllUSERorders = useSelector((state)=>state.order.orders)
  const FILTER_VALUE = useSelector((state)=>state.order.dateFilter)
  console.log(FILTER_VALUE)

 

  useEffect(() => {
    if (ALL_USER_AVAILABLE.length === 0) {
      dispatch(getAllOrder());
    }
    dispatch(getFilterDate(ALL_USER_AVAILABLE));
  }, [getAllUSERorders,toggle]);

  var ALL_USER_AVAILABLE = [];
  for (let key in getAllUSERorders) {
    ALL_USER_AVAILABLE.push(Object.assign(getAllUSERorders[key], { id: key }));
  }
console.log(ALL_USER_AVAILABLE)

  const handleSelectDate = () => {
    let filtered = ALL_USER_AVAILABLE.filter((product) => {
      return (
        product.Date >= startDate.getDate() + "/" + (startDate.getMonth() + 1) + "/" + startDate.getFullYear() &&
        product.Date <= endDate.getDate() + "/" + (endDate.getMonth() + 1) + "/" + endDate.getFullYear());
    });
    setStartDate(startDate);
    setEndDate(endDate);
    dispatch(getFilterDate(filtered));
  };

  const DeliveryUniq = ["proceed", "In Process", "Dispatch"];

  const handleClick = (deliveryInfo) => {
    if (deliveryInfo) {
      setDropdownName(deliveryInfo);
      const result = ALL_USER_AVAILABLE.filter((val) => {
        return val.deliveryStatus === deliveryInfo;
      });
      dispatch(getFilterDate(result));
    } else {
      dispatch(getFilterDate(ALL_USER_AVAILABLE));
    }
  };

  const ChangeDispatchStatus = async (id, deliveryStatus) => {
    if (deliveryStatus == "proceed") {
      await axios.patch(
        `https://order-invoice-c8bed-default-rtdb.firebaseio.com/invoice/${id}.json/`,
        {
          deliveryStatus: "In Process",
        }
      )
      .then(()=>dispatch(getAllOrder()))
      setToggle(!toggle);
    } else if (deliveryStatus == "In Process") {
      await axios.patch(
        `https://order-invoice-c8bed-default-rtdb.firebaseio.com/invoice/${id}.json/`,
        {
          deliveryStatus: "Dispatch",
        }
        )
        .then(()=>dispatch(getAllOrder()))
      setToggle(!toggle);
    }
  };

  return (
    <div className="container-fluid overflow-scroll">
      <div className="row my-2 d-flex align-items-end bg-secondary py-2 container mx-auto">
        <div className="col-md-3">
          <div className="dropdown d-flex align-items-center justify-content-center">
            <button
              className="btn-sm btn-secondary dropdown-toggle col-md-10 border-0"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {dropdownname.toUpperCase()}
            </button>
            <ul className="dropdown-menu">
              {DeliveryUniq.map((getVal, index) => {
                return (
                  <button
                    key={index}
                    className="dropdown-item"
                    onClick={() => handleClick(getVal)}
                  >
                    {getVal.toUpperCase()}
                  </button>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="col-md-3 d-flex justify-content-around align-items-center ">
          <span className="col-md-4">Start date:</span>
          <DatePicker
            className="col-md-8 bg-transparent border-0"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
          />
        </div>
        <div className="col-md-3 d-flex justify-content-around align-items-center ">
          <span className="col-md-4">End date:</span>
          <DatePicker
            className="col-md-8 bg-transparent border-0"
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
          />
        </div>
        <div className=" h-100 col-md-3 d-flex">
          <button
            onClick={handleSelectDate}
            className="btn-sm col-md-4 button-12"
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
        <table className="table table-striped table-hover table-bordered table-info border-success  ">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Date</th>
              <th scope="col">name</th>
              <th scope="col">Product</th>
              <th scope="col">city</th>
              <th scope="col">State</th>
              <th scope="col">Address</th>
              <th scope="col">Status</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            {FILTER_VALUE.map((values, index) => {
              const { id, Date, CardOnName, productname, City, State, Address, Total, deliveryStatus } = values;
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{Date}</td>
                  <td>{CardOnName?.toUpperCase()}</td>
                  <td>{productname}</td>
                  <td>{City?.toUpperCase()}</td>
                  <td>{State?.toUpperCase()}</td>
                  <td>{Address}</td>
                  <td>
                    <button
                      className="button-70"
                      onClick={() => ChangeDispatchStatus(id, deliveryStatus)}
                    >
                      {deliveryStatus}
                    </button>
                  </td>
                  <td>₹{Total}</td>
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
