const { success } = require('../../../utils/ResponseUtils');
let SubjectDataProvider = require('../DataProvider/SubjectDataProvider');

let SubjectService = {

	createSubject: async function(body){
        try {
		if(body){
			let output =  await SubjectDataProvider.create(body);
			console.log("OUTPUT IS",output);
            return output.insertId;
		}
		return null;
    }
    catch(err){
        console.log("ERRO ROCCURED",err)
    }
	},

	getSubject: async function(id){
        console.log("inside service");
        try{
            let results =  await SubjectDataProvider.getById(id);
		    console.log("results", results);
		    if(results && results.length>0){
			    return results[0];
		    }
		    return null;
        }
        catch(err){
            console.log("error occured");
            return err;
        }
		
	},

    deleteSubject: async function(id){
        try{
            let output = await SubjectDataProvider.deleteById(id);
            return "Lead deleted successfully.";
        }catch(err){
            return err;
        }
        
    },

	updateSubject: async function(body){
		try{
			let results = await SubjectDataProvider.updateById(body);
			if(results && results.length > 0){
				return results[0];
			}
			return null;
		}catch(err){
			return "Error Occured";
		}
	}
};


module.exports = SubjectService;