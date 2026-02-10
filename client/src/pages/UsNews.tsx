//import React from 'react';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import Header from '../components/Header';
import { QueryUsNews } from '../lib/api';
import ArticleBox from '../components/ArticleBox';
import Stack from '@mui/material/Stack';

const UsNews = () => {
    const [currentPage, setCurrentPage] = useState<null | string>('1');
    const [totalPages, setTotalPages] = useState(25);
    const [apiResults, setApiResults] = useState(Array<any>);

    useEffect(() => {
        QueryUsNews()
            .then((data) => {
                setTotalPages(data.totalPages);
                setApiResults(data.results);
            })
            .catch((error: any) => {
                console.error(error);
                toast.error('Error', error);
            });
    }, [currentPage]);

    useEffect(() => {
        console.log('a', apiResults);
    }, [apiResults]);

    return (
        <>
            <Header></Header>
            <Stack spacing={2}>
                {apiResults.map((result, resultIndex: number) => (
                    <ArticleBox key={resultIndex} article={result}></ArticleBox>
                ))}
            </Stack>
        </>
    );
};

export default UsNews;
