import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../app/store';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

const Navbar = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const isAdmin = useSelector((state) => !!state.auth.me.isAdmin);

  //adding cart const and total quantity

  // const cart = useSelector((state) => state.cart);
  // const getTotalQuantity = () => {
  //   let total = 0
  //   cart.forEach(item => {
  //     total += item.quantity
  //   })
  //   return total
  // };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutAndRedirectHome = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <>
      <div className="topnav">
        <nav>
          {isLoggedIn && isAdmin ? (
            <div>
              <div className="lefttopnav">
                <h1>
                  <Link to="/">Grace HOPS</Link>
                </h1>
              </div>
              <div className="righttopnav">
                <Link to="/home">Home</Link>
                <Link onClick={logoutAndRedirectHome}>
                  Logout
                </Link>
                <Link to="/admin">
                  <AdminPanelSettingsIcon />
                </Link>
                <Link to="/settings">
                  <AccountCircleIcon />
                </Link>
                <Link to="/cart">
                  <ShoppingCartOutlinedIcon />
                  {/* <p>{getTotalQuantity() || 0}</p> */}
                </Link>
              </div>
            </div>
          ) : isLoggedIn ? (
            <div>
              <div className="lefttopnav">
                <h1>
                  <Link to="/">Grace HOPS</Link>
                </h1>
              </div>
              <div className="righttopnav">
                <Link to="/home">Home</Link>
                <Link onClick={logoutAndRedirectHome}>
                  Logout
                </Link>
                <Link to="/settings">
                  <AccountCircleIcon />
                </Link>
                <Link to="/cart">
                  <ShoppingCartOutlinedIcon />
                  {/* <p>{getTotalQuantity() || 0}</p> */}
                </Link>
              </div>
            </div>
          ) : (
            <div>
              <div className="lefttopnav">
                <h1>
                  <Link to="/">Grace HOPS</Link>
                </h1>
              </div>
              <div className="righttopnav">
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>
                <Link to="/cart">
                  <ShoppingCartOutlinedIcon />
                </Link>
              </div>
            </div>
          )}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
