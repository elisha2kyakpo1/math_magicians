import { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [calcObject, setCalcObject] = useState({});

  function handleClick(e) {
    setCalcObject({ ...calcObject, ...calculate(calcObject, e.target.textContent) });
  }

  const { next, total } = calcObject;

  const buttonNames = [
    'AC', '+/-', '%', '÷', '7', '8', '9', 'x',
    '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '=',
  ];

  const btnClass = (i) => ((((i + 1) % 4 === 0) || i === 18) ? 'o-buttons' : 'buttons');

  return (
    <div className="container">
      <div className="inner-div">
        <div className="input">{next || total || 0}</div>
      </div>
      {buttonNames.map((name, i) => (
        <button key={i.toString()} type="button" onClick={handleClick} className={btnClass(i)}>
          {name}
        </button>
      ))}

    </div>
  );
};

export default Calculator;
