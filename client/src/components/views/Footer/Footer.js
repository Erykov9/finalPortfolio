import styles from  './Footer.module.scss';

const socialMedia = [
  {
    name: 'Facebook',
    link: 'https://www.facebook.com/profile.php?id=100009836529196',
    icon: <i className="devicon-facebook-plain"></i>
  },
  {
    name: 'Github',
    link: 'https://www.github.com/Erykov9',
    icon: <i className="devicon-github-original"></i>
  },
  {
    name: 'Linkedin',
    link: 'https://www.linkedin.com/in/eryk-szczepanek',
    icon: <i className="devicon-linkedin-plain"></i>
  }
]

const Footer = () => {
  return (
    <div className={styles.root}>
      <div className={styles.root_absolute}>
        <div className={styles.root_absolute_copyright}>
          <p>Erykov9 &copy; 2023 All rights reserved</p>
        </div>
        <div className={styles.root_absolute_social}>
          <ul>
            {socialMedia.map(social => <li key={social.name}><a href={social.link} rel="noreferrer" target={'_blank'}>{social.icon}</a></li>)}
          </ul>
        </div>
      </div>
    </div>
  )
};

export default Footer;