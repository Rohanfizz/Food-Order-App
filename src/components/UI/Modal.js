import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";


const Backdrop = (props) => {
	return <div className={classes.backdrop} onClick={props.onClose}>{props.children}</div>;
};

const ModalOveraly = (props) => {
	return (
		<div className={classes.modal}>
			<div className={classes.content}>{props.children}</div>
		</div>
	);
};

const portalDestination = document.getElementById('overlays');

const Modal = (props) => {
	return (
		<Fragment>
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>,portalDestination)}
			{ReactDOM.createPortal(<ModalOveraly >{props.children}</ModalOveraly>,portalDestination)};			
		</Fragment>
	);
};
export default Modal;
