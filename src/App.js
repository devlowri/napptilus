import { useContext } from 'react';
import Header from './components/header';
import ProductDetailsPage from './pages/productDetails';
import ProductListPage from './pages/productList';
import { SelectedProductContext } from './providers/selectedProduct';
function App() {
  const { selectedProduct } = useContext(SelectedProductContext);

  return (
    <main>
      <Header />
      {selectedProduct ? <ProductDetailsPage /> : <ProductListPage />}
    </main>
  );
}

export default App;
