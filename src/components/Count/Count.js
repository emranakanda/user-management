import React from 'react';
import './Count.css'

const Count = (props) => {
   const count = props.count;

   let total = 0;
   for(let i = 0; i < count.length; i++){
       const user = count[i];
       total = total + parseInt(user.salary);
   }

    return (
        <div className="count-card">
            <h3>User In BasKet</h3>
            <h3>{count.length}</h3>
            <h3>Total Yearly Salary</h3>
            <h3>${total}</h3>
        </div>
    );
};

export default Count;