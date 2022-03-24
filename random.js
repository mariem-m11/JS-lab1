num = Math.ceil(Math.random()*10) ; //or Math.round(Math.random(10)*10);
level = +prompt("write 1 for easy and 0 for hard")

if (level == 1){
    v=+prompt("give a number");
    trials=+prompt("give the number of trials");

    for (let i = 0; i < trials; i++) {
        if(v==num){
                alert("YOU WINN!!!!");
                break;
                }
        else if (x > num) {
                    alert("try a smaller number! you still have"+(trials-i-1)+ "attempts");
                } 
        else {
                    alert("try a bigger number ^^ you still have "+(trials-i-1)+"attempt");
                }
    }
}

else if (level == 0){
    v=+prompt("give a number");
    for (let i = 0; i <3; i++) {
        if(v==num){
                alert("YOU WINN!!!!");
                break;
                }
        else if (x > num) {
                    alert("try another number! you still have"+(3-i-1)+ "attempts");
                }
    }
}


