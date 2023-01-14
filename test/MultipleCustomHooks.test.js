import { render, screen } from "@testing-library/react"
import { MultipleCustomHooks } from "../src/03-examples/MultipleCustomHooks"

describe('Multiple Custom Hooks', () => { 

    test('Debe mostrar el componente por defecto', () => { 

        render(<MultipleCustomHooks />);
        screen.debug();

     })


 })