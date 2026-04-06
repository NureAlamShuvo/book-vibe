import React, { use } from 'react';
import BookCard from '../ui/BookCard';

const booksPromise = fetch('/booksData.json').then(res => res.json());

const AllBooks = () => {

    const books = use(booksPromise);
    console.log(books);

    return (
        <div className='container mx-auto'>
            <h2 className='font-bold text-[#131313] text-center text-4xl mb-9'>Books</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6'>
                {
                books.map(book => {
                    return (
                        <BookCard key={book.bookId} book={book} />
                    )
                })
            }
            </div>
        </div>
    )
}
export default AllBooks;
