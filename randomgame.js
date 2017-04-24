/**
 * Created by doctorjj on 2017. 4. 17..
 */

var randomGame ={
    num: null,
    limit:6,
    MESSAGE:{
        START : "게임 시작",
        UP : "업",
        DOWN : "다운",
        END : "게임 종료",
        CORRECT : "정답"
    },
    gameStart : function () {
        this.num=Math.floor(Math.random() * 100 + 1);
        this.limit=6;
        this.display(this.MESSAGE.START);
    },
    say : function (num1) {
        if(!this.limit) return this.end();

        if(num1===this.num){
            this.display(this.MESSAGE.CORRECT);
            this.end();
            return;
        }

        this.display(num1 >this.num ? this.MESSAGE.DOWN : this.MESSAGE.UP);
        this.limit--;

        if(!this.limit) return this.end();

/*
        if(this.limit <0) {
            this.display(randomGame.num === num1 ? this.MESSAGE.CORRECT:
                randomGame.num > num1 ? this.MESSAGE.UP : this.MESSAGE.DOWN);
            this.limit--;
        }
        else{
            this.end();
        }
*/
    },
    display : function (msg) {
        console.log(msg);
    },
    end:function () {
        this.display(this.MESSAGE.END);
        this.limit=0;
    }
}



randomGame.gameStart();
randomGame.say(2);
randomGame.say(25);