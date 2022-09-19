var val = 1;

setInterval(function() {
    document.title = val;
    document.write('<p style=" border: 2px solid red; outline: 3px solid red; outline-offset: 3px; display: inline-block; margin:3;">');
    document.write(val);
    document.write('</p>');
    document.write('<br>');
    val++;
}, 1000);