import React from 'react';
import { useUserAuth } from "../context/Authcontext";
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from "react-router-dom";

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


  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
      <Link to='/'>
        <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
          WATCHAPP
        </h1>
      </Link>

      <div>
        <div className='flex'>

          <ul className="flex text-white ">
            {
              headerNav.map((e, i) => (
                <li key={i} className='p-2 text-lg hover:text-red-600 '>
                  <Link to={e.path}>
                    {e.display}
                  </Link>
                </li>
              ))
            }
          </ul>
          {user ? (
            <div className='flex'>

              <Link to='account'>
                <p className="text-white pr-4 px-3 py-2 text-lg hover:text-red-600">Account</p>
              </Link>

              <button className='text-1xl text-white px-3 py-2 border-none rounded-md hover:bg-red-500 cursor-pointer bg-red-600 font-bold'
                onClick={handleLogout}
              >Log Out</button>
            </div>
          )
            :
            (<button className='text-3xl px-6 py-2 rounded cursor-pointe'>
              <FcGoogle onClick={handleGoogleSignIn} />
            </button>)
          }

        </div>
      </div>
    </div>

  )
}

export default Navbar