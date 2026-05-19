import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow bg-white sticky top-0 z-50">
      <h1 className="text-lg font-bold text-green-700">
        Golden Nest
      </h1>

      <div className="hidden md:flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/properties">Properties</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}