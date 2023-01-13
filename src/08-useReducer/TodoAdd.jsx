import { useForm } from "../hooks/useForm";


export const TodoAdd = ({onNewTodo}) => {

    const {description, onInputChange, onInputReset} = useForm({
        description: ''
    });

    const onFormSubmit = (e) => {

        e.preventDefault();
        if (description.length <= 1) return;


        const newTodo = {
            id: new Date().getTime(),
            description,
            done: false
        }

        onNewTodo(newTodo);
        onInputReset();
    }

  return (
    <form onSubmit={onFormSubmit}>

        <input type="text" 
        placeholder="Que hay que hacer?"
        className="form-control"
        name="description"
        value={description}
        onChange={onInputChange}
        />

        <button type="submit"
                className="btn btn-outline-secondary mt-3"
                >
                Agregar
        </button>

    </form>
  )
}
