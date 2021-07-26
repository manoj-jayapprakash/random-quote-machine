import './App.css';

function App() {
  return (
    <main id="quote-box">
      <h1 id="text">
        <i class="fas fa-quote-left"></i>I didn’t fail the test. I just found
        100 ways to do it wrong.
      </h1>
      <p id="author">- Benjamin Franklin</p>
      <button id="new-quote">New Quote</button>
      <a
        href="twitter.com/intent/tweet"
        id="tweet-quote"
        title="Tweet this quote"
        target="_blank"
      >
        <i className="fab fa-twitter"></i>
      </a>
    </main>
  );
}

export default App;
