'use client';

import Image from 'next/image';
import TVC_LOGO from '@/assets/images/TVC_LOGO.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faCube } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation';

export default function Sidebar() {
  const router = useRouter();

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
                href='#'
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
    </>
  );
}
