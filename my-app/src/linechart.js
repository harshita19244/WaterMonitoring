import React from 'react';
import Chart from "react-apexcharts";

import "./graphstyles.css";

class ApexChart extends React.Component {
        constructor(props) {
          super(props);

          this.state = {
          
            series: [{
              name: 'TEAM A',
              type: 'area',
              data: [44, 55, 31, 47, 31, 43, 26, 41, 31, 47, 33]
            }, {
              name: 'TEAM B',
              type: 'line',
              data: [55, 69, 45, 61, 43, 54, 37, 52, 44, 61, 43]
            }],
            options: {
              chart: {
                height: 350,
                type: 'line',
              },
              stroke: {
                curve: 'smooth'
              },
              fill: {
                type:'solid',
                opacity: [0.35, 1],
              },
              labels: ['Dec 01', 'Dec 02','Dec 03','Dec 04','Dec 05','Dec 06','Dec 07','Dec 08','Dec 09 ','Dec 10','Dec 11'],
              markers: {
                size: 0
              },
              yaxis: [
                {
                  title: {
                    text: 'Series A',
                  },
                },
                {
                  opposite: true,
                  title: {
                    text: 'Series B',
                  },
                },
              ],
              tooltip: {
                shared: true,
                intersect: false,
                y: {
                  formatter: function (y) {
                    if(typeof y !== "undefined") {
                      return  y.toFixed(0) + " points";
                    }
                    return y;
                  }
                }
              }
            },
          
          
          };
        }

      

        render() {
          return (
            

      <div id="chart">
  <Chart options={this.state.options}
    series={this.state.series}
    type="line" 
    height=350 />
</div>

export default ApexChart;