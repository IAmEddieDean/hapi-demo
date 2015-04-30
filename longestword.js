var stringy = 'this is string';

function longestWord(string){
  var str = string.split(' ');
  var longest= str[0];
  for(var i=0; i<str.length; i++){
    if ((str[i]).length > longest.length){
      longest = str[i];
    }
  }
  return longest;
}
console.log(longestWord(stringy));


function longestEach(string){
  var arr = string.split(' ');
  var longest = arr[0];
  arr.forEach(function(arr){
    if (arr.length > longest){
      longest = arr[];
    }
  });
  return longest;
}
console.log(longestEach(stringy));
