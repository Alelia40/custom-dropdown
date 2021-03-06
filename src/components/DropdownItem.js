import './DropdownItem.css';

import React, { useState } from 'react';
import { FcCheckmark } from "react-icons/fc";

function DropdownItem(props) {

    const [selected, setSelected] = useState(false);

    /**
     * A function that handles the click of the selectionToggle button
     * it handles visual indication of selection status as well as calling the selection logic in the parent dropdown
     */
    function selectionToggleClick() {
        setSelected(!selected);

        props.onSelect(); //call the selection method on the parent component
    }

    return (
        <button id={props.itemId} className="list-group-item list-group-item-action ddItem" onClick={selectionToggleClick}>
            {props.itemName}
            { selected && (
               <FcCheckmark />
            )}
        </button>
    );
}

export default DropdownItem;