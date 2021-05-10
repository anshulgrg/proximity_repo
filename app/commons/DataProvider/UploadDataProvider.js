let db = require('../../../dbmanager/mysql/db')

let UploadDataProvider = {

    uploadVideo : function(req){

        console.log("req : " , req);
        let tags ;
        let subjects;
        let courses;
        let tagIds;

        if(req.body.tags){
            tags = req.body.tags;
            let tagArray = tags.split(',');
    
             tagIds = tagArray.map( async element => {    
                let query = "select tagId from tag where tagName = ?";
                let out = db.querySql(query,[element]);
                console.log(out.length);
                if(out && out.length > 0){
                    return out[0];
                } else{
                    let query1 = "Insert into tag (`tagName` , `createdBy` ) values (?,?)";
                    return db.querySql(query1,[element,req.body.userId]);                                       
                }                
            });
        }
        if(req.body.subjects){
            subjects = req.body.subjects;
        }
        if(req.body.courses){
            courses = req.body.courses;
        }

        let finalQuery = "Insert into video (`videoName` , `tags`, `uploadedBy`,`subjects`,`courses`,`viewCount`) values (?,?,?,?,?,?)";
        return db.querySql(finalQuery , [req.file.originalname , tags, req.body.userId , subjects , courses , 0 ]); 

    },

    uploadWebinar : async function(req){

        console.log("req : " , req);
        let tags ;
        let subjects;
        let courses;
        let tagIds;

        if(req.body.tags){
            tags = req.body.tags;
            let tagArray = tags.split(',');
    
             tagIds = tagArray.map( async element => {    
                let query = "select tagId from tag where tagName = ?";
                let out = db.querySql(query,[element]);

                if(out && out.length > 0){
                    return out[0];
                } else{
                    let query1 = "Insert into tag (`tagName` , `createdBy` ) values (?,?)";
                    return db.querySql(query1,[element,req.body.userId]);                                       
                }                
            });
        }
        if(req.body.subjects){
            subjects = req.body.subjects;
        }
        if(req.body.courses){
            courses = req.body.courses;
        }

        let finalQuery = "Insert into webinar (`webinarName` , `tags`, `uploadedBy`,`subjects`,`courses`,`viewCount`) values (?,?,?,?,?,?)";
        return  await db.querySql(finalQuery , [req.file.originalname , tags, req.body.userId , subjects , courses , 0 ]); 

    },

    getVideo : async function(req){

        if(req.query.videoId){
            console.log("inside controller");

            // increment viewcount for video views
            let query1 = "select viewCount from video where videoId = ?";
            let count = await db.querySql(query1,[req.query.videoId]);
            console.log(count);
            let newCount = count[0].viewCount+1;
            let query = "update video set viewCount = ? where videoId = ?";

            let out1=  await db.querySql(query,[newCount,req.query.videoId]);

            //increment viewcount of course
            let courses = count[0].courses.split(',');

            courses.forEach(async element => {
                let query2 = "select viewCount from course where courseName = ?";
                count = db.querySql(query2,[element]);
                newCount = count[0].viewCount + 1;
                let query3 = "update course set viewCount = ? where courseName = ?";
                await db.querySql(query3,[newCount,element]);
            });

            return "Successfful";


        }
    },
    getWebinar : async function(req){

        if(req.query.webinarId){
            let query1 = "select viewCount from webinar where webinarId = ?";
            let count = await db.querySql(query1,[req.query.webinarId]);
            let newCount = count[0].viewCount+1;
            let query = "update video set viewCount = ? where webinarId = ?";

            return await db.querySql(query,[newCount,req.query.webinarId]);


        }
    }

};

module.exports = UploadDataProvider;
