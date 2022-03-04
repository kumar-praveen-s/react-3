import React from "react";
import Fvalue from "./Fvalue";

class FormC extends React.Component {
  constructor() {
    super();
    this.state = {
      contentForm: true,
      btnTxt: "Submit",
      heading: "Employee Feedback form",
      name: "",
      department: "",
      rating: "",
      employee: [],
    };
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    // console.log(this);
  };

  handleClick = (e) => {
    e.preventDefault();
    // console.log(this.state.contentForm);
    if (this.state.contentForm) {
      const { name, department, rating } = this.state;
      // console.log(name, department, rating);
      const obj = {
        name: name,
        department: department,
        rating: rating,
      };
      const Arr = this.state.employee;
      Arr.push(obj);
      this.setState({
        employee: Arr,
      });
      this.changeState();
    } else {
      this.changeState();
    }
    // console.log(this.state.contentForm);
    // console.log(this.state);
    // console.log(this.state.employee.length);
  };

  changeState = () => {
    this.setState({
      contentForm: this.state.contentForm ? false : true,
      btnTxt: this.state.contentForm ? "Go Back" : "Submit",
      heading: this.state.contentForm
        ? "Employee Feedback Data"
        : "Employee Feedback form",
    });
  };

  render() {
    return (
      <>
        <h1 className="heading">{this.state.heading}</h1>
        {this.state.contentForm && (
          <div className="form-container">
            <form className="form">
              <p className="para-style">
                <label>Name :</label>
                <input
                  type="text"
                  id="nameId"
                  name="name"
                  value={this.state.name}
                  onChange={this.changeHandler}
                  required
                />
              </p>
              <p className="para-style">
                <label>Department :</label>
                <input
                  type="text"
                  id="deptId"
                  name="department"
                  value={this.state.department}
                  onChange={this.changeHandler}
                  required
                />
              </p>
              <p className="para-style">
                <label>Rating :</label>
                <input
                  type="number"
                  id="ratingId"
                  name="rating"
                  value={this.state.rating}
                  onChange={this.changeHandler}
                  required
                />
              </p>
            </form>
          </div>
        )}
        {!this.state.contentForm && <Fvalue employee={this.state.employee} />}
        <p className="para-style">
          <button onClick={this.handleClick} className="btn-style">
            {this.state.btnTxt}
          </button>
        </p>
      </>
    );
  }
}

export default FormC;
