import { useRouter } from "next/navigation";

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
    }} className="p-3 h-full">
    <img 
      src={poster_path} 
      alt="poster" 
      className="cursor-pointer object-contain shadow-xl rounded-lg"
    />
  </div>
}

export default Poster
