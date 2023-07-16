import React, { useState } from "react";
import { Modal } from "react-bootstrap"; // Assuming you are using Bootstrap for modals
import UserReviews from "../Reviews/userReviews";

const UserReviewsModalButton = () => {
    const [showModal, setShowModal] = useState(false);
  
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);
  
    return (
      <>
        <button onClick={handleShow}>View Reviews</button>
  
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>User Reviews</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <UserReviews />
          </Modal.Body>
          <Modal.Footer>
            <button onClick={handleClose}>Close</button>
          </Modal.Footer>
        </Modal>
      </>
    );
  };
  
  export default UserReviewsModalButton;
  