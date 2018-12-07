var mysql = require('mysql');

var config = {
    user: "root",
    password: "root",
    database: "lemon",
    port: 3306,
    host: 'localhost',
    connectionLimit: 100
}

var pool = mysql.createPool(config);
/**
 * 连接数据库，进行mysql查询
 * @param{string} sql    sql语句
 * @param{array} query   参数
 * @param{function} fn   回调函数 
 */
/**
 * select * from userlist where uid=?
 * select * from userlist
 */
module.exports = function(sql, query, fn) {
    fn = fn || query;
    query = query || [];

    pool.getConnection(function(error, con) {
        if (error) {
            fn(error)
        } else {
            con.query(sql, query, function(error, result) {
                queryCallback(err, results);

            })
            con.release();
        }
    })

}

function queryCallback(error, results) {
    if (error) {
        fn(error);
    } else {
        fn(null, results);
    }
}