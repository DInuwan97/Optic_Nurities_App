import React, { Component } from 'react';
import axios from 'axios';
export default class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            _id:'',
            letters:'',
            numbs:'',
            upletters:'',
            lowletters:'',
            sinletters:'',
            descriptiveText:'',


            size:50
        }
    }


    componentWillMount(){
        setTimeout((()=>{
            axios({
                method:'get',
                url:`http://localhost:5000/api/edittext/viewtext`
            })
            .then(res =>{
                if(res.data[0]){
                    this.setState({
                        _id:res.data[0]._id,
                        letters:res.data[0].letters,
                        upletters:res.data[0].upletters,
                        lowletters:res.data[0].lowletters,
                        sinletters:res.data[0].sinletters,
                        numbs:res.data[0].numbs,
                        descriptiveText:res.data[0].descriptiveText
                    })
                }
            })
        }),100)
     
    }

    onChangeHandler = e =>{
        this.setState({
          [e.target.name] : e.target.value
        })
    }


  render() {
    return (
        <section class="content">

           <div className="form-group">
              <label for="size">Font Size</label>
              <input type="text" className="form-control" name="size" id="size" placeholder="Enter Font Size"
               onChange={this.onChangeHandler}
               value={this.state.size}/>
            </div>


        <div class="card">
          <div class="card-header">
            <h3 class="card-title">All English Letters</h3>
  
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

        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Primitive Numbers</h3>
  
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

        <div class="card">
          <div class="card-header">
            <h3 class="card-title">සිoහල අකුරු</h3>
  
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


        
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Descriptive Text</h3>
  
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
     
      </section>

      
    );
  }
}
