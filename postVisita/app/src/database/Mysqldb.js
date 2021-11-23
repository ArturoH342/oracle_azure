'use strict';

const mysql = require('mysql');

let pool = mysql.createPool({
    connectionLimit: 200,
    host     : '10.1.1.188',
    user     : 'root',
    port: 3306,
    password : 'Peru.Lima1980',
    database: 'PC4'
});

pool.on('error', (err) => {
    console.error(err);
});



module.exports = {
    query : async  function(query, params = []){
        return new Promise(function(resolve) {

            pool.query(query, params, function (error, results, fields) {
                if (error) {
                    console.log(error);
                    resolve({ success: false, data:null });
                };
                resolve({ success: true, data: results });
            });
        })
    }
};