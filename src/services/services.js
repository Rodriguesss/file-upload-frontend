import axios from 'axios'

const API_URL = "http://localhost:5000"

async function uploadFiles(body) {
	const promise = await axios.post(`${API_URL}/upload_files`, body)

	return promise
}

async function uploadFile(body) {
	const promise = await axios.post(`${API_URL}/upload_file`, body)

	return promise
}

export { uploadFiles, uploadFile }