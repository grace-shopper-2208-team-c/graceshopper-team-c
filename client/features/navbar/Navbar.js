import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../app/store';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SettingsIcon from '@mui/icons-material/Settings';

const Navbar = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutAndRedirectHome = () => {
    dispatch(logout());
    navigate('/login');
  };
  <h1>
    <Link to="/">Grace HOPS</Link>
  </h1>;

  return (
    <>
      <div className="topnav">
        <h1>
          <Link to="/">Grace HOPS</Link>
        </h1>

        <nav>
          {isLoggedIn ? (
            <div>
              {/* The navbar will show these links after you log in */}
              <Link to="/home">Home</Link>
              <button type="button" onClick={logoutAndRedirectHome}>
                Logout
              </button>
              <Link to="/cart">
                <ShoppingCartIcon />
              </Link>
              <Link to="/settings">
                <SettingsIcon />
              </Link>
            </div>
          ) : (
            <div className="authbuttons">
              {/* The navbar will show these links before you log in */}
              <Link to="/login">Login</Link>
              <Link to="/signup">Sign Up</Link>
              <Link to="/cart">Cart</Link>
            </div>
          )}
        </nav>
      </div>
      <hr />
    </>
  );
};

export default Navbar;
