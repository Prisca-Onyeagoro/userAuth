'use client';
import Link from 'next/link';
import React from 'react';
export const metadata = {
  title: 'Login page',
  description: 'Sign up Page',
};
export default function login() {
  const [user, setUser] = React.useState({
    email: '',
    password: '',
  });

  const Onlogin = async () => {};
  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Login</h1>
      <hr />

      {/* email */}
      <label htmlFor="email">email</label>
      <input
        className="p-2 border  rounded-lg border-t-yellow-600 border-t-4 mb-4 focus:outline-none focus:border-yellow-500 focus:border-4"
        id="email"
        type="text"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="email"
      />
      {/* password */}
      <label htmlFor="password">password</label>
      <input
        className="p-2 border  rounded-lg border-t-yellow-600 border-t-4 mb-4 focus:outline-none focus:border-yellow-500 focus:border-4"
        id="password"
        type="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
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
