let db = require('../../../dbmanager/mysql/db')

let searchDataProvider = {

    

    searchVideo : async function(req) {
        console.log("inside data provider");
        let tagArray = [];
        let subjectArray = [];
        let courseArray = [];

        console.log(req.query);
        if(req.query.tags){
            tagArray = req.query.tags.split(',');
        }
        if(req.query.subjects){
            subjectArray = req.query.subjects.split(',');
        }
        if(req.query.courses){
            courseArray = req.query.courses.split(',');
        }

        let query = "select * from video";
        console.log("query1" ,query);
        if(tagArray.length > 0 || subjectArray.length > 0 || courseArray.length > 0){
            query += " where ";
        }
        if(tagArray.length > 0){
            tagArray.forEach(element => {
                query += " tags like '%" + element + "%'" + " or" 
            });
            query = query.substr(0,query.length-3) 
        }
        
        console.log("query2" , query);
        if(subjectArray.length > 0){
            query += " and ";
            subjectArray.forEach(element => {
                query += " subjects like '%" + element + "%'" + " or" 
            });
            query = query.substr(0,query.length-3)
        }
        
        console.log("query3",query);
        if(courseArray.length > 0){
            query += " and ";
            courseArray.forEach(element => {
                query += " courses like '%" + element + "%'" + " or" 
            });
            query = query.substr(0,query.length-3);
        }

        
        console.log("query" , query);

        let out =  await db.querySql(query);
        console.log("hi")
        console.log("out" , out);
        return out;
    },
    searchWebinar : async function(req) {
        console.log("inside data provider");
        let tagArray = [];
        let subjectArray = [];
        let courseArray = [];

        console.log(req.query);
        if(req.query.tags){
            tagArray = req.query.tags.split(',');
        }
        if(req.query.subjects){
            subjectArray = req.query.subjects.split(',');
        }
        if(req.query.courses){
            courseArray = req.query.courses.split(',');
        }

        let query = "select * from webinar";
        console.log("query1" ,query);
        if(tagArray.length > 0 || subjectArray.length > 0 || courseArray.length > 0){
            query += " where ";
        }
        if(tagArray.length > 0){
            tagArray.forEach(element => {
                query += " tags like '%" + element + "%'" + " or" 
            });
            query = query.substr(0,query.length-3) 
        }
        
        console.log("query2" , query);
        if(subjectArray.length > 0){
            query += " and ";
            subjectArray.forEach(element => {
                query += " subjects like '%" + element + "%'" + " or" 
            });
            query = query.substr(0,query.length-3)
        }
        
        console.log("query3",query);
        if(courseArray.length > 0){
            query += " and ";
            courseArray.forEach(element => {
                query += " courses like '%" + element + "%'" + " or" 
            });
            query = query.substr(0,query.length-3);
        }

        
        console.log("query" , query);

        let out =  await db.querySql(query);
        return out;
    },
    searchWebinarByCount:async function(req){
        let query1 = "select * from webinar order by viewCount desc";
        let out = await db.querySql(query1);

        return out;
    },
    searchVideoByCount:async function(req){

        let query1 = "select * from video order by viewCount desc";
        let out = await db.querySql(query1);

        return out;
    }
};
module.exports = searchDataProvider;