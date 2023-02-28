import styles from './styles.module.scss';
import Icon from '../icon';
import { useEffect, useState } from 'react';

const ProductActions = ({ colors, storages }) => {
  const [color, setColor] = useState('');
  const [storage, setStorage] = useState('');

  useEffect(() => {
    /* If only one option set is as a default color/storage */
    const ifOnlyOneColor = colors.length === 1;
    if (ifOnlyOneColor) setColor(colors[0]);

    const ifOnlyOneStorage = storages.length === 1;
    if (ifOnlyOneStorage) setStorage(storages[0]);
  }, []);
  const loopOptions = (options, value) => {
    return options.map((option) => {
      return (
        <option key={option} value={option} selected={option === value}>
          {option}
        </option>
      );
    });
  };

  const formIsFulfilled = () => {
    if (color && storage) return true;
    return false;
  };

  return (
    <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
      <label className={`${styles.select} body1`}>
        Color
        <select className="formField" onChange={(e) => setColor(e.target.value)}>
          <option selected disabled>
            Select an option
          </option>
          {loopOptions(colors, color)}
        </select>
      </label>
      <label className={`${styles.select} body1`}>
        Storage
        <select className="formField" onChange={(e) => setStorage(e.target.value)}>
          <option selected disabled>
            Select an option
          </option>
          {loopOptions(storages, storage)}
        </select>
      </label>
      <button className={`button ${styles.cta}`} disabled={!formIsFulfilled()}>
        <Icon icon="CartIcon" className={styles.hidden} />
        Add to cart
        <Icon icon="CartIcon" />
      </button>
    </form>
  );
};

export default ProductActions;
