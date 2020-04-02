import React from "react";

function EmployeeInfo(props) {
  return (
    <table className="table">
      <thread>
        <tr>

          <th scope="col">Name: {props.name}</th>
          <th scope="col">Position: {props.position}</th>
          <th scope="col">Employee Number: {props.number}</th>
          <th scope="col">Email: {props.email}</th>
        </tr>
      </thread>
    </table>
  )};

export default EmployeeInfo;
