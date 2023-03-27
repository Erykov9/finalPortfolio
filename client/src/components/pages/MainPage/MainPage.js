import styles from './MainPage.module.scss';
import { useState } from 'react';
import { useEffect } from 'react';

const MainPage = () => {
  const [message, setMessage] = useState('Hello!');

  useEffect(() => {
    const welcomeMessages = ['Hello!', 'Cześć!', 'Hallo!', 'Bonjour!', '¡Hola!'];
    let index = 0;

    const msgFn = () => { 
      clearInterval();
      const timer = setInterval(() => {
        if(index === welcomeMessages.length ) {
          clearInterval(timer);
          index = 0;
          msgFn();
        };
        setMessage(welcomeMessages[index++])
      }, 1000)
    }
    msgFn();
  }, [])

  return (
    <div className={styles.root}>
      {/* header section */}
      <div className={styles.root_header}>
        <div>
          <span>&#123;</span> <h1>{message}</h1> <span>&#125;</span>
          <p>My name is <strong>Eryk</strong> and welcome to my Portfolio Website!</p>
        </div>
      </div>
      {/** logo section */}
      <div className={styles.root_logo}>
        <img src='/uploads/erykv2.png' alt='erykov9 logo'></img>
      </div>
    </div>
  )
};

export default MainPage;