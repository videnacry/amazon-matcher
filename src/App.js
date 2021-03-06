import './App.sass';
import {ItemImage} from './components/match'

import img from './img.jpg'
import burgerButtonImg from './burgerButton.svg'

function App() {

  return (
  <div className='page'>
    <img src={img} width='100%' style={{position: 'absolute', zIndex: '-1'}}/>
    <div className="main-container">
      <div className='first-container'>
        <header className='app-header'>
          <button className='nav-button' style={{backgroundImage: 'url('+burgerButtonImg+')'}}>
            {/* <img src={burgerButtonImg} alt='hamburger button'/> */}
          </button>
          <div className='column-justify-center'>
            <h1 className='index-brand'>amazon matcher</h1>
          </div>
        </header>
        <section className='matchs-section'>
          <nav className='search-nav'>
            <ul className='search-filter'>
              <li>
                <h3>Filter</h3>
              </li>
              <li>
                <input type='text' placeholder='search'/>
              </li>
              <li>
                <select>
                  <option>Newest</option>
                  <option>Oldest</option>
                </select>
              </li>
            </ul>
          </nav>
          <ul className='matchs-list'>
            <ItemImage/>
          </ul>
        </section>
      </div>
    </div>
  </div>
  );
}

export default App;
