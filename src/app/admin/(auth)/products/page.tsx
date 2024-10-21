'use client';

import Table from '@/components/admin/dashboard/tables/productTable.component';
import { getProductsApi } from '@/services/admin/productApi';
import { useEffect, useState } from 'react';

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
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProductsApi();

        if (!response) {
          throw new Error('Error al obtener los pedidos');
        }

        setAllProducts(response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProducts();
  }, []);

  return <Table tableHeaders={tableHeaders} tableData={allProducts} />;
}
