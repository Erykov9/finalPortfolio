import styles from  './Navi.module.scss';
import { NavLink } from 'react-router-dom';

// import { AiOutlineLogin } from 'react-icons/ai';
// import { BsPersonAdd } from 'react-icons/bs'

import { useState } from 'react';

const projects = [
  {
    name: 'To-do list',
    navlink: 'https://react-project.erykov9.repl.co',
    target: true
  },
  {
    name: 'Calculator',
    navlink: '/calculator'
  },
  {
    name: 'Password generator',
    navlink: '/passwordgen'
  },
  {
    name: 'Basic CRUD app',
    navlink: 'http://crud-app.erykov9.repl.co',
    target: true
  },
  {
    name: 'PathFinder',
    navlink: 'http://path-finder-1.erykov9.repl.co',
    target: true
  }
]

const Navi = () => {
  const [active, setActive] = useState(false);

  return (
    <div className={styles.root}>
      <div className={styles.root_navItems}>
        {/* section  for info */}
        <div className={styles.root_navItems_one}>  
          <NavLink to={'/'}>Home</NavLink>
          <NavLink to={'/about'}>About</NavLink>
          <NavLink to={'/contact'}>Contact</NavLink>
          <div style={{display: 'flex'}} onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
            <span>Projects</span>
            <div className={active ? styles.root_navItems_one_dropdown : styles.none}>
              {projects.map(project => <NavLink key={project.name} to={project.navlink} target={project.target === true ? '_blank' : ''}>{project.name}</NavLink>)}
            </div>
          </div> 
        </div>
        {/* section for register/login */}
        {/* <div className={styles.root_navItems_two}>
          <NavLink to={'/register'}><BsPersonAdd/> Register</NavLink>
          <NavLink to={'/login'}><AiOutlineLogin/> Login</NavLink>
        </div> */}
      </div>
    </div>
  )
};

export default Navi;