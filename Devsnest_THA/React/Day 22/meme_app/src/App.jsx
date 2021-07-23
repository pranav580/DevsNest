import { useState, useEffect } from 'react';
import './index.css';
import Templates from './Components/Templates';
import Meme from './Components/Meme';

function App() {
  const [templates, setTemplates] = useState([]);
  const [meme, setMeme] = useState(null);
  const [boxCount, setBoxCount] = useState(null);
  useEffect(()=>{
    fetch("https://api.imgflip.com/get_memes")
    .then((res) => res.json())
    .then((data) => {
      setTemplates(data.data.memes)
    });
  },[]);
  
  return (
    <div className="App">
      <h1>Meme Genrator</h1>
      {meme===null ? 
        (<Templates templates={templates} setMeme={setMeme} setBoxCount={setBoxCount}/>) 
        : 
        <Meme meme={meme} boxCount={boxCount} setMeme={setMeme}/>}
      
    </div>
  );
}

export default App;
