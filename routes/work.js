var express = require('express');
var fs= require('fs');
var router = express.Router();
var URL = require('url');



var User = require('./user')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//登录接口
router.post('/loginwork', function(req, res, next) {
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
//获取工作列表
router.post('/getworklist', function(req, res, next) {
  var dic = req.body;
fs.readFile(__dirname + '/workApp/workList.json', function(err, data){
  if(!err){
    // res.writeHead(200, {"Content-Type": "text/json;charset=UTF-8"});
     console.log(data);
      res.send(data);
  }else{
      throw err;
  }
})

});

//写简历接口
router.post('/fireWork', function(req, res, next) {
  var dic = req.body;
  console.log(dic.data);
  console.log(dic);
  
  fs.writeFile(__dirname + '/workApp/workList.json',data, function(err){
    if(!err){
      // res.writeHead(200, {"Content-Type": "text/json;charset=UTF-8"});
      //  console.log(data);
        res.send('success');
    }else{
        throw err;
    }
  })


});


module.exports = router;
