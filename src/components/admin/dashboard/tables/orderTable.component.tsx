'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronCircleDown,
} from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { DataTableOrders } from '@/types/table.type';
import { PaginationProps } from '@/components/shop/pagination.component';

export default function Table({
  tableHeaders,
  tableData,
  pagination,
  setPagination,
}: {
  tableHeaders: string[];
  tableData: DataTableOrders[];
  pagination: PaginationProps;
  setPagination: (page: number) => void;
}) {
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
              <td className='px-6 py-4'>
                {new Date(data.createdAt).toLocaleDateString()}
              </td>
              <td className='px-6 py-4'>{data.user.email}</td>
              <td className='px-6 py-4'>{data.totalPrice}</td>
              <td className='px-6 py-4'>{data.status}</td>
              <td className='px-6 py-4 text-center'>
                <FontAwesomeIcon icon={faChevronCircleDown} size='1x' />
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
        id='editUserModal'
        tabIndex={-1}
        className='fixed top-0 left-0 right-0 z-50 items-center justify-center hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full'
      >
        <div className='relative w-full max-w-2xl max-h-full'>
          <form className='relative bg-white rounded-lg shadow'>
            <div className='flex items-start justify-between p-4 border-b rounded-t'>
              <h3 className='text-xl font-semibold text-gray-900'>Edit user</h3>
              <button
                type='button'
                className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center'
                data-modal-hide='editUserModal'
              >
                <svg
                  className='w-3 h-3'
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
            <div className='p-6 space-y-6'>
              <div className='grid grid-cols-6 gap-6'>
                <div className='col-span-6 sm:col-span-3'>
                  <label className='block mb-2 text-sm font-medium text-gray-900'>
                    First Name
                  </label>
                  <input
                    type='text'
                    name='first-name'
                    id='first-name'
                    className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5'
                    placeholder='Bonnie'
                  />
                </div>
                <div className='col-span-6 sm:col-span-3'>
                  <label className='block mb-2 text-sm font-medium text-gray-900'>
                    Last Name
                  </label>
                  <input
                    type='text'
                    name='last-name'
                    id='last-name'
                    className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5'
                    placeholder='Green'
                  />
                </div>
                <div className='col-span-6 sm:col-span-3'>
                  <label className='block mb-2 text-sm font-medium text-gray-900'>
                    Email
                  </label>
                  <input
                    type='email'
                    name='email'
                    id='email'
                    className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5'
                    placeholder='example@company.com'
                  />
                </div>
                <div className='col-span-6 sm:col-span-3'>
                  <label className='block mb-2 text-sm font-medium text-gray-900'>
                    Phone Number
                  </label>
                  <input
                    type='number'
                    name='phone-number'
                    id='phone-number'
                    className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5'
                    placeholder='e.g. +(12)3456 789'
                  />
                </div>
                <div className='col-span-6 sm:col-span-3'>
                  <label className='block mb-2 text-sm font-medium text-gray-900'>
                    Department
                  </label>
                  <input
                    type='text'
                    name='department'
                    id='department'
                    className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5'
                    placeholder='Development'
                  />
                </div>
                <div className='col-span-6 sm:col-span-3'>
                  <label className='block mb-2 text-sm font-medium text-gray-900'>
                    Company
                  </label>
                  <input
                    type='number'
                    name='company'
                    id='company'
                    className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5'
                    placeholder='123456'
                  />
                </div>
                <div className='col-span-6 sm:col-span-3'>
                  <label className='block mb-2 text-sm font-medium text-gray-900'>
                    Current Password
                  </label>
                  <input
                    type='password'
                    name='current-password'
                    id='current-password'
                    className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5'
                    placeholder='••••••••'
                  />
                </div>
                <div className='col-span-6 sm:col-span-3'>
                  <label className='block mb-2 text-sm font-medium text-gray-900'>
                    New Password
                  </label>
                  <input
                    type='password'
                    name='new-password'
                    id='new-password'
                    className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5'
                    placeholder='••••••••'
                  />
                </div>
              </div>
            </div>
            <div className='flex items-center p-6 space-x-3 rtl:space-x-reverse border-t border-gray-200 rounded-b'>
              <button
                type='submit'
                className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
              >
                Save all
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
