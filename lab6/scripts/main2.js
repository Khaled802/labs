var students = [{ fname: 'ali', age: 22, grade:100 },
       { fname: 'nora', age: 20, grade:90 },
       { fname: 'nada', age: 25, grade:75 },
       { fname: 'heba', age: 19, grade:50 },
       { fname: 'bassem', age: 21, grade:40 }
];  



function print(students) {
    for (var key in students) {
        document.write('<h3>');
        document.write(students[key].fname);
        document.write(":");
        document.write(students[key].age);
        document.write(":");
        document.write(students[key].grade);
        document.write(":");
        document.write('</h3>');
    }
}



print(students);

document.write("<h1 style='color:red'>Strudents greater than 80</h1>");

print(students.filter(function(std) {
    return std.grade > 80;
}));


document.write("<h1 style='color:red;'>Strudents ordered asc orders</h1>");

print(students.sort(function(a, b) {
    if (a.fname > b.fname) return 1;
    else if (a.fname < b.fname) return -1;
    return 0;
}));


