export default function Breadcrumb() {
  return (
    <nav className='flex' aria-label='Breadcrumb'>
      <ol className='inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse'>
        <li className='inline-flex items-center'>
          <a
            href='#'
            className='inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600'
          >
            Inicio
          </a>
        </li>
        <li>
          <div className='flex items-center'>
            <svg
              className='rtl:rotate-180 w-3 h-3 text-gray-400 mx-1'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 6 10'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='m1 9 4-4-4-4'
              />
            </svg>
            <a
              href='#'
              className='ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2'
            >
              Categoría
            </a>
          </div>
        </li>
        <li aria-current='page'>
          <div className='flex items-center'>
            <svg
              className='rtl:rotate-180 w-3 h-3 text-gray-400 mx-1'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 6 10'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='m1 9 4-4-4-4'
              />
            </svg>
            <span className='ms-1 text-sm font-medium text-gray-500 md:ms-2'>
              Hogar
            </span>
          </div>
        </li>
      </ol>
    </nav>
  );
}
