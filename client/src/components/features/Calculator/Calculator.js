import styles from  './Calculator.module.scss';
import { useState } from 'react';
import { FiDelete } from 'react-icons/fi';

const operators = [
  {
    operator: '+',
    name: 'add'
  },
  {
    operator: '-',
    name: 'subtraction'
  },
  {
    operator: '*',
    name: 'multiplication'
  },
  {
    operator: ':',
    name: 'division'
  },
  {
    operator: '=',
    name: 'equals'
  },
  {
    operator: <FiDelete/>,
    name: 'delete'
  },
  {
    operator: 'C',
    name: 'remove'
  },

];

const Calculator = () => {
  const [value, setValue] = useState(null);
  const [result, setResult] = useState([]);
  const [viewResult, setViewResult] = useState(null);

  const valueConverter = (e) => {
    const calcValue = value === null ? e.toString() : value.toString() + e.toString();
    setValue(Number(calcValue));
  };

  const operatorHandler = (operator) => {
    if(!(viewResult === null)) {
      setResult([]);
      setViewResult(null);
    }

    switch(operator) {
      case 'delete':
        if(value === null) return null;
        const array = value.toString().split('');
        array.pop();
        setValue(Number(array.join('')));
        break;

      case 'remove':
        setValue(0);
        setResult([]);
        setViewResult(null);
        break;

      case 'add':
        setResult(result => ([
          ...result,
          value,
          ' + '
        ]));
        setValue(0);
        break;
      
      case 'subtraction':
        setResult(result => ([
          ...result,
          value,
          ' - '
        ]));
        setValue(0);
        break;

      case 'multiplication':
        setResult(result => ([
          ...result,
          value,
          ' * '
        ]));
        setValue(0);
        break;

      case 'division':
        setResult(result => ([
          ...result,
          value,
          ' / '
        ]));
        setValue(0);
        break

      case 'equals':
        setValue(0);
        result.push(value);
        setViewResult(Math.round(eval(result.join(''))));
        break
    }
  };

  return (
    <div className={styles.root}>
      <div className={styles.root_header}> 
        <h2>Calculator</h2>
      </div>
      <div className={styles.root_calculator}>
        {/**  input */}
        <div style={{display: 'flex', flexWrap: 'wrap', width: '400px',  alignContent: 'center', alignItems: 'center',flexDirection: 'column'}}>
          <p>{result}</p>
          <p>{viewResult === null ? '' : 'Result: ' + viewResult}</p>
        </div>
        
        <div className={styles.root_calculator_input}>
          <div className={styles.root_calculator_input_div}>
            <h1>{value}</h1>
          </div>
        </div>
        <div style={{display: 'block'}}>

          {/** values */}
          <div className={styles.root_calculator_values}>
            {[1,2,3,4,5,6,7,8,9].map(e  => <div className={styles.root_calculator_values_value} key={e} value={e} onClick={() => valueConverter(e)}><h3>{e}</h3></div>)}
          </div>

          {/** operators */}
          <div className={styles.root_calculator_operators}>
            {operators.map(op => <div className={styles.root_calculator_operators_operator} key={op.name} value={op.name} onClick={() => operatorHandler(op.name)}><h3>{op.operator}</h3></div>)}
          </div>
        </div>
      </div>
    </div>
  )
};

export default Calculator;