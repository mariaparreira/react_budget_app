import React, {useContext} from 'react';
import {AppContext} from '../context/AppContext';

const Budget = () => {
    const {budget, Currency, dispatch} = useContext(AppContext);

    const handleBudgetChange = (value) => {
        dispatch({
            type: 'SET_BUDGET',
            payload: value,
        })
    }

    return (
        <div className = 'alert alert-secondary'>
            <span>Budget: {Currency}</span>
            <input type = "number" step = "10" value = {budget} onChange = {event => handleBudgetChange(event.target.value)}></input>
        </div>
    );
};

export default Budget;
