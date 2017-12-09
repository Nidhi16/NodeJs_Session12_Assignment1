var express   = require('express');
var app = express();
var session = require('express-session');

var port = process.env.PORT || 8000;

app.use(session({
    secret: 'test session'
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
	var sess=req.session.sessdata;
	var email = sess.email;
    res.json(email);
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
    });
});

app.listen(port, function(){
    console.log("Listening to port " + port);
});
