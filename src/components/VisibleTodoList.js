import React, { useEffect } from 'react';
import { getVisibleTodos } from '../utils/getVisibleTodos';
import { TodoList } from './TodoList';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { toggleTodo, fetchTodos, requestTodos } from '../actions'
import { getIsFetching } from '../reducers/getIsFetching'


let VisibleTodoList = props => {
    const {filter, fetchTodos, todos, isFetching, requestTodos} = props;
    useEffect(() => {
        requestTodos(filter);
        fetchTodos(filter);
    }, [filter]);

    if (isFetching && !todos.length) {
        return <p>Loading...</p>;
    } else {
        return <TodoList {...props} />;
    }
};

const mapStateToProps = (state, { match }) => {
    const filter = match.params.filter || 'all';
    return {
        todos: getVisibleTodos(state, filter),
        isFetching: getIsFetching(state, filter),
        filter,
    };
};
const mapDispatchToProps = dispatch => ({
    onTodoClick(id) {
        return () => dispatch(toggleTodo(id));
    },
    fetchTodos(filter,) {
        dispatch(fetchTodos(filter))
    },
    requestTodos(filter) {
        dispatch(requestTodos(filter));
    }
});

VisibleTodoList = withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(VisibleTodoList)
);

export { VisibleTodoList };
