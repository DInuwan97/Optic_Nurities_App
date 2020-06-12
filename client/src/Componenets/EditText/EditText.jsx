import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
export default class EditText extends Component {

    constructor(props){
        super(props);
        this.state = {
            _id:'',
            letters:'',
            numbs:'',
            upletters:'',
            lowletters:'',
            sinletters:'',
            descriptiveText:''
        }
    }

    onChangeHandler = e =>{
        this.setState({
          [e.target.name] : e.target.value
        })
    }

    onSubmitHandler = e =>{
        e.preventDefault()

        let frmData  = {
            letters:this.state.letters,
            numbs:this.state.numbs,
            upletters:this.state.upletters,
            lowletters:this.state.lowletters,
            sinletters:this.state.sinletters,
            descriptiveText:this.state.descriptiveText
        }
           
        if(this.state._id !== ''){
            axios({
                method:'patch',
                url:`http://localhost:5000/api/edittext/updatetext/${this.state._id}`,
                data:frmData
            })
            .then(()=>{
                swal({
                    icon:'success',
                    button:true,
                    title:'Done',
                    text:'Data has been Changed'
                })
            })
        }else{
            
            axios({
                method:'post',
                url:`http://localhost:5000/api/edittext/add`,
                data:frmData
            })
            .then(()=>{
                swal({
                    icon:'success',
                    button:true,
                    title:'Done',
                    text:'Data has been Added'
                })
            })
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
    

  render() {

    return (

        <div className="row">
            <div className="col-md-4">


        <div className="card card-primary">
              
        <div className="card-header">
          <h3 className="card-title">Enter Dummy Data</h3>
        </div>
  
        <form onSubmit={this.onSubmitHandler}>
          <div className="card-body">
            <div className="form-group">
              <label for="letters">Engish Letters</label>
              <input type="text" className="form-control" name="letters" id="letters" placeholder="Enter English Letters"
               onChange={this.onChangeHandler}
               value={this.state.letters}/>
            </div>

            <div className="form-group">
              <label for="numbs">Numbers</label>
              <input type="text" className="form-control" name="numbs" id="numbs" placeholder="Enter Numbers" 
              onChange={this.onChangeHandler}
              value={this.state.numbs} />
            </div>

            <div className="form-group">
              <label for="upletters">Uppercase English Letters</label>
              <input type="text" className="form-control" name="upletters" id="upletters" placeholder="Enter English Capital Letters" 
              onChange={this.onChangeHandler}
              value={this.state.upletters}/>
            </div>


            <div className="form-group">
              <label for="lowletters">Lowercase English Letters</label>
              <input type="text" className="form-control" name="lowletters" id="lowletters" placeholder="Enter English Simple Letters" 
              onChange={this.onChangeHandler}
              value={this.state.lowletters}/>
            </div>

            <div className="form-group">
              <label for="sinletters">සිoහල අකුරු</label>
              <input type="text" className="form-control" name="sinletters" id="sinletters" placeholder="සිoහල අකුරු ඇතුළත් කරන්න" 
              onChange={this.onChangeHandler}
              value={this.state.sinletters}/>
            </div>

            <div className="form-group">
                <label>Descriptive Text</label>
                <textarea name="descriptiveText" id="descriptiveText" className="form-control" rows="3" placeholder="Enter Description ..." 
                onChange={this.onChangeHandler}
                value={this.state.descriptiveText}></textarea>
            </div>
      
          </div>


          <div className="card-footer">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>

      </div>




      <div className="col-md-8">


<div className="card card-primary">
      
<div className="card-header">
  <h3 className="card-title">Quick Preview</h3>
</div>

<form role="form">
  <div className="card-body">
  
    <h1 style={{fontSize:60}}>{this.state.letters}</h1>

    <h1 style={{fontSize:60}}>{this.state.numbs}</h1>

    <h1 style={{fontSize:60}}>{this.state.upletters}</h1>

    <h1 style={{fontSize:60}}>{this.state.lowletters}</h1>

    <h1 style={{fontSize:60}}>{this.state.sinletters}</h1>

    <p style={{fontSize:30}}>{this.state.descriptiveText}</p>
  </div>


  <div className="card-footer">
   
  </div>
</form>
</div>

</div>


          </div>

    );
  }
}
