"use client"

import { Button, buttonVariants } from "@/components/ui/Button";
import { fetchDetails } from "@/lib/movies";
import { useQuery } from "@tanstack/react-query"
import { useSearchParams } from "next/navigation"
import Link from 'next/link'
import { ChevronLeft } from "lucide-react";
import { cn } from '@/lib/utils'
import Movie from "@/components/Movie/Movie";

function Page() {
  const params = useSearchParams()
  const tmdbid = params.get("tmdbid");

  const {
    data,
    isLoading,
    isError,
    error
  } = useQuery({
    queryKey: ["movie", tmdbid],
    queryFn: () => fetchDetails(tmdbid),
    enabled: tmdbid !== null,
  })

  if (isLoading) return <h1>Loading...</h1>
  if (isError) return <h1>Error: <pre>{JSON.stringify(error)}</pre></h1>

  return (
    <div className="flex mx-auto w-full lg:w-[750px] flex-col justify-center pt-[120px]">
      <Link href="/" className={cn(buttonVariants({variant: "ghost"}), "text-zinc-100 hover:text-zinc-900 self-start -mt-20")}>
        <ChevronLeft className="mr-2 h-4 w-4" />
      </Link>

      <Movie {...data} />
    </div>
  )
}

export default Page
