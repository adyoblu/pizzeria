'use client';
import UserTabs from "@/components/layout/UserTabs";
import {useProfile} from "@/components/UseProfile";
import Link from "next/link";
import {useEffect, useState} from "react";
import Image from 'next/image'

export default function UsersPage() {

  const [users, setUsers] = useState([]);
  const {loading,data} = useProfile();

  useEffect(() => {
    fetch('/api/users').then(response => {
      response.json().then(users => {
        setUsers(users);
      });
    })
  }, []);

  if (loading) {
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
        <p className="dark: text-white">Loading users...</p>
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

  if (!data.admin) {
    return 'Not an admin';
  }

  return (
    <section className="max-w-2xl mx-auto mt-8">
      <UserTabs isAdmin={true} />
      <div className="mt-8">
        {users?.length > 0 && users.map(user => (
          <div
            key={user._id}
            className="bg-gray-100 rounded-lg mb-2 p-1 px-4 flex items-center gap-4">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 grow">
              <div className="text-gray-900">
                {!!user.name && (<span>{user.name}</span>)}
                {!user.name && (<span className="italic">No name</span>)}
              </div>
              <span className="text-gray-500">{user.email}</span>
            </div>
            <div>
              <Link className="button" href={'/users/'+user._id}>
                Edit
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}