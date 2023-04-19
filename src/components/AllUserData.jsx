import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllRegistration } from "../Redux/action";
import axios from "axios";

export default function AllUserData() {

  const dispatch = useDispatch();
  const getAllUsers = useSelector((state)=>state.login.registrations)

  useEffect(()=>{
    dispatch(getAllRegistration())
  },[getAllUsers])



  var userDataArray = [];
  for (let key in getAllUsers) {
    if (key) {
      userDataArray.push(Object?.assign(getAllUsers[key], { id: key }));
    }
  }

  const onClickToDelete = (id) => {
    axios.delete(`https://registration-login-23503-default-rtdb.firebaseio.com/login/${id}.json`)
    .then(()=>dispatch(getAllRegistration()))
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
              <th scope="col text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {userDataArray.map((val, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{val?.firstName}</td>
                  <td>{val?.lastName}</td>
                  <td>{val?.email}</td>
                  <td>{val?.password}</td>
                  <td><button className="btn button-custom" onClick={()=>onClickToDelete(val.id)}>DELETE</button></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
