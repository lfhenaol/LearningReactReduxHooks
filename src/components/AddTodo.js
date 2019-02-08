import React, { useContext, useState, useEffect, useRef } from 'react';
import { TodoContext } from '../context/TodoContext';
import { v4 } from 'node-uuid';

export const AddTodo = () => {
    const [todoId, setTodoId] = useState(v4());
    const inputTodo = useRef();
    const context = useContext(TodoContext);
    const handleAddTodo = () => {
        context.dispatch({
            type: 'ADD_TODO',
            text: inputTodo.current.value,
            id: todoId,
        });
        inputTodo.current.value = '';
    };

    useEffect(() => {
        const unsubscribe = context.subscribe(() => {
            setTodoId(v4());
        });

        return () => unsubscribe();
    }, []);

    return (
        <>
            <input type="text" ref={inputTodo} />
            <button onClick={handleAddTodo}>Add todo</button>
        </>
    );
};
