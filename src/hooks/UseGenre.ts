import genre from "../data/genre";
// import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenre = () =>
  // useData<Platform>("/platforms/lists/parents")
  ({
    data: genre,
    isLoading: false,
    error: null,
  });

export default useGenre;
