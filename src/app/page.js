'use client';
import Hero from "../components/layout/Hero"
import Sliding from "../components/layout/Sliding"
import HomeMenu from "../components/layout/HomeMenu"
import SectionHeaders from "../components/layout/SectionHeaders"
import Right from "@/components/icons/Right";
import Image from 'next/image';

export default function Home() {
  return (
    <>
    <div className="w-full md:h-[105vh] h-screen bg-cover relative bg-center md:px-[80px] px-8 py-[40px]" style={{ backgroundImage: 'url(/antoine-barres.jpg)' }}>
  {/* Moving clouds */}
  <div
    className="moving-clouds"
    style={{
      backgroundImage: "url('/clouds.png')",
    }}
  />

  {/* Enlarged static fog effect */}
  <div >
    <Image src="/fog-low.png" alt="Fog" layout="fill" objectFit="cover" />
  </div>

  <div className="container2">
    <h1 className="presentation-title">Mamma Mia Pizzeria</h1>
  </div>
  <div >
    <Image src="/fog-low.png" alt="Fog" layout="fill" objectFit="cover" />
  </div>

</div>

<style jsx global>{`
  .moving-clouds {
    position: absolute;
    z-index: 1;
    bottom: 0;
    transform: translateX(-50%); /* Offset the clouds by half their width */
    width: 100.625em;
    height: 75.75em;
    -webkit-animation: cloudLoop 80s linear infinite;
    animation: cloudLoop 80s linear infinite;
  }
  
  @-webkit-keyframes cloudLoop {
    0% {
      transform: translateX(-50%) translateX(0);
    }
    100% {
      transform: translateX(-50%) translateX(-100%);
    }
  }
  
  @keyframes cloudLoop {
    0% {
      transform: translateX(-50%) translateX(0);
    }
    100% {
      transform: translateX(-50%) translateX(-100%);
    }
  }
`}</style>
    <div className="max-w-4xl mx-auto p-4">
      <Hero />
      <Sliding />
      <HomeMenu />
      <section className="text-center my-16">
        <SectionHeaders 
          subHeader={'Our story'} 
          mainHeader={'About us'} />
          <div className="dark:text-white max-w-md mx-auto text-gray-500 mt-4 flex-col gap-4">
            <p className="">
            In the city&apos;s bustling heart lies Mamma Mia Pizzeria, a cozy haven where the legacy of Nonna Lucia&apos;s secret dough recipe lives on. Here, every pizza is a canvas of flavors, painted with the freshest local ingredients and a touch of Italian tradition.
            </p>
            <p>
              Over a decade of shared memories and savored moments have made Mamma Mia&apos;s more than a restaurant—it&apos;s a community cornerstone. It&apos;s where families gather, love stories blossom, and the simple joy of a well-crafted pizza brings smiles to faces young and old.
            </p>
            <p>
              Led by Mario, Nonna Lucia&apos;s grandson, Mamma Mia Pizzeria invites you to be part of our story. Join us for a slice, and let&apos;s make memories that linger long after the last bite.
            </p>
          </div>
          <button className="flex items-center border-0 gap-2 py-2 text-gray-600 font-semibold dark:text-white">
            Learn more
            <Right />
          </button>
      </section>
      
      <section className="text-center my-8">
        <SectionHeaders 
          subHeader={'Are you hesitating?'} 
          mainHeader={'Contact us'} />
      </section>
    </div>
    </>
  )
}
