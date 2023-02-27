import { useEffect, useState } from 'react';
import { ProductAPI } from './apis/product';
import ListItem from './components/listItem';
import Header from './components/header';
import SearchBar from './components/searchbar';
import ProductDetailsPage from './pages/productDetails';
function App() {
  const [data, setData] = useState({});
  const [filter, setFilter] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(false);
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

  const fetchAndSetSelectedProduct = async (productId) => {
    setLoading(true);
    const productDetails = await ProductAPI.getProductDetails(productId);
    setLoading(false);
    setSelectedProduct(productDetails);
  };

  return (
    <main>
      <Header />
      {!selectedProduct ? (
        <section className="productList">
          <SearchBar filter={filter} setFilter={setFilter} />
          <div className="list">
            {filterProducts(data.products).map((product) => {
              const { id } = product;
              return (
                <ListItem
                  key={id}
                  product={product}
                  fetchAndSetSelectedProduct={fetchAndSetSelectedProduct}
                  loading={loading}
                />
              );
            })}
          </div>
        </section>
      ) : null}
      {selectedProduct ? <ProductDetailsPage product={selectedProduct} /> : null}
    </main>
  );
}

export default App;
