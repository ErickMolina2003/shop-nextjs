'use client';

import Table from '@/components/admin/dashboard/tables/orderTable.component';
import { getOrdersApi } from '@/services/admin/orderApi';
import { useEffect, useRef, useState } from 'react';

const tableHeaders = ['ORDER ID', 'CREADA', 'CLIENTE', 'TOTAL', 'STATUS'];

export default function Main() {
  const [allOrders, setAllOrders] = useState([]);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    limit: 10,
  });
  const firstRender = useRef(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await getOrdersApi(
          pagination.currentPage,
          pagination.limit
        );

        if (!response) {
          throw new Error('Error al obtener los pedidos');
        }

        setAllOrders(response.data);
        if (firstRender.current) {
          firstRender.current = false;
          setPagination({
            ...pagination,
            currentPage: response.page,
            totalPages: response.totalPages,
          });
          return;
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchOrders();
  }, [pagination]);

  function setPage(page: number) {
    setPagination({
      ...pagination,
      currentPage: page,
    });
  }

  return (
    <>
      {allOrders.length > 0 && (
        <Table
          tableHeaders={tableHeaders}
          tableData={allOrders}
          pagination={pagination}
          setPagination={setPage}
        />
      )}
    </>
  );
}
