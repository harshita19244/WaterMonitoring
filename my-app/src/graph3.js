import React from 'react';
import Chart from "react-apexcharts";
import { Card } from "react-bootstrap";

import "./graphstyles.css"
class Graph3 extends React.Component {
constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar",


        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        }
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
      ]
    };
  }
	
render() {
    return (
    	<div className="cardstyles graphbox4 ">
      <Card>
      <Card.Body> 
        <div>
        <Chart
    options={this.state.options}
    series={this.state.series}
    type="line"
    width="200"/>
    </div>
    </Card.Body>
    </Card>
     </div>
    	);
        }
    }

 export default Graph3;