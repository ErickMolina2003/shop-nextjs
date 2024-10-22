'use client';

import Image from 'next/image';
import TVC_LOGO from '@/assets/images/TVC_LOGO.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faCube } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation';
import { FormEvent, useEffect, useState } from 'react';
import { getCategoriesApi } from '@/services/shop/category/category';
import { Category } from '@/types/table.type';
import { createProductApi } from '@/services/admin/productApi';

export default function Sidebar() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  const router = useRouter();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getCategoriesApi();
        if (!response) {
          throw new Error('No se pudo obtener las categorias');
        }

        setCategories(response);

      } catch (error) {
        console.error(error);
      }
    };

    fetchCategories();
  }, []);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!name || !price || !stock || !description || !category) {
      return;
    }

    try {
      const response = await createProductApi({
        name,
        description,
        price: parseInt(price),
        stock: parseInt(stock),
        category,
      });

      if (!response) {
        throw new Error('Error al crear el producto');
      }

      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <button
        data-drawer-target='default-sidebar'
        data-drawer-toggle='default-sidebar'
        aria-controls='default-sidebar'
        type='button'
        className='inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200'
      >
        <span className='sr-only'>Open sidebar</span>
        <svg
          className='w-6 h-6'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            clipRule='evenodd'
            fillRule='evenodd'
            d='M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z'
          ></path>
        </svg>
      </button>

      <aside
        id='default-sidebar'
        className='fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0'
        aria-label='Sidebar'
      >
        <div className='h-full px-3 py-4 overflow-y-auto bg-gray-50'>
          <a className='flex items-center ps-2.5 mb-5 gap-2'>
            <Image src={TVC_LOGO} alt='TVC LOGO' width={40} height={50} />

            <span className='self-center text-xl font-semibold whitespace-nowrap text-black'>
              Administración
            </span>
          </a>
          <ul className='space-y-2 font-medium'>
            <li>
              <a
                className='flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 group'
                onClick={() => router.push('/admin')}
              >
                <FontAwesomeIcon icon={faShoppingCart} size='1x' />
                <span className='ms-3'>Ordenes</span>
              </a>
            </li>
            <li>
              <a className='flex items-center p-2 text-gray-900 rounded-lg border-t border-gray-200  hover:bg-gray-100 group'>
                <p className='text-xs text-gray-400'>Productos</p>
              </a>
            </li>
            <li>
              <a
                data-modal-target='addProductModal'
                data-modal-show='addProductModal'
                className='flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 group'
              >
                <FontAwesomeIcon icon={faPlusCircle} size='1x' />
                <span className='flex-1 ms-3 whitespace-nowrap'>
                  Agregar Producto
                </span>
              </a>
            </li>
            <li>
              <a
                className='flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group'
                onClick={() => router.push('/admin/products')}
              >
                <FontAwesomeIcon icon={faCube} size='1x' />
                <span className='ms-3'>Lista de Productos</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>

      <div
        id='addProductModal'
        tabIndex={-1}
        className='fixed top-0 left-0 right-0 z-50 items-center justify-center hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full'
      >
        <div className='relative w-full max-w-2xl max-h-full'>
          <div className='relative bg-white rounded-lg shadow'>
            <div className='flex items-center justify-between p-4 md:p-5 border-b rounded-t'>
              <h3 className='w-full text-xl text-center font-semibold text-gray-900'>
                Agregar un Producto
              </h3>
              <button
                type='button'
                className='end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center'
                data-modal-hide='addProductModal'
              >
                <svg
                  className='w-3 h-3'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 14 14'
                >
                  <path
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
                  />
                </svg>
                <span className='sr-only'>Close modal</span>
              </button>
            </div>
            <div className='p-4 md:p-5'>
              <form className='space-y-4' action='#'>
                <div>
                  <label className='block mb-2 text-sm font-medium text-gray-900'>
                    Categoría
                  </label>
                  <select
                    id='countries'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option value=''>Selecciona una categoría</option>
                    {categories.map((category) => (
                      <option key={category._id} value={category._id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className='block mb-2 text-sm font-medium text-gray-900'>
                    Nombre
                  </label>
                  <input
                    placeholder='Ingresa el Nombre del producto'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div>
                  <label className='block mb-2 text-sm font-medium text-gray-900'>
                    Precio
                  </label>
                  <input
                    placeholder='Ingresa el precio del producto'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>

                <div>
                  <label className='block mb-2 text-sm font-medium text-gray-900'>
                    Cantidad
                  </label>
                  <input
                    placeholder='Ingresa la cantidad en stock'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                    onChange={(e) => setStock(e.target.value)}
                  />
                </div>

                <div>
                  <label className='block mb-2 text-sm font-medium text-gray-900'>
                    Descripción
                  </label>

                  <textarea
                    rows={4}
                    className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500'
                    placeholder='Ingresa una descripción del producto'
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className='w-full text-white bg-[#ffc301] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
                >
                  Confirm
                </button>
                <button
                  onClick={(e) => e.preventDefault()}
                  data-modal-hide='addProductModal'
                  className='w-full text-black bg-white border border-black hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
