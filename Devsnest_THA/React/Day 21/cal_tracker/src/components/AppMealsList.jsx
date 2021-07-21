

const AppMealsList = ({meals , deleteMealHandler})=>{
   
    return(
        <div className="listt">
            {meals.map((meal , index) => (
                <div key={index} className="list">
                <div key={index} className="list_inner">
                    <h3>{meal.mealName}</h3>
                    <h6>You have consumed {meal.cal} calories</h6>
                <div className="btnDiv">
                    <button className="btn btn-primary" 
                        onClick={()=>deleteMealHandler(meal.id)}
                    >Delete</button>
                </div>
                </div>
                </div>
            ))}
        </div>
    )
}
export default AppMealsList;