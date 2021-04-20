import localData from '../data/localData.json'

export default function getLocalProjectData (projectName) {
	const data = localData.localProjects;

	const wantedProject = data.map(project => {
		if (project.name === projectName)
			return project;
	})
	return wantedProject;
}
