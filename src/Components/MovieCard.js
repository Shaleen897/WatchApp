import React, {useState} from 'react';
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai';
import { useNavigate } from 'react-router';
import { useUserAuth } from './context/Authcontext';
import {db} from '../FireBase';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';

import { Link } from 'react-router-dom';


import { category } from '../api/tmdbApi';
import apiConfig from '../api/apiConfig';

const MovieCard = (props) => {

    const [like, setLike] = useState(false);
    const { user } = useUserAuth();

    const [saved, setSaved] = useState(false);

    const movieID = doc(db, 'users', `${user?.email}`);

    const handleClick = () => setLike(!like);

    const truncateString = (str, num) =>{
        if(str?.length > num){
          return str.slice(0, num) + "..";
        }else{
          return str;
        }
      }

      let hisrory = useNavigate();

 

    const item  = props.item;

    const link = '/' + category[props.category] + '/' + item.id;

   // const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path);

    //console.log(item.name);

    const savedMovie = async () => {
        if(user?.email){
          setLike(!like);
          setSaved(true);
          await updateDoc(movieID, {
            savedShows: arrayUnion({
              id: item.id,
              title: item.name || item.title,
              img: item.backdrop_path,
              category: props.category
            })
          })
        }else{
             alert('Please login to save a show') ;
        }

      }


    return (
        <>
            
                <div key={item.id} className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>

                    <img className='w-full h-auto block'
                        src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
                        alt={item?.title} />

                    <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
                        <p onClick={savedMovie}>
                            {like ? (<AiFillHeart className='absolute top-4 left-4 text-gray-300' />)
                                :
                                (< AiOutlineHeart className='absolute top-4 left-4 text-gray-300' />)}
                        </p>
                        <Link to={link}>
                        <p className=' white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center '>
                            {truncateString(item.title || item.name, 30)}

                        </p>
                        </Link>
                    </div>
                </div>

            
        </>
    );
}

export default MovieCard;
