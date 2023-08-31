import Link from "next/link";
import { cn } from '@/lib/utils'
import { buttonVariants } from "./ui/Button";

async function SlideBar() {
  return (
    <div className="fixed h-full border-r border-zinc-600 z-[10] py-3">
      <div className="container h-full flex flex-col items-start justify-between gap-2">
        <div className="flax felx-col gap-5 w-full">
          <Link href="/" className="mb-10 flex flex-col gap-2 items-center">
            <h1 className="text-2xl leading-tight font-bold">Flix</h1>
          </Link>

          {/* Item */}
        </div>

        <Link href="#" className={cn(buttonVariants({variant: "ghost"}), "p-0 text-zinc-300 hover:text-zinc-900")}>Settings</Link>

        {/* Search bar */}
      </div>
    </div>
  )
}

export default SlideBar;
