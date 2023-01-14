import {renderHook} from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { useCounter } from '../src/hooks/useCounter';

describe('Pruebas en el useCounter Hook', () => { 


    test('Debe retornar los valores por defecto', () => { 
        
        const {result} = renderHook(() => useCounter());
        const {counter, decrement, increment, reset} = result.current;

        expect(counter).toBe(10);
        expect(decrement).toEqual(expect.any(Function));
        expect(increment).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));
        
     });

     test('Debe generar el counter con el valor de 100 si se lo mandamos por parametro', () => { 

        const {result} = renderHook(() => useCounter(100));
        const {counter} = result.current;

        expect(counter).toBe(100);

      });


      test('Debe incrementar el contador', () => { 
        const {result} = renderHook(() => useCounter());
        const {counter, increment} = result.current;
        
        act(() => {
            increment();
        });

        expect(result.current.counter).toBe(11);

       });

       test('Debe decrementar el contador', () => { 
        const {result} = renderHook(() => useCounter());
        const {counter, decrement} = result.current;
        
        act(() => {
            decrement();
        });

        expect(result.current.counter).toBe(9);

       });

       test('Debe resetear el contador', () => { 
        const {result} = renderHook(() => useCounter());
        const {counter, reset, decrement} = result.current;
        
        act(() => {
            decrement();
            reset();
        });

        expect(result.current.counter).toBe(10);

       });
 });