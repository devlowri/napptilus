import { render, screen } from '@testing-library/react';
import ProductList from '../pages/productList';
import { productsMock } from '../mocks/products';
import userEvent from '@testing-library/user-event';
import { act } from 'react-test-renderer';
describe('When user loads the homepage', () => {
  beforeEach(() => {
    render(<ProductList />);
  });

  it('should render Search Bar', () => {
    const searchbar = screen.getByLabelText(/search/i);
    expect(searchbar).toBeInTheDocument();
  });

  it('should render list', () => {
    const list = screen.getByRole(/list/i);
    expect(list).toBeInTheDocument();
  });
});

describe('Product list page', () => {
  beforeAll(() => {
    jest.spyOn(window, 'fetch');
  });

  describe('when products are fetched', () => {
    it('they should be listed', async () => {
      window.fetch.mockResolvedValueOnce({
        ok: true,
        json: () => productsMock
      });

      render(<ProductList />);

      const products = await screen.findAllByRole('listitem');

      expect(products).toHaveLength(productsMock.length);
    });
  });

  describe('when a search is made', () => {
    it('should return matches', async () => {
      window.fetch.mockResolvedValueOnce({
        ok: true,
        json: () => productsMock
      });

      render(<ProductList />);

      act(() => {
        const searchbar = screen.getByLabelText(/search/i);
        userEvent.type(searchbar, 'alcatel');
      });

      const products = await screen.findAllByRole('listitem');

      expect(products).toHaveLength(1);
    });
  });
});
