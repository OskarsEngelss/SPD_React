import { useEffect, useState } from "react";
import Quote from "./Quote.js";

function QuoteList() {
    const [quotes, setQuotes] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      async function getToDo() {
        const response = await fetch("https://dummyjson.com/quotes");
        const data = await response.json();
        
        setQuotes(data.quotes);
        setLoading(false);
      }
  
      getToDo();
    }, []);

    const quotesJSX = quotes.map((singleQuote, index) => {
        return <Quote key={index} {...singleQuote} />
    })

    return (
        <>
            {loading === false ? quotesJSX : "loading"}
        </>
    );
}

export default QuoteList;