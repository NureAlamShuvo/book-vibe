
import { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { BookContext } from '../../context/BookContextBuild';


const BookDetails = () => {

    const { id } = useParams();

    const books = useLoaderData();


    const expectedBookId = books.find(book => book.bookId === parseInt(id));

    const { handleMarkAsRead, handleWishList } = useContext(BookContext);


    const {
        author,
        bookName,
        category,
        image,
        review,
        rating,
        tags,
        totalPages,
        publisher,
        yearOfPublishing
    } = expectedBookId;


    return (
        <div className='container mx-auto mt-12'>

            <div className="card lg:card-side bg-base-100 shadow-sm grid grid-cols-1 md:grid-cols-2">
                <figure className='py-5 bg-gray-100'>
                    <img
                        src={image}
                        alt={bookName} className='max-w-80' />
                </figure>
                <div className="card-body space-y-3">
                    <h2 className="card-title text-2xl">{bookName}</h2>
                    <p className='font-medium text-xl text-gray-500'>By : {author}</p>
                    <p className='py-2 border-y font-medium text-xl text-gray-500'>{category}</p>
                    <p><span className='font-medium'>Review : </span>{review}</p>
                    {
                        <div className='flex items-center gap-2'>

                            {tags.map((tag, ind) => (
                                <div key={ind} className="badge text-green-500 bg-green-100 font-bold">{tag}</div>
                            ))}

                        </div>
                    }
                    <div className="border-t space-y-3">
                        <div className='flex gap-5'>
                            <span className='text-gray-400'>Number of Pages:</span> <span className='font-semibold'>{totalPages}</span>
                        </div>
                        <div className='flex gap-5'>
                            <span className='text-gray-400'>Publisher:</span> <span className='font-semibold'>{publisher}</span>
                        </div>
                        <div className='flex gap-5'>
                            <span className='text-gray-400'>Year of Publishing:</span> <span className='font-semibold'>{yearOfPublishing}</span>
                        </div>
                        <div className='flex gap-5'>
                            <span className='text-gray-400'>Rating:</span> <span className='font-semibold'>{rating}</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <button className="btn" onClick={() => handleMarkAsRead(expectedBookId)}>Mark as Read</button>
                            <button className="btn btn-primary" onClick={() => handleWishList(expectedBookId)}>Add to Wishlist</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;
