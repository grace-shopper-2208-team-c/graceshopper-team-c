import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../app/store';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SettingsIcon from '@mui/icons-material/Settings';

const Navbar = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutAndRedirectHome = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <>
    <div className='topnav'>

      <nav>

        {isLoggedIn ? (
          <div>
            <div className = "lefttopnav"><h1><Link to="/">Grace HOPS</Link></h1></div>
              <div className = "righttopnav">
            <Link to="/home">Home</Link>
            <button type="button" onClick={logoutAndRedirectHome}>
              Logout
            </button>
            <Link to="/settings">
                <SettingsIcon />
              </Link>
            <Link to="/cart"><ShoppingCartOutlinedIcon /></Link>
            </div>
          </div>
        ) : (
          <div>
            <div className = "lefttopnav"><h1><Link to="/">Grace HOPS</Link></h1></div>
              <div className = "righttopnav">
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
            <Link to="/cart"><ShoppingCartOutlinedIcon /></Link>

          </div>
          </div>
        )}
      </nav>
    </div>
<hr></hr>
    </>
  );
};

export default Navbar;
