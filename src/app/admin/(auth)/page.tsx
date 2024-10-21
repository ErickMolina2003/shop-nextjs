'use client';

import Table from '@/components/admin/dashboard/tables/orderTable.component';
import { getOrdersApi } from '@/services/admin/orderApi';
import { useEffect, useState } from 'react';

const tableHeaders = ['ORDER ID', 'CREADA', 'CLIENTE', 'TOTAL', 'STATUS'];

export default function Main() {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await getOrdersApi();

        if (!response) {
          throw new Error('Error al obtener los pedidos');
        }

        setAllOrders(response);

        console.log(response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchOrders();
  }, []);

  return (
    <>
      {allOrders.length > 0 && (
        <Table tableHeaders={tableHeaders} tableData={allOrders} />
      )}
    </>
  );
}
