let db = require('../../../dbmanager/mysql/db')

let UserDataProvider = {

	createStudent: function(body){
        let query = "INSERT INTO Student ( `lastname` , `firstname` , `stuId`) VALUES (?,?,?) ";
        return db.querySql(query, [ body.lastName , body.firstName , body.stuId ]);
    },

    getById: function(id){
        let query = "SELECT * FROM Student where id = ?";
        return db.querySql(query, [id]);
    },

    createInstructor: function(body){
        let query = "INSERT INTO Instructor (`lastname` , `firstname` , `instId`) VALUES (?,?,?) ";
        return db.querySql(query, [body.lastName , body.firstName, body.instId ]);
    },

    getInstructor: function(id){
        let query = "SELECT * FROM Instructor where id = ?";
        return db.querySql(query, [id]);
    }
};

module.exports = UserDataProvider;