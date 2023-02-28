import ProductDescription from '../../components/productDescription';
import ProductActions from '../../components/productActions';

import styles from './styles.module.scss';
import { useContext } from 'react';
import { SelectedProductContext } from '../../providers/selectedProduct';

const ProductDetailsPage = () => {
  const { selectedProduct } = useContext(SelectedProductContext);
  const { id, imgUrl, options } = selectedProduct;
  return (
    <section className={styles.productDetailsPage}>
      <picture>
        <img src={imgUrl} />
      </picture>
      <div className={styles.details}>
        <ProductDescription product={selectedProduct} />
        <ProductActions id={id} options={options} />
      </div>
    </section>
  );
};

export default ProductDetailsPage;
