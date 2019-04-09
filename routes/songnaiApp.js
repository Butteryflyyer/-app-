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
router.post('/songnaiRegist', function(req, res, next) {
  var dic = req.body;
  fs.writeFile(__dirname + '/songnaiApp/SongnaiRegistlist.json',dic.data, function(err){
    if(!err){
    
        res.send('success');
    }else{
        throw err;
    }
  })
});
//获取注册人列表
router.post('/getSongnaiRegistlist', function(req, res, next) {
  fs.readFile(__dirname + '/songnaiApp/SongnaiRegistlist.json', function(err, data){
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
router.post('/loginSongnaiApp', function(req, res, next) {
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
router.post('/SongnaiOrderList', function(req, res, next) {
  var dic = req.body;
fs.readFile(__dirname + '/songnaiApp/SongnaiOrderList.json', function(err, data){
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

router.post('/ChangSongnaiOrder', function(req, res, next) {
  var dic = req.body;
  console.log(dic.data);
  console.log(dic);

  fs.writeFile(__dirname + '/songnaiApp/SongnaiOrderList.json',dic.data, function(err){
    if(!err){
  
        res.send('success');
    }else{
        throw err;
    }
  })
});
//拿取已接单
router.post('/songnaiAready', function(req, res, next) {
    var dic = req.body;
    console.log(dic.data);
    console.log(dic);
    
    fs.readFile(__dirname + '/songnaiApp/SongnaiOrderList.json', function(err, data){
        if(!err){
          // res.writeHead(200, {"Content-Type": "text/json;charset=UTF-8"});
           console.log(data);
            res.send(data);
        }else{
            throw err;
        }
      })
  });
  //拿取已完成订单
router.post('/songnaiSuccess', function(req, res, next) {
    var dic = req.body;
    console.log(dic.data);
    console.log(dic);
    
    fs.readFile(__dirname + '/songnaiApp/SongnaiOrderList.json', function(err, data){
        if(!err){
          // res.writeHead(200, {"Content-Type": "text/json;charset=UTF-8"});
           console.log(data);
            res.send(data);
        }else{
            throw err;
        }
      })
  });


//拿去评价
router.post('/Jiazhengpingjia', function(req, res, next) {
  var dic = req.body;
fs.readFile(__dirname + '/jiazhengApp/jiazhengPingjia.json', function(err, data){
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
router.post('/pingjia', function(req, res, next) {
  var dic = req.body;

  res.send(JSON.stringify({'status':'success'}));
  

});

module.exports = router;
