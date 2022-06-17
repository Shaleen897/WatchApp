import React, {useState} from 'react';
import { useUserAuth } from "../context/Authcontext";
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from "react-router-dom";

import './navbar.css';
import {HiOutlineMenuAlt4} from 'react-icons/hi';
import {MdOutlineClose} from 'react-icons/md';

const Navbar = () => {

  const { googleSignIn } = useUserAuth();
  const { logOut, user } = useUserAuth();

  const navigate = useNavigate();

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      //  navigate("/profile");
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  const headerNav = [
    {
      display: 'Movies',
      path: '/movie'
    },
    {
      display: 'TV Series',
      path: '/tv'
    }
  ];

 // const { pathname } = useLocation();

 // const active = headerNav.findIndex(e => e.path === pathname);


 const [click, setclick] = useState(false);
  const handleClick = () => setclick(!click);

  return (
    <div className='navbar1  z-[100] w-full absolute'>
      <div className='container1 justify-between h-full'>
        
      <Link to='/'>
        <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
          WATCHAPP
        </h1>
      </Link>

      <div>
        <div className=''>

          <ul className={click ? 'nav-menu1 active' : 'nav-menu1'}>
            {
              headerNav.map((e, i) => (
                <li key={i} className='text-lg hover:text-red-600 ' onClick={handleClick}>
                  <Link to={e.path}>
                    {e.display}
                  </Link>
                </li>
              ))
            }
            {user ? (
            <li className='fleLi'>
              <Link to='account'>
                <h2 className=" textA hover:text-red-600" onClick={handleClick}>Account</h2>
              </Link>
              <div className='pl-5'>
                
              </div>
              <button className='text-1xl text-white px-3 py-2 border-none rounded-md hover:bg-red-500 cursor-pointer bg-red-600 font-bold'
                onClick={handleLogout}
              >Log Out</button>
            </li>
          )
            :
            (
              <li>
            <button className='text-3xl px-4 rounded cursor-pointe hover:text-red-600'>
              {click ?

              <p className='flex' onClick={handleGoogleSignIn}>
              <FcGoogle  />
              <span className=''> Login with Google</span>
              </p> :

                 <FcGoogle onClick={handleGoogleSignIn} />

              }
            </button>
            </li>
            )
          }
          </ul>

          <div className="hamburger text-white" onClick={handleClick}>
              {click ? (<MdOutlineClose className='icon'/>) : (<HiOutlineMenuAlt4 className='icon'/>)}
                
            </div>

        </div>
      </div>
      
      </div>
    </div>

  )
}

export default Navbar