import Link from "next/link";

async function Navbar() {
  return (
    <div className="fixed top-0 inset-x-0 h-fit bg-background border-b border-zinc-600 z-[10] py-3">
      <div className="container max-w-7xl h-full mx-auto flex items-center justify-between gap-2">
        {/* Logo */}
        <Link href="/" className="flex flex-row gap-2 items-center">
          <h1 className="text-2xl">Flixjet</h1>
          <p className="hidden text-zinc-700 text-sm font-medium md:block">Net</p>
        </Link>

        {/* Search bar */}
      </div>
    </div>
  )
}

export default Navbar;
