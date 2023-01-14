import { todoReducer } from "../src/08-useReducer/todoReducer"

describe('Pruebas en todoReducer', () => { 

    const initialState = [{
        id: 1,
        description: 'Demo TODO',
        done: false
    }];

    test('Debe retornar el estado inicial', () => { 

        const newState = todoReducer(initialState, {})
        expect(newState).toBe(initialState);

     });

     test('Debe agregar un todo', () => { 

        const action = {
            type:'Add Todo',
            payload: {
                id: 2,
                description: 'Nuevo Todo',
                done: false
            }
        };

        const newState = todoReducer(initialState, action)
        expect(newState.length).toBe(2);
        expect(newState).toContain(action.payload);

      });

      test('Debe eliminar un todo', () => { 

        const action = {
            type:'Remove Todo',
            payload: 1
        };

        const newState = todoReducer(initialState, action)
        expect(newState.length).toBe(0);


      });


      test('Debe realizar el toggle del Todo', () => { 

        const action = {
            type:'Toggle Todo',
            payload: 1
        };

        const newState = todoReducer(initialState, action)
        expect(newState[0].done).toBe(true);
      });



 });