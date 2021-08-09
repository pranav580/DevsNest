  
import Todos from "./List";
import store from "./store";
import { Provider } from "react-redux";
import "./style.css";
import Input from "./input";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Input />
        <Todos />
      </Provider>
    </div>
  );
}

export default App;