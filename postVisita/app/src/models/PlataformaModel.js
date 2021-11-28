
const db = require('../database/Mysqldb');

class JuegosModel {


    // async list (){
    //     let query = "SELECT * FROM juegos";
    //     return db.query(query,[])
    // }

    async registrar (numero_actual_mas_uno ,numero_actual){
        console.log(arguments, new Date().toISOString())
        let query = "UPDATE NUMERO SET NUMERO = (:numero_actual_mas_uno) WHERE NUMERO = (:numero_actual)";
        return db.query(query,[ numero_actual_mas_uno,numero_actual], { autoCommit: true } )
    }
}

module.exports = new JuegosModel();