/* global $ */
$(document).ready(function(){
$("button").click(function(){ 
    var box = $("input").val();
    var pass = 23;
if (box == pass) {
        $("div").html("hello");
    }
if(box < pass){
         $("div").html("You're way too low");
    }
if (box > pass ){
        $("div").html("You're way too high");
    } 
});     
});    
