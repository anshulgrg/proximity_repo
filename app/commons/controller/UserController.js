let UserService = require('../Service/UserService');
let { success, error } = require("../../../utils/ResponseUtils");


let UserController = {

	createStudent: async (req, res) => {
		try{
			if(req.body){
                console.log(req.body);
				let output =  await UserService.createStudent(req.body);
				return success(res, output);
			}else{
				return error(res, null, 400, "Bad Request");
			}
		}catch(err){
			console.error("Error occurred while creating Student: ", err);
			return error(res, err);
		}
	},
	
	getStudent: async (req, res) => {
		try{
			if(req.query.id){
				let output = await UserService.getStudent(req.query.id);
				return success(res, output);
			}else{
				return error(res, null, 400, "Bad Request");
			}
		}catch(err){
			console.error("Error occurred while fetching Student: ", err);
			return error(res, err);
		}
	},

    createInstructor: async (req, res) => {
		try{
			if(req.body){
                console.log(req.body);
				let output =  await UserService.createInstructor(req.body);
				return success(res, output);
			}else{
				return error(res, null, 400, "Bad Request");
			}
		}catch(err){
			console.error("Error occurred while creating Student: ", err);
			return error(res, err);
		}
	},
	
	getInstructor: async (req, res) => {
		try{
			if(req.query.id){
				let output = await UserService.getInstructor(req.query.id);
				return success(res, output);
			}else{
				return error(res, null, 400, "Bad Request");
			}
		}catch(err){
			console.error("Error occurred while fetching Instructor: ", err);
			return error(res, err);
		}
	}
}

module.exports = UserController;