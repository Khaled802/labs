var str = 'welcome to js';
var i = 0;

var _write = setInterval(function () {
    if (i == str.length) {
        clearInterval(_write);
        window.close();
    }
    document.write(str[i++]);
    
},1000);