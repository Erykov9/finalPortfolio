import styles from './Button.module.scss';

const Button = ({text}) => {
  return (
    <button type='submit' className={styles.button}>{text}</button>
  )
};

export default Button;