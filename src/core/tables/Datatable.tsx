import React, { useEffect, useState } from 'react';
import DataTable, { TableColumn } from 'react-data-table-component';
import EmptyTable from './EmptyTable';
import SearchInput from '../inputs/SearchInput';

type TableProps = {
  columns: TableColumn<any>[];
  totalRows?: number;
  getData: (qs: string) => void;
  initialPageSize?: number;
  title: string;
  data: any[];
  extraDependencies?: any[];
};

const Datatable = ({
  columns,
  totalRows,
  getData,
  initialPageSize = 10,
  title = '',
  data = [],
  extraDependencies = [],
  ...props
}: TableProps) => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(initialPageSize);
  const [qs, setQs] = useState('');

  useEffect(() => {
    getData(qs);
  }, [page, pageSize, qs, ...extraDependencies]);

  return (
    <div className="flex flex-col w-full justify-center">
      <div className={`flex justify-${title ? 'between' : 'end'} my-2 pt-3 pb-1 items-center`}>
        {title && <label className="text-lg font-bold text-gray-800">{title}</label>}
        <div className="w-1/3">
          <SearchInput onChange={setQs} placeholder="Search" />
        </div>
      </div>
      <hr />
      <DataTable
        columns={columns}
        data={data}
        pagination
        striped
        paginationServer
        paginationTotalRows={totalRows}
        paginationPerPage={pageSize}
        paginationDefaultPage={page}
        sortServer
        pointerOnHover
        persistTableHead
        noDataComponent={<EmptyTable />}
        {...props}
      />
    </div>
  );
};

export default Datatable;
