import { useState } from "react";
import classes from "./Button.module.css";

const Button = (props) => {

    return <>
        <button className={classes.Button 
        + ' ' + 
        classes[props.variant] 
        + ' ' + 
        classes[props.disableShadow ? 'disableShadow' :'']
        + ' ' + 
        classes[props.disabled ? 'disabled' :''
        ]
        } disabled={props.disabled}>{props.children}</button>
    </>
};

export default Button;
