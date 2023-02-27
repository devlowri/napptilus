const ProductDetailsPage = ({ product }) => {
  console.log('product', product);
  const { imgUrl } = product;
  return (
    <section>
      <picture>
        <img src={imgUrl} />
      </picture>
    </section>
  );
};

export default ProductDetailsPage;
