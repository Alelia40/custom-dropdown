import './Dropdown.css';

import React, { useState } from 'react';
import DropdownItem from './DropdownItem';

function Dropdown(props) {
    const [isOpen, setIsOpen] = useState(false); //keeps track of whether or not the dd is open
    const [selectedItems, setSelectedItems] = useState([]); //keeps track of selected items

    /**
     * Function that toggles the visibility of the dropdown items. 
     * also clears the selected items if we are reopening the dropdown and things have been selected previously
     */
    function dropdownToggle() {
        if(!isOpen && selectedItems.length > 0){ //clear selected items if reopening the dropdown after selecting things previously
            setSelectedItems([]);
        }
        setIsOpen(!isOpen);//toggle the dropdown
    }

    /**
     * Function that sets the content of the dropdown header depending on how many items have been selected
     */
    function setHeaderContent() {
        return selectedItems.length > 0 ? selectedItems.join(", ") : "Select an item"; //if no items are selected display a null message, else display selections as a string
    }

    /**
     * Function that is called when an item is selected from the dropdown
     * @param {*} itemName 
     */
    function modifySelectionsWith(itemName) {
        if(!selectedItems.includes(itemName)) {
            setSelectedItems(selectedItems => [...selectedItems, itemName]);
        }else {
            setSelectedItems(selectedItems.filter( item => item != itemName));
        }
    }

    return (
        <div className="card Dropdown">
            <div className="card-header ddHeader" onClick={dropdownToggle}>{setHeaderContent()}</div>
            { isOpen && (
                 <ul className="list-group list-group-flush ddList">
                     {props.listItems.map( (item, i) =>
                         <DropdownItem key={i} onSelect={modifySelectionsWith.bind(this, item)} itemName={item} buttonId={"selectionToggle"+i}></DropdownItem>
                     )}
                 </ul>
            )}
        </div>
    );
}

export default Dropdown;
