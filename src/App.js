import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <img className="app-header-logo" src="/img/logo.png" />
      </header>
      <div className="app-grid">
        <div className="tattoo-item">
          <img src="/img/tattoo-01-small.jpg" />
            <h4>ลายไฟ</h4>
        </div>
        <div className="tattoo-item">
          <img src="/img/tattoo-02-small.jpg" />
            <h4>ลายไฟ</h4>
        </div>
        <div className="tattoo-item">
          <img src="/img/tattoo-03-small.jpg" />
            <h4>ลายไฟ</h4>
        </div>
        <div className="tattoo-item">
          <img src="/img/tattoo-04-small.jpg" />
            <h4>ลายไฟ</h4>
        </div>
        
        
        </div> 
    </div>
  );
}

export default App;
