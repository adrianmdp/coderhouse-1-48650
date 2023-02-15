import axios from "axios";

const movies = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "0bce2b3619ac231ad6ce364b6d8015ab",
  },
});

export const api = { movies };
