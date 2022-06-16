import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import tmdbApi from '../../api/tmdbApi';
import { MovieList } from '../MovieList';


const Detail = () => {

    const { category, id } = useParams();

    const [item, setItem] = useState(null);

    useEffect(() => {
        const getDetail = async () => {
            const response = await tmdbApi.detail(category, id, { params: {} });
            setItem(response);
            window.scrollTo(0, 0);
        }
        getDetail();
    }, [category, id]);


    const servMovies = 'https://moviehungershaven.xyz/tplayer/npls1.php?id=';

    return (
        <>
            {
                item && (
                    <>


                        <div className=' text-white'>
                            <div className='w-full  h-[550px] text-white' >
                                <div className='w-full h-full' key={item.id}>
                                    <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'></div>
                                    <img
                                        className='w-full h-[550px] object-cover '
                                        src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path}`}
                                        alt={item?.title}
                                    />

                                    <div className='absolute w-full top-[10%] p-4 md:p-8'>
                                        <h1 className='text-3xl md:text-5xl font-bold'>{item?.title}</h1>

                                        <div className='mt-3'>
                                            {
                                                item.genres && item.genres.slice(0, 5).map((genre, i) => (
                                                    <span key={i}>{genre.name} </span>
                                                ))
                                            }
                                        </div>
                                        <p className='text-gray-400'>Released: {item?.release_date}</p>
                                        <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-justify'>
                                            Description: {item?.overview}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full mt-[10%] align-center flex justify-center h-[500px]">
                                <iframe title='watch' className='h-5/5 w-3/5' allow='autoplay; encrypted-media'
                                    allowFullScreen
                                    src={`${servMovies} ${item?.id}`}>

                                </iframe>
                            </div>

                            <div className='mt-[5%]'>
                                <MovieList className='' category={category} type="similar" id={item.id} />
                            </div>
                        </div>

                    </>
                )
            }
        </>
    );
}

export default Detail;
