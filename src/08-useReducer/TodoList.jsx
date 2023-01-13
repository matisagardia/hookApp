

export const TodoList = ({todos = [], onDeleteTodo}) => {
    
  return (

    <ul className="list-group">
    {
    todos.map(todo => (                    
        <li key={todo.id} className="list-group-item d-flex justify-content-between">
        <span className="align-self-center">{todo.description}</span>
        <button className="btn btn-danger" onClick={() => onDeleteTodo(todo.id)}>X</button>
        </li>
        ))
    }
    </ul>
  )
};

    
    
    
