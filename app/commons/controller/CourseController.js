let CourseService = require('../Service/CourseService');
let { success, error } = require("../../../utils/ResponseUtils");


let CourseController = {
    createCourse: async (req, res) => {
		try{
			if(req.body){
				let output =  await CourseService.createCourse(req.body);
				return success(res,output);
			}else{
				return error(res, null, 400, "Bad Request");;
			}
		}catch(err){
			console.error("Error occurred while creating Course: ", err);
			return error(res, err);
		}
	},
	
	getCourse: async (req, res) => {
		try{
			if(req.query.courseId){
				let output = await CourseService.getCourse(req.query.courseId);
				return success(res, output);
			}else{
				return error(res, null, 400, "Bad Request");
			}
		}catch(err){
			console.error("Error occurred while fetching Course: ", err);
			return error(res, err);
		}
	},

    deleteCourse : async(req,res) =>{
        try{
            if(req.query.courseId){
                console.log("req.query.id : " , req.query.id);
                let output = await CourseService.deleteCourse(req.query.courseId);
                return success(res,"Deleted Successfully");
            }else{
                return error(res,null, 400 , "Bad Request");
            }
        }catch(err){
            console.error("Error while deleting Lead with id : " , req.query.id);
            return error(res,req);
        }
    },

    updateCourse: async(req,res) =>{
		try{
			if(req.body && req.body.courseId){
				let output = await CourseService.updateCourse(req.body);
				return success(res, output);
			}else{
				return error(res,null,400,"Bad Request");
			}
		}catch(err){
			return error(res,req);
		}
		
	}
};

module.exports = CourseController;