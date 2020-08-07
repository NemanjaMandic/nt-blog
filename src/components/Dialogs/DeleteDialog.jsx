// @flow
import React from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

type Props = {
    deleteModal: boolean,
    closeDeleteModal: () => void,
    deletePost: () => void,
}
const DeleteDialog = (props: Props) => {
    const { deleteModal, closeDeleteModal, deletePost } = props;
    return ( 
        <Modal show={deleteModal} onHide={closeDeleteModal} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete post?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeDeleteModal}>
            Cancel
          </Button>
          <Button variant="primary" onClick={deletePost}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
     );
}
 
export default DeleteDialog;