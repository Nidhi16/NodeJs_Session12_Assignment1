var server_port = 8000;
var backend_url = "http://localhost:8123";
var app   = require('express')();
var http = require('http').Server(app);
var session = require('express-session');
var express   = require('express');
app.use(session({
    secret: 'test session',
    resave: false,
    saveUninitialized: true
}));

app.get('/setsession',function(req,res){
    sess=req.session;
    sess.sessdata = {};
    sess.sessdata.email= "pushpa";
    sess.sessdata.pass= "acadgild";
    var data = {
        "Data":""
    };
    data["Data"] = 'Session set';
    res.json(data);
});

app.get('/logshow', function (req, res) {
	var sess=req.session;
	var email = sess.user_email;
      console.log(email);
});

app.get('/destroysession',function(req,res){
    sess=req.session;
    var data = {
        "Data":""
    };
    sess.destroy(function(err) {
        if(err){
            data["Data"] = 'Error destroying session';
            res.json(data);
        }else{
            data["Data"] = 'Session destroy successfully';
            res.json(data);
        }
    });
});

app.get('/reloadsession',function(req,res){
    sess=req.session;
    var data = {
        "Data":""
    };
    sess.reload(function(err) {
        if(err){
            data["Data"] = 'Error Reloading session';
            res.json(data);
        }else{
            data["Data"] = 'Session Reloaded successfully';
            res.json(data);
        }
    })
});

app.get('/savesession',function(req,res){
    sess=req.session;
    var data = {
        "Data":""
    };
    sess.save(function(err) {
        if(err){
            data["Data"] = 'Error saving session';
            res.json(data);
        }else{
            data["Data"] = 'Session saved successfully';
            res.json(data);
        }
    })
});

var server = app.listen(server_port, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
