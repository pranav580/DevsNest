import "bootstrap/dist/css/bootstrap.min.css";
import {Map,Nothing} from './component';
import { useState } from 'react';
import './App.css';


function App() {

  const [locationName,setLocation]=useState("")
  const [locationData,setLocationData]=useState('')

  async function fetchData(location) {
    const res = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=dd80f56a143b4d7388275739213107&q=${location}`
    )
    const data = await res.json();
    setLocationData(data);
    }

  return (
    <div className="App">
      <div className="input">
        <input type="text" placeholder="Enter Location"
        onChange ={(e)=>{
          setLocation(e.target.value);
        }}></input>
        <button onClick={()=>{
          fetchData(locationName);
        }}>Show</button>
      </div>
      <div className="Details">
        {locationData? <Map locationData={locationData}/> : <Nothing/>}
      </div>
    </div>
  );
}

export default App;
