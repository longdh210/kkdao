import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./components/animatedRoutes";
import WrapPages from "./WrapPages";

function App() {
    return (
        <div className='App'>
            {/* <Router>
        <AnimatedRoutes />
      </Router> */}
            <WrapPages></WrapPages>
        </div>
    );
}

export default App;
