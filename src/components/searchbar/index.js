import Icon from '../icon';
import styles from './styles.module.scss';

const SearchBar = ({ filter, setFilter }) => {
  return (
    <div className={styles.searchbar}>
      <input
        className={`formField ${styles.searchInput}`}
        type="text"
        placeholder="Search"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <div className={styles.iconWrapper}>
        <Icon icon="SearchIcon" />
      </div>
    </div>
  );
};

export default SearchBar;
