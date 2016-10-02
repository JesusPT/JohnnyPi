var five = require("johnny-five");
var Respi = require("raspi-io");
var board = new five.Board({
  io: new Raspi()
});


board.on("ready",function () {
  var led = new five.Led("P1-13");
  led.blink();
});
