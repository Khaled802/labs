var str = new String('Egypt');

var new_str = '';


for (let index = 0; index < str.length; index++) {
    const element = str[index];
    if (element == element.toLowerCase()) {
        new_str += element.toUpperCase();
    } else {
        new_str += element.toLowerCase();
    }
}

console.log(new_str);