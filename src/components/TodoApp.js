import React from 'react';
import { AddTodo } from './AddTodo';
import { VisibleTodoList } from './VisibleTodoList';
import { Footer } from './Footer';

export const TodoApp = ({ match }) => {
    return (
        <div>
            <AddTodo />
            <VisibleTodoList />
            <p>
                Show: <Footer />
            </p>
        </div>
    );
};
