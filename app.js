var express = require('express')
  , app = express()
  , bodyParser = require('body-parser')
  , session = require('express-session')
  ,config = require('config')
  , port = config.get('port');

app.set('views', __dirname + '/views');
app.set('models', __dirname + '/models');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.use(session({
    secret: "mysqc",
    name: "mycookie",
    resave: true,
    proxy: true,
    saveUninitialized: true,
    duration: config.get('session_time'),
  activeDuration: config.get('session_time'),
  httpOnly: true,
  secure: true,
  ephemeral: true,
    cookie: { 
        secure: false,
        maxAge: config.get('session_time')
    }
}));

app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/models'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(require('./controllers'));
app.use(function (req, res, next) {
  delete req.headers['content-encoding']
  next()
});
app.listen(port, function() {
  console.log('Listening on port ' + port)
});
