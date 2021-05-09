
let db = require('../../../dbmanager/mysql/db')

let CourseDataProvider = {

	create: function(body){
        let query = "INSERT INTO Course (`name` , `created_by` , `edited_by` ) VALUES ( ? , ?, ?) ";
        return db.querySql(query, [body.id , body.name , body.userId , body.userId ]);
    },

    getById: function(id){
        let query = "SELECT * FROM Course where id = ?";
        return db.querySql(query, [id]);
    },

    deleteById : function(id){
        try{
            let query = "Delete from Course where id = ?";
            let out =  db.querySql(query,[id]);
            return "Deleted successfully";
        }catch(err){
            return err;
        }   
        
    },

    updateById: function(body){

        console.log("Inside provider");
        let query1 = "select * from Course where id = ?";
        let result = db.querySql(query1,[body.id]);

        console.log(result);

        if(result){
            let id = body.id;
            let name = body.name || result.name;
            let created_by = body.created_by;
            let edited_by = body.userId ;

            let query2 = "Delete from Course where id = ?";
            let out =  db.querySql(query,[id]);

            let query3 = "INSERT INTO Course (`id`, `name` , `created_by` , `edited_by` ) VALUES (?, ? , ?, ?)";
            return db.querySql(query, [id , name , created_by , edited_by ])
        }
    }

};

module.exports = CourseDataProvider;