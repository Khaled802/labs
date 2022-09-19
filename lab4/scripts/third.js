var str =  new String('thequickbrownfoxjumpsoverthelazydog');

var exist = new String();

var new_str = '';

for (let index = 0; index < str.length; index++) {
    const element = str[index];
    if (!(~exist.indexOf(element))) {
        new_str += element;
        exist += element;
    }
}
console.log(new_str);