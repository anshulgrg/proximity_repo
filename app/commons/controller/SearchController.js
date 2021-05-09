let { success, error } = require("../../../utils/ResponseUtils");
let SearchService = require("../Service/SearchService");

let SearchController = {

    searchVideo : async (req,res) => {
        
        try{
            console.log("inside controller");
            let output = await SearchService.searchVideo(req);
            return success(res,output);
        }
        catch(err){
            return err;
        }
    },
    searchWebinar : async (req,res) => {
        try{
            console.log("inside controller");
            let output = await SearchService.searchWebinar(req);
            return success(res,output);
        }
        catch(err){
            return err;
        }
    },

    searchVideoByCount:  async (req,res) => {
        try{
            console.log("inside controller");
            let output = await SearchService.searchVideoByCount(req);
            return success(res,output);
        }
        catch(err){
            return err;
        }
    },
    searchWebinarByCount:  async (req,res) => {
        try{
            console.log("inside controller");
            let output = await SearchService.searchWebinarByCount(req);
            return success(res,output);
        }
        catch(err){
            return err;
        }
    },

};

module.exports = SearchController;