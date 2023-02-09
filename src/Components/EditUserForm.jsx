import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class EditUserForm extends Component {
constructor(props){
  super(props);
  this.state={
    name: props.userInfo.name,
    email: props.userInfo.email,
    gen: props.userInfo.gen,
    id: props.userInfo.id
  }
}

handleChange = (e) => {
  e.preventDefault();
  this.setState({
    [e.target.name]: e.target.value
  })
    };

    handleSubmit = (e) => {
      e.preventDefault();
      this.props.editUser(this.state.id, this.state);
      this.setState({
        name: "",
        email: "",
        gen:   "",
        id: "",
      });
      this.props.closeModal ()
    };
handleReset = (e) => {
      e.preventDefault ();
     this.props.reset()
    }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" name="name" value ={this.state.name} onChange={this.handleChange}/>
          </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail" >
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter Email" name="email" value = {this.state.email} onChange={this.handleChange}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Label>Gen</Form.Label>
            <Form.Control type="number" placeholder="Enter Gen" name="gen" value = {this.state.gen } onChange={this.handleChange}/>
          </Form.Group>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Button variant="dark" type="submit">
            Submit
          </Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           <Button variant="warning" type="reset" onClick={this.handleReset}>Reset</Button>
        </Form>
      </div>
    )
  }
}

export default EditUserForm;
