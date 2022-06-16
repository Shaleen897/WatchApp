import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import {MdChevronLeft, MdChevronRight} from 'react-icons/md';

import tmdbApi, { category } from '../api/tmdbApi';
import MovieCard from './MovieCard';

export const MovieList = props => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        const getList = async () => {
            let response = null;
            const params = {};

            if (props.type !== 'similar') {
                switch(props.category) {
                    case category.movie:
                        response = await tmdbApi.getMoviesList(props.type, {params});
                        break;
                    default:
                        response = await tmdbApi.getTvList(props.type, {params});
                }
            } else {
                response = await tmdbApi.similar(props.category, props.id);
            }
            setItems(response.results);
        }
        getList();
    }, []);

    const slideLeft = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 500;
      };
      const slideRight = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500;
      };

    return (
        <div className="movie-list">
                {
                        <div>
                            
                            <div className='relative flex items-center group'>
                                <MdChevronLeft onClick={slideLeft}
                                    className='text-black bg-white left-0 rounded-full absolute cursor-pointer opacity-50 hover:opacity-100 z-10 hidden group-hover:block' size={40} />

                                <div id={'slider'} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                                    {items.map((item, id) => {
                                        return <MovieCard item={item} category={props.category} />
                                    })}
                                </div>

                               
                                <MdChevronRight onClick={slideRight}
                                    className='text-black bg-white right-0 rounded-full absolute cursor-pointer opacity-50 hover:opacity-100 z-10 hidden group-hover:block' size={40} />
                            </div>
                            
                        </div>

                   
                }
        </div>
    );
}

MovieList.propTypes = {
    category: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
}

 
