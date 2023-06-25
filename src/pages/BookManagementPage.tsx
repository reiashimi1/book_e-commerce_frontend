import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Layout from '../layout/Layout';
import SearchInput from '../core/inputs/SearchInput';
import BookDetails from '../components/books/BookDetails';
import AdminService from '../services/AdminService';
import { isArrayEmpty, showError } from "../utils/helpers";
import AddButton from '../core/buttons/AddButton';
import AddBookModal from '../components/books/AddBookModal';

export interface Book {
  id: string;
  title: string;
  author: string;
  rating: string;
  description: string;
  imageUrl: string;
  price: number;
}

const BookManagementPage = () => {
  const [qs, setQs] = useState('');
  const [books, setBooks] = useState<Book[]>([]);
  const [addPopUp, setAddPopUp] = useState(false);

  const filteredBooks = useMemo(
    () => books.filter((book) => book.title.toLowerCase().includes(qs) || book.author.includes(qs)),
    [books, qs]
  );

  const getBooks = useCallback(() => {
    AdminService.getBooks()
      .then((response) => {
        const { books } = response.data.data;
        setBooks(books);
      })
      .catch(() => showError('Could not get books'));
  }, []);

  useEffect(() => {
    getBooks();
  }, [getBooks]);

  return (
    <Layout>
      <div className="flex justify-center">
        <div className="mt-6 w-1/3">
          <SearchInput onChange={setQs} placeholder="Search books" />
        </div>
      </div>
      <div className="flex w-auto ml-20 my-10">
        <AddButton onClick={() => setAddPopUp(true)} label="Add Book" className="w-auto" />
      </div>
      <div className="grid lg:grid-cols-5 grid-cols-3 lg:gap-8 gap-5 mx-20">
        {!isArrayEmpty(filteredBooks) && filteredBooks.map((book, index) => (
          <BookDetails
            id={book.id}
            key={index}
            imageBase64={book.imageUrl}
            title={book.title}
            author={book.author}
            rating={book.rating}
            description={book.description}
            price={book.price}
            onEdit={getBooks}
          />
        ))}
      </div>
      <AddBookModal isOpen={addPopUp} onClose={() => setAddPopUp(false)} onSubmit={getBooks} />
    </Layout>
  );
};

export default BookManagementPage;
