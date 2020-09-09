import React from 'react';
import Chart from "react-apexcharts";

import "./graphstyles.css";

class Double extends React.Component {
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
    	<div className="cardstyle2">
        <div>
        <Chart
    options={this.state.options}
    series={this.state.series}
    type="bar"
    width="500"/>
    </div>
     </div>
    	);
        }
    }

 export default Double;