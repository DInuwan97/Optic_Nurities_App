import React, { Component } from 'react'
import axios from 'axios';
import swal from 'sweetalert';
export default class Control extends Component {

    constructor(props){
        super(props)
        this.state = {
            size:50,
            id:''
        }
    }

    onSubmitHandler = e =>{
        e.preventDefault();
    
        axios({
          method:'patch',
          url:`/api/edittext/updatefont/${this.state.id}`,
          data:{"size":this.state.size}
        })
        .then(()=>{
          swal({
            icon:'success',
            button:true,
            text:'Successfully Font Changed',
            title:'Done'
          })
        })
    
    }

    
    onChangeHandler = e =>{
        this.setState({
          [e.target.name] : e.target.value
        })
    }

    componentDidMount(){
        setTimeout((()=>{
            axios({
                method:'get',
                url:`/api/edittext/viewtext`
            })
            .then(res =>{
                if(res.data[0]){
                    this.setState({
                        id:res.data[0]._id,
                        size:res.data[0].size
                    })
                }
            })
        }),100)
     
    }
    
    
    render() {
        return (
            <section className="content-header">
            <div className="container-fluid">
            <div className="row">
                



            <div className="col-md-3 mt-5 mx-auto">

            <h1><center>Set New Value for Font Size Bellow</center></h1>

            <br/>
            <br/>

<form onSubmit={this.onSubmitHandler}>
            <div class="card card-primary">
          <div class="card-header">
            <h3 class="card-title">Set Font Size: Current Font Size = {this.state.size}</h3>
  
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
              <input type="text" className="form-control" name="size" id="size" placeholder="Enter Font Size"
               onChange={this.onChangeHandler}
               value={this.state.size}/>
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
        )
    }
}
