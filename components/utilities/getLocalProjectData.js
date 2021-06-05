import localData from '../data/localData.json'

class LocalData {
	projectData = null
	constructor ( projectName ) {
		console.log("localDta constructor : ",  projectName )
		this.projectData = this.getLocalProjectData(projectName)
		console.log("project Data : ",  this.projectData )
	}
	
	projectData () {
		return this.projectData;
	}
	
	getLocalProjectData (projectName) {
		const data = localData.localProjects
		let wantedProject = null;
		data.map(project => {
			if (project.name === projectName)
				wantedProject = project;
		})
		return wantedProject;
	}

	getSkills () {
		if (!(this.projectData == null || this.projectData == undefined))
			return this.projectData.skills
		console.log("localProjectData.skills not found");
		return [""]
	}
	getTechnologies () {
		if (!(this.projectData == null || this.projectData == undefined))
			return this.projectData.technologies
		console.log("localProjectData.technologies not found");
		return [""]
	}
	getObjectives () {
		if (!(this.projectData == null || this.projectData == undefined))
			return this.projectData.objectives
		console.log("localProjectData.objectives not found");
		return [""]
	}
}

export default LocalData