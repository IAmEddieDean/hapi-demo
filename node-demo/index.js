// console.log('hello world');
//
// var a = 3;
// var b = 2;
// var c = a + b;
// console.log(a, b, c);
//
// var nums = [3,4,5];
// var sum = nums.reduce(function(acc, num){
//   return acc + num;
// });
// console.log(nums, sum);
//
// var math = require('./math');
// var d = math.add(a, b);
// console.log('d:', d);
//
// var e = math.product(a,b);
// console.log(e);

var _ = require('lodash')
var userId1 = _.uniqueId('user_');
var userId2 = _.uniqueId('user_');
var userId3 = _.uniqueId('user_');
console.log(userId1, userId2, userId3);

var range = _.range(30, -40, -3);
console.log(range);
