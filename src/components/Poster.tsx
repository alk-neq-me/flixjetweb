interface PosterProps {
  uri: string
}

function Poster(props: PosterProps) {
  const { uri } = props;
  const poster_path = "https://image.tmdb.org/t/p/w500/" + uri

  return <div className="p-3 h-full">
    <img 
      src={poster_path} 
      alt="poster" 
      className="cursor-pointer object-contain shadow-xl rounded-lg"
    />
  </div>
}

export default Poster
