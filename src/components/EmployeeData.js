import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import SearchEmployee from "./SearchEmployee";
import EmployeeInfo from "./EmployeeInfo";
import API from "../utils/API";

class EmployeeData extends Component {
  state = {
    result: [],
    search: ""
  };

  componentDidMount() {
    this.searchEmployees();
  }

  searchEmployees = () => {
    API.getUsers()
      .then(res => 
        this.setState(
          { result: res.data }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchEmployees(this.state.search);
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-8">
            <Card
              heading={this.state.result.Title || "Search for Employee"}
            >
              {this.state.result.Title ? (
                <EmployeeInfo
                  title={this.state.result.Title}
                  src={this.state.result.Image}
                  name={this.state.result.Name}
                  position={this.state.result.Position}
                  number={this.state.result.Number}
                  email={this.state.result.Email}
                />
              ) : (
                <h3>No Results to Display</h3>
              )}
            </Card>
          </Col>
          <Col size="md-4">
            <Card heading="Search">
              <SearchEmployee
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default EmployeeData;
