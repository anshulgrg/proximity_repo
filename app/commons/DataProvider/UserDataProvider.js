let db = require('../../../dbmanager/mysql/db')

let UserDataProvider = {

	createStudent: function(body){
        let query = "INSERT INTO Student (`id`, `lastname` , `firstname`) VALUES (?,?,?) ";
        return db.querySql(query, [body.id , body.last_name , body.first_name ]);
    },

    getById: function(id){
        let query = "SELECT * FROM Student where id = ?";
        return db.querySql(query, [id]);
    },

    createInstructor: function(body){
        let query = "INSERT INTO Instructor (`id`, `lastname` , `firstname`) VALUES (?,?,?) ";
        return db.querySql(query, [body.id , body.last_name , body.first_name ]);
    },

    getInstructor: function(id){
        let query = "SELECT * FROM Instructor where id = ?";
        return db.querySql(query, [id]);
    }
};

module.exports = UserDataProvider;