import styles from './styles.module.scss';
import Icon from '../icon';
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.boxBorder}>
        <div className={`${styles.centeredWrapper} ${styles.main}`}>
          <button className={styles.homepageButton} onClick={() => console.log('hola')}>
            <Icon className={styles.desktopLogo} icon="LogoipsumDesktopIcon" />
            <Icon className={styles.mobileLogo} icon="LogoipsumMobileIcon" />
          </button>
          <div className={styles.cart}>
            <span className="body1">Cart</span>
            <Icon icon="CartIcon" />
            <span className={`subtitle2 ${styles.badge}`}>2</span>
          </div>
        </div>
      </div>
      <div className={styles.boxBorder}>
        <nav className={`navigation ${styles.centeredWrapper} ${styles.nav}`}>Home</nav>
      </div>
    </header>
  );
};

export default Header;
