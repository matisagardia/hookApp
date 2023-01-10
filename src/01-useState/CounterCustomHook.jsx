import { useCounter } from "../hooks/useCounter";

export const CounterCustomHook = () => {

    const { counter, increment, decrement, reset } = useCounter();

  return (
    <>
    
    <h1>Counter with Hook: {counter}</h1>

    <hr />

    <button className="btn btn-secondary" onClick={increment}>+1</button>
    <button className="btn btn-secondary" onClick={decrement}>-1</button>
    <button className="btn btn-secondary" onClick={reset}>Reset</button>
    
    </>
  )
}
