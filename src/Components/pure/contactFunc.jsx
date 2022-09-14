import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../container/contact_component';


const ContactFunc = ({contact}) => {

    contact = new Contact("Iván", "Quintero", "Correo@email.com", false)

    return (
        <div>
            <h1>Contact Data</h1>
	        <p>Name: {contact.name}</p>
	        <p>Lastname: {contact.lastName}</p>
	        <p>Email: {contact.email}</p>
            <ContactComponent isConnected={false}/>
	    </div>
	    )
};


ContactFunc.propTypes = {
    contact: PropTypes.instanceOf(Contact)
};


export default ContactFunc;