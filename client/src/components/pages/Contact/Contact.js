import styles from './Contact.module.scss';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useEffect } from 'react';


const Contact = () => {
  const [form, setForm] = useState({
    fname: true,
    lname: false,
    age: false,
    country: false,
    question: false
  });
  
  const [sendMessage, setSendMessage] = useState(false);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState('');
  const [question, setQuestion] = useState('');

  const formHandler = (e) => {
    e.preventDefault();
    const targetId = e.target.id;
    const value = e.target.value;

    switch(targetId) {
      case 'firstname':
        if(value === '') {
          setForm(form => ({
            ...form,
            lname: false
          }))
        } else {
          setFirstName(value);
          setSendMessage(false);
          setForm(form => ({
            ...form,
            lname: true
          }))
        }
        break;

      case 'lastname':
        if(value === '') {
          setForm(form => ({
            ...form,
            age: false
          }))
        } else {
          setLastName(value);
          setSendMessage(false);
          setForm(form => ({
            ...form,
            age: true
          }))
        }
        break;

      case 'age':
        if(value === '') {
          setForm(form => ({
            ...form,
            country: false
          }))
        } else {
          setAge(value);
          setSendMessage(false);
          setForm(form => ({
            ...form,
            country: true
          }))
        }
        break;

      case 'country':
        if(value === '') {
          setForm(form => ({
            ...form,
            question: false
          }))
        } else {
          setCountry(value);
          setSendMessage(false);
          setForm(form => ({
            ...form,
            question: true
          }))
        }
        break;

      case 'question': 
        setQuestion(value);
        break;

      default: 
       setForm(form => ({
        ...form
       }))
    }
  };

  console.log(firstName, lastName, age, country, question)

  const submitHandler = (e) => {
    e.preventDefault();

    setSendMessage(true);
    setLastName('');
    setAge('');
    setCountry('');
    setQuestion('');
    setForm({
      fname: true,
      lname: false,
      age: false,
      country: false,
      question: false
    });

    const result = {
      firstName,
      lastName,
      age,
      country,
      question
    };
  }



  return (
    <div className={styles.root}>
      <div className={styles.root_header}>
         <h2>Let's contact!</h2>
      </div>
      <div className={styles.root_container}>
        <div className={styles.root_container_form}>
          {sendMessage ? <div className={styles.root_container_form_message}><p>Thank you <strong>{firstName ? firstName : 'Stranger'}</strong> for filling this contact form. Unfortunately contact service is under maintenence.</p><p>Please contact me via social media available below.</p></div> : null}
          <form>
            <label htmlFor='firstname'>First name</label>
            <input type='text' id='firstname' placeholder='First name'  onChange={(e) => formHandler(e)}></input>

            {form.lname === true ? <><label htmlFor='lastname'>Last name</label>
            <input type='text' id='lastname' placeholder='Last name' onChange={(e) => formHandler(e)}></input></> : null}

            {form.age === true ? <><label htmlFor='age'>Age</label>
            <input type='number' id='age' placeholder='Your age' onChange={(e) => formHandler(e)}></input></> : ''}

            {form.country === true ? <><label htmlFor="country">Country</label>
            <input type='text' id='country' placeholder='Your country' onChange={(e) => formHandler(e)}></input></> : ''}

            {form.question === true ? <><label htmlFor="question">Question</label>
            <textarea id='question' defaultValue='Your question...' onChange={(e) => formHandler(e)}></textarea></> : ''}
            
            {form.question === true ? <Button className='mt-3' variant='success' type='submit' onClick={submitHandler}>SUBMIT</Button> : ''}
          </form>
        </div>
      </div>
    </div>
  )
};

export default Contact;