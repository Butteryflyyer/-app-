var express = require('express');
var fs= require('fs');
var router = express.Router();
var URL = require('url');

var User = require('./user')

//登录接口
router.post('/loginssb', function(req, res, next) {
  var params = URL.parse(req.url, true).query;
  
  console.log(req.body);
  var dic = req.body;
  console.log(dic.phone);
  console.log(dic.password);
  
  
  if(dic.phone == '18518989539'&& dic.password == 'aaaa1111'){
    res.send(JSON.stringify({'status':'success'}));
  }else{
    res.send(JSON.stringify({'status':'fail'}));
  }
});
//获取订单列表
router.post('/getssborderInfo', function(req, res, next) {
  var dic = req.body;


fs.readFile(__dirname + '/ssbApp/ssbappdata.json', function(err, data){
  if(!err){
    // res.writeHead(200, {"Content-Type": "text/json;charset=UTF-8"});
     console.log(data);
      res.send(data);
  }else{
      throw err;
  }
})

});

//修改订单列表
router.post('/changessbOrder', function(req, res, next) {
  var dic = req.body;
  console.log(dic.data);
  // var json = JSON.stringify(dic);
fs.writeFile(__dirname + '/ssbApp/ssbappdata.json',dic.data, function(err){
  if(!err){
    // res.writeHead(200, {"Content-Type": "text/json;charset=UTF-8"});
    //  console.log(data);
      
  
      res.send('success');
  }else{
      throw err;
  }
})

});


//发布订单
router.post('/fireOrder',function(req, res, next) {
  var dic = req.body;
  console.log(dic.data);
  // var json = JSON.stringify(dic);
   fs.writeFile(__dirname + '/ssbApp/ssbmytext.json',dic.data, function(err){
  if(!err){
    // res.writeHead(200, {"Content-Type": "text/json;charset=UTF-8"});
    //  console.log(data);
      
  
      res.send('success');
  }else{
      throw err;
  }
})

});

//拿取自己发布的订单
router.post('/getMyFireOrder', function(req, res, next) {
  var dic = req.body;

   fs.readFile(__dirname + '/ssbApp/ssbmytext.json', function(err, data){
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
