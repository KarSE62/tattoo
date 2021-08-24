
import './App.css';
import AppHeader from './component/AppHeader';
import TattooItem from './component/TattooItem';
import TattooPost from './component/TattooPost';
import tattoos from './data/tattoos';

function App() {
  const tattooElements = tattoos.map((tattoo, index)=>{
    return <TattooItem key={index} tattoo={tattoo} />;
  })
  return (
    <div className="app">
      <AppHeader />
      <div className="app-grid">
        {tattooElements}
      </div> 
        
    </div>
  );
}

export default App;
