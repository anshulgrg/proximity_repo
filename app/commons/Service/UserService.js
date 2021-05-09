let UserDataProvider = require('../DataProvider/UserDataProvider.js');

let UserService = {

	createStudent: async function(body){
		if(body){
			let output =  await UserDataProvider.createStudent(body);
			return output.insertId;
		}
		return null;
	},

	getStudent: async function(id){
		let results =  await UserDataProvider.getStudent(id);
		if(results && results.length>0){
			return results[0];
		}
		return null;
	},

    createInstructor: async function(body){
		if(body){
			let output =  await UserDataProvider.createInstructor(body);
			return output.insertId;
		}
		return null;
	},

	getInstructor: async function(id){
		let results =  await UserDataProvider.getInstructor(id);
		if(results && results.length>0){
			return results[0];
		}
		return null;
	},
};


module.exports = UserService;