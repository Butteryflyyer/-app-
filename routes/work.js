var express = require('express');
var fs= require('fs');
var router = express.Router();
var URL = require('url');



var User = require('./user')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
//注册接口
router.post('/registJianzhiBoss', function(req, res, next) {
  var dic = req.body;
  fs.writeFile(__dirname + '/workApp/workRegistlist.json',dic.data, function(err){
    if(!err){
    
        res.send('success');
    }else{
        throw err;
    }
  })
});
//获取注册人列表
router.post('/getRegistPerson', function(req, res, next) {
  fs.readFile(__dirname + '/workApp/workRegistlist.json', function(err, data){
    if(!err){
      // res.writeHead(200, {"Content-Type": "text/json;charset=UTF-8"});
       console.log(data);
        res.send(data);
    }else{
        throw err;
    }
  })
});

//登录接口
router.post('/loginJianzhiBoss', function(req, res, next) {
  var params = URL.parse(req.url, true).query;
  
  console.log(req.body);
  var dic = req.body;
  console.log(dic.phone);
  console.log(dic.password);
  
  
  if(dic.phone || dic.phone == "18518989539"){
    res.send(JSON.stringify({'status':'success'}));
  }else{
    res.send(JSON.stringify({'status':'fail'}));
  }
});
//获取工作列表
router.post('/getworklist', function(req, res, next) {
  var dic = req.body;
  if(dic.city == "北京"){
    fs.readFile(__dirname + '/workApp/workList.json', function(err, data){
      if(!err){
        // res.writeHead(200, {"Content-Type": "text/json;charset=UTF-8"});
         console.log(data);
          res.send(data);
      }else{
          throw err;
      }
    })
  }else{
    res.send([]);
  }


});
//往工作列表写入数据

router.post('/findJob', function(req, res, next) {
  var dic = req.body;
  console.log(dic.data);
  console.log(dic);
  
  fs.writeFile(__dirname + '/workApp/workList.json',dic.data, function(err){
    if(!err){
      // res.writeHead(200, {"Content-Type": "text/json;charset=UTF-8"});
      //  console.log(data);
        res.send('success');
    }else{
        throw err;
    }
  })
});


//写招聘接口
router.post('/fireWork', function(req, res, next) {
  var dic = req.body;
  console.log(dic.data);
  console.log(dic);
  
  fs.writeFile(__dirname + '/workApp/workList.json',dic.data, function(err){
    if(!err){
      // res.writeHead(200, {"Content-Type": "text/json;charset=UTF-8"});
      //  console.log(data);
        res.send('success');
    }else{
        throw err;
    }
  })
});
//发布简历

router.post('/firejianli', function(req, res, next) {
  var dic = req.body;
  console.log(dic.data);
  console.log(dic);
  
  fs.writeFile(__dirname + '/workApp/myJianli.json',dic.data, function(err){
    if(!err){
      // res.writeHead(200, {"Content-Type": "text/json;charset=UTF-8"});
      //  console.log(data);
        res.send('success');
    }else{
        throw err;
    }
  })
});
//拿去简历
router.post('/getjianliInfo', function(req, res, next) {
  var dic = req.body;
fs.readFile(__dirname + '/workApp/myJianli.json', function(err, data){
  if(!err){
    // res.writeHead(200, {"Content-Type": "text/json;charset=UTF-8"});
     console.log(data);
      res.send(data);
  }else{
      throw err;
  }
})

});




module.exports = router;
