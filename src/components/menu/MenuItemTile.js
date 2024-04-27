import AddToCartButton from "@/components/menu/AddToCartButton";
import Image from 'next/image'; // Import the Image component

export default function MenuItemTile({onAddToCart, ...item}) {
  const {image, description, name, basePrice,
    sizes, extraIngredientPrices,
  } = item;
  const hasSizesOrExtras = sizes?.length > 0 || extraIngredientPrices?.length > 0;
  return (
    <div className="bg-gray-200 p-4 rounded-lg text-center
      group hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
      <div className="text-center">
        {/* Replace the img tag with the Image component */}
        <Image
          src={image}
          alt="pizza"
          width={240} // Specify the width
          height={240} // Specify the height
          className="block mx-auto" // Note: className does not apply styles to the Image component
          objectFit="contain" // This will make the image scale down if necessary to fit the container
        />
      </div>
      <h4 className="font-semibold text-xl my-3">{name}</h4>
      <p className="text-gray-500 text-sm line-clamp-3">
        {description}
      </p>
      <AddToCartButton
        image={image}
        hasSizesOrExtras={hasSizesOrExtras}
        onClick={onAddToCart}
        basePrice={basePrice}
      />
    </div>
  );
}
