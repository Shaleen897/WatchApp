import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router';

import Input from './input/Input'

import tmdbApi, { category, movieType, tvType } from '../../api/tmdbApi';
import MovieCard from '../MovieCard';

 const MoviePage = props => {

    const [items, setItems] = useState([]);

    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);

    const { keyword } = useParams();

    useEffect(() => {
        const getList = async () => {
            let response = null;
            if (keyword === undefined) {
                const params = {};
                switch (props.category) {
                    case category.movie:
                        response = await tmdbApi.getMoviesList(movieType.upcoming, { params });
                        break;
                    default:
                        response = await tmdbApi.getTvList(tvType.popular, { params });
                }
            } else {
                const params = {
                    query: keyword
                }
                response = await tmdbApi.search(props.category, { params });
            }
            setItems(response.results);
            setTotalPage(response.total_pages);
        }
        getList();
    }, [props.category, keyword]);

    const loadMore = async () => {
        let response = null;
        if (keyword === undefined) {
            const params = {
                page: page + 1
            };
            switch (props.category) {
                case category.movie:
                    response = await tmdbApi.getMoviesList(movieType.upcoming, { params });
                    break;
                default:
                    response = await tmdbApi.getTvList(tvType.popular, { params });
            }
        } else {
            const params = {
                page: page + 1,
                query: keyword
            }
            response = await tmdbApi.search(props.category, { params });
        }
        setItems([...items, ...response.results]);
        setPage(page + 1);
    }

    

   
    return (
        <>
            
            <div className=" w-full">
                <MovieSearch category={props.category} keyword={keyword} />
            </div>
            <div className="p-11">
                <div>
                {
                    items.map((item, i) => <MovieCard category={props.category} item={item} key={i} />)
                }
                </div>
            </div>
            <div className='justify-center flex mb-8'>
            {
                page < totalPage ? (
                    <div className="loadmore">
                        <button className="small rounded text-white text-bold bg-red-600 p-2" onClick={loadMore}>Load more</button>
                    </div>
                ) : null
            }
            </div>
            
        </>
    );
}

const MovieSearch = props => {

    const history = useNavigate();

    const [keyword, setKeyword] = useState(props.keyword ? props.keyword : '');

    const goToSearch = useCallback(
        () => {
            if (keyword.trim().length > 0) {
                history(`/${category[props.category]}/search/${keyword}`);
            }
        },
        [keyword, props.category, history]
    );

    useEffect(() => {
        const enterEvent = (e) => {
            e.preventDefault();
            if (e.keyCode === 13) {
                goToSearch();
            }
        }
        document.addEventListener('keyup', enterEvent);
        return () => {
            document.removeEventListener('keyup', enterEvent);
        };
    }, [keyword, goToSearch]);

    return (
        <div className="flex justify-center items-center w-full">
            <Input
                type="text"
                placeholder="Enter keyword"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
            />
            <button className="m-4 bg-black text-white p-3 hover:bg-red-600 rounded" onClick={goToSearch}>Search</button>
        </div>
    )
}


export default MoviePage;