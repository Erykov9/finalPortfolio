import styles from './About.module.scss';

const About = () => {
  const age = new Date().getFullYear() - 1994;
  
  return (
    <div className={styles.root}>
      {/** about section */}
      <div className={styles.root_about}>
        <h1>Something about me...</h1>
        <p>Hi. I'm Eryk, I'm {age} years old and I'm programming passionate.</p>
        <p>My first contact with coding was many years ago, when I was much younger. I used to program interactive bot's on mIRC.</p>
        <p>The real adventure started at the end of 2021, then I was learning by <strong><a href='https://udemy.com/' rel="noreferrer" target={'_blank'}>Udemy</a></strong> platform.</p>
        <br/>
        <br/>
        <p>In 05/2022 I joined the <strong><a href='https://kodilla.com' rel="noreferrer" target={'_blank'}>Kodilla's</a></strong> bootcamp which taught in terms of JavaScript and it's frameworks and tools.</p>
        <p>The course lasted for 9 months and after this time I passed the final exam and I got a course completion certificate.</p>
        <br/>
        <br/>
        <p>As far as my interests are concerned, they are sports, specifically arm wrestling and widely understood gym exercises.</p>
        <p>A big part of my life is my passion for cooking. I used to work as a Sushi Master for nearly 4 years.</p>
      </div>
      {/** technologies section */}
      <div className={styles.root_technologies}>
        <h1>...and something about stack.</h1>
        <p>As a FullStack Developer I learned to use many frameworks and tools, however I decided to list these I feel the best.</p>
        <div className={styles.root_technologies_content}>
          <h3>Front-end</h3>
          <div className={styles.root_technologies_content_icons}>
            {/** react */}
            <div>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt='react logo'/>
              <p>It  was love at first sight! I'm using <strong><a href='https://reactjs.org/' rel="noreferrer" target={'_blank'}>React</a></strong> in nearly every single project.</p>
            </div>
            {/** redux */}
            <div>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" alt='redux logo'/>
              <p><strong><a href='https://redux.js.org/' rel="noreferrer" target={'_blank'}>Redux</a></strong>, the integral part of ReactJS.</p>
            </div>
            {/** html/css */}
            <div>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt='html logo'/>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt='css logo'/>
              <p>These two gentlemen need no introduction.</p>
            </div>
          </div>
        </div>
        <div className={styles.root_technologies_content}>
          <h3>Back-end</h3>
          <div className={styles.root_technologies_content_icons}>
            {/** nodejs */}
            <div>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt='nodejs logo'/>
              <p><strong><a href='https://nodejs.org/' rel="noreferrer" target={'_blank'}>NodeJS</a></strong>, the foundation of the basics, right? Even this website is using it!</p>
            </div>
            {/** expressjs */}
            <div>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt='expressjs logo'/>
              <p> Simplicity and reliability. Two perfect words for <strong><a href='https://expressjs.org/' rel="noreferrer" target={'_blank'}>Express</a></strong>.</p>
            </div>
            {/** mongodb */}
            <div>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt='mongodb logo'/>
              <p>My favorite database. I would like to introduce you the <strong><a href='https://mongodb.com' rel="noreferrer" target={'_blank'}>MongoDB</a></strong>!</p>
            </div>
          </div>
        </div>
        <div className={styles.root_technologies_content}>
          <h3>Tools</h3>
          <div className={styles.root_technologies_content_icons}>
            {/** VSCode */}
            <div className={styles.root_technologies_content_icons_tools}>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg" alt='vsc logo'/>
              <strong><a href='https://code.visualstudio.com' rel="noreferrer" target={'_blank'}>VSCode</a></strong>
            </div>
            {/** webpack */}
            <div className={styles.root_technologies_content_icons_tools}>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg" alt='webpack logo'/>
              <strong><a href='https://webpack.js.org/' rel="noreferrer" target={'_blank'}>Webpack</a></strong>
            </div>
            {/**  bootstrap */}
            <div className={styles.root_technologies_content_icons_tools}>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt='bootstrap logo'/>
              <strong><a href='https://getbootstrap.com/' rel="noreferrer" target={'_blank'}>Bootstrap</a></strong>
            </div>
            {/** chrome devtools */}
            <div className={styles.root_technologies_content_icons_tools}>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg" alt='chrome logo'/>
              <strong><a href='https://www.google.com/intl/pl_pl/chrome/' rel="noreferrer" target={'_blank'}>Chrome DevTools</a></strong>
            </div>
            {/** yarn */}
            <div className={styles.root_technologies_content_icons_tools}>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original.svg" alt='yarn logo'/>
              <strong><a href='https://yarnpkg.com/' rel="noreferrer" target={'_blank'}>Chrome DevTools</a></strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default About;