'use client';

import TVC_LOGO from '@/assets/images/TVC_LOGO.png';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import {
  faShoppingCart,
  faChevronUp,
  faChevronDown,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import ProductImg from '@/assets/images/producto.png';
import { shopCartStore } from '@/store/shopCartStore';
import { ShopCartProduct } from '@/types/cart.type';
import { FormEvent } from 'react';
import { createOrderApi } from '@/services/admin/orderApi';

export default function NavBar() {
  const { setShopCart, shopCart, reset } = shopCartStore();

  function handleAddToCart(product: ShopCartProduct, amount: number) {
    if (product.quantity <= 1 && amount < 0) return;
    if (!shopCart?.user) return;
    if (product.quantity + amount > product.stock) return;

    const newShopCart = {
      user: shopCart.user,
      products: shopCart.products,
      totalPrice: shopCart.totalPrice,
    };

    newShopCart.products.map((p) => {
      if (p._id === product._id) {
        p.quantity = product.quantity + amount;
      }
    });

    const totalPrice = newShopCart.products.reduce(
      (accumulator, product) => accumulator + product.price * product.quantity,
      0
    );

    newShopCart.totalPrice = totalPrice;

    setShopCart(newShopCart);
  }

  function handleRemoveFromCart(product: ShopCartProduct) {
    if (!shopCart?.user) return;

    const newShopCart = {
      user: shopCart.user,
      products: shopCart.products,
      totalPrice: shopCart.totalPrice,
    };

    newShopCart.products = newShopCart.products.filter(
      (p) => p._id !== product._id
    );

    const totalPrice = newShopCart.products.reduce(
      (accumulator, product) => accumulator + product.price * product.quantity,
      0
    );

    newShopCart.totalPrice = totalPrice;

    setShopCart(newShopCart);
  }

  async function payShopCart(event: FormEvent) {
    event.preventDefault();
    if (!shopCart?.user) return;
    if (shopCart?.products.length === 0) return;
    if (!shopCart?.totalPrice) return;

    const body = {
      totalPrice: shopCart.totalPrice,
      user: shopCart.user._id,
      products: shopCart.products.map((product) => product._id),
    };

    try {
      const response = await createOrderApi(body);
      if (!response) {
        throw new Error('Error al crear el pedido');
      }

      reset();

      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <nav className='bg-white border-b border-gray-400'>
        <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
          <a className='flex items-center space-x-3 rtl:space-x-reverse'>
            <Image src={TVC_LOGO} alt='TVC LOGO' width={40} height={50} />
            <span className='self-center text-2xl font-semibold whitespace-nowrap text-black'>
              SHOP
            </span>
          </a>
          <div className='flex md:order-2'>
            <button
              type='button'
              data-collapse-toggle='navbar-search'
              aria-controls='navbar-search'
              aria-expanded='false'
              className='md:hidden text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 rounded-lg text-sm p-2.5 me-1'
            >
              <svg
                className='w-5 h-5'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 20 20'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                />
              </svg>
              <span className='sr-only'>Search</span>
            </button>
            <div className='relative hidden md:block'>
              <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
                <svg
                  className='w-4 h-4 text-gray-500'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 20 20'
                >
                  <path
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                  />
                </svg>
                <span className='sr-only'>Search icon</span>
              </div>
              <input
                type='text'
                id='search-navbar'
                className='block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500'
                placeholder='Search...'
              />
            </div>
            <div className='flex items-center mx-2 gap-2'>
              <div
                className='flex items-center relative'
                data-modal-target='shopCartModal'
                data-modal-show='shopCartModal'
              >
                <FontAwesomeIcon
                  icon={faShoppingCart}
                  size='1x'
                  color='black'
                  className='z-10'
                />
                <p className='absolute -top-4 -right-2 text-[#ffc301] text-xs font-bold bg-slate-100 rounded-full p-1'>
                  {shopCart?.products.length ?? 0}
                </p>
              </div>
              <FontAwesomeIcon icon={faUser} size='1x' color='black' />
            </div>
            <button
              data-collapse-toggle='navbar-search'
              type='button'
              className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200'
              aria-controls='navbar-search'
              aria-expanded='false'
            >
              <span className='sr-only'>Open main menu</span>
              <svg
                className='w-5 h-5'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 17 14'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M1 1h15M1 7h15M1 13h15'
                />
              </svg>
            </button>
          </div>
          <div
            className='items-center justify-between hidden w-full md:flex md:w-auto md:order-1'
            id='navbar-search'
          >
            <div className='relative mt-3 md:hidden'>
              <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
                <svg
                  className='w-4 h-4 text-gray-500'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 20 20'
                >
                  <path
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                  />
                </svg>
              </div>
              <input
                type='text'
                id='search-navbar'
                className='block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500'
                placeholder='Search...'
              />
            </div>
            <ul className='flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white'>
              <li>
                <a
                  href='#'
                  className='block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0'
                  aria-current='page'
                >
                  Hogar
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0'
                >
                  Jardinería
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0'
                >
                  Electrodomésticos
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div
        id='shopCartModal'
        tabIndex={-1}
        className='fixed top-0 left-0 right-0 z-50 items-center justify-center hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full'
      >
        <div className='relative w-full max-w-2xl max-h-full'>
          <form className='relative bg-white rounded-lg shadow'>
            <div className='flex items-start justify-between p-4 border-b rounded-t'>
              <div className='flex flex-col md:flex-row items-center gap-4'>
                <div className='flex items-center gap-2'>
                  <h3 className='text-xl font-semibold text-gray-900'>
                    Carrito
                  </h3>
                  <FontAwesomeIcon
                    icon={faShoppingCart}
                    size='1x'
                    color='black'
                    className='z-10'
                  />
                </div>
                <div>
                  <button
                    onClick={payShopCart}
                    className='text-white bg-[#ffc301] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
                  >
                    Pagar
                  </button>
                </div>
              </div>
              <button
                type='button'
                className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center'
                data-modal-hide='shopCartModal'
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
              <div className='grid grid-cols-3'>
                <h2 className='text-black'>Total</h2>
                <p className='text-gray-500 text-center'>
                  {shopCart?.products.length ?? 0} Items
                </p>
                <h3 className='text-black text-end'>
                  ${shopCart?.totalPrice ?? 0}
                </h3>
              </div>
            </div>
            <div className='flex items-center space-x-3 rtl:space-x-reverse border-t-8 border-gray-300 rounded-b'></div>
            <div className='p-6 space-y-6'>
              {shopCart?.products && shopCart?.products.length > 0 ? (
                shopCart?.products.map((product) => (
                  <div key={product._id} className='grid grid-cols-4'>
                    <Image
                      src={ProductImg}
                      width={200}
                      height={300}
                      alt='Producto'
                    />
                    <div>
                      <h2 className='text-black'>{product.name}</h2>
                      <p className='text-black'>{product.description}</p>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-1'>
                      <div className='flex items-center gap-1'>
                        <p className='text-black'>{product.quantity}</p>
                        <div className='flex flex-col items-center gap-1'>
                          <FontAwesomeIcon
                            icon={faChevronUp}
                            size='1x'
                            color='black'
                            className='z-10'
                            onClick={() => handleAddToCart(product, 1)}
                          />
                          <FontAwesomeIcon
                            icon={faChevronDown}
                            size='1x'
                            color='black'
                            className='z-10'
                            onClick={() => handleAddToCart(product, -1)}
                          />
                        </div>
                      </div>
                      <FontAwesomeIcon
                        icon={faTrash}
                        size='1x'
                        color='red'
                        className='z-10'
                        onClick={() => handleRemoveFromCart(product)}
                      />
                    </div>
                    <h3 className='text-black text-end'>
                      ${product.price * product.quantity}
                    </h3>
                  </div>
                ))
              ) : (
                <h1 className='text-black text-center'>Sin productos</h1>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
