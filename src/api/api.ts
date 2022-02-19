import axios, { AxiosResponse } from "axios"

// const baseURL = "https://tiktok33.p.rapidapi.com"
const mockUrl = "/api"

export const apiInstance = axios.create({
	baseURL: mockUrl,
	headers: {
		"x-rapidapi-host": process.env.REACT_APP_HOST,
		"x-rapidapi-key": process.env.REACT_APP_API_KEY_MAIN,
	},
})

export const apiGet = async <ResponseData = unknown>(
	url: string
): Promise<AxiosResponse<ResponseData>> => {
	await delay(2000)
	return apiInstance.get(url)
}

function delay(ms: number): Promise<string> {
	// eslint-disable-next-line no-promise-executor-return
	return new Promise(resolve => setTimeout(() => resolve("After"), ms))
}
