//基准测试

// import {num1,num2} from '../src/fn';
const {num1,num2} = require('../src/fn');
const Benchmark = require('benchmark');
const suite = new Benchmark.Suite;

suite.add('parseInt',function(){
    num1('123456');
}).add('Number',function(){
    num2('123456');
}).on('cycle',function(event){
    console.log(String(event.target));
}).on('complete',function(){
    console.log('Fastest is ' + this.filter('fastest').map('name'));
}).run({'async':true});


// // add tests
// suite.add('RegExp#test', function() {
//   /o/.test('Hello World!');
// })
// .add('String#indexOf', function() {
//   'Hello World!'.indexOf('o') > -1;
// })
// .add('String#match', function() {
//   !!'Hello World!'.match(/o/);
// })
// // add listeners
// .on('cycle', function(event) {
//   console.log(String(event.target));
// })
// .on('complete', function() {
//   console.log('Fastest is ' + this.filter('fastest').map('name'));
// })
// // run async
// .run({ 'async': true });
