import React, { useState } from 'react';
import Layout from '../layout/Layout';
import Datatable from '../core/tables/Datatable';

const demoOrders = [
  { book: { title: 'Title' }, user: { firstName: 'First', lastName: 'Last' } },
  { book: { title: 'Title 2' }, user: { firstName: 'First', lastName: 'Last' } }
];

const AllOrdersPage = () => {
  const [orders, setOrders] = useState(demoOrders);

  const columns = [
    {
      id: 'user',
      name: 'User',
      cell: (row: any) => row?.user?.firstName + " " + row?.user?.lastName
    },
    {
      id: 'book',
      name: 'Book Title',
      cell: (row: any) => row?.book?.title,
      sortable: true,
      minWidth: '300px'
    }
  ];

  const getBooks = (qs: string) => {
    console.log(qs);
  };

  return (
    <Layout>
      <div className="flex justify-center mt-10">
        <div className="w-5/6">
          <Datatable
            columns={columns}
            totalRows={orders.length}
            getData={getBooks}
            title="My Orders"
            data={orders}
          />
        </div>
      </div>
    </Layout>
  );
};

export default AllOrdersPage;
