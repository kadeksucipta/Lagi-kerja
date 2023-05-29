var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require("cors");
const {decodeToken} = require("./middlewares")
const productRoute = require("./app/product/router");
const categoryRoute = require("./app/category/router");
const tagRoute = require("./app/tag/router");
const authRoute = require("./app/auth/router");
const deliveryAddressRoute = require("./app/deliveryAddress/router");
const noticeRoute = require("./app/notice/router");
const orderRoute = require("./app/order/router");
const invoiceRoute = require("./app/invoice/router");
const skillRoute = require("./app/skill/router")
const aboutRoute = require("./app/aboutme/router")
const infoRoute = require("./app/basicinfo/router")
const experienceRoute = require("./app/experience/router")
const educationRoute = require("./app/education/router")
const desainRoute = require("./app/desain/router")
const softwareRoute = require("./app/software enginer/router")
const golangRoute = require("./app/golang/router")
const frontendRoute = require("./app/frontend/router")
const backendRoute = require("./app/backend/router")
const dataEntryRoute = require("./app/data entry/router")
const javaRoute = require("./app/java/router")
const phpRoute = require("./app/php/router")
const dataEnginerRoute = require("./app/data engineer/router")
const wordPressRoute = require("./app/wordpress/router")


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(decodeToken());


app.use("/api", noticeRoute)
app.use("/auth", authRoute)
app.use("/api", productRoute)
app.use("/api", categoryRoute)
app.use("/api", tagRoute)
app.use("/api", deliveryAddressRoute)
app.use("/api", orderRoute)
app.use("/api", invoiceRoute);
app.use("/api", skillRoute)
app.use("/api", aboutRoute)
app.use("/api", infoRoute)
app.use("/api", experienceRoute)
app.use("/api", educationRoute)
app.use("/api", desainRoute)
app.use("/api", softwareRoute)
app.use("/api", golangRoute)
app.use("/api", frontendRoute)
app.use("/api", backendRoute)
app.use("/api", dataEntryRoute)
app.use("/api", javaRoute)
app.use("/api", phpRoute)
app.use("/api", dataEnginerRoute)
app.use("/api", wordPressRoute)

//home
app.use("/", function(req, res) {
  res.render("index", {
    title: "Kadek API Service (Error Page)"
  })
})

// running
// app.listen(process.env.PORT || 8000, () => console.log("Server: http://localhost:8000"))

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