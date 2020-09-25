/** 
 * Book List
*/
import React from 'react';
import useSWR from 'swr';
import fetcher from '../fetcher';
import Book from './Book';

const List = () => {
    const { data, error, isValidating } = useSWR('/books', fetcher); // /books is the cache key
    //console.log('*** data: ', data);
    //console.log('*** isValidating: ', isValidating);

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>

    return (
        <>
            {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
            {data.map(book => (
                <Book key={book.id} {...book} />
            ))}
        </>
    );
}

export default List;