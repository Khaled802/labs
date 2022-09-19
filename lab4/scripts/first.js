var str = new String('the quick brown fox');
var words = str.split(' ');
var capatalized = '';

for (let index = 0; index < words.length; index++) {
    capatalized += words[index][0].toLocaleUpperCase() + words[index].slice(1);
    if (index != words.length-1) {
        capatalized += ' ';
    }
}

console.log(capatalized);