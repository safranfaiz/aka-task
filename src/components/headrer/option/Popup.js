import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';

const Popup = props => {

  return(
    <>
      <Modal size="sm" show={props.show} onHide={props.onHide}>
        <Modal.Body> {props.data.map(item => { return <p>{item}</p> })} </Modal.Body>
      </Modal>
    </>
  )

}

export default Popup;