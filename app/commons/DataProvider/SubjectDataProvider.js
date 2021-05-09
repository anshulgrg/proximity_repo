
let db = require('../../../dbmanager/mysql/db')

let SubjectDataProvider = {

	create: function(body){
        let query = "INSERT INTO Subject ( `subjectName` , `createdBy` , `editedBy` ) VALUES ( ? , ?, ?) ";
        return db.querySql(query, [ body.subjectName , body.userId , body.userId ]);
    },

    getById: function(id){
        let query = "SELECT * FROM Subject where subjectId = ?";
        return db.querySql(query, [id]);
    },

    deleteById : function(id){
        try{
            let query = "Delete from Subject where subjectId = ?";
            let out =  db.querySql(query,[id]);
            return "Deleted successfully";
        }catch(err){
            return err;
        }   
        
    },

    updateById: function(body){
        console.log("body : " , body)
        try{
            let query3 = "UPDATE Subject SET subjectName = ? , editedBy = ? where subjectId = ?";
            return db.querySql(query, [body.subjectName, body.userId , body.subjectId])
        }
        catch(err){
            return err;
        }
    }

};

module.exports = SubjectDataProvider;