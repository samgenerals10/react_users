import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default class AddUserForm extends Component {
constructor(props){
  super(props);
  this.state={
    name:"",
    email:"",
    gen:"",
    id:''
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
      let newUser={
        name:this.state.name,
    email:this.state.email,
    gen:this.state.gen,
    id:Math.floor(Math.random()*200000)
      }
      this.props.addUser(newUser);
      this.setState({
        name:"",
        email:"",
        gen:"",
      })
    }
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
          <Button variant="dark" type="submit" id='subBut'>
            Submit
          </Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           <Button variant="warning" type="reset" onClick={this.handleReset}>Reset</Button>
        </Form>
      </div>
    )
  }
}
