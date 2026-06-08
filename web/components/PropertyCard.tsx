import Link from "next/link";
import Image from "next/image";

export default function PropertyCard({ property }: any) {
  const displayImages = property.images.slice(0, 4);
  const hasMoreImages = property.images.length > 4;

  return (
    <Link href={`/properties/${property.id}`}>
      <div className="rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition overflow-hidden cursor-pointer group">
        
        {/* IMAGE GRID */}
        <div className="grid grid-cols-2 gap-1 bg-gray-100 relative overflow-hidden h-[240px]">
          {displayImages.map((image: string, index: number) => (
            <div
              key={index}
              className="relative overflow-hidden group/img"
            >
              <Image
                src={image}
                alt={`${property.title} - Image ${index + 1}`}
                fill
                className="object-cover group-hover/img:scale-105 transition duration-300"
              />
            </div>
          ))}

          {hasMoreImages && (
            <div className="relative overflow-hidden bg-[#11b5ae] flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-2xl font-bold">
                  +{property.images.length - 4}
                </div>
                <div className="text-xs">More</div>
              </div>
            </div>
          )}
        </div>

        {/* CARD INFO */}
        <div className="p-4">
          <h2 className="text-lg font-bold text-[#0d0d3f] truncate">
            {property.title}
          </h2>

          <div className="flex items-center gap-1 text-gray-600 text-sm mt-1">
            📍 {property.location}
          </div>

          <div className="flex justify-between items-center mt-3">
            <span className="text-[#11b5ae] font-bold text-lg">
              {property.price}
            </span>
            <span className="text-xs bg-[#eafaf8] text-[#11b5ae] px-3 py-1 rounded-full font-medium">
              {property.category}
            </span>
          </div>

          <button className="mt-4 w-full bg-[#11b5ae] hover:bg-[#0e9b92] text-white py-2 rounded-lg font-semibold transition">
            View Details
          </button>
        </div>

      </div>
    </Link>
  );
}