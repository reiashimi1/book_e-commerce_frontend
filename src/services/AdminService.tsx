import API from './API';

type bookProps = {
  title: string;
  author: string;
  description: string;
  imageUrl: string;
  rating: string;
  price: number;
};

const AdminService = {
  getBooks: () => API.get('/books/all'),
  createBook: ({ title, author, price, rating, imageUrl, description }: bookProps) =>
    API.post('/books/create', {
      title,
      author,
      description,
      imageUrl,
      pdfBase64: '',
      rating,
      price
    }),
  updateBook: (id: string, { title, author, price, rating, imageUrl, description }: bookProps) =>
    API.patch(`/books/${id}/update`, {
      title,
      author,
      price,
      rating,
      imageUrl,
      description,
      pdfBase64: ''
    })
};

export default AdminService;
