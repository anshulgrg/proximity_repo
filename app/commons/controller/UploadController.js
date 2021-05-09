let UploadService = require(__dirname+'../../Service/UploadService');
let { success, error } = require("../../../utils/ResponseUtils");
var path  = require('path');


let UploadController = {

	uploadVideo: async (req, res) => {

        try{
            if(req){
                let output = await UploadService.uploadVideo(req);
                return success(res,output);
            }else{
                return  error(res, null, 400, "Bad Request");
            }
        }
        catch(err){
           return error(res,err);
        }
	},
	
	uploadWebinar: async (req, res) => {
        try{
            if(req){
                let output = await UploadService.uploadWebinar(req);
                return success(res,output);
            }else{
                return  error(res, null, 400, "Bad Request");
            }
        }
        catch(err){
            return error(res,err);
        }
    },

    getVideo : async (req,res) => {
        console.log(req.query)
        let out = await UploadService.getVideo(req);
        const file = `${path.join(__dirname , '../../../videos', req.query.filename)}`;
        res.download(file);

        
    },

    getWebinar : async (req,res) => {
        console.log(req.query)
        const file = `${path.join(__dirname , '../../../webinars', req.query.filename)}`;
        res.download(file);

        let out = await UploadService.getWebinar(req);
        return success(res,out);
    }
}

module.exports = UploadController;