var express = require('express')
    , router = express.Router()
    , corefnc = require('../models/corefunction')
		, db = require('../models/db/base')
    , config = require('config');

//router.use('/login.html', require('./login'));
//router.use('/register', require('./register'));

router.get('/', function (req, res) {
    //console.log('in');
    var data = {loggedIn: (req.session.login), data: req.session.login};
    //console.log(req.session);
    res.render('index', data);
});


router.get('/registration2', function(req, res) {
	console.log('in');
	db.query.insertUser({ id: req.body.id, full_name: req.body.full_name, user_name: req.body.user_name, user_password: req.body.user_password, user_contact: req.body.user_contact, user_email: req.body.user_email, user_status: req.body.user_status},function(data){});
	res.setHeader('Content-Type', 'application/json');
	res.writeHead(200, {'Content-Type': 'application/json'});
	res.end(JSON.stringify({'code':'1','msg':'Success'}));
});

router.post('/registration', function(req, res) {
	//console.log('registration ....innnnnn');
	db.query.insertUser({ user_id: req.body.user_id, full_name: req.body.full_name, user_name: req.body.user_name, user_password: req.body.user_password, user_contact: req.body.user_contact, user_email: req.body.user_email, user_status: req.body.user_status},function(data){});
	res.setHeader('Content-Type', 'application/json');
	res.writeHead(200, {'Content-Type': 'application/json'});
	res.end(JSON.stringify({'code':'1','msg':'Success'}));
});

router.post('/checklogin', function(req, res) {
	res.setHeader('Content-Type', 'application/json');
  res.writeHead(200, {'Content-Type': 'application/json'});
    
  db.query.ckLogin(req.body,function(data){
	  if(data.length > 0){
		  req.session.login	= data[0];
		
		  res.end(JSON.stringify({'code': '1', 'msg': 'Success'}));
	  }else{
		 res.end(JSON.stringify({'code': '0', 'msg': 'Invalid'}));
	  }
	//console.log(data);
  });
});

router.post('/userLogin', function (req, res){
  res.setHeader('Content-Type', 'application/json');
  res.writeHead(200, {'Content-Type': 'application/json'});
    
  db.query.ckLogin(req.body,function(data){
	  if(data.length > 0){
		  req.session.login	= data[0];
		
		  res.end(JSON.stringify({'code': '1', 'msg': 'Success', 'success': true}));
	  }else{
		 res.end(JSON.stringify({'code': '0', 'msg': 'Invalid', 'success': false}));
	  }
	//console.log(data);
  });
});

router.post('/userRegister', function(req, res) {
	//console.log('registration ....innnnnn');
  res.setHeader('Content-Type', 'application/json');
	res.writeHead(200, {'Content-Type': 'application/json'});
  try{
    db.query.insertUser({ user_id: req.body.user_id, full_name: req.body.full_name, user_name: req.body.user_email, user_password: req.body.password, user_contact: req.body.user_contact, user_email: req.body.user_email, user_status: req.body.user_status},function(data){
      if(data){
        req.session.login = req.body;
        res.end(JSON.stringify({'success': true, 'error': ''}));
      }else{
        res.end(JSON.stringify({'success': false, 'error': 'User already exists'}));
      }
    });
  }catch(error){
    res.end(JSON.stringify({'success':false,'error': error.message}));
  }
	
	
	
});

router.get('/logout', function (req, res) {
    //console.log('in');
    var data = {'page': 'home'};
	req.session.login = 0;
	res.redirect('/');
});

module.exports = router