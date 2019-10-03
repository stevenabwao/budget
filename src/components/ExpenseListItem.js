import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// const ExpenseListItem = ({dispatch,id,description,amount,createdAt}) => (
//     <div>
//         <h1>{description}</h1>
//         <p>{amount} - {createdAt}</p>
//         <button onClick={() => {
//             dispatch(removeExpense({ id }))
//         }}>Remove</button>
//     </div>
// );

const ExpenseListItem = ({id,description,amount,createdAt}) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
        </Link>
        <p>{amount} - {createdAt}</p>
    </div>
);

export default ExpenseListItem;