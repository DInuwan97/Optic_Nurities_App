import React, { Component } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import Spinner from "../Spinner/Spinner";

import axios from 'axios';


export default class BarChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nyName: "dinuwan",
      chartData: {
        labels: [
       
   
        ],
        datasets: [
          {
            backgroundColor: "rgba(60,141,188,0.9)",
            borderColor: "rgba(60,141,188,0.8)",
            pointRadius: false,
            pointColor: "#3b8bba",
            pointStrokeColor: "rgba(60,141,188,1)",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(60,141,188,1)",
            data: [],
          }
        ],
      },
      isLoading: true,
      dataa:[],
      fontSize:[],
      addedDates:[]
    };

  }


  
 componentDidMount(){
    axios({
        method:'get',
        url:'/api/dailysummary/view'
    })
    .then(res=>{
   
        this.setState({
            dataa:res.data
        })

    setTimeout(() => {
        this.setState({ 
            isLoading: false,
       });
       
       this.state.dataa.map((statData,index)=>{
           console.log(statData.size)
            this.setState({
                fontSize:[...this.state.fontSize,statData.size],
                addedDates:[...this.state.addedDates,statData.addedDate]
            })
       })

       this.setState({
        chartData:{
            datasets:[
                {
                    data:this.state.fontSize
                }
            ],
            labels:this.state.addedDates

            
        }
       })




      }, 1000);
    })
  }

  render() {
    return (



        <section className="content-header">
        <div className="container-fluid">

        <div className="row">
        <div className="col-md-6 mt-5 mx-auto">



      <div className="card card-success">
        <div className="card-header">
          <h3 className="card-title">Purchasings in Last Week</h3>

          <div class="card-tools">
            <button
              type="button"
              className="btn btn-tool"
              data-card-widget="collapse"
            >
              <i className="fas fa-minus"></i>
            </button>
            <button
              type="button"
              className="btn btn-tool"
              data-card-widget="remove"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>
        <div className="card-body">
          {this.state.isLoading ? (
            <Spinner />
          ) : (
            <div className="chart">
              {/* <Bar data={this.state.chartData} /> */}
              <Line data={this.state.chartData} />
              
            </div>
          )}
        </div>
      </div>
      </div>
      </div>
      </div>
      </section>
    );
  }
}