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
router.post('/registJisuda', function(req, res, next) {
  var dic = req.body;
  fs.writeFile(__dirname + '/jisudaApp/jisudaRegistList.json',dic.data, function(err){
    if(!err){
    
        res.send('success');
    }else{
        throw err;
    }
  })
});
//获取注册人列表
router.post('/getRegistPerson', function(req, res, next) {
  fs.readFile(__dirname + '/jisudaApp/jisudaRegistList.json', function(err, data){
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
router.post('/loginJisudaApp', function(req, res, next) {
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
router.post('/getJisudaList', function(req, res, next) {
  var dic = req.body;
// fs.readFile(__dirname + '/bangdiApp/bangdiOrderList.json', function(err, data){
//   if(!err){
//     // res.writeHead(200, {"Content-Type": "text/json;charset=UTF-8"});
//      console.log(data);
   
var data = [
  {
      "endAddress": "试玩应用 日赚500",
      "category": "试玩应用 日赚500",
      "startName": "试玩应用 日赚500",
      "endPhone": "ganji581",
      "isJiaji": "1",
      "startPhone": "ganji581",
      "code": "667788",
      "specialDes": "★加入方式：点下方按钮：立即加入",
      "endTime": "随时随地",
      "startAddress": "试玩应用 日赚500",
      "startTime": "高薪兼职，无需投入，靠谱稳定，长期可做！",
      "status": "1",
      "endName": "试玩应用 日赚500",
      "firePhone":"ganji581",
      "token":"https://share.cqxxkj.top/#/?userId=8684788",
      "moneyNum":"一个任务1-20元不等",
      "distance":"2000米"
  },
  {
      "endAddress": "试玩应用 日赚500",
      "category": "试玩应用 日赚500",
      "startName": "试玩应用 日赚500",
      "endPhone": "ganji581",
      "isJiaji": "1",
      "startPhone": "ganji581",
      "code": "667788",
      "specialDes": "★加入方式：点下方按钮：立即加入",
      "endTime": "随时随地",
      "startAddress": "试玩应用 日赚500",
      "startTime": "高薪兼职，无需投入，靠谱稳定，长期可做！",
      "status": "1",
      "endName": "试玩应用 日赚500",
      "firePhone":"ganji581",
      "token":"https://share.cqxxkj.top/#/?userId=8684788",
      "moneyNum":"一个任务1-20元不等",
      "distance":"2000米"
  },
  {
      "endAddress": "试玩应用 日赚500",
      "category": "试玩应用 日赚500",
      "startName": "试玩应用 日赚500",
      "endPhone": "ganji581",
      "isJiaji": "1",
      "startPhone": "ganji581",
      "code": "667788",
      "specialDes": "★加入方式：点击「立即接单」开始",
      "endTime": "随时随地",
      "startAddress": "试玩应用 日赚500",
      "startTime": "高薪兼职，无需投入，靠谱稳定，长期可做！",
      "status": "1",
      "endName": "试玩应用 日赚500",
      "firePhone":"ganji581",
      "token":"https://share.cqxxkj.top/#/?userId=8684788",
      "moneyNum":"一个任务1-20元不等",
      "distance":"2000米"
  },
  {
      "endAddress": "试玩应用 日赚500",
      "category": "试玩应用 日赚500",
      "startName": "试玩应用 日赚500",
      "endPhone": "ganji581",
      "isJiaji": "1",
      "startPhone": "ganji581",
      "code": "667788",
      "specialDes": "★加入方式：点击「立即接单」开始",
      "endTime": "随时随地",
      "startAddress": "试玩应用 日赚500",
      "startTime": "高薪兼职，无需投入，靠谱稳定，长期可做！",
      "status": "1",
      "endName": "试玩应用 日赚500",
      "firePhone":"ganji581",
      "token":"https://share.cqxxkj.top/#/?userId=8684788",
      "moneyNum":"一个任务1-20元不等",
      "distance":"2000米"
  },
  
  {
      "endAddress": "理工大东校区2号楼教学楼302室",
      "category": "书籍及其他物品",
      "startName": "李华",
      "endPhone": "18788897432",
      "isJiaji": "0",
      "startPhone": "18619998764",
      "code": "888888",
      "specialDes": "着急送达，希望能快些到达",
      "endTime": "2019-5-21 12:00",
      "startAddress": "理工大西校区12号宿舍楼楼101宿舍",
      "startTime": "2019-5-20 8:20",
      "status": "2",
      "endName": "李生",
      "firePhone":"18518989539",
      "token":"",
      "moneyNum":"15元",
      "distance":"2000米"
  },
   {
      "endAddress": "理工大东校区2号楼教学楼442室",
      "category": "生活及其他物品",
      "startName": "刘美",
      "endPhone": "18718977333",
      "isJiaji": "0",
      "startPhone": "18618989744",
      "code": "666666",
      "specialDes": "请轻拿轻放",
      "endTime": "2019-5-25 17:50",
      "startAddress": "理工大西校区12号宿舍楼楼111宿舍",
      "startTime": "2019-5-24 10:50",
      "status": "1",
      "endName": "李样",
      "firePhone":"18518989539",
      "token":"",
      "moneyNum":"10元",
      "distance":"1500米"
  }, {
      "endAddress": "理工大东校区1号楼教学楼502室",
      "category": "食品及其他物品",
      "startName": "程华",
      "endPhone": "18718977115",
      "isJiaji": "1",
      "startPhone": "18618449764",
      "code": "123456",
      "specialDes": "着急送达，希望能快些到达",
      "endTime": "2019-5-24 12:00",
      "startAddress": "理工大西校区5号宿舍楼楼111宿舍",
      "startTime": "2019-5-24 8:20",
      "status": "0",
      "endName": "李洪",
      "firePhone":"",
      "token":"",
      "moneyNum":"10元",
      "distance":"2000米"
  }, {
      "endAddress": "理工大东校区8号楼教学楼532室",
      "category": "水及其他物品",
      "startName": "白华",
      "endPhone": "18719977655",
      "isJiaji": "0",
      "startPhone": "18618989114",
      "code": "111111",
      "specialDes": "着急送达，希望能快些到达",
      "endTime": "2019-5-25 12:00",
      "startAddress": "理工大西校区8号宿舍楼楼2101宿舍",
      "startTime": "2019-5-25 10:20",
      "status": "0",
      "endName": "城生",
      "firePhone":"",
      "token":"",
      "moneyNum":"20元",
      "distance":"2200米"
  }, {
      "endAddress": "理工大东校区7号楼教学楼102室",
      "category": "包袱及其他物品",
      "startName": "刘白",
      "endPhone": "18710077655",
      "isJiaji": "0",
      "startPhone": "18618989004",
      "code": "666888",
      "specialDes": "着急送达，希望能快些到达",
      "endTime": "2019-5-22 12:00",
      "startAddress": "理工大西校区2号宿舍楼楼101宿舍",
      "startTime": "2019-5-22 8:20",
      "status": "0",
      "endName": "李光",
      "firePhone":"",
      "token":"",
      "moneyNum":"10元",
      "distance":"2500米"
  }, {
      "endAddress": "理工大东校区11号宿舍楼502",
      "category": "餐饮及其他物品",
      "startName": "刘天",
      "endPhone": "18718977655",
      "isJiaji": "0",
      "startPhone": "18618989764",
      "code": "000088",
      "specialDes": "着急送达，希望能快些到达",
      "endTime": "2019-5-22 12:00",
      "startAddress": "理工大西校区1号教学楼110室",
      "startTime": "2019-5-22 8:20",
      "status": "0",
      "endName": "李暖",
      "firePhone":"",
      "token":"",
      "moneyNum":"20元",
      "distance":"2600米"
  }, {
      "endAddress": "理工大东校区10号楼教学楼502室",
      "category": "餐饮及其他物品",
      "startName": "刘天华",
      "endPhone": "18708977655",
      "isJiaji": "0",
      "startPhone": "18618989764",
      "code": "000000",
      "specialDes": "着急送达，希望能快些到达",
      "endTime": "2019-5-24 12:00",
      "startAddress": "理工大西校区12号教学楼101室",
      "startTime": "2019-5-24 10:20",
      "status": "0",
      "endName": "白天洋",
      "firePhone":"",
      "token":"",
      "moneyNum":"10元",
      "distance":"1600米"
  }, {
      "endAddress": "理工大东校区2号楼教学楼502室",
      "category": "餐饮及其他物品",
      "startName": "刘华清",
      "endPhone": "18718777655",
      "isJiaji": "0",
      "startPhone": "18618009764",
      "code": "677777",
      "specialDes": "着急送达，希望能快些到达",
      "endTime": "2019-5-23 12:00",
      "startAddress": "理工大西校区1号宿舍楼楼101宿舍",
      "startTime": "2019-5-23 10:20",
      "status": "0",
      "endName": "李生",
      "firePhone":"",
      "token":"",
      "moneyNum":"20元",
      "distance":"1700米"
  }, {
      "endAddress": "理工大东校区8号楼教学楼502室",
      "category": "餐饮及其他物品",
      "startName": "刘华灰",
      "endPhone": "18718970055",
      "isJiaji": "0",
      "startPhone": "18618980064",
      "code": "111111",
      "specialDes": "着急送达，希望能快些到达",
      "endTime": "2019-5-23 19:00",
      "startAddress": "理工大西校区12号宿舍楼楼101宿舍",
      "startTime": "2019-5-23 10:20",
      "status": "0",
      "endName": "李天意",
      "firePhone":"",
      "token":"",
      "moneyNum":"10元",
      "distance":"1500米"
  }];
      res.send(data);
  // }else{
  //     throw err;
  // }
// })

});
//往工作列表写入数据

router.post('/jiedanAction', function(req, res, next) {
  var dic = req.body;
  console.log(dic.data);
  console.log(dic);
  
  // fs.writeFile(__dirname + '/bangdiApp/bangdiOrderList.json',dic.data, function(err){
  //   if(!err){
  //     // res.writeHead(200, {"Content-Type": "text/json;charset=UTF-8"});
  //     //  console.log(data);
        res.send('success');
  //   }else{
  //       throw err;
  //   }
  // })
});


//拿去评价
router.post('/getPingjia', function(req, res, next) {
  var dic = req.body;
fs.readFile(__dirname + '/jisudaApp/jisudaPingjia.json', function(err, data){
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

//反馈
router.post('/fankui', function(req, res, next) {
  var dic = req.body;

  res.send(JSON.stringify({'status':'success'}));
  

});


//拿取二维码
router.post('/getSQRR', function(req, res, next) {
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
