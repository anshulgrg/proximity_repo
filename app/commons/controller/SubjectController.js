
let { success, error } = require("../../../utils/ResponseUtils");
let SubjectService = require("../Service/SubjectService");


let SubjectController = {
    createSubject: async (req, res) => {
		try{
			if(req.body){
                console.log("ENTERED CONTROLLER", req.body);
				let output =  await SubjectService.createSubject(req.body);
				return success(res,output,200);
			}else{
				return "Bad Request";
			}
		}catch(err){
			console.error("Error occurred while creating Course: ", err);
			return error(res, err);
		}
	},
	
	getSubject: async (req, res) => {
		try{
            console.log("inside controller");
            console.log("")
			if(req.query.subjectId){
				let output = await SubjectService.getSubject(req.query.subjectId);
				return success(res, output);
			}else{
				return error(res, null, 400, "Bad Request");
			}
		}catch(err){
			console.error("Error occurred while fetching Course: ", err);
			return error(res, err);
		}
	},

    deleteSubject : async(req,res) =>{
        try{
            if(req.query.subjectId){
                console.log("req.query.id : " , req.query.id);
                let output = await SubjectService.deleteSubject(req.query.subjectId);
                return success(res,"Deleted Successfully");
            }else{
                return error(res,null, 400 , "Bad Request");
            }
        }catch(err){
            console.error("Error while deleting Lead with id : " , req.query.id);
            return error(res,req);
        }
    },

    updateSubject: async(req,res) =>{
		try{
			if(req.body && req.body.subjectId){
				let output = await SubjectService.updateSubject(req.body);
				return success(res, output);
			}else{
				return error(res,null,400,"Bad Request");
			}
		}catch(err){
			return error(res,req);
		}
		
	}
};

module.exports = SubjectController;