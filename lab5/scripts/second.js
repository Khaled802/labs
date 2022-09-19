var arr = [3, 1, 4, 5, 2];

function sumAll(arr) {
    var sum = 0;
    for (var index in arr) {
        var item = arr[index];
        sum += item;
    }
    return sum;
}

function productAll(arr) {
    var product = 1;
    for (var index in arr) {
        var item = arr[index];
        product *= item;
    }
    return product;
}


console.log(eval('sumAll(arr)'));
console.log(eval('productAll(arr)'));



function sumAll_arg() {
    var sum = 0;
    for (var index in arguments) {
        var item = arguments[index];
        sum += item;
    }
    return sum;
}

function productAll_arg() {
    var product = 1;
    for (var index in arguments) {
        var item = arguments[index];
        product *= item;
    }
    return product;
}



console.log(eval('sumAll_arg(1, 2, 3, 4)'));
console.log(eval('productAll_arg(1, 2, 3, 4)'));