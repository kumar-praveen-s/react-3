import React from "react";

const Fvalue = (props) => {
  const dc = props.employee.map((item, pos) => {
    return (
      <div className="form-value-box" key={pos}>
        <h1 className="h1-style">{`Name : ${item.name} | Department : ${item.department} | Rating : ${item.rating}`}</h1>
      </div>
    );
  });
  return <div className="form-value-container">{dc}</div>;
};

export default Fvalue;
