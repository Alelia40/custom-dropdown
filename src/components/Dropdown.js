import './Dropdown.css';

import React, { useState } from 'react';
import DropdownItem from './DropdownItem';
import DropdownHeader from './DropdownHeader';
import PropTypes from 'prop-types';


/**
 * dropdown component, takes a list of options and a list for selected values as required properties, also takes an on value change handler as a required property
 * @param {*} props 
 */
function Dropdown(props) {
    const [isOpen, setIsOpen] = useState(false); //keeps track of whether or not the dd is open

    /**
     * Function that toggles the visibility of the dropdown items. 
     * also clears the selected items if we are reopening the dropdown and things have been selected previously
     */
    function dropdownToggle() {
        if (!isOpen && props.value.length > 0) { //clear selected items if reopening the dropdown after selecting things previously
            props.onChangeValue([]);
        }
        setIsOpen(!isOpen);//toggle the dropdown
    }

    /**
     * Function that sets the content of the dropdown header depending on how many items have been selected
     */
    function setHeaderText() {
        return props.value.length > 0 ? props.value.join(", ") : "Select an item"; //if no items are selected display a null message, else display selections as a string
    }

    /**
     * Function that is called when an item is selected from the dropdown
     * @param {*} itemName 
     */
    function modifySelectionsWith(itemName) {
        let selection = props.value;
        if (!selection.includes(itemName)) {
            props.onChangeValue(selection => [...selection, itemName]);
        } else {
            props.onChangeValue(selection.filter(item => item != itemName));
        }
    }

    return (
        <div className="card Dropdown">
            <DropdownHeader onToggle={dropdownToggle.bind(this)} headerText={setHeaderText} listOpen={isOpen} />
            { isOpen && (
                <div className="list-group list-group-flush ddList">
                    {props.options.map((item, i) =>
                        <DropdownItem key={i} onSelect={modifySelectionsWith.bind(this, item)} itemName={item} itemId={"selectionToggle" + i} />
                    )}
                </div>
            )}
        </div>
    );
}

Dropdown.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    value: PropTypes.arrayOf(PropTypes.string).isRequired,
    onChangeValue: PropTypes.func.isRequired
}

export default Dropdown;
