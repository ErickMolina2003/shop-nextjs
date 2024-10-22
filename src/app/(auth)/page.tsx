'use client';

import Breadcrumb from '@/components/shop/breadcrumb.component';
import Footer from '@/components/shop/footer.component';
import NavBar from '@/components/shop/navbar.component';
import Pagination from '@/components/shop/pagination.component';
import ProductCard from '@/components/shop/productCard.component';
import { getProductsApi } from '@/services/admin/productApi';
import { useEffect, useRef, useState } from 'react';

export default function Shop() {
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
    <main>
      <NavBar />
      <div className='flex flex-col mt-3 gap-1 px-3'>
        <Breadcrumb />
        <div className='mt-4 mb-1 flex items-center justify-between'>
          <h4 className='text-black'>Hogar</h4>
          <div className='flex items-center gap-2'>
            <p className='text-black'>Mostrando 1-10 de 100 Productos</p>
            <p className='text-black'>Filtrar por:</p>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3'>
          {allProducts.length > 0 &&
            allProducts.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
        </div>
        <Pagination pagination={pagination} setPagination={setPage} />
      </div>
      <Footer />
    </main>
  );
}
