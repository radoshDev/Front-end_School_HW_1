import axios from "axios"

const baseURL = "https://tiktok33.p.rapidapi.com"

export const API = axios.create({
	baseURL,
	headers: {
		"x-rapidapi-host": process.env.REACT_APP_HOST,
		"x-rapidapi-key": process.env.REACT_APP_API_KEY_MAIN,
	},
})
