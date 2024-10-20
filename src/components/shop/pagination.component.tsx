'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function Pagination() {
  return (
    <nav
      className='flex items-center flex-column flex-wrap md:flex-row justify-center pt-4'
      aria-label='Table navigation'
    >
      <ul className='w-full inline-flex justify-between -space-x-px rtl:space-x-reverse text-sm h-8 gap-1'>
        <li>
          <a
            href='#'
            className='flex items-center justify-center px-3 h-8 ms-0 gap-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700'
          >
            <FontAwesomeIcon icon={faChevronLeft} size='1x' />
            Anterior
          </a>
        </li>
        <div className='hidden md:flex items-center justify-center gap-1'>
          <li>
            <a
              href='#'
              className='flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700'
            >
              1
            </a>
          </li>
          <li>
            <a
              href='#'
              className='flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700'
            >
              2
            </a>
          </li>
          <li>
            <a
              href='#'
              aria-current='page'
              className='flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700'
            >
              3
            </a>
          </li>
          <li>
            <a
              href='#'
              className='flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700'
            >
              4
            </a>
          </li>
          <li>
            <a
              href='#'
              className='flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700'
            >
              5
            </a>
          </li>
        </div>
        <li>
          <a
            href='#'
            className='flex items-center justify-center px-3 h-8 gap-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700'
          >
            Siguiente
            <FontAwesomeIcon icon={faChevronRight} size='1x' />
          </a>
        </li>
      </ul>
    </nav>
  );
}
