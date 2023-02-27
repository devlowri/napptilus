import styles from './styles.module.scss';
import Icon from '../icon';

const placeholder = '-';
const ListItem = ({ product }) => {
  const { brand, imgUrl, model, price } = product;
  return (
    <div className={styles.listItem}>
      <picture>
        <img src={imgUrl} alt="" />
      </picture>
      <div className={styles.itemContent}>
        <h3 className="body1">{model ?? placeholder}</h3>
        <span className={`${styles.productBrand} subtitle1`}>{brand ?? placeholder}</span>
        <div className={styles.priceWrapper}>
          <span className="subtitle1">{price ? price : placeholder} €</span>
          <Icon icon="RightArrowIcon" />
        </div>
      </div>
    </div>
  );
};

export default ListItem;
