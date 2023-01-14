import { render, renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { useForm } from "../src/hooks/useForm";

describe('Test en useForm', () => { 

    const initialForm = {
        name: 'Matias',
        email: 'matisagardia7@gmail.com'
    };

    test('Debe regresar los valore por defecto', () => { 

        const {result} = renderHook(() => useForm(initialForm));
        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            onInputChange: expect.any(Function),
            onInputReset: expect.any(Function)
        });
     });

     test('Debe cambiar el nombre del formulario', () => { 

        const newValue = 'Juan';

        const {result} = renderHook(() => useForm());
        const {onInputChange} = result.current;
        
        act(() => {
            onInputChange({target: {name: 'name', value: newValue}});
        });

        expect(result.current.name).toBe(newValue);
      });

      test('Debe resetear formulario', () => { 

        const newValue = 'Juan';

        const {result} = renderHook(() => useForm(initialForm));
        const {onInputReset, onInputChange} = result.current;
        
        act(() => {
            onInputReset({target: {name: 'name', value: newValue}});
            onInputReset();
        });

        expect(result.current.name).toBe(initialForm.name);
      });

 });