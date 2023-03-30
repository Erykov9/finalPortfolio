import styles from './PasswordGenerator.module.scss';
import './PasswordGenerator.scss';
import { useState } from 'react';

const variables = [
  {
    name: 'Special characters',
    value: '!@#$%^&*()_+{}:"|<>?-=[];\'\\,./`~'
  },
  {
    name: 'Numbers',
    value: '1234567890'
  },
  {
    name: 'Uppercase letters',
    value: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  },
  {
    name: 'Lowercase letters',
    value: 'abcdefghijklmnopqrstuvwxyz'
  }
]

const PasswordGenerator = () => {
  const [err, setErr] = useState('');
  const [lengthErr, setLengthErr] = useState(false);
  const [password, setPassword] = useState(null);

  const [customExclude, setCustomExclude] = useState(false);
  const [exclude, setExclude] = useState([]);
  const [customExcludeValue, setCustomExcludeValue] = useState('');
  const [length, setLength] = useState(8);


  const passwordGenHandler = (length, forbiddenSigns) => {
    setErr('');
    if(typeof forbiddenSigns === 'object') {
      if(!isNaN(length) && length >= 8) {
        const charPool = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+{}:"|<>?-=[];\'\\,./`~'.split('');
        let randomText = [];
        forbiddenSigns.map(e => charPool.splice(charPool.indexOf(e), 1));
    
        const generate = () => {
          for (let i = 0; i < length; i++) {
            randomText.push((charPool[Math.floor(Math.random() * charPool.length)]));
          };
        };
        
        generate();
        setPassword(randomText.join(''));
      } 
    }
  };

  const charHandler = (e) => {
    setErr('');
    const target = e.currentTarget;
    const targetId = target.id;

    if(target.classList.value.toLowerCase().includes('active')) {
      target.classList.remove('active');
      const indexOf = exclude.indexOf(targetId);
      exclude.splice(indexOf, 1);
    } else {
      target.classList.add('active');
      setExclude([...exclude, targetId])
    }
  };

  const chooseHandler = (e) => {
    setErr('');
    setExclude([]);
    setCustomExclude(!customExclude)
  };

  const generateHandler = () => {
    setErr('');
    if(lengthErr) {
      setErr('Incorrect value!')
    } else {
      if(customExclude === true) {
        const result = [...new Set(customExcludeValue)];
        passwordGenHandler(length, result)
      } else {
        if(exclude.length === 4) {
          setErr('You can\'t choose 4 variants at once!')
        } else {
          const result = exclude.join('').split('')
          passwordGenHandler(length, result);
        }
      }
    }
  };

  const lengthHandler = (e) => {
    const target = e.target.value;
    setLengthErr(false);
    setLength(target);

    if(target > 35) {
      setLengthErr(true);
    } else if (target < 8) {
      setLengthErr(true);
    } else {
      setLengthErr(false)
    }
  }
  
  return (
    <div className={styles.root}>
      <div className={styles.root_header}>
        <h2>Password Generator</h2>
      </div>

      {/** variables */}
      {customExclude ? 
      <div className={styles.root_variables}>
        <h3>Exclude:</h3>
        <div className={styles.root_variables_custom}>
          <label id='custom'>Your custom exclude:</label>
          <input htmlFor='custom' value={customExcludeValue} onChange={e => setCustomExcludeValue(e.target.value)}></input>
        </div>    
      </div>
      :
      <div className={styles.root_variables}>
        <h3>Exclude:</h3>
        {variables.map(vari => 
        <div className={`${styles.root_variables_var}`} key={vari.name} onClick={e => charHandler(e)} id={vari.value.toString()}>
            <h4 value={vari.value}>{vari.name}</h4>
            <p value={vari.value}>{vari.value}</p>
        </div>)}
      </div>}

      <div className={styles.root_length}>
        <label htmlFor='passwordLength'>Password length:</label>
        <input id='passwordLength' type='number' value={length} onChange={lengthHandler}></input>
        <p>{lengthErr ? 'Incorrect value' : 'Min value is 8. Max value is 35.'}</p>
      </div>

      {/** buttons */}
      <div className={styles.root_btns}>
        <p>{err}</p>
        <div className={styles.root_btns_btn} onClick={generateHandler}>Generate!</div>
        <div className={styles.root_btns_btn} onClick={e => chooseHandler(e)}>{customExclude ? 'Choose excludes' : 'Custom excludes'}</div>
      </div>

      {/** result */}
      <div className={styles.root_result}> 
        <h3>Your password is: </h3>
        <h4>{password}</h4>
      </div>

    </div>
  )
};

export default PasswordGenerator;