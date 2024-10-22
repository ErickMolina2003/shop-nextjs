'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faTrashCan,
  faPencil,
} from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { DataTableProducts } from '@/types/table.type';
import { deleteProductApi } from '@/services/admin/productApi';
import { PaginationProps } from '@/components/shop/pagination.component';

export default function Table({
  tableHeaders,
  tableData,
  pagination,
  setPagination,
}: {
  tableHeaders: string[];
  tableData: DataTableProducts[];
  pagination: PaginationProps;
  setPagination: (page: number) => void;
}) {
  async function handleDeleteProduct(id: string) {
    try {
      const response = await deleteProductApi(id);

      if (!response) {
        throw new Error('Error al eliminar el producto');
      }

      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  }

  function handleStepper(page: number) {
    if (page === pagination.currentPage) return;
    if (page <= 0) return;
    setPagination(page);
  }

  return (
    <div className='relative overflow-x-auto'>
      <table className='w-full text-sm text-left rtl:text-right text-gray-500'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
          <tr>
            {tableHeaders.map((header, index) => (
              <th key={index} scope='col' className='px-6 py-3'>
                {header}
              </th>
            ))}
            <th scope='col' className='px-6 py-3'></th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data) => (
            <tr key={data._id} className='bg-white border-b hover:bg-gray-50'>
              <th
                scope='row'
                className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'
              >
                {data._id.slice(-4)}
              </th>
              <td className='px-6 py-4'>{data.name}</td>
              <td className='px-6 py-4'>{data.category.name}</td>
              <td className='px-6 py-4'>{data.price}</td>
              <td className='px-6 py-4'>{data.description}</td>
              <td className='px-6 py-4'>{data.stock}</td>
              <td className='px-6 py-4 text-center'>
                <div className='flex items-center justify-center gap-2'>
                  <button className='rounded-lg text-white bg-[#ffc301] p-1'>
                    Ver Imagen
                  </button>
                  <FontAwesomeIcon
                    icon={faTrashCan}
                    size='1x'
                    onClick={() => handleDeleteProduct(data._id)}
                  />

                  <FontAwesomeIcon
                    icon={faPencil}
                    size='1x'
                    onClick={() => console.log('Editar')}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <nav
        className='flex items-center flex-column flex-wrap md:flex-row justify-center pt-4'
        aria-label='Table navigation'
      >
        <ul className='w-full inline-flex justify-between -space-x-px rtl:space-x-reverse text-sm h-8 gap-1'>
          <li>
            <a
              onClick={() => handleStepper(pagination.currentPage - 1)}
              className='flex items-center justify-center px-3 h-8 ms-0 gap-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700'
            >
              <FontAwesomeIcon icon={faChevronLeft} size='1x' />
              Anterior
            </a>
          </li>
          <div className='hidden md:flex items-center justify-center gap-1'>
            {Array.from({ length: pagination.totalPages }, (_, index) => (
              <li key={index}>
                <a
                  className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 ${
                    pagination.currentPage == index + 1
                      ? 'bg-[#ffc301] text-white'
                      : 'bg-white border'
                  } border border-gray-300 hover:bg-gray-100 hover:text-gray-700`}
                  onClick={() => handleStepper(index + 1)}
                >
                  {index + 1}
                </a>
              </li>
            ))}
          </div>
          <li>
            <a
              onClick={() => handleStepper(pagination.currentPage + 1)}
              className='flex items-center justify-center px-3 h-8 gap-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700'
            >
              Siguiente
              <FontAwesomeIcon icon={faChevronRight} size='1x' />
            </a>
          </li>
        </ul>
      </nav>

      <div
        id='default-modal'
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
                data-modal-hide='default-modal'
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
                  >
                    <option value=''>Selecciona una categoría</option>
                  </select>
                </div>
                <div>
                  <label className='block mb-2 text-sm font-medium text-gray-900'>
                    Nombre
                  </label>
                  <input
                    placeholder='Ingresa el Nombre del producto'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                  />
                </div>

                <div>
                  <label className='block mb-2 text-sm font-medium text-gray-900'>
                    Precio
                  </label>
                  <input
                    placeholder='Ingresa el precio del producto'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                  />
                </div>

                <div>
                  <label className='block mb-2 text-sm font-medium text-gray-900'>
                    Cantidad
                  </label>
                  <input
                    placeholder='Ingresa la cantidad en stock'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
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
                  />
                </div>

                <button className='w-full text-white bg-[#ffc301] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'>
                  Confirm
                </button>
                <button
                  onClick={(e) => e.preventDefault()}
                  data-modal-hide='editProductModal'
                  className='w-full text-black bg-white border border-black hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
