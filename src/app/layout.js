'use client';
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import "./globals.css";
import {AppProvider} from "@/components/AppContext";
import {Toaster} from "react-hot-toast";
import {createContext, useState} from "react";

export const ThemeContext = createContext(null);

export default function RootLayout({ children }) {
  const [darkMode, setDarkMode] = useState(false); // Initial theme set to 'dark'
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };
  const currentYear = new Date().getFullYear();
  return (
    <html lang="en" className={`${darkMode && "dark"}`}>
        <body  className="dark:bg-neutral-900">
          <AppProvider>
            <div className="flex flex-col min-h-screen">
              <Header darkMode={darkMode} toggleTheme={toggleTheme} />
              <Toaster />
              <main className="max-w-4xl mx-auto p-4">
                {children}
              </main>
              <Footer />
              <div className="mx-auto text-white text-center text-sm bg-darkred py-4 w-full">
                <p>&copy; {currentYear} Mamma Mia&apos;s Pizzeria. All rights reserved.</p>
              </div>
            </div>
          </AppProvider>
        </body>
    </html>
  );
}
