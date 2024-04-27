'use client';
import Right from "@/components/icons/Right";
import Image from "next/image";
/*
Sub forma de tabele in admin:
1) pe admin o metrica de cate ori s a intrat pe fiecare pagina
2) de cate ori s a accesat pag x din pag y
imagini carousel si editare de admin, login cu user, accesari, curier
Pizza Making Animation:
show a dough ball being rolled out, toppings being added, and the pizza going into an oven.
Use a looped animation for the homepage banner to attract attention.
Delivery Tracker:
Implement a delivery tracker with a moving scooter or car icon on a map.
Animate the vehicle’s movement to show the delivery progress.
Special Offers Pop-Up:
Create a pop-up for special deals that slides in like a pizza box opening.
Add a subtle bounce or shake effect to draw attention.
Cheese Stretch Effect:
When hovering over menu items, create a cheese stretch animation to simulate the look of pulling a slice away from a whole pizza.


search bar pentru itemele din menu
pagina produs cu recenzii

butonul learn more sa il fac mai mic la fel ca cel de sub descrierea principala
sa iau fundal rosu de la cici pizza

*/
export default function Hero() {
  return (
    <section className="hero md:mt-4">
      <div className="py-8 md:py-12">
      <h1 className="text-4xl font-semibold dark:text-white">
          Everything<br />
          is better<br />
          with a&nbsp;
          <span className="text-primary">
            Pizza
          </span>
        </h1>

        <p className="my-6 text-gray-500 text-sm dark:text-white">
          Pizza is the missing piece that makes every day complete, a simple yet delicious joy in life
        </p>
        <div className="flex gap-4 text-sm">
        <button className="justify-center bg-primary uppercase flex items-center gap-2 text-white px-4 py-2 rounded-full hover:text-primary hover:bg-orange-200"
          style={{ width: 'auto' }} onClick={() => window.location.href='/menu'}>
          Order now
          <Right />
        </button>
        </div>
      </div>
      <div className="relative hidden md:block">
        <Image src={'/Jalapenopizza.png'} loading="eager" alt="Jalapenopizza" priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill style={{ objectFit: 'contain' }} className="rotate" />
      </div>

      <style>
      {`
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .rotate {
          animation: rotate 10s linear infinite;
          transform-origin: center;
        }

        .rotate:hover {
          animation-play-state: paused;
        }
      `}
      </style>

    </section>
  );
}