import React from 'react';
import './Input.css';

class Input extends React.Component {

    render() {
  return (
    <div className="input-key">
      <div>
        <button content="AC" onClick={this.props.clear}  className="btn operator-special-color" type="function">Ac</button >
        <button id={"abs"} content="±" onClick={this.props.keypressed} className="btn operator-special-color" >+/-</button>
        <button content="%" onClick={this.props.keypressed} className="btn operator-special-color" type="function">%</button >
        <button content="÷" onClick={this.props.keypressed} className="btn operator-color" type="operator">÷</button >
      </div>
      <div>
        <button content="7" onClick={this.props.keypressed} className="btn number-color">7</button>
        <button content="8" onClick={this.props.keypressed} className="btn number-color">8</button >
        <button content="9" onClick={this.props.keypressed} className="btn number-color">9</button >
        <button content="×" onClick={this.props.keypressed} className="btn operator-color" type="operator">×</button>
      </div>
      <div>
        <button content="4" onClick={this.props.keypressed} className="btn number-color">4</button >
        <button  content="5" onClick={this.props.keypressed} className="btn number-color">5</button>
        <button content="6" onClick={this.props.keypressed} className="btn number-color">6</button>
        <button content="−" onClick={this.props.keypressed} className="btn operator-color" type="operator">-</button>
      </div>
      <div>
        <button content="1" onClick={this.props.keypressed} className="btn number-color">1</button>
        <button content="2" onClick={this.props.keypressed} className="btn number-color">2</button>
        <button content="3" onClick={this.props.keypressed} className="btn number-color">3</button>
        <button content="+" onClick={this.props.keypressed} className="btn operator-color" type="operator">+</button>
      </div>
    
      <div>
        <button content="0" onClick={this.props.keypressed} className=" number-color zero">0</button>
        <button content="." onClick={this.props.keypressed} className="btn number-color">.</button >
        <button  content="=" onClick={this.props.keypressed} className="btn operator-color" type="operator">=</button >
      </div>
      
    

    </div>
  );
}}

export default Input;
