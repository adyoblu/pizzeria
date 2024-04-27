'use client';
import {CartContext} from "@/components/AppContext";
import Bars2 from "@/components/icons/Bars2";
import ShoppingCart from "@/components/icons/ShoppingCart";
import {signOut, useSession} from "next-auth/react";
import Link from "next/link";
import {useContext} from "react";
import React, { useState, useEffect } from 'react';
import ReactSwitch from "react-switch";
/*
Sub forma de tabele in admin:
1) pe admin o metrica de cate ori s a intrat pe fiecare pagina
2) de cate ori s a accesat pag x din pag y

imagini carousel si editare de admin, accesari
Use a looped animation for the homepage banner to attract attention.
Special Offers Pop-Up:
Create a pop-up for special deals that slides in like a pizza box opening.
Add a subtle bounce or shake effect to draw attention.
Cheese Stretch Effect:
When hovering over menu items, create a cheese stretch animation to simulate the look of pulling a slice away from a whole pizza.
pagina produs cu recenzii

*/
function AuthLinks({status, userName}) {
  if (status === 'authenticated') {
    return (
      <>
        <Link href={'/profile'} className="whitespace-nowrap text-white font-semibold hover:text-primary">
          Hello, {userName}
        </Link>
        <button
          onClick={() => signOut({ callbackUrl: '/login' })}
          className="bg-primary rounded-full text-white px-8 py-2 hover:text-primary hover:bg-white">
          Logout
        </button>
      </>
    );
  }
  if (status === 'unauthenticated') {
    return (
      <>
        <Link href={'/login'} className="text-white font-semibold hover:text-primary">Login</Link>
        <Link href={'/register'} className="bg-primary rounded-full text-white px-8 py-2 hover:text-primary hover:bg-white">
          Register
        </Link>
      </>
    );
  }
}

export default function Header({ darkMode, toggleTheme }) {
  const session = useSession();
  const status = session?.status;
  const userData = session.data?.user;
  let userName = userData?.name || userData?.email;
  const {cartProducts} = useContext(CartContext);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  console.log(session);
  if (userName && userName.includes(' ')) {
    userName = userName.split(' ')[0];
  }
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY < 200);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <header className={`sticky top-0 z-50 bg-black transition-opacity duration-500 ${isVisible ? '' : 'opacity-0 pointer-events-none'}`}>
      <div className="container mx-auto px-6 md:px-10 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div>
              <Link href={'/'}>
                <img src="/logo.png" alt="logo" style={{  height: '60px' }}/>
              </Link>
            </div>
            <nav className="hidden md:flex items-center gap-8 text-gray-300 font-semibold ml-8">
              <Link href={'/'} className="hover:text-primary">Home</Link>
              <Link href={'/menu'} className="hover:text-primary">Menu</Link>
              <Link href={'/#about'} className="hover:text-primary">About</Link>
              <Link href={'/#contact'} className="hover:text-primary">Contact</Link>
              <ReactSwitch onChange={toggleTheme} checked={darkMode}/>
            </nav>
          </div>
          <div className="flex items-center gap-8">
            <Link href={'/cart'} className="relative">
              <ShoppingCart color="white" />
              {cartProducts?.length > 0 && (
                <span className="absolute -top-2 -right-4 bg-primary text-white text-xs py-1 px-1 rounded-full leading-3">
                  {cartProducts.length}
                </span>
              )}
            </Link>
            <button
              className="p-1 border md:hidden"
              onClick={() => setMobileNavOpen(prev => !prev)}>
              <Bars2 />
            </button>
            <nav className="hidden md:flex items-center gap-4 text-gray-300 font-semibold">
              <AuthLinks status={status} userName={userName} />
            </nav>
          </div>
        </div>
        {mobileNavOpen && (
          <div
            onClick={() => setMobileNavOpen(false)}
            className="md:hidden p-4 text-gray-300 rounded-lg mt-2 flex flex-col gap-2 text-center"
          >
            <Link href={'/'} >Home</Link>
            <Link href={'/menu'}>Menu</Link>
            <Link href={'/#about'}>About</Link>
            <Link href={'/#contact'}>Contact</Link>
            <ReactSwitch onChange={toggleTheme} checked={darkMode}/>
            <AuthLinks status={status} userName={userName} />
          </div>
        )}
      </div>
    </header>

  );
}
