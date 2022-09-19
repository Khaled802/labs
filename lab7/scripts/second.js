addEventListener('load', function() {
    console.log('hello')
    var url = document.getElementsByTagName('a')[0];
    url.setAttribute('href', 'https://www.raining.com');
    url.innerText = 'Training';
    var imgs = this.document.getElementsByTagName('img');
    var last_img = imgs[imgs.length-1];
    last_img.style.border = 'solid pink 2px';
    function print_checked() {
        var check_box = this.document.getElementsByName('hoppy');
        var output = '';
        for (let index = 0; index < check_box.length; index++) {
            const element = check_box[index];
            if (element.checked) {
                output += element.getAttribute('value');
                output += " : ";
            }
            
            
        }
        this.alert(output);
    }
    print_checked();

    var example = this.document.getElementById('example');
    example.style.backgroundColor = "pink";
}); // load