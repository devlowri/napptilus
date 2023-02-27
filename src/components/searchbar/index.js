import Icon from '../icon';
import styles from './styles.module.scss';

const SearchBar = () => {
  return (
    <div className={styles.searchbar}>
      <input className={`formField ${styles.searchInput}`} type="text" placeholder="Search" />
      <div className={styles.iconWrapper}>
        <Icon icon="SearchIcon" />
      </div>
    </div>
  );
};

export default SearchBar;
