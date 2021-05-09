let CourseDataProvider = require('../DataProvider/CourseDataProvider');

let CourseService = {

	createCourse: async function(body){
		if(body){
			let output =  await CourseDataProvider.create(body);
			return output.insertId;
		}
		return null;
	},

	getCourse: async function(id){
		let results =  await CourseDataProvider.getById(id);
		console.log("results", results);
		if(results && results.length>0){
			return results[0];
		}
		return null;
	},

    deleteCourse: async function(id){
        try{
            let output = await CourseDataProvider.deleteById(id);
            return "Lead deleted successfully.";
        }catch(err){
            return null;
        }
        
    },

	updateCourse: async function(body){
		try{
			let results = await CourseDataProvider.updateById(body);
			if(results && results.length > 0){
				return results[0];
			}
			return null;
		}catch(err){
			return null;
		}
	}
};


module.exports = CourseService;