/**
 * Created by doctorjj on 2017. 4. 16..
 */
var person = {
    name: 'suho',
    age:'33',
    phone: '010-2222-2222',
    eat : function(food){
        console.log(this.name +' 가 '+food+' 먹는다')
    }
};


function abc() {
    //"use strict";

    function ddd() {
        console.log(this);
    }
    var obj={
        ddd:ddd
    };
    ddd();
    obj.ddd();
    new obj.ddd();
    ddd.call(person);
}

//abc();

function tt() {
    console.log(toString)
}
//tt();

var person1 = {
    name:'suho'
};
//console.log(person1.toString());


function getWeekDay(code) {
    if(!code){
        code = 'kr';
    }
    var arr = {
        kr : [ '일','월','화','수','목','금','토'],
        en: ['sun','mon','thus','wed','ths','fri','sat']
    };
    try{
        var re = arr[code][new Date().getDay()];
    }catch (e){
        console.error('노지원 국가코드입니다. '+Object.keys(arr)+' 만 가능 합니다' + e);
    }
    //arr.en === arr[en]
    return re;
}
console.log(getWeekDay('jp'))






