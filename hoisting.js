console.log(hello);
var hello = 'world';

//var hello;
//console.log(hello); //log undefined
//hello = 'world'; 

// OUTPUT:
// undefined

//----------------------------------------------------------------------------------------------

var needle = 'haystack';
test();
function test() {
    var needle = 'magnet';
    console.log(needle);
}

// var needle;
// function test(){
//     var needle;
//     needle = 'magnet';
//     console.log(needle); //log magnet
// }
// test();

// OUTPUT:
// magnet

//----------------------------------------------------------------------------------------------

var brendan = 'super cool';
function print() {
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

// var brendan;
// function print() {
//     brendan = 'only okay';
//     console.log(brendan); //log only okay, nunca imprime realmente porque la funcion print nunca se llama
// }
// brendan = 'super cool';
// console.log(brendan); //log super cool

// OUTPUT:
// super cool


//----------------------------------------------------------------------------------------------

var food = 'chicken';
console.log(food);
eat();
function eat() {
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

// var food;
// function eat() {
//     var food;
//     food = 'half-chicken';
//     console.log(food); //log half chicken
//     food = 'gone';
// }
// food = chicken;
// console.log(food); //log chicken
// eat();

// OUTPUT:
// chicken
// half-chicken

//----------------------------------------------------------------------------------------------


console.log(food);
var mean = function () {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
mean();
console.log(food);


// var mean;
// mean(); //Error, la variable mean no es una funcion porque solo se declaro y no se asigno todavia la funcion
// console.log(food); //Error, la variable no existe o no esta definida
// mean = function () {
//     var food;
//     food = "chicken";
//     console.log(food); //log chicken
//     food = "fish";
//     console.log(food); //log fish
// }
// console.log(food); // error la variable no existe

// OUTPUT:
// Error, la variable mean no es una funcion

//----------------------------------------------------------------------------------------------

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

// var genre;
// function rewind() {
//     var genre;
//     genre = "rock";
//     console.log(genre); //log rock
//     genre = "r&b";
//     console.log(genre); //log r&b
// }
// console.log(genre); // log undefined
// genre = "disco";
// rewind();
// console.log(genre); //log disco

// OUTPUT:
// undefined
// rock
// r&b
// disco

//----------------------------------------------------------------------------------------------

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

// function learn() {
//     var dojo;
//     dojo = "seattle";
//     console.log(dojo); //log seattle
//     dojo = "burbank";
//     console.log(dojo); //log burbank
// }
// dojo = "san jose";
// console.log(dojo); //log san jose
// learn(); 
// console.log(dojo); //log san jose

// OUTPUT:
// san jose
// seattle
// burbank
// san jose

//----------------------------------------------------------------------------------------------

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students) {
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if (dojo.students > 50) {
        dojo.hiring = true;
    }
    else if (dojo.students <= 0) {
        dojo = "closed for now";
    }
    return dojo;
}


// function makeDojo(name, students) {
//     const dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if (dojo.students > 50) {
//         dojo.hiring = true;
//     }
//     else if (dojo.students <= 0) {
//         dojo = "closed for now"; //Error, no se puede modificar una constante
//     }
//     return dojo;
// }
// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0)); 

// OUTPUT:
// Error, no se puede modificar una constante

