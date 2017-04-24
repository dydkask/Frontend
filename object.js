

var person = {
	name: 'suho',
	age:'33',
	phone: '010-2222-2222',
	eat : function(food){
		console.log(this.name +' 가 '+food+' 먹는다')
	}
};

//person.eat('사과');

//함수가 호출 되는 방법에 따라 this는 달라진다.

function a() {
	console.log(this);
}
//a();

var p = {
	run : function () {
		console.log(this);
    }
};
//p.run();

    //3.생성자 호출
    function Abc() {
        console.log(this)
    }
    new Abc();

