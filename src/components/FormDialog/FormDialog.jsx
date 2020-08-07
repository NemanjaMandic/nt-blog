// @flow

import React from 'react';

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

type Props = {
    onChange: () => void;
    onSubmit: () => void;
    onCancel: () => void;
}
const FormDialog = (props: Props) => {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add/Edit Blog post
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="dasdadd" onChange={props.onChange} name="title" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Text</Form.Label>
              <Form.Control as="textarea" rows="3" name="text" onChange={props.onChange} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onSubmit}>Post</Button>
          <Button onClick={props.onCancel}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    );
  };

  export default FormDialog;