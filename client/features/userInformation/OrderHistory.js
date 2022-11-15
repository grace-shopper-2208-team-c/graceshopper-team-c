import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userOrdersAll, fetchUserOrders } from './ordersSlice';

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
            key={`Single order of User: ${order.id}`}
          >
            {order.total}
          </div>
        ))
      ) : (
        <h4>No previous orders!</h4>
      )}
    </div>
  );
};

export default OrderHistory;
