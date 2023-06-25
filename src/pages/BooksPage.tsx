import React, { useCallback, useEffect, useMemo, useState } from "react";
import Layout from '../layout/Layout';
import SearchInput from '../core/inputs/SearchInput';
import BookSection from '../components/books/BookSection';
import { Book } from "./BookManagementPage";
import { isArrayEmpty, showError } from "../utils/helpers";
import AdminService from "../services/AdminService";

const BooksPage = () => {
  const [qs, setQs] = useState('');
  const [books, setBooks] = useState<Book[]>([]);

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
      <div className="grid lg:grid-cols-5 grid-cols-3 lg:gap-8 gap-5 mt-20 mx-20">
        {!isArrayEmpty(filteredBooks) && filteredBooks.map((book, index) => (
          <BookSection
            id={book.id}
            key={index}
            imageBase64={book.imageUrl}
            title={book.title}
            author={book.author}
            rating={book.rating}
            description={book.description}
            price={book.price}
          />
        ))}
      </div>
    </Layout>
  );
};

export default BooksPage;
