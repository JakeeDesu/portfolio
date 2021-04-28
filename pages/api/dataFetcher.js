
import { promises as fs } from 'fs'
import path from 'path'

/************************** (load / save)  (from/to) local data ****************************/

const LocalDataPath = "components/data"
const LocalGitData = "LOCALGITDATA.json"

export const loadLocalData = async () => {

	const dataDirPath = path.join(process.cwd(), LocalDataPath)
	const existedFiles = await fs.readdir(dataDirPath)
	if (existedFiles.includes(LocalGitData)) {
		const filePath = path.join(dataDirPath, LocalGitData)
		const fileContent = await fs.readFile(filePath, 'utf8')
		const content = JSON.parse(fileContent)
		return { loaded: true, content: content.data.user }
	}
	else
		return { loaded: false, content: {} }
}

export const saveLocalData = (dataString) => {

	const dataDirPath = path.join(process.cwd(), LocalDataPath)
	const filePath = path.join(dataDirPath, LocalGitData)
	fs.writeFile(filePath, dataString, (err) => {
		console.log("error during writing data into localdata error raised : ", err)
	})

}


export const queryData = async (graphQl_ENDPOINT, REQUEST) => {


	const data = await fetch(graphQl_ENDPOINT, REQUEST).then(res => res.text()).then(response => {
		const jsonData = JSON.parse(response)
		if (jsonData["message"] === "Bad credentials")
			return {
				fetched: false,
				fetchedData: {}
			}
		else
			return {
				fetched: true,
				fetchedData: response
			}
	}).catch(error => {
		if (error)
			console.log('fetching error : ', error)
		return {
			fetched: false,
			fetchedData: {}
		}
	})

	return data
}
