import { useState, useEffect, useCallback } from 'react';

export const Quote = (props) => {
  const [quotes, setQuotes] = useState([{}]);

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  };

  const setStyle = useCallback(() => {
    const hue = getRandomInt(0, 360);
    const saturation = getRandomInt(0, 100);
    const lightness = getRandomInt(0, 80);
    document.body.style.setProperty(
      '--bg-color',
      `hsl(${hue}, ${saturation}%, ${lightness}%)`
    );
    document.body.style.setProperty(
      '--bg-hover-color',
      `hsl(${hue}, ${saturation}%, ${lightness + 10}%)`
    );
  }, []);

  const fetchAPI = useCallback(async () => {
    const res = await fetch('https://api.quotable.io/random');
    const data = await res.json();
    setStyle();
    setQuotes(data);
  }, [setStyle]);

  useEffect(() => {
    fetchAPI();
  }, [fetchAPI]);

  const newQuoteHandler = () => {
    fetchAPI();
  };

  return (
    <section id="quote-box">
      <h1 id="text">
        <i className="fas fa-quote-left"></i>
        {` ${quotes.content ? quotes.content : 'Loading'}`}
      </h1>
      <p id="author">
        {` ${quotes.author ? `- ${quotes.author}` : 'Loading'}`}
      </p>
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
