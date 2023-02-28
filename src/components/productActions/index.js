import styles from './styles.module.scss';
import Icon from '../icon';
import { useContext, useEffect, useState } from 'react';
import { CartAPI } from '../../apis/cart';
import { CartContext } from '../../providers/cart';

const ProductActions = ({ id, options }) => {
  const { colors, storages } = options;
  const { incrementCount } = useContext(CartContext);
  const [color, setColor] = useState('');
  const [storage, setStorage] = useState('');

  useEffect(() => {
    /* If only one option set is as a default color/storage */
    const ifOnlyOneColor = colors.length === 1;
    if (ifOnlyOneColor) setColor(colors[0].code);

    const ifOnlyOneStorage = storages.length === 1;
    if (ifOnlyOneStorage) setStorage(storages[0].code);
  }, []);
  const loopOptions = (options) => {
    return options.map((option) => {
      const { code, name } = option;
      const codeToString = code;
      return (
        <option key={`${codeToString}_${name}`} value={codeToString}>
          {name}
        </option>
      );
    });
  };

  const formIsFulfilled = () => {
    if (color && storage) return true;
    return false;
  };

  const onAddToCart = async () => {
    if (!formIsFulfilled) return;
    const response = await CartAPI.addProductToCart(id, parseInt(color), parseInt(storage));
    if (response?.count) incrementCount(response.count);
  };

  return (
    <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
      <label className={`${styles.select} body1`}>
        Color
        <select className="formField" onChange={(e) => setColor(e.target.value)} value={color}>
          <option value="" disabled>
            Select an option
          </option>
          {loopOptions(colors)}
        </select>
      </label>
      <label className={`${styles.select} body1`}>
        Storage
        <select className="formField" onChange={(e) => setStorage(e.target.value)} value={storage}>
          <option value="" disabled>
            Select an option
          </option>
          {loopOptions(storages)}
        </select>
      </label>
      <button
        className={`button ${styles.cta}`}
        disabled={!formIsFulfilled()}
        onClick={onAddToCart}>
        <Icon icon="CartIcon" className={styles.hidden} />
        Add to cart
        <Icon icon="CartIcon" />
      </button>
    </form>
  );
};

export default ProductActions;
