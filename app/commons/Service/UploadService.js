let UploadDataProvider = require('../DataProvider/UploadDataProvider');

let UploadService = {

	uploadVideo: async function(req){
		if(req){
			let output =  await UploadDataProvider.uploadVideo(req);
			return output.insertId;
		}
		return null;
	},
    uploadWebinar: async function(req){
		if(req){
			let output =  await UploadDataProvider.uploadWebinar(req);
			return output.insertId;
		}
		return null;
	},

    getVideo : async function(req){
        if(req.query.videoId){
            console.log("inside service");
			let output =  await UploadDataProvider.getVideo(req);
			return output;
		}
		return null;

    },

    getWebinar : async function(req){
        if(req){
			let output =  await UploadDataProvider.getWebinar(req);
			return output;
		}
		return null;
    },

    searchVideoByCount:async function(req){
        if(req){
			let output =  await UploadDataProvider.searchVideoByCount(req);
			return output;
		}
		return null;
    },
    searchWebinarByCount:async function(req){
        if(req){
			let output =  await UploadDataProvider.searchWebinarByCount(req);
			return output;
		}
		return null;
    }
};

module.exports = UploadService;