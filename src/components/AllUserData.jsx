import axios from "axios";
import React, { useState, useEffect } from "react";

export default function AllUserData() {

  const [userDetails, setUserDetails] = useState([])
  
  const getData = () => {
    const baseURL = "https://imagedemo-6e486-default-rtdb.firebaseio.com/wish.json";
    axios.get(baseURL).then((response) => {
      setUserDetails(response.data)
    })
  }

  useEffect(() => {
    getData();
  }, []);

  var userDataArray = [];
  for (let key in userDetails) {
    if (key) {
      userDataArray.push(Object?.assign(userDetails[key], { id: key }));
    }
  }

  return (
    <div className="container">
      <h4 className="my-3">All Registerd User's Details:-</h4>

      <div className="table-responsive">
        <table className="table table-striped table-hover table-bordered table-info border-success">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">Password</th>
            </tr>
          </thead>
          <tbody>
            {
              userDataArray.map((val,index)=>{
                return(
                  <tr key={index}>
                    <th scope="row">{index+1}</th>
                    <td>{val?.firstName}</td>
                    <td>{val?.lastName}</td>
                    <td>{val?.email}</td>
                    <td>{val?.password}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}
