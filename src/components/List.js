import React from 'react';
import useSWR from 'swr';
import fetcher from '../fetcher';

const List = () => {
    const { data, error } = useSWR('http://localhost:3004/books', fetcher);
    console.log('*** data: ', data);

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>

    return (
        <div>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}

export default List;