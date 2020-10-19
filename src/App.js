import React, { Component } from 'react';
import './App.css';
import Input from './Components/input/Input';
class App extends Component{
  state={
    value:""
  }
 
  clear=()=>{
    this.setState((prevState)=>{
          return{value:""};  
        
    })}

    keypressed=(e)=>{
      try{
        if(this.state.value=="ops you write somethings wrong"){
          this.setState((prevState)=>{
            return{value:""};
          })
        }
    const content=e.target.textContent;
    if(content==="1"||content==="2"||content==="3"||content==="4"||content==="5"||content==="6"||content==="7"||content==="8"||content==="9"||content==="0"||content==="."||content==="-"||content==="%"||content==="+"){
      
    this.setState((prevState)=>{
      return{value:prevState.value+content};
    })
  }
  
    if(content==='×'){
      this.setState((prevState)=>{
        return{value:prevState.value+'*'};
      })
      
    }
    if(e.target.id==='abs'){
      const abs=eval("("+this.state.value+")"+"*-1");
      this.setState((prevState)=>{
        return{value:abs};
      })
      
    }
      if(content==='÷'){
        this.setState((prevState)=>{
          return{value:prevState.value+'/'};
        })
      }
        if(content==='='){
          if(this.state.value.charAt(this.state.value.length-1)=="*"||this.state.value.charAt(this.state.value.length-1)=="%"||this.state.value.charAt(this.state.value.length-1)=="/"||this.state.value.charAt(this.state.value.length-1)=="-"||this.state.value.charAt(this.state.value.length-1)=="+"||this.state.value.charAt(this.state.value.length-1)=="*"){
            throw new Error('ops you write somethings wrong')
          }
          this.setState((prevState)=>{
            return{value:eval(prevState.value)};
          })
        }
          
      }catch(e){
        this.setState((prevState)=>{
          return{value:e.message};
        })
      }


    
  }
   
  render(){
  return (
    <div className="calculator">
      <div className="output">{this.state.value}</div>
      <Input clear={this.clear} keypressed={this.keypressed}  />
    </div>
  );
}
}

export default App;
