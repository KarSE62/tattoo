
import { useState } from 'react';
import './App.css';
import AppHeader from './component/AppHeader';
import AppSearch from './component/AppSearch';
import TattooItem from './component/TattooItem';
import TattooPost from './component/TattooPost';
import tattoos from './data/tattoos';

function App() {



  const [selectedimg, setSelectedimg] = useState(null);

  const [searchText, setSearchText] = useState('');

  const filterImgs = tattoos.filter((tattoo)=>{
    return tattoo.title.includes(searchText);
  });

  const tattooElements = tattoos.filter((tattoo)=>{
    return tattoo.title.includes(searchText);}).map((tattoo, index)=>
    {
    return <TattooItem key={index} tattoo={tattoo} onImgClick={onImgOpenClick} />;
  });

  function onImgOpenClick(theImg){
    setSelectedimg(theImg);
  }

  function onImgCloseClick(){
    setSelectedimg(null);
  }


  let imgPost = null;
  if(!!selectedimg){
    imgPost=<TattooPost tattoo={selectedimg} onBgClick={onImgCloseClick} />
  }

  return (
    <div className="app">
      <AppHeader />
      <section className="app-section">
        <div className="app-container">
        <AppSearch vale={searchText} onValueChange={setSearchText}/>
        <div className="app-grid">
          {tattooElements}
        </div>   
        </div>
      </section>
        {imgPost}
    </div>
  );
}

export default App;
