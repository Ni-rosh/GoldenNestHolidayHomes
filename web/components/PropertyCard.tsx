import Link from "next/link";

export default function PropertyCard({ property }: any) {
  return (
    <div className="rounded-xl border p-4 shadow hover:shadow-lg transition">
      <h2 className="text-lg font-semibold">
        {property.location}
      </h2>

      <p className="text-gray-600">{property.price}</p>
      <p className="text-sm text-gray-500">
        {property.category}
      </p>

      <Link href={`/properties/${property.id}`}>
        <button className="mt-4 w-full bg-green-600 text-white py-2 rounded">
          View Details
        </button>
      </Link>
    </div>
  );
}