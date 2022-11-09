// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link, useNavigate } from 'react-router-dom';
// import { fetchUsersAsync, deleteUserAsync, overWriteState, showAllUsers } from '../reducers/usersSlice';
// import AddUser from './AddUser';

const AllUsers = () => {
    const robots = useSelector();

    const dispatch = useDispatch();

    const Navigate = useNavigate();

    useEffect(() => {
        dispatch();
        dispatch();
    }, []);

    const handleDelete = async () => {
        dispatch();
        Navigate("/users");
    };

    return (
        <>
        <h2>Users</h2>

        {/* <div className='add-user'>
            <AddUser />
        </div> */}

        <div className='all-users'>
            {robots.map((user) => {
                return (<div key={robot.id} className='robot'>
                    <Link key={user.id} to={ `/users/${user.id}`}>
                        <h3>{user.name}</h3>
                    </Link>
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