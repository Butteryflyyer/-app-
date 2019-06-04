var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var SSBAPPRouter = require('./routes/ssbapp');
var workAppRouter = require('./routes/work');
var JisudaRouter = require('./routes/jisudaApp');
var jiazhengAppRouter = require('./routes/jiazhengApp');
var xueshengDaikeAppRouter = require('./routes/xueshengDaikeApp');
var songnaiAppRouter = require('./routes/songnaiApp');
var studentJianzhiRouter = require('./routes/studentJianzhi');
var lifeAppRouter = require("./routes/lifeApp");
var BangAppRouter = require("./routes/BangJianzhiApp");
var loveBangAppRouter = require("./routes/loveBangApp");
var leBangAppRouter = require("./routes/leBangApp");
var bangdiAppRouter = require("./routes/bangdiApp");
var app = express();




// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/ssbapp',SSBAPPRouter);
app.use('/work',workAppRouter);
app.use('/jisudaApp',JisudaRouter);
app.use('/jiazhengApp',jiazhengAppRouter);
app.use('/xueshengDaikeApp',xueshengDaikeAppRouter);
app.use('/songnaiApp',songnaiAppRouter);
app.use('/studentJianzhi',studentJianzhiRouter);
app.use('/lifeApp',lifeAppRouter);
app.use('/BangJianzhiApp',BangAppRouter);
app.use('/loveBangApp',loveBangAppRouter);
app.use('/leBangApp',leBangAppRouter);
app.use('/bangdiApp',bangdiAppRouter);
// app.user('/leBangApp',leBangAppRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
