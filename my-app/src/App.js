import React from 'react';
import Profile from "./profile";
import AllGraphs from "./allgraphs";

import Multiple from "./doublegraph.js";

function App() {
    return (
        <div className="App">
           <Profile />
           <AllGraphs />
           <Multiple />
           
       </div>
    );
}

export default App;