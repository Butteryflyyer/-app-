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
router.post('/registStudentJianzhiApp', function(req, res, next) {
  var dic = req.body;
  fs.writeFile(__dirname + '/StudentJianzhiApp/StudentRegistList.json',dic.data, function(err){
    if(!err){
    
        res.send('success');
    }else{
        throw err;
    }
  })
});
//获取注册人列表
router.post('/getStudentRegistPerson', function(req, res, next) {
  fs.readFile(__dirname + '/StudentJianzhiApp/StudentRegistList.json', function(err, data){
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
router.post('/loginStudentJianzhiApp', function(req, res, next) {
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
router.post('/getStudnetOrderList', function(req, res, next) {
  var dic = req.body;
fs.readFile(__dirname + '/StudentJianzhiApp/StudentOrderList.json', function(err, data){
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

router.post('/StudentChangeOrderAction', function(req, res, next) {
  var dic = req.body;
  console.log(dic.data);
  console.log(dic);

  fs.writeFile(__dirname + '/StudentJianzhiApp/StudentOrderList.json',dic.data, function(err){
    if(!err){
  
        res.send('success');
    }else{
        throw err;
    }
  })
});
//拿取已接单
router.post('/StudentAready', function(req, res, next) {
    var dic = req.body;
    console.log(dic.data);
    console.log(dic);
    
    fs.readFile(__dirname + '/StudentJianzhiApp/StudentOrderList.json', function(err, data){
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
router.post('/StudentSuccess', function(req, res, next) {
    var dic = req.body;
    console.log(dic.data);
    console.log(dic);
    
    fs.readFile(__dirname + '/StudentJianzhiApp/StudentOrderList.json', function(err, data){
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
router.post('/StudentPingjia', function(req, res, next) {
  var dic = req.body;
   var data = {"score":"10分","pingjia":["态度非常好","速度像飞一样","诚实守信","态度良好","必须给个好评","10分好评","我们学习的好榜样，勤工俭学啊.","努力工作的孩子","太方便了","足不出户，收快递啦。","勤劳的孩子","三好学生","兼职小能手"]}
  ;
      res.send(data);


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
