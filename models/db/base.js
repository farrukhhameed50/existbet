var config = require('config');
var dbbase=require('../../models/db/'+config.get('db.server')+'/functions').poolDatabase;

exports.query    = {
  ckLogin    			  : function(data,cb){dbbase.ckLogin(data,function(row){return cb(row);});},
	insertUser    		: function(data,cb){dbbase.insertUser(data,function(row){return cb(row);});}
};