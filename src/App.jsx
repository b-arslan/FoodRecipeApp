import { DataProvider } from './contexts/DataContext';
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
    <DataProvider>

        <div className="App">
        <Header />
        <SearchBar onSearchResult={handleSearchResult} />
        <section className='section'>

            <div className='container'>
                <div className='grid-container mt-5'>
                    {data.map((item, index) => (
                        <div key={index}>
                            <Content item={item} />
                        </div>
                    ))}
                </div>
            </div>

        </section>
        </div>
    </DataProvider>
  );
}

export default App;
