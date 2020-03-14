import React, { useState } from 'react';
import './User.css';
import fakeData from '../../fakeData'
import Info from '../Info/Info';
import Count from '../Count/Count';

const User = () => {
    const users = fakeData.slice(0,15);
    const [user, setUser] = useState(users);
    const [count, setCount] = useState([]);

    const handleAddBasket = (usrInfo) => {
        //console.log('Product added', usrInfo);
        const newCount = [...count, usrInfo];
        setCount(newCount);
    }
    return (
        <div className="user-container">
            <div className="user-information">
            {
                user.map(usr => <Info
                    handleAddBasket = {handleAddBasket}
                    usrInfo={usr}
                >
                </Info>)
            }
            </div>
            <div className="count-salary">
                <Count count={count}></Count>
            </div>
        </div>
    );
};

export default User;