import { useState, useEffect } from 'react';

export const Quote = (props) => {
  const [quotes, setQuotes] = useState([{}]);

  const fetchAPI = async () => {
    const res = await fetch('https://api.quotable.io/random');
    const data = await res.json();

    setQuotes(data);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  const newQuoteHandler = () => {
    fetchAPI();
  };

  return (
    <section id="quote-box">
      <h1 id="text">
        <i className="fas fa-quote-left"></i>
        {` ${quotes.content}`}
      </h1>
      <p id="author">- {quotes.author}</p>
      <div className="actions">
        <a
          href="twitter.com/intent/tweet"
          id="tweet-quote"
          title="Tweet this quote"
          target="_blank"
          className="box-items"
        >
          <i className="fab fa-twitter "></i>
        </a>
        <button id="new-quote" className="box-items" onClick={newQuoteHandler}>
          New Quote
        </button>
      </div>
    </section>
  );
};
