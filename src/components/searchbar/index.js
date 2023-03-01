import Icon from '../icon';
import styles from './styles.module.scss';

const SearchBar = ({ filter, setFilter }) => {
  return (
    <div className={styles.searchbar}>
      <label htmlFor="search" className="srOnly">
        Search
      </label>
      <input
        className={`formField ${styles.searchInput}`}
        type="text"
        placeholder="Search"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        id="search"
      />

      <div className={styles.iconWrapper}>
        <Icon icon="SearchIcon" />
      </div>
    </div>
  );
};

export default SearchBar;
