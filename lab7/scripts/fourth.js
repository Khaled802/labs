addEventListener("load", function () {
    hobj = document.getElementsByTagName("h3")[0];
    play = document.getElementsByClassName("gg-play-button-o")[0]
    stp = document.getElementsByClassName("gg-play-stop-o")[0];
    seconds = 0;
    minutes = 0;

    hobj.innerText = "00:00";
    play.addEventListener("click", function () {
        timerID = setInterval(function () {  //"00:00"
            console.log('hi');
            seconds++;
            if (seconds == 60) {
                minutes++;
                seconds = 0;
            }
           var str= '';
            str += Math.floor(minutes / 10);
            str+= minutes % 10;
            str += ':';
            str += Math.floor(seconds / 10);
            str+= seconds % 10;
            hobj.innerText = str;
        },1000)

    })// play
    stp.addEventListener("click", function () {
        clearInterval(timerID);

    })// stop
    




})//load