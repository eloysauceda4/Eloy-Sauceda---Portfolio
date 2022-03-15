import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
     
     
      <div className='header'>
      <Header/>
      </div>
      
     
      <div className='Main'>
        <Main />
        
        </div>

        <div className='btn'>
          <Button name="Resume"/>
          
          </div>
    
    
    
    
    
    
    </div>
  );
}

export default App;
