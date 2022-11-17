import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userOrdersAll, fetchUserOrders } from './ordersSlice';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';

const OrderHistory = (props) => {
  const orders = useSelector(userOrdersAll);
  const { id } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserOrders(id));
  }, []);

  return (
    <div className="orderHistoryDiv">
      {orders && orders.length ? (
        orders.map((order) => (
          <div
            className="singleUserOrder"
            key={`Single order of User: ${uuidv4()}`}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <div>
                {moment().format('MMMM Do YYYY, h:mm:ss a')}
                <br></br>
                Amount: ${order.total}
                <br></br>
              </div>
              <div>
                <Link to={`/orders/${order.id}`} key={`Order by Id: ${order}`}>
                  <button>Order Details</button>
                </Link>
              </div>
            </div>
            <hr></hr>
          </div>
        ))
      ) : (
        <h4>No previous orders!</h4>
      )}
    </div>
  );
};

export default OrderHistory;
