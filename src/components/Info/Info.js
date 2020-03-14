import React from 'react';
import './Info.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';


const Info = (props) => {
   //console.log(props);
   const {name, email, phone, company, website, address,img} = props.usrInfo;
    return (
        <div className="User-details">
            <div className="user-photo">
               <img src={img} alt="" />
            </div>

            <div className="user-info">
                <h3><b>Name:</b> {name}</h3>
                <p><b>Email:</b> {email}</p>
                <p><b>Address:</b> {address.street},<span> {address.suite}, </span><span> {address.zipcode}</span></p>
                <p><b>Phone:</b> {phone}</p>
                <p><b>Company:</b> {company.catchPhrase}</p>
                <p><b>Website:</b> {website}</p>
                <button className="main-button"
                    onClick = {()=> props.handleAddBasket(props.usrInfo)}
                > <FontAwesomeIcon icon={faUserPlus} /> Add Me Basket</button>
            </div>
        </div>
    );
};

export default Info;