import React, { useState } from 'react';
import Layout from '../layout/Layout';
import Datatable from '../core/tables/Datatable';
import PendingBadge from '../core/badges/PendingBadge';
import ApprovedBadge from '../core/badges/ApprovedBadge';
import CanceledBadge from '../core/badges/CanceledBadge';
import { amountFormatter } from '../utils/helpers';
import AdminService from '../services/AdminService';
import EditButton from '../core/buttons/EditButton';
import CancelButton from '../core/buttons/CancelButton';
import { TiTickOutline } from 'react-icons/ti';
import ApproveOrderModal from '../components/orders/ApproveOrderModal';
import CancelOrderModal from '../components/orders/CancelOrderModal';
import { BookType } from '../components/books/BookDetails';

export type OrderType = {
  id: string;
  status: string;
  shippingCost: number;
  book: BookType;
};

const AllOrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState<OrderType>();
  const [openApprovePopUp, setOpenApprovePopUp] = useState(false);
  const [openCancelPopUp, setOpenCancelPopUp] = useState(false);
  const [updated, setUpdated] = useState(0);

  const statusFormatter = (status: string) => {
    if (status === 'PENDING') {
      return <PendingBadge text={status} />;
    } else if (status === 'CONFIRMED') {
      return <ApprovedBadge text={status} />;
    } else {
      return <CanceledBadge text={status} />;
    }
  };

  const actions = (order: OrderType) => {
    if (order.status === 'pending') {
      return (
        <div className="flex">
          <EditButton
            onClick={() => {
              setSelectedOrder(order);
              setOpenApprovePopUp(true);
            }}
            showIcon={false}
            label={<TiTickOutline />}
            className="flex-1 mr-1"
          />
          <CancelButton
            onClick={() => {
              setSelectedOrder(order);
              setOpenCancelPopUp(true);
            }}
            label=""
            className="flex-1 ml-1"
          />
        </div>
      );
    }
  };

  const getBooks = (qs: string) => {
    AdminService.getAllOrders().then((response) => {
      const { orders } = response.data.data;
      setOrders(orders);
    });
  };

  const columns = [
    {
      id: 'user',
      name: 'User',
      cell: (row: any) => row?.user?.firstName + " " + row?.user?.lastName
    },
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
      id: 'shippingCost',
      name: 'Shipping Cost',
      cell: (row: any) => amountFormatter(Number(row?.shippingCost))
    },
    {
      id: 'amount',
      name: 'Total Amount',
      cell: (row: any) =>
        row?.totalAmount === '0' ? '-' : amountFormatter(Number(row?.totalAmount))
    },
    {
      id: 'status',
      name: 'Status',
      cell: (row: any) => statusFormatter(row?.status.toUpperCase())
    },
    {
      id: 'actions',
      name: 'Actions',
      cell: (row: any) => actions(row)
    }
  ];

  return (
    <Layout>
      <div className="flex justify-center mt-10">
        <div className="w-5/6">
          <Datatable
            columns={columns}
            totalRows={orders.length}
            allowSearch={false}
            getData={getBooks}
            title="My Orders"
            data={orders}
            extraDependencies={[updated]}
          />
        </div>
      </div>
      {selectedOrder && (
        <ApproveOrderModal
          orderId={selectedOrder.id}
          bookPrice={selectedOrder.book.price}
          isOpen={openApprovePopUp}
          onClose={() => setOpenApprovePopUp(false)}
          onSuccess={() => setUpdated((prevState) => prevState + 1)}
        />
      )}
      {selectedOrder && (
        <CancelOrderModal
          orderId={selectedOrder.id}
          bookPrice={selectedOrder.book.price}
          isOpen={openCancelPopUp}
          onClose={() => setOpenCancelPopUp(false)}
          onSuccess={() => setUpdated((prevState) => prevState + 1)}
        />
      )}
    </Layout>
  );
};

export default AllOrdersPage;
