/**
 * SWR Mutation with POST example: https://swr.vercel.app/docs/mutation
 */

import React from 'react';
import {Formik} from 'formik';
import { v4 as uuidv4 } from 'uuid';
import  useSWR, { mutate } from 'swr';
import fetcher from '../fetcher';

const Form = () => {
    const { data } = useSWR('/books', fetcher);
    return (
        <Formik initialValues={{
            name: '' //book name
        }} 
        validate={(values) => {
            const errors = {};
            if(values.name.length === 0) {
                errors.name = '* Book name is required'
            }
            return errors;
        }} 
        onSubmit={async (values, { setSubmitting }) => {
            try {
                setSubmitting(true);
                
                //make POST call to submit book to API
                const fakeBookData = {
                    id: uuidv4(),
                    name: values.name,
                    author: 'Joseph Khan',
                    pic: 'http://covers.openlibrary.org/b/isbn/0879101342-M.jpg',
                    sold: false,
                    ISBN: "087910134xx"
                }

                //update local swr cache first
                //do not make GET call as of yet
                // update the local data immediately, but disable the revalidation
                mutate('/books', [...data, fakeBookData], false); 

                //make POST call
                // send a request to the API to update the source
                const response = await fetch('/books/', {
                    method: 'POST',
                    body: JSON.stringify(fakeBookData),
                    headers: {
                        'Content-Type' : 'application/json'
                    }
                });

                if(!response.ok) {
                    throw new Error();
                } else {
                    //now make GET call to revalidate
                    // trigger a revalidation (refetch) to make sure our local data is correct
                    mutate('/books');
                }
                
                //await new Promise((resolve, reject) => setTimeout(resolve, 2000));
                
            } catch(err) {
                console.log('Book submit failed');
            } finally {
                setSubmitting(false);
            }
        }}>
            {(props) => {
                return (
                    <>
                        <form onSubmit={props.handleSubmit}>
                            <input placeholder="Book name pls" type="text" name="name" value={props.values.name} onChange={props.handleChange} onBlur={props.handleBlur} />
                            <p>{props.errors.name}</p>
                            <button type="submit" disabled={props.isSubmitting}>Submit</button>
                        </form>
                        <h6>Formik props</h6>
                        <pre>{JSON.stringify(props, null, 2)}</pre>
                    </>
                );
            }}
        </Formik>
    );
}

export default Form;