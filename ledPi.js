var express = require('express'),
    app = express(),
    http = require('http').Server(app),
    io = require('socket.io')(http);

var raspi = require('raspi-io');
var five = require('johnny-five');
var board = new five.Board({
  io: new raspi()
});

board.on('ready', function() {

  app.use(express.static('public'));

  app.get('/',function(req, res) {
    res.render('index');
  });

  io.on('connection',function (socket) {

    console.log("usuario por socket");

  });


  http.listen(8080,function () {
    console.log('server...[OK]');
    led = new five.Led('P1-12');
    led.pulse();
  });

});
