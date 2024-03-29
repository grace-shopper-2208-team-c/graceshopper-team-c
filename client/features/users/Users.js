import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { allUsers, fetchUsers } from './usersSlice';

const AllUsers = () => {
    const dispatch = useDispatch();
    const users = useSelector(allUsers);
    // console.log(users);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    const handleDelete = async () => {
        dispatch();
        Navigate("/users");
    };

    return (
        <>
        <h2>Users</h2>

        <div className='users'>
            {users.map((user) => {
                return (<div key={user.id} className='user'>
                        <h3>{user.name}</h3>
                        <h3>{user.street_address}</h3>
                        <h3>{user.city}</h3>
                        <h3>{user.state}</h3>
                        <h3>{user.zip}</h3>
                        <h3>{user.phone}</h3>
                        <h3>{user.email}</h3>
                    <div className="delete-button">
                        <button onClick={handleDelete}>Delete</button>
                    </div>
                    </div>
                )
            })};
        </div>
        </>
    )

};







export default AllUsers;