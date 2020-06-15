import React, { Component } from 'react';

export default class DataControl extends Component {

    onChangeHandler = e =>{
        this.setState({
          [e.target.name] : e.target.value
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

<form>
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
          <label for="dateread">Date</label>
          <input type="date" className="form-control" name="dateread" id="dateread" placeholder="Enter Date"
           onChange={this.onChangeHandler}
           />
        </div>

        
        <div className="form-group">
          <label for="timeread">Time</label>
          <input type="time" className="form-control" name="timeread" id="timeread" placeholder="Enter Time"
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
