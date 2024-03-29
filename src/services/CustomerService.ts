import API from './API';

const CustomerService = {
  getAddresses: (id: string) => API.get(`/users/${id}/addresses`),
  getBook: (id: string) => API.get(`/books/${id}/one`),
  getOrders: (id: string) => API.get(`/users/${id}/orders`),
  orderBook: (id: string, bookId: string, addressId: string) =>
    API.post(`/users/${id}/orders/create`, { bookId, addressId })
};

export default CustomerService;
