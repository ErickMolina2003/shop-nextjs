'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faCcVisa,
  faCcMastercard,
  faPaypal,
  faApplePay,
  faGooglePay,
} from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className='mt-3 bg-[#f0f0f0]'>
      <div className='mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8'>
        <div className='md:flex'>
          <div className='mb-6 md:mb-0'>
            <a className='flex items-center'>
              <span className='self-center text-2xl font-semibold whitespace-nowrap text-[#ffc301]'>
                TVC SHOP
              </span>
            </a>
            <p className='text-gray-500 max-w-[200px]'>
              Contamos con todos los electrodomésticos e immobiliaria para que
              tu casa se convierta en tu hogar
            </p>
            <div className='flex mt-2'>
              <FontAwesomeIcon
                icon={faTwitter}
                size='1x'
                color='#ffc301'
                className='bg-white rounded-full p-1'
              />
              <FontAwesomeIcon
                icon={faFacebook}
                size='1x'
                color='#ffc301'
                className='bg-white rounded-full p-1'
              />
              <FontAwesomeIcon
                icon={faInstagram}
                size='1x'
                color='#ffc301'
                className='bg-white rounded-full p-1'
              />
            </div>
          </div>
          <div className='grid grid-cols-1 gap-8 sm:gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            <div>
              <h2 className='mb-6 text-sm font-semibold text-[#ffc301] uppercase'>
                COMPAÑÍA
              </h2>
              <ul className='text-gray-500 font-medium'>
                <li className='mb-2'>
                  <a className='hover:underline'>Acerca</a>
                </li>
                <li className='mb-2'>
                  <a className='hover:underline'>Solicitudes</a>
                </li>
                <li className='mb-2'>
                  <a className='hover:underline'>Trabajos</a>
                </li>
                <li className='mb-2'>
                  <a className='hover:underline'>Conócenos</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className='mb-6 text-sm font-semibold text-[#ffc301] uppercase'>
                AYUDA
              </h2>
              <ul className='text-gray-500 font-medium'>
                <li className='mb-2'>
                  <a className='hover:underline'>Soporte</a>
                </li>
                <li className='mb-2'>
                  <a className='hover:underline'>Detalles de Envíos</a>
                </li>
                <li className='mb-2'>
                  <a className='hover:underline'>Terminos & Condiciones</a>
                </li>
                <li className='mb-2'>
                  <a className='hover:underline'>Política de Privacidad</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className='mb-6 text-sm font-semibold text-[#ffc301] uppercase'>
                FAQ
              </h2>
              <ul className='text-gray-500 font-medium'>
                <li className='mb-2'>
                  <a className='hover:underline'>Cuenta</a>
                </li>
                <li className='mb-2'>
                  <a className='hover:underline'>Manejo de Envíos</a>
                </li>
                <li className='mb-2'>
                  <a className='hover:underline'>Ordenes</a>
                </li>
                <li className='mb-2'>
                  <a className='hover:underline'>Pagos</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className='mb-6 text-sm font-semibold text-[#ffc301] uppercase'>
                Nuestros Sitios
              </h2>
              <ul className='text-gray-500 font-medium'>
                <li className='mb-2'>
                  <a className='hover:underline'>TUNOTA</a>
                </li>
                <li className='mb-2'>
                  <a className='hover:underline'>DEPORTES TVC</a>
                </li>
                <li className='mb-2'>
                  <a className='hover:underline'>HRN</a>
                </li>
                <li className='mb-2'>
                  <a className='hover:underline'>TVC</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className='my-6 border-gray-200 sm:mx-auto lg:my-8' />
        <div className='sm:flex sm:items-center sm:justify-between'>
          <span className='text-sm text-gray-500 sm:text-center'>
            <a href='https://flowbite.com/' className='hover:underline'>
              TVC SHOP
            </a>
            © 2024 . Todos los Derechos Reservados
          </span>
          <div className='flex mt-4 sm:justify-center sm:mt-0 gap-2'>
            <FontAwesomeIcon icon={faCcVisa} size='1x' color='#000' />
            <FontAwesomeIcon icon={faCcMastercard} size='1x' color='#000' />
            <FontAwesomeIcon icon={faPaypal} size='1x' color='#000' />
            <FontAwesomeIcon icon={faApplePay} size='1x' color='#000' />
            <FontAwesomeIcon icon={faGooglePay} size='1x' color='#000' />
          </div>
        </div>
      </div>
    </footer>
  );
}
