'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Loading from './loading';
export const metadata = {
  title: 'Sign up page',
  description: 'Sign up Page',
};
export default function signup() {
  const router = useRouter();
  const [name, setUser] = useState('');
  const [password, setPass] = useState('');
  const [school, setSchool] = useState('');
  const [email, setEmail] = useState('');

  const Onsignup = async (e) => {
    const res = await fetch('api/users/signup', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({ name, password, school, email }),
    });
    const data = await res.json();
    console.log(data);
    const error = document.getElementById('err');
    if (data.message) {
      return (error.innerText = data.message);
    }
    if (!data.error) {
      router.push('/Product');
    }
    setUser('');
    setPass('');
    setSchool('');
    setEmail('');
  };

  return (
    <main>
      <div className="flex justify-center relative top-44">
        <div>
          <div>
            <p className="text-lg font-extrabold ">
              Dont Have an account? Kindly Register :)
            </p>
            <p id="err" className="text-red-600"></p>
          </div>
          <div className="mt-6">
            <input
              className="text-black font-medium text-sm border-t-8 border-yellow-900 rounded-lg p-4 outline-none mb-5"
              id="username"
              type="text"
              value={name}
              onChange={(e) => setUser(e.target.value)}
              placeholder="username"
            />
          </div>

          <div>
            <input
              className="text-black font-medium text-sm border-t-8 border-yellow-900 rounded-lg p-4 outline-none mb-5"
              id="nation"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your email"
            />
          </div>

          <div>
            <input
              className="text-black font-medium text-sm border-t-8 border-yellow-900 rounded-lg p-4 outline-none mb-5"
              id="school"
              type="text"
              value={school}
              onChange={(e) => setSchool(e.target.value)}
              placeholder="Your School"
            />
          </div>

          <div>
            <input
              className="text-black font-medium text-sm border-t-8 border-yellow-900 rounded-lg p-4 outline-none mb-5"
              id="password"
              type="text"
              value={password}
              onChange={(e) => setPass(e.target.value)}
              placeholder="password"
            />
          </div>

          <button
            type="submit"
            onClick={Onsignup}
            className="p-3 border-l-4 border-yellow-900 mt-7"
          >
            Submit
          </button>
          <p>
            Have an account? <Link href="/login"> click here to login</Link>
          </p>
        </div>
      </div>
    </main>
  );
}
