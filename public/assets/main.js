$(document).ready(function(){

var received = $('#received');
var current = $('#current');
var name = $('#participant-name');
var economy = $('#participant-economy');
var area = $('#area');
var flag = $('#flag');
var main = $('#main');
var upper_logo = $('#upper_logo');

var socket = new WebSocket("ws://0.0.0.0:8080");
var numbers_received = [];
 
socket.onopen = function(){  
  console.log("connected"); 
}; 

socket.onmessage = function (message) {
  console.log("receiving: " + message.data);

  var res = message.data
  flag='<img src="/assets/CARD_LOGO.png"  class="wide-img main-img img-responsive center-block"/>'
  current.html(res).show().delay(15000).fadeOut();


};

socket.onclose = function(){
  console.log("disconnected"); 
};

var sendMessage = function(message) {
  console.log("sending:" + message.data);
  socket.send(message.data);
};


// GUI Stuff

/*
// send a command to the serial port
$("#cmd_send").click(function(ev){
  ev.preventDefault();
  var cmd = $('#cmd_value').val();
  sendMessage({ 'data' : cmd});
  $('#cmd_value').val("");
});
*/

// send a command to the serial port
$("#cmd_value").change(function(ev){
  ev.preventDefault();
  var cmd = $('#cmd_value').val();
  sendMessage({ 'data' : cmd});
  $('#cmd_value').val("");
});



});
