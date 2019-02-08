import React, { useContext, useState, useEffect } from 'react';
import { TodoContext } from '../context/TodoContext';
import { NavLink } from 'react-router-dom';

export const FilterLink = ({ filter, children }) => (
    <NavLink
        activeStyle={{
            textDeCoration: 'none',
            color: 'black',
        }}
        to={'/todo/' + (filter === 'all' ? '' : filter)}
    >
        {children}
    </NavLink>
);

export const filterLink = ({ filter, children }) => {
    const context = useContext(TodoContext);
    const [stateTodo, setStateTodo] = useState(context.getState());
    const handleFilterClick = () => {
        context.dispatch({
            type: 'SET_VISIBILITY_FILTER',
            filter,
        });
    };

    useEffect(() => {
        const unsubscribe = context.subscribe(() => {
            setStateTodo(context.getState());
        });
        return () => unsubscribe();
    }, []);

    return (
        <a
            active={filter === stateTodo.visibilityFilter}
            onClick={handleFilterClick}
        >
            {children}
        </a>
    );
};
