import React from 'react';

import { useParams } from 'react-router';

import PageHeader from '../pages/PageHeader';

import { category as cate } from '../../api/tmdbApi';
import MoviePage from '../pages/MoviePage';

const Catalog = () => {

    const { category } = useParams();

    return (
        <>
            <PageHeader>
                {category === cate.movie ? 'Movies' : 'TV Series'}
            </PageHeader>
            <div className="w-full ">
                <div className="p-10">
                    <MoviePage category={category}/>
                </div>
            </div>
        </>
    );
}

export default Catalog;
