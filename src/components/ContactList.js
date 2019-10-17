import React from 'react';
import './Contact.css';
import Contact from './Contact';

const contacts = [{
    avatar:"https://randomuser.me/api/portraits/women/10.jpg",
    name:"Kim Mendoza",
    isOnline:true,
    statusText:true
    },
    {
    avatar:"https://randomuser.me/api/portraits/women/49.jpg",
    name:"Tamara Neal"
    },
    {
    avatar:"https://randomuser.me/api/portraits/men/63.jpg",
    name:"Gavin Weaver",
    isOnline:true,
    statusText:true
    },
    {
    avatar:"https://randomuser.me/api/portraits/men/57.jpg",
    name:"Mitchell Fields"
    },
    {
    avatar:"https://randomuser.me/api/portraits/women/96.jpg",
    name:"Carole Williamson",
    isOnline:true,
    statusText:true
    },
];

const ContactList = () => (
    <div>
        {
            contacts.map(contact => <Contact {...contact} /> )
        }
    </div>
);


export default ContactList;