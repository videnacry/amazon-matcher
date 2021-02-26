import './App.sass';

function App() {
  return (
    <div className="App">
      <div>
        <header>
          <button>
            <img src='' alt='4 dots'/>
          </button>
          <h1>Amazon Matcher</h1>
        </header>
      </div>
      <section>
        <nav>
          <ul>
            <li>
              <input type='text' placeholder='search'/>
            </li>
            <li>
              <h2></h2>
            </li>
            <li>
              <select>
                <option>Newest</option>
              </select>
            </li>
          </ul>
        </nav>
        <div>
          <ul>
            <li>
              <article>
                <button></button>
                <button></button>
                <img src='' alt=''/>
                <h3>Popular Shoe Trends</h3>
                <p>€236.00</p>
              </article>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default App;
