/**
 * Created by doctorjj on 2017. 4. 23..
 */

//할당

var ab = function (test) {
    console.log("123");
}

//인자
function aa(func) {
    func("aa");
}

aa(function (e) {
    console.log("콜백 함수");
    console.log(e);
});


// //반환
function cc() {
     return function () {
         console.log('반환 함수 실행');
     }
    };// 일급 객체 };
 cc()();

 var arr =[7,13,14,22,5,17];

 function sum(arr) {
     var result =0;
     for(var i=0;i<arr.length;i++){
         result += arr[i];
     }
     return result;
 }