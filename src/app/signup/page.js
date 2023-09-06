'use client';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import React, { useEffect, useState } from 'react';
export const metadata = {
  title: 'Sign up page',
  description: 'Sign up Page',
};
export default function signup() {
  const [name, setUser] = useState('');
  const [password, setPass] = useState('');
  const [school, setSchool] = useState('');
  const [nation, setNation] = useState('');

  const Onsignup = async (e) => {
    const res = await fetch('api/users/signup', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({ name, password, nation, school }),
    });
    setUser('');
    setPass('');
    setSchool('');
    setNation('');
  };

  return (
    <main>
      <div className="flex justify-center relative top-44">
        <div>
          <div>
            <p className="text-lg font-extrabold ">
              Dont Have an account? Kindly Register :)
            </p>
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
              id="password"
              type="number"
              value={password}
              onChange={(e) => setPass(e.target.value)}
              placeholder="password"
            />
          </div>

          <div>
            <input
              className="text-black font-medium text-sm border-t-8 border-yellow-900 rounded-lg p-4 outline-none mb-5"
              id="nation"
              type="text"
              value={nation}
              onChange={(e) => setNation(e.target.value)}
              placeholder="Enter Your Country"
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

          <button
            type="submit"
            onClick={Onsignup}
            className="p-3 border-l-4 border-yellow-900 mt-7"
          >
            Submit
          </button>
        </div>
      </div>
    </main>
  );
}
