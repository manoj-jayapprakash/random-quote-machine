import './App.css';

function App() {
  return (
    <main className="app">
      <section id="quote-box">
        <h1 id="text">
          <i className="fas fa-quote-left"></i> I didn’t fail the test. I just
          found 100 ways to do it wrong.
        </h1>
        <p id="author">- Benjamin Franklin</p>
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
          <button id="new-quote" className="box-items">
            New Quote
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;
