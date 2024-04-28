'use client';
import UserForm from "@/components/layout/UserForm";
import UserTabs from "@/components/layout/UserTabs";
import {useSession} from "next-auth/react";
import {redirect} from "next/navigation";
import {useEffect, useState} from "react";
import toast from "react-hot-toast";
import Image from 'next/image'

export default function ProfilePage() {
  const session = useSession();

  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [profileFetched, setProfileFetched] = useState(false);
  const {status} = session;

  useEffect(() => {
    if (status === 'authenticated') {
      fetch('/api/profile').then(response => {
        response.json().then(data => {
          setUser(data);
          setIsAdmin(data.admin);
          setProfileFetched(true);
        })
      });
    }
  }, [session, status]);

  async function handleProfileInfoUpdate(ev, data) {
    ev.preventDefault();

    const savingPromise = new Promise(async (resolve, reject) => {
      const response = await fetch('/api/profile', {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data),
      });
      if (response.ok)
        resolve()
      else
        reject();
    });

    await toast.promise(savingPromise, {
      loading: 'Saving...',
      success: 'Profile saved!',
      error: 'Error',
    });

  }

  if (status === 'loading' || !profileFetched) {
      return (
        <div className="loading-container">
          <div className="pizzaSpinner">
            <Image
              src="/Jalapenopizza.png"
              alt="Loading"
              width={100}
              height={100}
              className="pizza-spinner"
            />
          </div>
          <p className="text-primary dark:text-white">Loading...</p>
          <style jsx>{`
            .loading-container {
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
            }
            .pizza-spinner {
              animation: spin 2s linear infinite;
              width: 100px; /* Adjust the width as needed */
            }
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}</style>
        </div>
      );
  }

  if (status === 'unauthenticated') {
    return redirect('/login');
  }

  return (
    <section className="mt-8 max-w-4xl mx-auto p-4">
      <UserTabs isAdmin={isAdmin} />
      <div className="max-w-2xl mx-auto mt-8">
        <UserForm user={user} onSave={handleProfileInfoUpdate} />
      </div>
    </section>
  );
}