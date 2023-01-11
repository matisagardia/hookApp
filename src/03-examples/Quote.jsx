
export const Quote = ({author, quote}) => {
  return (
    <blockquote className="blockquote text-center mt-5">
    <p className="mb-1">{quote}</p>
    <footer className="blockquote-footer mt-2">{author}</footer>
    </blockquote>
  )
}
