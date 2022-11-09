// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { fetchProductsAsync, deleteProductAsync, overWriteState, showAllProducts } from '../reducers/projectsSlice';


const AllProducts = () => {
    const products = useSelector();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch();
        dispatch();
    }, []);

    const handleDelete = async () => {
        dispatch(deleteProjectAsync());
    };

    console.log(products);

    return (
        <>
        <h2>Products</h2>

        <div className='all-products'>
            {products.map((product) => {
                return (<div key={product.id} className='product'>
                    <Link key={product.id} to={ `/products/${product.id}`}>
                    <h3>{product.name}</h3>
                    </Link>
                    <h3>{product.price}</h3>
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

export default AllProducts;