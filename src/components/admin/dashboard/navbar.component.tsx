'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export default function NavBar() {
  return (
    <nav className='bg-white border-gray-200'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <a className='flex items-center space-x-3 rtl:space-x-reverse'>
          <span className='self-center text-2xl font-semibold whitespace-nowrap text-black'>
            Productos
          </span>
        </a>
        <div className='flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse'>
          <FontAwesomeIcon icon={faUser} size='1x' color='#000' />
        </div>
      </div>
    </nav>
  );
}
