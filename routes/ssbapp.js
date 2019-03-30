var express = require('express');
var fs= require('fs');
var router = express.Router();
var URL = require('url');

var User = require('./user')

//注册接口
router.post('/registssb', function(req, res, next) {
  var dic = req.body;
  fs.writeFile(__dirname + '/ssbApp/ssbRegistList.json',dic.data, function(err){
    if(!err){
    
        res.send('success');
    }else{
        throw err;
    }
  })
});
//获取注册人列表
router.post('/getRegistPerson', function(req, res, next) {
  fs.readFile(__dirname + '/ssbApp/ssbRegistList.json', function(err, data){
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
router.post('/loginssb', function(req, res, next) {
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
      if(dic.phone == "18518989539"){
        res.send(data);
      }else{
        res.send();
      }
      
  }else{
      throw err;
  }
})

});

//拿取当前送水员工数据
router.post('/getemployee', function(req, res, next) {
  var dic = req.body;

   fs.readFile(__dirname + '/ssbApp/ssbmyemployee.json', function(err, data){
  if(!err){
    // res.writeHead(200, {"Content-Type": "text/json;charset=UTF-8"});
     console.log(data);
      res.send(data);
  }else{
      throw err;
  }
})

});

//老板登录接口
router.post('/loginBoss', function(req, res, next) {
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
//获取我的信息
router.post('/getMyInfo', function(req, res, next) {
  var params = URL.parse(req.url, true).query;
  
  console.log(req.body);
  var dic = req.body;
  
  var info = {"name":"李红心","area":"环翠区","num":"管理16人，可以招聘新员工","zili":"入职1年 2次获得优秀区域经理称号","biaoqian":"和蔼 努力 勤奋","rate":"10%"};

    res.send(JSON.stringify(info));
  
});
//给员工评价
router.post('/pingjia', function(req, res, next) {
  var params = URL.parse(req.url, true).query;
    var info = {"result":"success"};
    res.send(JSON.stringify(info));
  
});


//请输入招聘信息
router.post('/findPersonJob', function(req, res, next) {
  var params = URL.parse(req.url, true).query;
    var info = {"result":"success"};
    res.send(JSON.stringify(info));
  
});



module.exports = router;
