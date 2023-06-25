import React, { useState } from 'react';
import Layout from '../layout/Layout';
import Datatable from '../core/tables/Datatable';
import { useSelector } from 'react-redux';
import _ from 'lodash';
import CustomerService from '../services/CustomerService';
import { amountFormatter, showError } from '../utils/helpers';
import PendingBadge from '../core/badges/PendingBadge';
import ApprovedBadge from '../core/badges/ApprovedBadge';
import CanceledBadge from '../core/badges/CanceledBadge';

const MyOrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const customerId = useSelector((state) => _.get(state, 'userReducer.id', ''));

  const statusFormatter = (status: string) => {
    if (status === 'PENDING') {
      return <PendingBadge text={status} />;
    } else if (status === 'CONFIRMED') {
      return <ApprovedBadge text={status} />;
    } else {
      return <CanceledBadge text={status} />;
    }
  };

  const columns = [
    {
      id: 'title',
      name: 'Book Title',
      cell: (row: any) => row?.book?.title
    },
    {
      id: 'author',
      name: 'Book Author',
      cell: (row: any) => row?.book?.author
    },
    {
      id: 'price',
      name: 'Book Price',
      cell: (row: any) => amountFormatter(Number(row?.book?.price))
    },
    {
      id: 'address',
      name: 'Address',
      cell: (row: any) => row?.address?.name
    },
    {
      id: 'amount',
      name: 'Amount',
      cell: (row: any) => amountFormatter(Number(row?.totalAmount))
    },
    {
      id: 'shippingCost',
      name: 'Shipping Cost',
      cell: (row: any) => amountFormatter(Number(row?.shippingCost))
    },
    {
      id: 'status',
      name: 'Status',
      cell: (row: any) => statusFormatter(row?.status.toUpperCase())
    }
  ];

  const getOrders = (qs: string) => {
    CustomerService.getOrders(customerId)
      .then((response) => {
        const { orders } = response.data.data;
        setOrders(orders);
      })
      .catch((err) => showError(err.response.data.message));
  };

  return (
    <Layout>
      <div className="flex justify-center mt-10">
        <div className="md:w-5/6 md:mx-0 mx-5">
          <Datatable
            columns={columns}
            allowSearch={false}
            totalRows={orders.length}
            getData={getOrders}
            title="My Orders"
            data={orders}
          />
        </div>
      </div>
    </Layout>
  );
};

export default MyOrdersPage;
