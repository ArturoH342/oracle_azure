
const db = require('../database/Mysqldb');



class JuegosModel {


    async list (){
        let query = "select numero from numero ";
        return db.query(query,[]);
    }


}

module.exports = new JuegosModel();