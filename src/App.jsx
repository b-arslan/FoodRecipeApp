import 'bulma/css/bulma.css';
import './App.css'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import Content from './components/Content'

function App() {
  

  return (
    <div className="App">
      <Header />
      <SearchBar />
      <div className='container'>
        <div className='columns'>
          <div className='column'>
            <Content />
          </div>
          <div className='column'>
            <Content />
          </div>
          <div className='column'>
            <Content />
          </div>
          <div className='column'>
            <Content />
          </div>
          
        </div>
        <div className='columns'>
          <div className='column'>
            <Content />
          </div>
          <div className='column'>
            <Content />
          </div>
          <div className='column'>
            <Content />
          </div>
          <div className='column'>
            <Content />
          </div>
          
        </div>
      </div>
      
    </div>
  )
}

export default App
