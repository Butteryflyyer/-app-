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
router.post('/registXueshengDaikeApp', function(req, res, next) {
  var dic = req.body;
  fs.writeFile(__dirname + '/xueShengDaikeApp/xueshengRegistList.json',dic.data, function(err){
    if(!err){
    
        res.send('success');
    }else{
        throw err;
    }
  })
});
//获取注册人列表
router.post('/getXueshengRegistPerson', function(req, res, next) {
  fs.readFile(__dirname + '/xueShengDaikeApp/xueshengRegistList.json', function(err, data){
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
router.post('/loginXueshengApp', function(req, res, next) {
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
router.post('/getXueshengList', function(req, res, next) {
  var dic = req.body;
fs.readFile(__dirname + '/xueShengDaikeApp/xueshengDaikeList.json', function(err, data){
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

router.post('/xueshengChangeOrderAction', function(req, res, next) {
  var dic = req.body;
  console.log(dic.data);
  console.log(dic);

  fs.writeFile(__dirname + '/xueShengDaikeApp/xueshengDaikeList.json',dic.data, function(err){
    if(!err){
  
        res.send('success');
    }else{
        throw err;
    }
  })
});
//拿取已接单
router.post('/jiazhengAready', function(req, res, next) {
    var dic = req.body;
    console.log(dic.data);
    console.log(dic);
    
    fs.readFile(__dirname + '/jiazhengApp/jiazhengOrderList.json', function(err, data){
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
router.post('/jiazhengSuccess', function(req, res, next) {
    var dic = req.body;
    console.log(dic.data);
    console.log(dic);
    
    fs.readFile(__dirname + '/jiazhengApp/jiazhengOrderList.json', function(err, data){
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
router.post('/Daikepingjia', function(req, res, next) {
  var dic = req.body;

  var data = [
   {"name":"李洪生","pingjia":"满分好评，准时到达，完美完成上课任务"},
   {"name":"白天阳","pingjia":"还帮忙把作业写了，棒棒的"}
  ];

  res.send(data);

});

//评价
router.post('/fankui', function(req, res, next) {
  var dic = req.body;
  res.send("success");

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
