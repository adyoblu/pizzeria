'use client';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';
import React from 'react';
import Image from 'next/image'
import Link from 'next/link';

export default function Footer(){
    return (
        <footer className="bg-primary2 text-white p-4">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center">
            <nav className="container mx-auto hidden md:flex md:justify-center md:items-start mt-4 w-full">
            <div className="mb-4 md:mb-0 w-full md:w-auto">
                <div className="mb-4 md:mb-0">
                <Image
                  src="/logofooter.png"
                  alt="Mamma Mia Pizza"
                  layout="responsive"
                  width={500}
                  height={300}
                />
                </div>
                <div className="flex justify-center space-x-4 mt-4">
                    <a href="https://www.facebook.com" className="hover:text-black hover:cursor-pointer text-2xl">
                    <FaFacebookF />
                    </a>
                    <a href="https://twitter.com" className="hover:text-black hover:cursor-pointer text-2xl">
                    <FaTwitter />
                    </a>
                    <a href="https://www.instagram.com" className="hover:text-black hover:cursor-pointer text-2xl">
                    <FaInstagram />
                    </a>
                    <a href="https://www.youtube.com" className="hover:text-black hover:cursor-pointer text-2xl">
                    <FaYoutube />
                    </a>
                    <a href="https://www.tiktok.com" className="hover:text-black hover:cursor-pointer text-2xl">
                    <FaTiktok />
                    </a>
                </div>
                </div>
              <div className="flex justify-around w-full max-w-2xl">
                {/* Column 1 */}
                <div className="flex flex-col space-y-4">
                  <Link href={'/faq'} className="text-sm hover:underline">FAQ</Link>
                  <a href="/#contact" className="text-sm hover:underline">Contact Us</a>
                  <a href="#" className="text-sm hover:underline">Our Story</a>
                </div>
                {/* Column 2 */}
                <div className="flex flex-col space-y-4">
                  <a href="#" className="text-sm hover:underline">Order Online</a>
                  <a href="#" className="text-sm hover:underline">Careers</a>
                  <a href="#" className="text-sm hover:underline">Privacy Policy</a>
                </div>
                {/* Column 3 */}
                <div className="flex flex-col space-y-4">
                  <a href="#" className="text-sm hover:underline">Terms & Conditions</a>
                  <a href="#" className="text-sm hover:underline">Franchising</a>
                  <a href="#" className="text-sm hover:underline">Nutrition</a>
                  <a href="#" className="text-sm hover:underline">Ingredients Statements</a>
                </div>
              </div>
            </nav>
          </div>
          {/* Nav for smaller screens */}
          <nav className="container mx-auto flex md:hidden flex-col items-center justify-center space-y-4 mt-4">
            <div className="mb-4 md:mb-0 w-full md:w-auto container mx-auto flex flex-col md:flex-row justify-between items-center text-center">
                <h2 className="text-3xl font-bold">Mamma Mia&apos;s Pizza</h2>
                <p className="text-sm">THE BEST PIZZA VALUE ANYWHERE</p>
                <div className="flex justify-center space-x-4 mt-4">
                    <a href="https://www.facebook.com" className="hover:text-black hover:cursor-pointer">
                    <FaFacebookF />
                    </a>
                    <a href="https://twitter.com" className="hover:text-black hover:cursor-pointer">
                    <FaTwitter />
                    </a>
                    <a href="https://www.instagram.com" className="hover:text-black hover:cursor-pointer">
                    <FaInstagram />
                    </a>
                    <a href="https://www.youtube.com" className="hover:text-black hover:cursor-pointer">
                    <FaYoutube />
                    </a>
                    <a href="https://www.tiktok.com" className="hover:text-black hover:cursor-pointer">
                    <FaTiktok />
                    </a>
                </div>
            </div>
            {['FAQ', 'Contact Us', 'Our Story', 'Order Online', 'Careers', 'Privacy Policy', 'Terms & Conditions', 'Franchising', 'Nutrition', 'Ingredients Statements'].map((link, index) => (
                <a key={index} href="" className="text-sm hover:underline">{link}</a>
            ))}
          </nav>
        </footer>
      );
}
