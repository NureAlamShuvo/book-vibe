import React, { useContext, useEffect, useState } from 'react';
import { BookContext } from '../../context/BookContextBuild';
import BookCard from '../ui/BookCard';

const ListedReadList = ({ sortingType }) => {

    const { readList } = useContext(BookContext);
    const [filteredReadList, setFilteredReadList] = useState([]);

    useEffect(() => {
        if (sortingType === "pages") {
            const sortedData = [...readList].sort((a, b) => a.totalPages - b.totalPages);
            setFilteredReadList(sortedData);
        }
        else if (sortingType === "rating") {
            const sortedData = [...readList].sort((a, b) => a.rating - b.rating);
            setFilteredReadList(sortedData);
        }
        else{
            setFilteredReadList(readList);
        }

    }, [sortingType, readList]);

    if (filteredReadList.length === 0) {
        return <div className='h-[50vh] bg-gray-100 flex items-center justify-center'>
            <h2 className='font-bold text-3xl'>No Read Lish Data Found</h2>
        </div>
    }

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>

                {
                    filteredReadList.map((book, ind) => <BookCard key={ind} book={book} />)
                }

            </div>
        </div>
    );
};

export default ListedReadList;
