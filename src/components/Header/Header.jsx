import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.title}>Controle Financeiro</h1>
        <p className={styles.subtitle}>Organize seus gastos com simplicidade</p>
      </div>
    </header>
  );
};

export default Header;