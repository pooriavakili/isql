import React, {useContext} from 'react';
import './App.css';
import Headers from "./components/Headers";
import ContextProvider from "./stateManagment/Context";
function App() {
    useContext(ContextProvider)
    return (
        <div className="App">
            <Headers/>
        </div>
    );
}
export default App;
