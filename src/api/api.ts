import axios, { AxiosResponse } from "axios"

const baseURL = "https://tiktok33.p.rapidapi.com"

export const apiInstance = axios.create({
	baseURL,
	headers: {
		"x-rapidapi-host": process.env.REACT_APP_HOST,
		"x-rapidapi-key": process.env.REACT_APP_API_KEY_MAIN,
	},
})

export const apiGet = <ResponseData = unknown>(
	url: string
): Promise<AxiosResponse<ResponseData>> => {
	return apiInstance.get(url)
}
