import styles from './styles.module.scss';
import Icon from '../icon';

const placeholder = '-';
const ListItem = ({ product, fetchAndSetSelectedProduct, loading = false }) => {
  const { id, brand, imgUrl, model, price } = product;
  return (
    <button
      className={styles.listItem}
      tabIndex={0}
      onClick={() => fetchAndSetSelectedProduct(id)}
      disabled={loading}>
      <picture>
        <img src={imgUrl} alt="" />
      </picture>
      <div className={styles.itemContent}>
        <h3 className="body1">{model ? model : placeholder}</h3>
        <span className={`${styles.productBrand} subtitle1`}>{brand ? brand : placeholder}</span>
        <div className={styles.priceWrapper}>
          <span className="subtitle1">{price ? price : placeholder} €</span>
          <Icon icon="RightArrowIcon" />
        </div>
      </div>
    </button>
  );
};

export default ListItem;
