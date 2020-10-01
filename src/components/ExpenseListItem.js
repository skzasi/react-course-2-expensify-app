import React from 'react';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';

const ExpenseListItem = ({ id, dispatch, amount, description, createdAt }) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
        </Link>
        <p>{amount} - {createdAt}</p>
    </div>
);


export default ExpenseListItem;