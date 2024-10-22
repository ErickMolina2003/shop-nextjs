'use client';

import Table from '@/components/admin/dashboard/tables/productTable.component';
import { getProductsApi } from '@/services/admin/productApi';
import { useEffect, useRef, useState } from 'react';

const tableHeaders = [
  'ID',
  'NOMBRE',
  'CATEGORIA',
  'PRECIO',
  'DESCRIPCION',
  'STOCK',
];

export default function Main() {
  const [allProducts, setAllProducts] = useState([]);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    limit: 10,
  });
  const firstRender = useRef(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProductsApi(
          pagination.currentPage,
          pagination.limit
        );

        if (!response) {
          throw new Error('Error al obtener los pedidos');
        }

        setAllProducts(response.data);

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
    fetchProducts();
  }, [pagination]);

  function setPage(page: number) {
    setPagination({
      ...pagination,
      currentPage: page,
    });
  }

  return (
    <Table
      tableHeaders={tableHeaders}
      tableData={allProducts}
      pagination={pagination}
      setPagination={setPage}
    />
  );
}
