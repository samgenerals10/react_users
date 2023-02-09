import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Users from './Components/Users';
import './App.css';
import AddUserForm from './Components/AddUserForm';
import "./Components/Crud.css"



class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      users: [ ],
    };
  }
  addNewUser = (user) => {
    // user.id = Math.random().toString()
    this.setState({
      users: [...this.state.users, user]
    })
  }
  deleteUser = (id) => {
    let undeletedUsers =this.state.users.filter(user => user.id !== id);
    this.setState({
      users: undeletedUsers
    })
   }

   editUser = (id,updatedUser) => {
      this.setState({
        users: this.state.users.map(user => user.id === id ? updatedUser : user)
      })
      
   }
   
  reset = () => {
    this.setState({
      users: []
    })
  }
  render(){
    return (  
      <>
      <Container fluid style={{marginTop: "2rem"}}>
       <Row>
         <Col md="4">
          <h4 >Add Users</h4>
          <hr></hr>
           <AddUserForm addUser={this.addNewUser} reset={this.reset}/>  
         </Col>
           
         <Col>
         <h4>All Codetrain Users</h4>
         <hr></hr>
         <Users 
         usersData = {this.state.users} 
         deleteUser = {this.deleteUser}
         editUser = {this.editUser}
         />
         </Col>
       </Row>
      </Container>
      </>
     );
  }
 }

export default App;
