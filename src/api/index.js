import { v4 } from 'node-uuid';

const fakeDatabase = {
    todos: [
        {
            id: v4(),
            text: 'Caminar',
            completed: true,
        },
        {
            id: v4(),
            text: 'Correr',
            completed: true,
        },
        {
            id: v4(),
            text: 'Comer',
            completed: false,
        },
    ],
};

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export const fecthTodos = filter =>
    delay(500).then(() => {
        switch (filter) {
            case 'all':
                return fakeDatabase.todos;
            case 'completed':
                return fakeDatabase.todos.filter(t => t.completed);
            case 'active':
                return fakeDatabase.todos.filter(t => !t.completed);
            default:
                throw new Error(`Unknown filter: ${filter}`);
        }
    });
