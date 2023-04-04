import axios from "axios";
import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../App.css'

const Orders = () => {
  const [Items, setItems] = useState([]);
  const [FilterItems, setFilterItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [startDate, setStartDate] = useState(new Date("2023/03/29")); //03/29/2023
  const [endDate, setEndDate] = useState(new Date());
  const [toggle, setToggle] = useState(false);
  const [dropdownname, setDropdownName] = useState("All")

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  const baseURL =
    "https://order-invoice-c8bed-default-rtdb.firebaseio.com/invoice.json/";
  const GetData = () => {
    axios.get(baseURL).then((response) => {
      setItems(response.data);
      setFilterItems(response.data);
    });
  };

  useEffect(() => {
    GetData();
  }, [toggle]);

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
        product.Date <= endDate.getDate() +  "/" +  (endDate.getMonth() + 1) +  "/" +  endDate.getFullYear()
      );
    });
    setStartDate(startDate);
    setEndDate(endDate);
    setItems(filtered);
  };

  const DeliveryUniq = ["proceed", "In Process", "Dispatch"];

  const handleClick = (deliveryInfo) => {
    console.log(deliveryInfo)
    if(deliveryInfo){
      setDropdownName(deliveryInfo);
      const result = productDateArray.filter((val) => {
        return val.deliveryStatus === deliveryInfo;
      });
      setItems(result);
    }
    else{
      setItems(productDateArray)
    }
  }

  const ChangeDispatchStatus = async (id, deliveryStatus) => {
    console.log(id, "", deliveryStatus);
    if (deliveryStatus == "proceed") {
      const updatedOrders = await axios.patch(
        `https://order-invoice-c8bed-default-rtdb.firebaseio.com/invoice/${id}.json/`,
        {
          deliveryStatus: "In Process",
        }
      );
      setToggle(!toggle);
      setItems(updatedOrders.data);
    } else if (deliveryStatus == "In Process") {
      console.log(deliveryStatus);
      const dispatchOrder = await axios.patch(
        `https://order-invoice-c8bed-default-rtdb.firebaseio.com/invoice/${id}.json/`,
        {
          deliveryStatus: "Dispatch",
        }
      );
      setToggle(!toggle);
      setItems(dispatchOrder.data);
    }
  };

  return (
    <div className="container-fluid ">
      <div className="row my-2 d-flex align-items-end bg-secondary py-2 container mx-auto">
        <div className="col-md-3">
        <div className="dropdown d-flex align-items-center justify-content-center">
          <button className="btn-sm btn-secondary dropdown-toggle col-md-10 border-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            {dropdownname.toUpperCase()}
          </button>
          <ul className="dropdown-menu">
          {DeliveryUniq.map((getVal, index) => {
            
              return (
                <button
                  key={index}
                  className="dropdown-item"
                  onClick={() => handleClick(getVal)}>
                  {getVal.toUpperCase()}
                </button>
              );
             })
            }
            
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
            {ITEMSarr.map((values, index) => {
              const { id, Date, CardOnName, productname, City, State, Address, Total, deliveryStatus} = values;
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
                  <td>{Total}</td>
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
