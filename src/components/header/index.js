import styles from './styles.module.scss';
import Icon from '../icon';
import { useContext } from 'react';
import { CartContext } from '../../providers/cart';
import { SelectedProductContext } from '../../providers/selectedProduct';
const Header = () => {
  const { count } = useContext(CartContext);
  const { selectedProduct, unselectProduct } = useContext(SelectedProductContext);

  const navigateBackToList = () => {
    if (selectedProduct) unselectProduct();
  };

  return (
    <header className={styles.header}>
      <div className={styles.boxBorder}>
        <div className={`${styles.centeredWrapper} ${styles.main}`}>
          <button className={styles.homepageButton} onClick={navigateBackToList}>
            <Icon className={styles.desktopLogo} icon="LogoipsumDesktopIcon" />
            <Icon className={styles.mobileLogo} icon="LogoipsumMobileIcon" />
          </button>
          <div className={styles.cart}>
            <span className="body1">Cart</span>
            <Icon icon="CartIcon" />
            <span className={`subtitle2 ${styles.badge}`}>{count}</span>
          </div>
        </div>
      </div>
      <div className={styles.boxBorder}>
        <nav className={`navigation ${styles.centeredWrapper} ${styles.nav}`}>
          <span className={styles.clickable} onClick={navigateBackToList} tabIndex={0}>
            Home
          </span>
          {selectedProduct ? (
            <>
              <span>{'>'}</span>
              <span>{selectedProduct.model}</span>
            </>
          ) : null}
        </nav>
      </div>
    </header>
  );
};

export default Header;
