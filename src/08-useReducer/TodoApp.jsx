import { useReducer, useEffect } from "react";
import { todoReducer } from "./todoReducer";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

const initialState = [

];

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
};


export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

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
    

  return (
   <> 
   
        <h1>TodoApp {todos.length} /<small> Pendientes: 2</small></h1>

        <hr />

        <div className="row">

            <div className="col-7">

                    <TodoList todos={todos} onDeleteTodo={handleDeleteTodo}/>

            </div> 

            <div className="col-5">

                <h4>Agregar TODO</h4>

                <hr />
                
                <TodoAdd onNewTodo={handleNewTodo}/>

            </div>

        </div>


   
   </>
  )
}