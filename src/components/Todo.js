import React from 'react';

export const Todo = ({ id, completed, text, onClick }) => {
    return (
        <li
            id={'id' + id}
            onClick={onClick}
            style={{
                textDecoration: completed ? 'line-through' : 'none',
            }}
        >
            {text}
        </li>
    );
};
