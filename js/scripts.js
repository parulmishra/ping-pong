$(document).ready(function () {

  $("#pingpong").click(function(){
    $("#show-numbers").html("");
    var numberEntered = parseInt($("input#number").val());
    if(numberEntered === 0)
    {
      $("#show-numbers").html("Enter a positive number");
    }
    console.log(numberEntered);

    for(var i=1; i<= numberEntered; i++)
    {
      if((i%3 === 0) && (i%5 === 0))
      {
        $("#show-numbers").append(" " + "pingpong");
      }
      else if(i%3 === 0)
      {
        $("#show-numbers").append(" "+ "ping");
      }
      else if(i%5 === 0)
      {
        $("#show-numbers").append(" " + "pong");
      }
      else
      {
        $("#show-numbers").append(" " +i);
      }

  }
});
});
