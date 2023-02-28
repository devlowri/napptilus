import { useState, useEffect } from 'react';
import { ProductAPI } from '../../apis/product';
import SearchBar from '../../components/searchbar';
import ListItem from '../../components/listItem';
import styles from './styles.module.scss';

const ProductListPage = () => {
  const [data, setData] = useState({});
  const [filter, setFilter] = useState('');
  useEffect(() => {
    const fetchProducts = async () => {
      const localData = localStorage.getItem('data');
      const lastUpdate = JSON.parse(localData)?.lastUpdate;
      let shouldFetchData = false;

      /* If we have data and an hour has passed fetch new data from the API */
      if (lastUpdate) {
        const hour = 60 * 60 * 1000;
        const anHourHasPassed = Date.now() > lastUpdate + hour;

        if (anHourHasPassed) shouldFetchData = true;
      }
      /* If we don't have saved data then fetch it from the API */
      if (!lastUpdate) shouldFetchData = true;

      if (shouldFetchData) {
        const products = await ProductAPI.getProducts();
        const newData = {
          products,
          lastUpdate: Date.now()
        };
        setData(newData);
        localStorage.setItem('data', JSON.stringify(newData));
      } else {
        setData(JSON.parse(localData));
      }
    };
    fetchProducts();
    /* Check if fetch new data is needed every minute */
    setInterval(() => {
      fetchProducts();
    }, 60000);
  }, []);

  const filterProducts = (products) => {
    if (!products) return [];
    if (!filter) return products;
    return products.filter((product) => {
      const { brand, model } = product;
      const filterToLowerCase = filter.toLowerCase();
      const brandIncludesFilter = brand.toLowerCase().includes(filterToLowerCase);
      const modelIncludesFilter = model.toLowerCase().includes(filterToLowerCase);

      if (brandIncludesFilter || modelIncludesFilter) return product;
    });
  };

  return (
    <section className={styles.productList}>
      <SearchBar filter={filter} setFilter={setFilter} />
      <div className={styles.list}>
        {filterProducts(data.products).map((product) => {
          const { id } = product;
          return <ListItem key={id} product={product} />;
        })}
      </div>
    </section>
  );
};

export default ProductListPage;
