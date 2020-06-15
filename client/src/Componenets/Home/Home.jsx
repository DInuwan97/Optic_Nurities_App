import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
export default class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            id:'',
            letters:'',
            numbs:'',
            upletters:'',
            lowletters:'',
            sinletters:'',
            descriptiveText:'',
            size:''
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

   autoFetch = () => {
     
        setTimeout((()=>{
            axios({
                method:'get',
                url:`/api/edittext/viewtext`
            })
            .then(res =>{
                if(res.data[0]){
                    this.setState({
                        id:res.data[0]._id,
                        letters:res.data[0].letters,
                        upletters:res.data[0].upletters,
                        lowletters:res.data[0].lowletters,
                        sinletters:res.data[0].sinletters,
                        numbs:res.data[0].numbs,
                        descriptiveText:res.data[0].descriptiveText,
                        size:res.data[0].size
                    })
                }
            })
        }),100)
     
    }

    
    componentDidMount(){
      this.autoFetch()
      setInterval(this.autoFetch, 1000);
    }

    onChangeHandler = e =>{
        this.setState({
          [e.target.name] : e.target.value
        })
    }

    


  render() {
    return (
        <section class="content">

            <section className="content-header">
              <div className="container-fluid">

{/* 
              <div className="row">
              <div className="col-md-3 mt-5 mx-auto">

                <form onSubmit={this.onSubmitHandler}>
                
        <div class="card card-dark">
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
        </div> */}
        
               
            <div className="row">
            <div className="col-md-12">
              

        <div className="card card-primary">
          <div class="card-header">
            <h3 class="card-title">All English Letters : Current Font Size = {this.state.size}</h3>
  
            <div class="card-tools">
              <button type="button" class="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
                <i class="fas fa-minus"></i></button>
              <button type="button" class="btn btn-tool" data-card-widget="remove" data-toggle="tooltip" title="Remove">
                <i class="fas fa-times"></i></button>
            </div>
          </div>
          <div class="card-body"> 
            <p style={{fontSize:parseInt(this.state.size)}}>{this.state.letters}</p>
          </div>
          <div class="card-footer">
        
          </div>
        </div>

        <div class="card card-warning">
          <div class="card-header">
            <h3 class="card-title">Primitive Numbers : Current Font Size = {this.state.size}</h3>
  
            <div class="card-tools">
              <button type="button" class="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
                <i class="fas fa-minus"></i></button>
              <button type="button" class="btn btn-tool" data-card-widget="remove" data-toggle="tooltip" title="Remove">
                <i class="fas fa-times"></i></button>
            </div>
          </div>
          <div class="card-body"> 
            <p style={{fontSize:parseInt(this.state.size)}}>{this.state.numbs}</p>
          </div>
          <div class="card-footer">
        
          </div>
        </div>

        <div class="card card-info">
          <div class="card-header">
            <h3 class="card-title">Lowercase Text : Current Font Size = {this.state.size}</h3>
  
            <div class="card-tools">
              <button type="button" class="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
                <i class="fas fa-minus"></i></button>
              <button type="button" class="btn btn-tool" data-card-widget="remove" data-toggle="tooltip" title="Remove">
                <i class="fas fa-times"></i></button>
            </div>
          </div>
          <div class="card-body"> 
            <p style={{fontSize:parseInt(this.state.size)}}>{this.state.lowletters}</p>
          </div>
          <div class="card-footer">
        
          </div>
        </div>

        <div class="card card-danger">
          <div class="card-header">
            <h3 class="card-title">සිoහල අකුරු : Current Font Size = {this.state.size}</h3>
  
            <div class="card-tools">
              <button type="button" class="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
                <i class="fas fa-minus"></i></button>
              <button type="button" class="btn btn-tool" data-card-widget="remove" data-toggle="tooltip" title="Remove">
                <i class="fas fa-times"></i></button>
            </div>
          </div>
          <div class="card-body"> 
            <p style={{fontSize:parseInt(this.state.size)}}>{this.state.sinletters}</p>
          </div>
          <div class="card-footer">
        
          </div>
        </div>


        
        <div class="card card-success">
          <div class="card-header">
            <h3 class="card-title">Descriptive Text : Current Font Size = {this.state.size}</h3>
  
            <div class="card-tools">
              <button type="button" class="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
                <i class="fas fa-minus"></i></button>
              <button type="button" class="btn btn-tool" data-card-widget="remove" data-toggle="tooltip" title="Remove">
                <i class="fas fa-times"></i></button>
            </div>
          </div>
          <div class="card-body"> 
            <p style={{fontSize:parseInt(this.state.size)}}>{this.state.descriptiveText}</p>
          </div>
          <div class="card-footer">
        
          </div>
        </div>


        <div class="card card-dark">
          <div class="card-header">
            <h3 class="card-title">Uppercase Text : Current Font Size = {this.state.size}</h3>
  
            <div class="card-tools">
              <button type="button" class="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
                <i class="fas fa-minus"></i></button>
              <button type="button" class="btn btn-tool" data-card-widget="remove" data-toggle="tooltip" title="Remove">
                <i class="fas fa-times"></i></button>
            </div>
          </div>
          <div class="card-body"> 
            <p style={{fontSize:parseInt(this.state.size)}}>{this.state.upletters}</p>
          </div>
          <div class="card-footer">
        
          </div>
        </div>


        </div>
        </div>
        </div>
        </section>
      </section>

      
    );
  }
}
