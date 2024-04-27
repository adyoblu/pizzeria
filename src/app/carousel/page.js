'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import toast from 'react-hot-toast';
import UserTabs from "@/components/layout/UserTabs";
import { useProfile } from "@/components/UseProfile";
import EditableImage from '@/components/layout/EditableImage';

export default function CarouselPage() {
  const [carouselImage, setCarouselImage] = useState(null);
  const [carousels, setCarousels] = useState([]);
  const {loading: profileLoading, data: profileData} = useProfile();
  const [editedImage, setEditedImage] = useState(null);

//   useEffect(() => {
//     fetchCarousels();
//   }, []);

//   function fetchCarousels() {
//     fetch('/api/carousel').then(res => {
//       res.json().then(carousels => {
//         setCarousels(carousels);
//       });
//     });
//   }
    async function handleCarouselSubmit(ev) {
        ev.preventDefault();
    }
  if (profileLoading) {
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
        <p className="dark: text-white">Loading Images...</p>
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
  if (!profileData.admin) {
    return 'Not an admin';
  }
  return (
    <section className="mt-8 max-w-2xl mx-auto">
        <UserTabs isAdmin={true} />
        <form className="mt-8" onSubmit={handleCarouselSubmit}>
        <div>
            <div className="p-2 rounded-lg relative max-w-[120px]">
            <EditableImage link={carouselImage} setLink={setCarouselImage} />
            </div>
        </div>
        </form>
    </section>
  );
}