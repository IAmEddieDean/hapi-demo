console.log('hello world');
$(document).ready(init);

function init(){
$('h1').on('click', clickMe);
$('#clickMe').click(doStuff);
$('#myNums-button').click(createNums);
}
function clickMe(){
$(this).text('this is super fun');
//$(this).text("aren't you having such a swell time?");
}
function doStuff(){
  var generic = $('#generic').val();
  console.log('you just type this bullshit:', generic);
}

function createNums(){
  var num = $('#myNums').val() * 1;
  var numbers=[];
  for(var i = 0; i<num;i++);{
  numbers.push(i);
}
console.log(numbers);
var odds = numbers.filter(function(n){
  return n%2;
  
});
console.log(odds);

var cubed = odds.map(function(n){
  return Math.pow(n, 3);
});

console.log(cubed);

cubed.forEach(function(n){
  var $div = $('<div>');
  $div.text(n);
  $('#number-parent').append($div);
});
}
