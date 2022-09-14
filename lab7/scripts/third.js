var next = document.getElementById('next');
var prev = document.getElementById('prev');
var slide_show = document.getElementById('slide_show');
var stop = document.getElementById('stop');
var slider = document.getElementById('slider');

var image = 1;
var going_up = true;

var up, down;

function goup() {
    up = setInterval(function() {
        
        slider.setAttribute('src', 'images/'+image+'.jpg');
        image++;
        if (image > 5) {
            image = 1;
        }
        console.log('hi');

    },1000);
}

function godown() {
    down = setInterval(function() {
        slider.setAttribute('src', 'images/'+image+'.jpg');
        image--;
        if (image < 1) {
            image = 5;
        }
        console.log(image);

    },1000);
}

function clear_it() {
    console.log('hi');
    if (down) {
        clearInterval(down);
    }
    if (up) {
        clearInterval(up);
    }
}

next.addEventListener('click', function() {
   clear_it();
    goup();
    going_up= true;
    
});


prev.addEventListener('click', function() {
    clear_it();
    
    godown();
    going_up= false;
});

stop.addEventListener('click', function() {
    clear_it();
});

slide_show.addEventListener('click', function () {
    clear_it();
    if (going_up) {
        goup();
    } else {
        godown();
    }

});

