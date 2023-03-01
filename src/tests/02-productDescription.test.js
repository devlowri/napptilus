import { render, screen } from '@testing-library/react';
import ProductDescription from '../components/productDescription';
import { detailedProductMock } from '../mocks/products';

describe('When user selects a product', () => {
  it('should display its details', async () => {
    render(<ProductDescription product={detailedProductMock} />);
  });
});
