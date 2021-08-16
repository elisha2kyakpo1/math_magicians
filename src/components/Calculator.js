/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './Calculator.css';

class Calculator extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="inner-div">
          <div className="input-div">
            <div className="input">{0}</div>
          </div>

          <div className="buttons">
            <div className="numbers">
              <button type="button" onClick={this.handleClick} value="">AC</button>
              <button type="button" onClick={this.handleClick} value="">+/-</button>
              <button type="button" onClick={this.handleClick} value="">%</button>
              <button type="button" onClick={this.handleClick} value="">7</button>
              <button type="button" onClick={this.handleClick} value="">8</button>
              <button type="button" onClick={this.handleClick} value="">9</button>
              <button type="button" onClick={this.handleClick} value="">4</button>
              <button type="button" onClick={this.handleClick} value="">5</button>
              <button type="button" onClick={this.handleClick} value="">6</button>
              <button type="button" onClick={this.handleClick} value="">1</button>
              <button type="button" onClick={this.handleClick} value="">2</button>
              <button type="button" onClick={this.handleClick} value="">3</button>
              <button className="zero" type="button" onClick={this.handleClick} value="">0</button>
              <button type="button" onClick={this.handleClick} value="">.</button>
            </div>
            <div className="operators">
              <button type="button" onClick={this.handleClick} className="o-buttons" value="">÷</button>
              <button type="button" onClick={this.handleClick} className="o-buttons" value="">x</button>
              <button type="button" onClick={this.handleClick} className="o-buttons" value="">-</button>
              <button type="button" onClick={this.handleClick} className="o-buttons" value="">+</button>
              <button type="button" onClick={this.handleClick} className="o-buttons" value="">=</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
