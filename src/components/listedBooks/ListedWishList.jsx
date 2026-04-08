import React, { useContext, useEffect, useState } from 'react';
import { BookContext } from '../../context/BookContextBuild';
import BookCard from '../ui/BookCard';

const ListedWishList = ({ sortingType }) => {

    const { wishlist } = useContext(BookContext);

    const [filteredWishList, setFilteredWishList] = useState([]);

    useEffect(() => {
        if (sortingType === "pages") {
            const sortedData = [...wishlist].sort((a, b) => a.totalPages - b.totalPages);
            setFilteredWishList(sortedData);
        }
        else if (sortingType === "rating") {
            const sortedData = [...wishlist].sort((a, b) => a.rating - b.rating);
            setFilteredWishList(sortedData);
        }
        else {
            setFilteredWishList(wishlist);
        }

    }, [sortingType, wishlist]);

    if (filteredWishList.length === 0) {
        return <div className='h-[50vh] bg-gray-100 flex items-center justify-center'>
            <h2 className='font-bold text-3xl'>No Wish Lish Data Found</h2>
        </div>
    }

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    filteredWishList.map((book, ind) => <BookCard key={ind} book={book} />)
                }
            </div>
        </div>
    );
};

export default ListedWishList;
