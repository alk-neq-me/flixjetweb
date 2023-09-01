import { useRouter } from "next/navigation";
import Image from 'next/image'

interface PosterProps {
  uri: string
  tmdbid: string
}

function Poster(props: PosterProps) {
  const { uri, tmdbid } = props;
  const poster_path = "https://image.tmdb.org/t/p/w500/" + uri

  const router = useRouter()

  return <div 
    onClick={(event) => {
      event.preventDefault()
      router.push(`/movie?tmdbid=${tmdbid}`)
    }} className="cursor-pointer p-3 h-full min-w-[120px]">
    <img 
      src={poster_path} 
      alt="poster" 
      className="object-contain shadow-xl rounded-lg"
    />
  </div>
}

export default Poster
