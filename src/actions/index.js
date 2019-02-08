import * as api from  '../api';

export const requestTodos = (filter) => ({
    type: 'REQUEST_TODOS',
    filter
});

export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id,
});

export const  receiveTodos = (filter, response) => ({
    type: 'RECEIVE_TODOS',
    filter,
    response
});

export const fetchTodos = (filter) =>
    api.fecthTodos(filter).then(response =>
        receiveTodos(filter, response)
    )
