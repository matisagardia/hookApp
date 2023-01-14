import { fireEvent, render, screen } from "@testing-library/react"
import { MultipleCustomHooks } from "../src/03-examples/MultipleCustomHooks"
import { useCounter } from "../src/hooks/useCounter";
import { useFetch } from "../src/hooks/useFetch";

jest.mock('../src/hooks/useFetch');
jest.mock('../src/hooks/useCounter');

describe('Multiple Custom Hooks', () => { 

    const mockIncrement = jest.fn();

    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    });

    beforeEach(() => jest.clearAllMocks());

    test('Debe mostrar el componente por defecto', () => { 

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        })

        render(<MultipleCustomHooks />);
        expect(screen.getByText('Loading...'));
        expect(screen.getByText('Breaking Bad Quotes'));

        const nextButton = screen.getByRole('button', {name: 'Get another quote'});
        expect(nextButton.disabled).toBeFalsy();
        // expect(nextButton.disabled?)

        screen.debug();

     });


     test('Debe mostrar un quote', () => { 

        useFetch.mockReturnValue({
            data: [{author: 'Matias', quote:'Hola Mundo'}],
            isLoading: false,
            hasError: null
        })

        render(<MultipleCustomHooks />);
        expect(screen.getByText('Hola Mundo')).toBeTruthy();
        expect(screen.getByText('Matias')).toBeTruthy();

        const nextButton = screen.getByRole('button', {name: 'Get another quote'});
        expect(nextButton.disabled).toBeFalsy();
     });


     test('Debe llamar la funcion increment al presionar el boton', () => { 

        useFetch.mockReturnValue({
            data: [{author: 'Matias', quote:'Hola Mundo'}],
            isLoading: false,
            hasError: null
        });

        render(<MultipleCustomHooks />);
        const nextButton = screen.getByRole('button', {name: 'Get another quote'});

        fireEvent.click(nextButton);

        expect(mockIncrement).toHaveBeenCalled();


      })


 })