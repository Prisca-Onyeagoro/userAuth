'use client';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import React from 'react';
export const metadata = {
  title: 'Login page',
  description: 'Sign up Page',
};
export default function login() {
  const router = useRouter();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const Onlogin = async () => {
    const res = await fetch('api/users/login', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    console.log(data);
    const error = document.getElementById('err');
    if (data.message) {
      return (error.innerText = data.message);
    }

    if (!data.error) {
      router.push('/product');
    }
    setEmail('');
    setPassword('');
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="mb-8">Login</h1>
      <p id="err" className="text-red-600"></p>
      <hr />
      {/* email */}
      <label htmlFor="email">email</label>
      <input
        className="p-2 border text-black  rounded-lg border-t-yellow-600 border-t-4 mb-4 focus:outline-none focus:border-yellow-500 focus:border-4"
        id="email"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
      />
      {/* password */}
      <label htmlFor="password">password</label>
      <input
        className="p-2 border text-black rounded-lg border-t-yellow-600 border-t-4 mb-4 focus:outline-none focus:border-yellow-500 focus:border-4"
        id="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      <button
        onClick={Onlogin}
        className="p-2 border  rounded-lg border-t-yellow-600 border-t-4 mb-4 focus:outline-none focus:border-yellow-500 focus:border-4   "
      >
        Login
      </button>
      <Link href="/signup">Not registered ? visit signup page</Link>
    </main>
  );
}
