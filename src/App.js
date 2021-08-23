import logo from './logo.svg';
import './App.css';
import AppHeader from './component/AppHeader';
import TattooItem from './component/TattooItem';
import TattooPost from './component/TattooPost';

function App() {
  return (
    <div className="app">
      <AppHeader />
      <div className="app-grid">
        <TattooItem />
        <TattooItem />
        <TattooItem />
        <TattooItem />
        </div> 
        <TattooPost />
    </div>
  );
}

export default App;
