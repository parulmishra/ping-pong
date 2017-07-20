$(document).ready(function () {

  $("#pingpong").click(function(){
  var numberEntered = $("input#number").val();
  console.log(numberEntered);

  for(var i=1; i<= numberEntered; i++)
  {
    var temp=i;
    console.log(temp);
    $("#show-numbers").append(temp);
  }
});
});
