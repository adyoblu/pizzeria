'use client';
import Hero from "../components/layout/Hero"
import Sliding from "../components/layout/Sliding"
import HomeMenu from "../components/layout/HomeMenu"
import SectionHeaders from "../components/layout/SectionHeaders"
import Right from "@/components/icons/Right";

export default function Home() {
  return (
    <>
      <Hero />
      <Sliding />
      <HomeMenu />
      <section className="text-center my-16">
        <SectionHeaders 
          subHeader={'Our story'} 
          mainHeader={'About us'} />
          <div className="dark:text-white max-w-md mx-auto text-gray-500 mt-4 flex-col gap-4">
            <p className="">
              In the city's bustling heart lies Mamma Mia Pizzeria, a cozy haven where the legacy of Nonna Lucia's secret dough recipe lives on. Here, every pizza is a canvas of flavors, painted with the freshest local ingredients and a touch of Italian tradition.
            </p>
            <p>
              Over a decade of shared memories and savored moments have made Mamma Mia's more than a restaurant—it's a community cornerstone. It's where families gather, love stories blossom, and the simple joy of a well-crafted pizza brings smiles to faces young and old.
            </p>
            <p>
              Led by Mario, Nonna Lucia's grandson, Mamma Mia Pizzeria invites you to be part of our story. Join us for a slice, and let's make memories that linger long after the last bite.
            </p>
          </div>
          <button className="flex items-center border-0 gap-2 py-2 text-gray-600 font-semibold dark:text-white">
            Learn more
            <Right />
          </button>
      </section>
      
      <section className="text-center my-8">
        <SectionHeaders 
          subHeader={'Don\'t hesitate'} 
          mainHeader={'Contact us'} />
          
      </section>
    </>
  )
}
