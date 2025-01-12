import { sanityFetch } from "@/sanity/lib/fetch";
import { allproducts } from "@/sanity/lib/queries";

type Product = {
  _id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
};

export default async function Home() {
  const products: Product[] = await sanityFetch({ query: allproducts });

  return (
    <div className="p-6 font-sans">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((item) => (
          <div
            key={item._id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={item.imageUrl}
              alt={item.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{item.name}</h2>
              <p className="text-gray-600 text-sm mb-4">{item.description}</p>
              <p className="text-lg font-bold text-blue-500">Price: ${item.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
