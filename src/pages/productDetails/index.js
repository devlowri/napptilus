import ProductDescription from '../../components/productDescription';
import ProductActions from '../../components/productActions';

import styles from './styles.module.scss';

const ProductDetailsPage = ({ product }) => {
  const { imgUrl, colors, internalMemory } = product;
  return (
    <section className={styles.productDetailsPage}>
      <picture>
        <img src={imgUrl} />
      </picture>
      <div className={styles.details}>
        <ProductDescription product={product} />
        <ProductActions colors={colors} storages={internalMemory} />
      </div>
    </section>
  );
};

export default ProductDetailsPage;
