import React from 'react';

const OrderHistory = (props) => {
  const orders = '';
  const { id } = props;

  return (
    <div className="orderHistoryDiv">
      {orders && orders.length ? (
        userOrders.map((order) => (
          <div className="singleUserOrder" key={`Single order of User: ${id}`}>
            Orders will populate here eventually
          </div>
        ))
      ) : (
        <h4>No previous orders!</h4>
      )}
    </div>
  );
};

export default OrderHistory;
