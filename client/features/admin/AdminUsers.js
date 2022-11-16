import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { showAllUsers, fetchAllUsers } from './usersSlice';

const AdminUsers = () => {
  const users = useSelector(showAllUsers);
  const dispatch = useDispatch();
  console.log(users);

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  return (
    <div>
      <h3>All users</h3>
    </div>
  );
};

export default AdminUsers;
