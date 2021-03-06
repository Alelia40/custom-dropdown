import React, { useState } from 'react';

function DropdownItem(props) {

    /**
     * A function that handles the click of the selectionToggle button
     * it handles visual indication of selection status as well as calling the selection logic in the parent dropdown
     */
    function selectionToggleClick() {

        //change appearance based on selection status
        if(document.getElementById(props.buttonId).innerHTML == "+") {
            document.getElementById(props.buttonId).className = "btn btn-primary";
            document.getElementById(props.buttonId).innerHTML = "-";
        } else {
            document.getElementById(props.buttonId).className = "btn btn-secondary";
            document.getElementById(props.buttonId).innerHTML = "+";
        }
            
        props.onSelect(); //call the selection method on the parent component
    }

    return (
        <li className="list-group-item d-flex justify-content-between align-items-center" >
            {props.itemName} 
            <button id={props.buttonId} className="btn btn-secondary " onClick={selectionToggleClick}>+</button>
        </li>
    );
}

export default DropdownItem;