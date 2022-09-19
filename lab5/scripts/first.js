var numbers = [3, 1, 2, 4, 3, 5, 1, 60, 50, 100];

function make_unique(arr) {
    var result = [];
    for (var item in arr) {
        if (result.indexOf(arr[item]) == -1) {
            result.push(arr[item]);
        }
    }
    return result;
}

numbers = make_unique(numbers);

console.log(numbers);

numbers.sort(function (item1, item2) {
    return item1 - item2;
});

console.log(numbers);

function get_large_than_50(arr) {
    var result = [];
    for (var item in arr) {
        
        if (arr[item] > 50) {
            result.push(arr[item]);
        }
    }
    return result;
}

// numbers = get_large_than_50(numbers);

console.log(numbers);

var numbers = numbers.filter(function(item) {
    return item > 50;
});

console.log(numbers);


function get_max(numbers) {
    var max = numbers[0];
    for (var index in numbers) {
        var item = numbers[index];
        if (item > max) {
            max = item;
        }
    }
    return max;
}

function get_min(numbers) {
    var min = numbers[0];
    for (var index in numbers) {
        var item = numbers[index];
        if (item < min) {
            min = item;
        }
    }
    return min;
}

console.log("max: "+get_max(numbers));
console.log("min: "+ get_min(numbers));

var _max = numbers[0];
var _min = numbers[0];

console.log("max: "+numbers.reduce(function (pre, cur) {
    return Math.max(pre, cur)}
    , _max));

console.log("min: "+ numbers.reduce(function (pre, cur) {
    return Math.min(pre, cur)}
    ,_min));