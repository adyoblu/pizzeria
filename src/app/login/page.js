'use client';
import { signIn } from "next-auth/react";
import Image from "next/image";
import React, { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginInProgress, setLoginInProgress] = useState(false);

  async function handleFormSubmit(ev) {
    ev.preventDefault();
    setLoginInProgress(true);
    await signIn('credentials', {email, password, callbackUrl: '/'});
    setLoginInProgress(false);
  }

  return (
    <section className="mt-8 max-w-4xl mx-auto p-4">
      <h1 className="text-center text-primary text-4xl mb-4">
        Login
      </h1>
      <form className="max-w-xs mx-auto" onSubmit={handleFormSubmit}>
        <input type="email" name="email" placeholder="email" value={email}
               disabled={loginInProgress}
               onChange={ev => setEmail(ev.target.value)} autoComplete="email" />
        <input type="password" name="password" placeholder="password" value={password}
               disabled={loginInProgress}
               onChange={ev => setPassword(ev.target.value)} autoComplete="password"/>
        <button disabled={loginInProgress} type="submit">Login</button>
        <div className="my-4 text-center text-gray-500 dark:text-white">
          or login with provider
        </div>
        <div className="dark:text-white">
          <div>Admin account:</div>
          <div>mail: ady@example.com </div>
          <div>pass: example</div>
        </div>
        <button type="button" onClick={() => signIn('google', {callbackUrl: '/'})}
                className="flex gap-4 justify-center bg-gray-100 text-black">
          <Image src={'/google.png'} alt={''} width={24} height={24} />
          Login with google
        </button>
      </form>
    </section>
  );
}