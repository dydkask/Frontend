

/*
4/9
호이스팅 : 변수를 어디서든 선언하든 최상위 컨텍스트로 올라와 undefined 로 선언 된다.

확장성 생각하여 프로그램 짜야한다.
function min(a,b,c,d) {
	var m = a;
	if(m>b) m=b;
	if(m>c) m=c;
	if(m>d) m=d;
	return m;
	//	반복문 쓰고싶다.
}


circle(max(a,b))
1.&& a && b a가 참이면 b
2.|| text || ''
3.!
var sum = 0 ;
for (var i = 0; i < array.length; i++) {
	sum+=array[i];
}
*/


function evenSum(arr) {
	var i =0;
	var result = 0;
	while(i<arr.length){
		if(arr[i] % 2 === 0 ) {
            result += arr[i];
            console.log(arr[i]);
        }
		i++;
	}
	return result;

}
//console.log(evenSum([1,4,5,324,123,5,77,4,5,1,2,96]));
function countif(arr,target) {
	var i =0;
	var count =0;
	while (i<arr.length){
		if(arr[i]===target)
			count ++;
		i++;
	}
	return count;
}
var arr = ["남","여","여","남","남","남","여"]
console.log(countif(arr,"남"));
console.log(countif(arr,""));