import { useReducer, useEffect } from "react";
import { TodoAdd } from "../08-useReducer/TodoAdd";
import { TodoList } from "../08-useReducer/TodoList";
import { todoReducer } from "../08-useReducer/todoReducer";


const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
};


export const useTodos = () => {
    
    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);
    

    const handleNewTodo = (todo) => {
        const action = {
            type: 'Add Todo',
            payload: todo
        }
        dispatch(action);
    };

    const handleDeleteTodo = (id) => {
        const action =
        {
            type: 'Remove Todo',
            payload: id
        }
        dispatch(action);
    };

    const handleToggleTodo = (id) => {
        dispatch({
            type: 'Toggle Todo',
            payload: id
        })
    };

    

    return {

        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        todos,
        todosCount:todos.length,
        pendingTodosCount: todos.filter(todo => !todo.done).length
    }

}
