'use client';

import Image from 'next/image';
import ProductImg from '@/assets/images/producto.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

export default function ProductCard() {
  return (
    <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow'>
      <a className='flex items-center justify-center' href='#'>
        <Image src={ProductImg} width={200} height={300} alt='Producto' />
      </a>
      <div className='p-5'>
        <a className='flex items-center justify-between' href='#'>
          <h5 className='mb-2 text-xl font-bold tracking-tight text-gray-900'>
            Mueble de Sala
          </h5>

          <h5 className='text-xl font-bold text-black'>$145</h5>
        </a>
        <p className='mb-3 font-normal text-gray-700'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          cupiditate ducimus rerum praesentium totam dignissimos laudantium
        </p>
        <a
          href='#'
          className='w-full inline-flex items-center justify-center px-3 py-2 gap-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300'
        >
          <FontAwesomeIcon icon={faCirclePlus} size='1x' />
          Añadir al carrito
        </a>
      </div>
    </div>
  );
}
