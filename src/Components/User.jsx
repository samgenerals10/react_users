import React, { useState } from 'react'
import { Card, Col, Button, Modal, } from 'react-bootstrap'
import EditUserForm from './EditUserForm';
import "./Crud.css"


const User = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = (e) => {
    e.preventDefault();
    console.log("Item Deleted")
    props.deleteUser(props.userInfo.id);
  }
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><h4>Edit User</h4></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditUserForm 
          userInfo={props.userInfo} 
          editUser={props.editUser} 
          closeModal={handleClose}/>
        </Modal.Body>

      </Modal>

      <Col md="4" style={{ marginTop: "1rem" }}>
        <Card className='card'>
          <Card.Body>
            <Card.Subtitle className="mb-2 text-muted"><h3>Codetrain User</h3></Card.Subtitle>
            <Card.Title>
              <p>Name: {props.userInfo.name}</p>
            </Card.Title>
            <Card.Text>
              <p>Email: {props.userInfo.email}</p>
              <p>Gen: {props.userInfo.gen}</p>
            </Card.Text>
            <Card.Link href="#" onClick={handleShow}><Button variant="primary" size="sm">Edit</Button></Card.Link>
            <Card.Link href="#">
              <Button variant="danger" size="sm" onClick={handleDelete}>Delete</Button>
            </Card.Link>
          </Card.Body>
        </Card>
      </Col>
    </>

  );
};

export default User