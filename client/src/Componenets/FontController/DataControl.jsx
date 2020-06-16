import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert';

export default class DataControl extends Component {

  constructor(props){
    super(props);
    this.state ={
      addedDate:'',
      addedTime:'',
      size:''
    }
  }

    onChangeHandler = e =>{
        this.setState({
          [e.target.name] : e.target.value
        })
    }

    onSubmitHandler = e =>{


      let frmData = {
        addedDate:this.state.addedDate,
        addedTime:this.state.addedTime,
        size:this.state.size
      }
      axios({
        method:'post',
        url:'/api/dailysummary/adddailysummary',
        data:frmData
      })
      .then(()=>{
        swal({
            icon:'success',
            button:true,
            title:'Done',
            text:'Added Successfully'
        })
      })
    }


  render() {
    return (
        <section className="content-header">
        <div className="container-fluid">
        <div className="row">
            



        <div className="col-md-3 mt-5 mx-auto">

        <h1><center>SET TODAY S DATA BELLOW</center></h1>

        <br/>
        <br/>

<form onSubmit={this.onSubmitHandler}>
        <div class="card card-primary">
      <div class="card-header">
        <h3 class="card-title">Enter Todays Data</h3>

        <div class="card-tools">
          <button type="button" class="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
            <i class="fas fa-minus"></i></button>
          <button type="button" class="btn btn-tool" data-card-widget="remove" data-toggle="tooltip" title="Remove">
            <i class="fas fa-times"></i></button>
        </div>
      </div>
      <div class="card-body"> 
        <div className="form-group">
          <label for="size">Font Size</label>
          <input type="number" className="form-control" name="size" id="size" placeholder="Enter Font Size"
           onChange={this.onChangeHandler}
           />
        </div>

        <div className="form-group">
          <label for="addedDate">Date</label>
          <input type="date" className="form-control" name="addedDate" id="addedDate" placeholder="Enter Date"
           onChange={this.onChangeHandler}
           />
        </div>

        
        <div className="form-group">
          <label for="addedTime">Time</label>
          <input type="time" className="form-control" name="addedTime" id="addedTime" placeholder="Enter Time"
           onChange={this.onChangeHandler}
           />
        </div>
      </div>
      <div class="card-footer">
      <button className="btn btn-lg btn-danger btn-block">Click Here to Update new Font Size</button>
      </div>
    </div>
    </form>

        </div>
        </div>
        </div>
        </section>
    );
  }
}
