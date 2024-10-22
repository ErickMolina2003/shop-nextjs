'use client';

import { authLoginApi } from '@/services/auth/loginApi';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin(e: FormEvent) {
    e.preventDefault();

    if (!email || !password) {
      return;
    }

    login();
  }

  async function login() {
    try {
      const body = {
        email,
        password,
      };

      const response = await authLoginApi(body);

      if (response) {
        router.push('/');
      } else {
        throw new Error('Error al registrar');
      }
    } catch (error) {
      console.error(error);
      return;
    }
  }

  return (
    <main className='w-full h-screen flex flex-col justify-center items-center gap-5 px-5'>
      <h1 className='text-black'>Iniciar Sesión</h1>

      <div className='w-full'>
        <form className='max-w-sm mx-auto'>
          <div className='mb-5'>
            <label className='block mb-2 text-sm font-medium text-gray-900'>
              Correo Electrónico
            </label>
            <input
              type='email'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
              placeholder='Ingresa tu correo electrónico'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='mb-5'>
            <label className='block mb-2 text-sm font-medium text-gray-900'>
              Contraseña
            </label>
            <input
              type='password'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center'
            onClick={handleLogin}
          >
            Submit
          </button>
        </form>
      </div>

      <div className='w-full flex justify-center items-center'>
        <p
          className='text-blue-300'
          role='button'
          onClick={() => router.push('/admin/signup')}
        >
          Crear Cuenta
        </p>
      </div>
    </main>
  );
}
