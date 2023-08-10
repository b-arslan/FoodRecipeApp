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
      <div className='container'>
        <div className='columns'>
          {data.map((item, index) => (
            <div key={index} className='column'>
              <Content item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
