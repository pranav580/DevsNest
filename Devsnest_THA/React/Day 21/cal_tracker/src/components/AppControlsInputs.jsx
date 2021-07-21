
const AppControlsInputs =({addMealHanler , mealName, cal, setMealName, setCal})=>{
    const onAddMealsClick=()=>{
        addMealHanler();
    }
    return(
        <div className="app_controls_inputs">
            <input type="text" placeholder="Meal" value={mealName} 
                onChange={
                    (e)=>{
                        setMealName(e.target.value);
                    }
                }
            />
            <input type="number" placeholder="Calories" min="0" value={cal} 
                onChange={
                    (e)=>{
                        setCal(e.target.value);
                    }
                }
            />
            <div>
                <button className="btn btn-primary"
                    onClick={onAddMealsClick}
                >Add Item</button>
            </div>
        </div>
    )
}

export default AppControlsInputs;