'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

export type PaginationProps = {
  currentPage: number;
  totalPages: number;
  limit: number;
};

export default function Pagination({
  pagination,
  setPagination,
}: {
  pagination: PaginationProps;
  setPagination: (page: number) => void;
}) {
  function handleStepper(page: number) {
    if (page === pagination.currentPage) return;
    if (page <= 0) return;
    setPagination(page);
  }

  return (
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
  );
}
