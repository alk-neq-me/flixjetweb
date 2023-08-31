import Link from "next/link";
import { buttonVariants } from "./ui/Button";
import { Bell } from "lucide-react";

async function Navbar() {
  return (
    <div className="fixed top-0 inset-x-0 h-fit bg-background z-[10] py-2">
      <div className="container max-w-7xl h-full mx-auto flex items-center justify-between gap-2">
        <div className="hidden md:flex flex-row items-center justify-start gap-10 text-zinc-300 hover:text-white">
          <Link href="/" className="flex gap-2 items-center">
            <h1 className="text-zinc-300 hover:text-white">Popular</h1>
          </Link>

          <Link href="/" className="flex gap-2 items-center">
            <h1 className="text-zinc-300 hover:text-white">Movies</h1>
          </Link>

          <Link href="/" className="flex gap-2 items-center">
            <h1 className="text-zinc-300 hover:text-white">TV Shows</h1>
          </Link>
        </div>

        {/* Search bar */}

        <Link href="/" className={buttonVariants({ variant: "destructive" })}>
          <Bell className="w-6 h-6" />
        </Link>
      </div>
    </div>
  )
}

export default Navbar;
