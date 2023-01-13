

export const TodoList = ({todos = [], onDeleteTodo, onToggleTodo}) => {
    
  return (

    <ul className="list-group">
    {
    todos.map(todo => (                    
        <li key={todo.id} className="list-group-item d-flex justify-content-between">
        <span className={`align-self-center ${(todo.done) ? 'text-decoration-line-through' : ''}`} onClick={() => onToggleTodo(todo.id)}>{todo.description}</span>
        <button className="btn btn-danger" onClick={() => onDeleteTodo(todo.id)}>X</button>
        </li>
        ))
    }
    </ul>
  )
};

    
    
    
