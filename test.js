
$(function(){

$('#verticaloutput').mouseover(function(){
    var output=$("#verticalinput").val().split(',');
   
    var i = 0;
    var conbineWord='';
    while(i < output.length){
	   conbineWord+=(output[i])+'&#13;';
	   i++;
    }
	$("#verticaloutput").html(conbineWord);
});

function verticalSplit(string){
    
}


});