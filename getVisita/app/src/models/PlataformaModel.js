const db = require('../database/AutonomousDB');
// const db = require('../database/Mysqldb');



class JuegosModel {


    async list (){
        let query = "select MAX(NUMERO) from numero ";
        return db.query(query,[]);
    }


}

module.exports = new JuegosModel();