/**
 * Created by doctorjj on 2017. 4. 24..
 */

var fulit =[ { name: '사과', quantity: 30, price: 500 },
    { name: '바나나', quantity: 40, price: 1500 },
    { name: '감', quantity: 250, price: 2300 },
    { name: '포도', quantity: 55, price: 1800 },
    { name: '수박', quantity: 15, price: 9800 },
    { name: '딸기', quantity: 25, price: 2000 },
    { name: '키위', quantity: 100, price: 4200 } ];

//console.log(fulit);


var c =fulit.sort(function(a,b){
    return a.price- b.price;
    // return a.quantity = b.quantity;
});

//console.log(c);

/*var d = fulit.map(function (arr) {
    arr.quantity= arr.quantity+"개";
    arr.price = arr.price +"원";
    return arr;
});*/

//console.log(d);

/*
var fil = fulit.filter(function (arr) {
  if(arr.price <2000)
      return false;
  return true;
});

console.log(fil);
*/
var ev = fulit.every(function () {
    return fulit.quantity > 10 ? true : false;
});

console.log(ev);
