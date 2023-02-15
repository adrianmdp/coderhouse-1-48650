import { api } from "../utils/axios"

const getTopRated = async ({ page }) => {

    const response = await api.movies.get(`/movie/top_rated?page=${page}`);

    return response.data

}

const getPopular = () => {}

export const servicesMovie = { getTopRated, getPopular }