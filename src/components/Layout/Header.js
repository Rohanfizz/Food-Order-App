import React, { Fragment } from "react";

import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from './HeaderCartButton'

import classes from "./Header.module.css";


const Header = (props) => {
	return (
		<Fragment>
			<header className={classes.header}>
				<h1>Rohan Rasoi</h1>
				<HeaderCartButton onShowCart={props.onShowCart}/>
			</header>
			<div className={classes["main-image"]}>
				<img src={mealsImage} alt="Delicious Food" />
			</div>
		</Fragment>
	);
};

export default Header;
