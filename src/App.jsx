import { useState } from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Content from './components/Content';

function App() {
  const [data, setData] = useState([]);

  const handleSearchResult = (results) => {
    setData(results);
  };

  return (
    <div className="App">
      <Header />
      <SearchBar onSearchResult={handleSearchResult} />
      <section className='section'>

        <div className='container'>
            <div className='columns mt-5 is-8 centered-columns'>
                {data.map((item, index) => (
                    <div key={index} className='column is-5-desktop is-4-tablet'>
                        <Content item={item} />
                    </div>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
}

export default App;