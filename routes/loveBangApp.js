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
router.post('/registLife', function(req, res, next) {
  var dic = req.body;
  fs.writeFile(__dirname + '/LifeApp/LifeRegist.json',dic.data, function(err){
    if(!err){
    
        res.send('success');
    }else{
        throw err;
    }
  })
});
//获取注册人列表
router.post('/getRegistLifeList', function(req, res, next) {
  fs.readFile(__dirname + '/LifeApp/LifeRegist.json', function(err, data){
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
router.post('/loginLifeApp', function(req, res, next) {
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
//获取订单大厅
router.post('/getLiftList', function(req, res, next) {
  var dic = req.body;
fs.readFile(__dirname + '/LifeApp/LifeJob.json', function(err, data){
  if(!err){
    // res.writeHead(200, {"Content-Type": "text/json;charset=UTF-8"});
     console.log(data);
      res.send(data);
  }else{
      throw err;
  }
})

});
//往工作列表写入数据

router.post('/changLifeAction', function(req, res, next) {
  var dic = req.body;
  console.log(dic.data);
  console.log(dic);
  
  fs.writeFile(__dirname + '/LifeApp/LifeJob.json',dic.data, function(err){
    if(!err){
      // res.writeHead(200, {"Content-Type": "text/json;charset=UTF-8"});
      //  console.log(data);
        res.send('success');
    }else{
        throw err;
    }
  })
});


//拿去评价
router.post('/getPingjia', function(req, res, next) {
  var dic = req.body;
fs.readFile(__dirname + '/LifeApp/LifePingjia.json', function(err, data){
  if(!err){
    // res.writeHead(200, {"Content-Type": "text/json;charset=UTF-8"});
     console.log(data);
      res.send(data);
  }else{
      throw err;
  }
})

});

//学生端下单  拿取我发布的订单

router.post('/getMyfireList', function(req, res, next) {
  var dic = req.body;
fs.readFile(__dirname + '/jisudaApp/jisudaMyfireList.json', function(err, data){
  if(!err){
    // res.writeHead(200, {"Content-Type": "text/json;charset=UTF-8"});
     console.log(data);
      res.send(data);
  }else{
      throw err;
  }
})

});
//下单接口
router.post('/jisudaFireOrder', function(req, res, next) {
  var dic = req.body;
fs.writeFile(__dirname + '/jisudaApp/jisudaMyfireList.json',dic.data, function(err){
  if(!err){
    // res.writeHead(200, {"Content-Type": "text/json;charset=UTF-8"});
    //  console.log(data);
      res.send('success');
  }else{
      throw err;
  }
})

});
//评价
router.post('/LifeApppingjia', function(req, res, next) {
  var dic = req.body;

  res.send(JSON.stringify({'status':'success'}));
  

});

//反馈
router.post('/LifeAppfankui', function(req, res, next) {
  var dic = req.body;

  res.send(JSON.stringify({'status':'success'}));
  

});


//拿取二维码
router.post('/getLifeSQRR', function(req, res, next) {
  var dic = req.body;
 fs.readFile(__dirname + '/jisudaApp/SQRsuccess.json', function(err, data){
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
