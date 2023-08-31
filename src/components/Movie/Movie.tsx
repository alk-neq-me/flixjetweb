import React from 'react'
import { Movie as MovieType } from '@/lib/movies'
import Poster from '../Poster';
import { Button } from '../ui/Button';

interface MovieProps extends MovieType {}

function Movie(props: MovieProps) {
  const {
    poster_path,
    id,
    release_date,
    adult,
    vote_average,
    title,
    overview
  } = props;

  return (
    <div className='p-12'>
      <div className="flex flex-col">
        <div className="flex flex-row items-center justify-start gap-5">
          <div className="w-[120px]">
            <Poster uri={poster_path} tmdbid={id.toString()} />
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl">{title}</h1>
            <p className="text-zinc-500 text-sm">{release_date}</p>
            <p className="text-zinc-500 text-sm">Adult | {adult ? "18+" : "Not"}</p>
            <p className="text-zinc-500 text-sm">Rating | {vote_average}</p>
          </div>
        </div>
        <div className="border-t border-zinc-500 my-5" />
        <div>
          <Button variant="outline" className="w-full">Watch later</Button>
        </div>
      </div>

      <div className="mt-3">
        <p>{overview}</p>
      </div>
    </div>
  )
}

export default Movie
