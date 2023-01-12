import { useFetch } from "../hooks/useFetch"
import { useCounter } from "../hooks/useCounter";
import { LoadingQuote } from "../03-examples/LoadingQuote";
import { Quote } from "../03-examples/Quote";

export const Layout = () => {

    const {counter, increment} = useCounter(1);

    const api = `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`;

    const {data, isLoading, hasError} = useFetch(api);

    const {quote, author} = !!data && data[0];


  return (
    <>
    <h1>Breaking Bad Quotes</h1>

    <hr />
    {
        isLoading ? <LoadingQuote /> : <Quote quote={quote} author={author}/>
    }

    <div className="text-center">
    <button className="btn btn-dark btn-lg mt-5" onClick={increment}>Get another quote</button>
    </div>

    </>
  )
}