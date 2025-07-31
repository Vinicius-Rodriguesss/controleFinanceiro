import styles from './Header.module.css';
let nomeClient = "Vinicius";
const Header = () => {
  return (
    <header className={`${styles.header} bg-primary`}>
      <div className={`container pt-lg-5 pt-3 `}>
        <h1 className={styles.title}>{`Olá, ${nomeClient}`}</h1>
        <p className={`${styles.subtitle} fs-4`}>Seja bem-vindo</p>
      </div>
    </header>
  );
};

export default Header;