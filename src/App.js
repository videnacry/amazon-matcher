import './App.sass';

function App() {
  return (
  <div className='page'>
    <div className="main-container">
      <div>
        <header className='header-c'>
          <button>
            <img src='' alt='4 dots'/>
          </button>
          <h1>Amazon Matcher</h1>
        </header>
      </div>
      <section>
        <nav>
          <ul  className='search-nav'>
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
              <article className='article-c'>
                <div className='flex-row content-space-between'>
                  <button></button>
                  <button></button>
                </div>
                <img src='' alt=''/>
                <h3>Popular Shoe Trends</h3>
                <p>€236.00</p>
              </article>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </div>
  );
}

export default App;
