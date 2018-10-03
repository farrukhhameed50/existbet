var mysql = require('mysql'), config = require('config');

exports.poolDatabase = {
    connectDB: function (cb) {
        var mysqlPool = mysql.createPool({
            host: config.get('db.mysql.host'),
            user: config.get('db.mysql.user'),
            password: config.get('db.mysql.pass'),
            connectionLimit: 500,
            acquireTimeout: 500000,
            database: config.get('db.mysql.dbname')
        });
        mysqlPool.getConnection(function (err, connection) {
            if (err)
                throw err;
            return cb(connection, mysqlPool);
        });
    },
    updateDb: function (tableName, data, cond, cb) {
        this.connectDB(function (connection, pool) {
            //console.log('UPDATE '+tableName+' SET ? WHERE id='+cond);
            //console.log(data);
            connection.query('UPDATE ' + tableName + ' SET ? WHERE id=' + cond, data, function (err, res) {
                if (err)
                    throw err;
                connection.release();
                pool.end();
                return cb(res);
            });
        });

    },
    deleteDb: function (tableName, data, cb) {
        this.connectDB(function (connection, pool) {
            connection.query('DELETE FROM ' + tableName + ' WHERE ' + data, function (err, res) {
                if (err)
                    throw err;
                connection.release();
                pool.end();
                return cb(res);
            });

        });

    },
    insertDb: function (tableName, data, cb) {
        this.connectDB(function (connection, pool) {
            //console.log('INSERT INTO ' + tableName + ' SET');
            //console.log(data);
            connection.query('INSERT INTO ' + tableName + ' SET ?', data, function (err, res) {
                if (err)
                    return cb(false);
                connection.release();
                pool.end();
                return cb(true);
            });

        });

    },
    selectDb: function (tableName, data, cb) {
        this.connectDB(function (connection, pool) {
            //console.log("SELECT * FROM " + tableName + " WHERE  " + data);
            //console.log(data);
            connection.query("SELECT * FROM " + tableName + " WHERE " + data, function (err, rows) {
                if (err)
                    throw err;
                connection.release();
                pool.end();
                return cb(rows);
            });

        });
    },
    selectCustomDb: function (query, cb) {
        this.connectDB(function (connection, pool) {
            //console.log(query);
            connection.query(query, function (err, rows) {
                if (err)
                    throw err;
                connection.release();
                pool.end();
                return cb(rows);
            });
        });
    },
    ckLogin: function (data, cb) {
		var query= "SELECT * FROM users WHERE user_name='"+data.username+"' AND user_password='"+data.password+"'";
        this.selectCustomDb(query , function (row) {
            return cb(row);
        });
    },
	insertUser:function(data,cb){
		this.insertDb('users', data, function (insertId) {
            return cb(insertId);
        });
    }
};
