import styles from './Contact.module.scss';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';


const Contact = () => {
  const [form, setForm] = useState({
    fname: true,
    lname: false,
    age: false,
    country: false,
    question: false
  });

  const formHandler = (e) => {
    e.preventDefault();
    const targetId = e.target.id;
    const value = e.target.value;
    console.log(value)

    switch(targetId) {
      case 'firstname':
        if(value === '') {
          setForm(form => ({
            ...form,
            lname: false
          }))
        } else {
          setForm(form => ({
            ...form,
            lname: true
          }))
        }
        break

      case 'lastname':
        if(value === '') {
          setForm(form => ({
            ...form,
            age: false
          }))
        } else {
          setForm(form => ({
            ...form,
            age: true
          }))
        }
        break

      case 'age':
        if(value === '') {
          setForm(form => ({
            ...form,
            country: false
          }))
        } else {
          setForm(form => ({
            ...form,
            country: true
          }))
        }
        break

      case 'country':
        if(value === '') {
          setForm(form => ({
            ...form,
            question: false
          }))
        } else {
          setForm(form => ({
            ...form,
            question: true
          }))
        }
        break
      default: 
       setForm(form => ({
        ...form
       }))
    }
  }



  return (
    <div className={styles.root}>
      <div className={styles.root_header}>
         <h2>LET'S CONTACT</h2>
      </div>
      <div className={styles.root_container}>
        <div className={styles.root_container_form}>
          <form>
            <label for='firstname'>First name</label>
            <input type='text' id='firstname' placeholder='First name' onChange={(e) => formHandler(e)}></input>

            {form.lname === true ? <><label for='lastname'>Last name</label>
            <input type='text' id='lastname' placeholder='Last name' onChange={(e) => formHandler(e)}></input></> : null}

            {form.age === true ? <><label for='age'>Age</label>
            <input type='number' id='age' placeholder='Your age' onChange={(e) => formHandler(e)}></input></> : ''}

            {form.country === true ? <><label for="country">Country</label>
            <input type='text' id='country' placeholder='Your country' onChange={(e) => formHandler(e)}></input></> : ''}

            {form.question === true ? <><label for="question">Question</label>
            <textarea>Your question...</textarea></> : ''}
            
            {form.question === true ? <Button className='mt-3' variant='success'>SUBMIT</Button> : ''}
          </form>
        </div>
      </div>
    </div>
  )
};

export default Contact;