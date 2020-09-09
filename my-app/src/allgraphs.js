import React from 'react';
import Graphs from "./cardgraph.js";
import Graph from "./graph1.js";
import Graph2 from "./graph2.js";
import Graph3 from "./graph3.js";

import "./graphstyles.css";

class Allgraphs extends React.Component {
	render(){
		return(
			<div>
			<h2 className="heading">Overall Stats: Jayanagar</h2>
			<div style={{float: "middle", top:"500px"}}>
			<Graphs />
			</div>
			<div style={{float: "middle", top:"500px"}}>
           <Graph />
           </div>
           <div style={{float: "right", top:"500px"}}>
           <Graph2 />
           </div>
           <div style={{float: "right", top:"500px"}}>
           <Graph3 />
           </div>
           
			</div>
			);
	}
}

export default Allgraphs;