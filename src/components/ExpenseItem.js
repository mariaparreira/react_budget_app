import React, {useContext} from 'react';
import { FaPlusCircle, FaMinusCircle, FaTimesCircle } from 'react-icons/fa';
import {AppContext} from '../context/AppContext';

const ExpenseItem = (props) => {
    const {dispatch, Currency } = useContext(AppContext);
    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });
    }

    return (
        <tr>
            <td>{props.name}</td>
            <td>{Currency}{props.cost}</td>
            <td><FaPlusCircle style = {{ marginLeft: '2rem' }} color={"#669d34"} size = {'2rem'} onClick = {event => increaseAllocation(props.name)}/></td>
            <td><FaMinusCircle style = {{ marginLeft: '2rem' }} color = {"#e22400"} size = {'2rem'} onClick = {event => decreaseAllocation(props.name)}/></td>
            <td><FaTimesCircle color = {"#e22400"} size = '2rem' onClick = {handleDeleteExpense}/></td>
        </tr>
    );
};

export default ExpenseItem;