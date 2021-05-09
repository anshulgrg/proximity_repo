
let searchDataProvider = require('../DataProvider/searchDataProvider');

let SearchService = {

    searchVideo : async (req,res) =>{
        try{
            console.log("inside service");
            let out = await searchDataProvider.searchVideo(req);
            return out;
        }
        catch(err){
            return err;
        }

    },
    searchWebinar : async (req,res) =>{
        try{
            console.log("inside service");
            let out = await searchDataProvider.searchWebinar(req);
            return out;
        }
        catch(err){
            return err;
        }

    },
    searchVideoByCount:async function(req){
        let output =  await searchDataProvider.searchVideoByCount(req);
		return output;
    },
    searchWebinarByCount:async function(req){
        let output =  await searchDataProvider.searchWebinarByCount(req);
		return output;
    }

};

module.exports = SearchService;


