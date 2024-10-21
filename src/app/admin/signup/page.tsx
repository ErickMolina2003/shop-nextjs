'use client';

import { authRegisterApi } from '@/services/auth/registerApi';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

export default function Signup() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (!username || !email || !password || !confirmPassword) {
      return;
    }

    if (password !== confirmPassword) {
      return;
    }

    register();
  }

  async function register() {
    try {
      const body = {
        username,
        email,
        password,
      };
      const response = await authRegisterApi(body);

      if (response) {
        router.push('/admin/login');
      } else {
        throw new Error('Error al registrar');
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <main className='w-full h-screen flex flex-col justify-center items-center gap-5 px-5'>
      <h1 className='text-black'>Crear Cuenta</h1>

      <div className='w-full'>
        <form className='max-w-sm mx-auto'>
          <div className='mb-5'>
            <label className='block mb-2 text-sm font-medium text-gray-900'>
              Nombre de Usuario
            </label>
            <input
              type='text'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
              placeholder='Ingresa tu nombre de usuario'
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
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
          <div className='mb-5'>
            <label className='block mb-2 text-sm font-medium text-gray-900'>
              Confirmar Contraseña
            </label>
            <input
              type='password'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center'
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>

      <div className='w-full flex justify-center items-center'>
        <p
          className='text-blue-300'
          role='button'
          onClick={() => router.push('/admin/login')}
        >
          Iniciar Sesión
        </p>
      </div>
    </main>
  );
}
