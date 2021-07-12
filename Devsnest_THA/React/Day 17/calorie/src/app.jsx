import Card from "./Components"

const App = ()=>{
    return(
        <div className="Container">
            <h2>Instructions</h2>
            <ul>
                <li>build a container</li>
                <li>create a seperate function and use it as a component</li>
                <li>pass props "calory and food" and call it to main component</li>
            </ul>
            <h1>Calorie Read Only</h1>
            <div className="cal">
                <Card name="Pizza" number="56"/>
                <Card name="Burger" number="56"/>
                <Card name="Coke" number="56"/>
                <Card name="Browne" number="56"/>
                <Card name="Fried Rice" number="56"/>
                <Card name="Pani Puri" number="56"/>
            </div>
        </div>
    )
}
export default App;