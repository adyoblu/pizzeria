'use client';
import Right from "@/components/icons/Right";
export default function AboutPage() {
    const whyItems = [
        {
          title: "Gourmet Quality",
          description:
            "Our pizzas are crafted with the finest ingredients, ensuring a gourmet dining experience with every bite.",
        },
        {
          title: "Affordable Indulgence",
          description:
            "Enjoy premium pizzas at great prices, making luxury accessible to everyone.",
        },
        {
          title: "Variety of Flavors",
          description:
            "From classic Margherita to exotic flavors, our menu offers a wide range of options to satisfy all pizza lovers.",
        },
      ];      
      return (
        <div className="md:py-10 w-full flex flex-col items-center px-10 md:px-20">
          <span className="text-black font-bold text-3xl md:text-5xl">
            Why <br />
            Choosing Us
          </span>
          <div className="md:py-8 flex flex-col md:flex-row items-center gap-7 md:gap-14 mt-8 md:mt-0">
            {whyItems.map((item) => (
              <div key={item.title} className="flex flex-col">
                <span className="font-bold text-gray-900 text-xl md:text-2xl">
                  {item.title}
                </span>
                <p className="mt-5 font-light text-gray-900 max-w-xs md:max-w-md">
                  {item.description}
                </p>
                <div className="flex items-center gap-4 mt-4 cursor-pointer">
                  {/* Additional content here */}
                </div>
              </div>
            ))}
          </div>
        </div>
    );
  }
  