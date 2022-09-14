var str = 'Web Development Tutorial';
var words = str.split(' ');

var max_length = 0;
var max_str = '';

for (let index = 0; index < words.length; index++) {
    const element = words[index];
    if (max_length < element.length) {
        max_length = element.length;
        max_str = element;
    }
}

console.log(max_str);