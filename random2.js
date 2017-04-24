/**
 * Created by doctorjj on 2017. 4. 23..
 */





var randomGame =(function randomGame() {
    var num = null;
    var limit = 6;
    var MESSAGE = {
        START: "게임 시작",
        UP: "업",
        DOWN: "다운",
        END: "게임 종료",
        CORRECT: "정답"
    };
    var display  = function (msg) {
        console.log(msg);
    }
    var end=function () {
        display(MESSAGE.END);
        limit=0;
    }
    return{
        start : function (min,max) {
            num=Math.floor(Math.random() * (max || 1) + (min || 1));
            limit=6;
            display(MESSAGE.START);
        },
        say:function (num1) {
            if(!limit) return end();

            if(num1===num){
                display(MESSAGE.CORRECT);
                end();
                return;
            }

            display(MESSAGE[num1 >num ? 'DOWN': 'UP']);
            limit--;

            if(!limit) return end();
        }
    }
}());
//함수 실행 후 그안의 변수 사라져야함 ( 가비지 컬렉션 느낌
// 그러나 선언된 시점에 바깥의 변수를 기억해야되는 경우 클로져 함수 ex) limit
//  즉시 실행 패턴 사용후 감출거 감추는것은 모듈 패턴 & 객체 리턴
// private 님 그립습니다.
//핏자 템플릿 패턴

randomGame.start();
randomGame.say(22);
randomGame.say(28);
randomGame.say(25);