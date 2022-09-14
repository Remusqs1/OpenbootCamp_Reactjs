import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CONNECTED_STATUS } from '../../models/connectedStatus.enum';

const ContactComponent = (props) => {
    
    var [isConnected = false, setStatus] = useState(props.status);

    const changeStatus = () => {
        console.log("initial status: " + isConnected)
        setStatus(isConnected = !isConnected)
        console.log("new status: " + isConnected)
    }

    return (
        <div>
	        <p>Status: {isConnected === false ? CONNECTED_STATUS.DISCONNECTED : CONNECTED_STATUS.CONNECTED}</p>
            <button onClick={changeStatus}>Change Status</button>
	    </div>
	    );
};

ContactComponent.propTypes = {
    status: PropTypes.bool
};

export default ContactComponent;