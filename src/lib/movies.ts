import axios from "axios";

type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[]; // You can replace this with a specific array type if needed
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};


export async function fetchPopularMovies(
  page = 1,
): Promise<Movie[]> {
  console.log(page)
  try {
    const url = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}&api_key=8265bd1679663a7ea12ac168da84d2e8`;
    const res = await axios.get(url);

    const data = res.data;
    return data.results
  } catch (error) {
    console.error('Error fetching details:', error);
    throw error;
  }
}


