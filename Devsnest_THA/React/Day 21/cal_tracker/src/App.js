import React,{ useState  } from 'react';
import AppBar from './components/AppBar';
import AppControlsCounter from './components/AppControlsCounter';
import AppControlsDelete from './components/AppControlsDelete';
import AppControlsInputs from './components/AppControlsInputs';
import AppMealsList from './components/AppMealsList';
import './App.css';

function App() {
  const [meals, setMeals] = useState([]);
  const [mealName, setMealName] = useState("");
  const [cal, setCal] = useState(0);
  // const [openModel, setOpenModel] = useState(false);

  const addMealHanler=()=>{
    // console.log("Added" , mealName , cal);
    const oldMeals = [...meals];
    const meal = {
      mealName,
      cal,
      id: Math.floor(Math.random()*1000),
    };

    const newMeals = oldMeals.concat(meal);

    if(cal <= 0 || mealName === ""){
      alert("Must not be empty");
    }else{
      setMeals(newMeals);
    }

    setMealName("");
    setCal(0);
  };
  
  const deleteMealHandler = (id)=>{
    const oldMeals = [...meals];
    const newMeals = oldMeals.filter((meals)=>meals.id !== id);
    setMeals(newMeals);
  }

  return (
    <div className="App">
      <AppBar/>
      <div className="top">
        <AppControlsCounter/>
        <AppControlsDelete/>
      </div>
      <AppControlsInputs addMealHanler={addMealHanler} mealName={mealName} cal={cal} setMealName={setMealName} setCal={setCal}/>
      <div className="track">
        <AppMealsList meals={meals} deleteMealHandler={deleteMealHandler}/>
      </div>
    </div>
  );
}

export default App;
