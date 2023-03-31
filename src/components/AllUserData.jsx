import React from "react";
import Table from "react-bootstrap/Table";

export default function AllUserData() {


  return (
    <div className="mt-5">
      <h4 className="mb-3">All Registerd User's Details:-</h4>

      <Table stripped bordered hover size="sm">
        <thead>
          <tr>
            <th width="170">First Name</th>
            <th width="170">Last Name</th>
            <th width="170">Password</th>
            <th width="870">Email</th>
            <th width="1950">Details</th>
          </tr>
        </thead>
        <tbody>
          
          <tr>
            <td>Umang</td>
            <td>Pancholi</td>
            <td>123456789</td>
            <td>umang@gmail.com</td>
            <td><button type="button" className="btn btn-light">View</button></td>
          </tr>
        </tbody>
      </Table>

      <hr className="mt-5"/>
    </div>
  );
}
