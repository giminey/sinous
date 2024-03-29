var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
// var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config.js')
var express = require('express')

var app = express()
var port = process.env.PORT || 5000;

var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
// app.use(webpackHotMiddleware(compiler))
app.use(express.static(__dirname));

app.get("/intro", function(req, res) {
  res.sendFile(__dirname + '/IntroPage.html')
})

app.get("/game", function(req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})
