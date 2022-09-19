'use strict';
let count = 10000;
let source = 'a'.repeat(5000);

function concatAsString() {
    var str = '';
    for (var c = 0; c < count; c++) {
        for (var i = 0; i < source.length; i++) {
            str += source[i];
        }
    }
    return str;
}

function concatAsArray() {
    var array = [];
    for (var c = 0; c < count; c++) {
        for (var i = 0; i < source.length; i++) {
            array.push(source[i]);
        }
    }
    return array.join("");
}

function concatAsTrueString() {
    var str = new String();
    for (var c = 0; c < count; c++) {
        for (var i = 0; i < source.length; i++) {
            str += source[i];
        }
    }
    return str;
}

// ----------- TEST -----------------
function runTest() {
    console.log(`--------------------------`);
    console.log(`"concatAsString" started..`);
    var t0 = performance.now();
    var str1 = concatAsString();
    var t1 = performance.now();
    console.log(`"concatAsString" completed:`);
    console.log("Time 1: " + (t1 - t0) + " milliseconds.");

    console.log(`--------------------------`);
    console.log(`"concatAsArray" started..`);
    t0 = performance.now();
    var str2 = concatAsArray();
    t1 = performance.now();
    console.log(`"concatAsArray" completed:`);
    console.log("Time 2: " + (t1 - t0) + " milliseconds.");

    console.log(`--------------------------`);
    console.log(`"concatAsTrueString" started..`);
    t0 = performance.now();
    var str3 = concatAsTrueString();
    t1 = performance.now();
    console.log(`"concatAsTrueString" completed:`);
    console.log("Time 3: " + (t1 - t0) + " milliseconds.");
}

runTest();