import { useEffect, useState } from 'react';
import { ProductAPI } from './apis/product';
import ListItem from './components/listItem';
import Header from './components/header';
function App() {
  const [data, setData] = useState({});
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

  return (
    <main>
      <Header />
      <section className="productList">
        {data?.products?.map((product) => {
          const { id } = product;
          return <ListItem key={id} product={product} />;
        })}
      </section>
    </main>
  );
}

export default App;
