//#1
console.log(hello);
var hello = "world";
//after the Hoisting
//var hello;
//console.log(hello);    o/p :undefined
//hello='world' ;

//#2
var needle = "haystack";
test();
function test() {
  var needle = "magnet";
  console.log(needle);
}
// var needle='haystack';
// test();
// function test(){
//     var needle = 'magnet'
//     console.log(needle);    o/p  magnet

// }

//#3
var brendan = "super cool";
function print() {
  brendan = "only okay";
  console.log(brendan);
}
console.log(brendan);
// o/p is super cool

//#4
var food = "chicken";
console.log(food);
eat();
function eat() {
  food = "half-chicken";
  console.log(food);
  var food = "gone";
}
// var food = 'chicken';
// console.log(food); o/p chicken
// eat();
// function eat(){
//   var food = 'half-chicken';
//     console.log(food); o/p half-chicken
//      food = 'gone';
// }

//#5
mean();
console.log(food);
var mean = function () {
  food = "chicken";
  console.log(food);
  var food = "fish";
  console.log(food);
};
//mean is not a function

//#6
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
// console.log(var genre)    o/p undefined
//genre ="disco";
//function rewind(){
//      var genre ="rock";
//      console.log(genre);     o/p rock
//      genre = "r&b";
//      console.log(genre);      o/p r&b

//  };
//  console.log(genre) o/p dicso as the global value

//#7
dojo = "san jose";
console.log(dojo); //o/p  : san jose
learn(); //invoking learn function
function learn() {
  dojo = "seattle"; //var dojo ="seattle"
  console.log(dojo); //o/p :seattle
  var dojo = "burbank"; //dojo ="burbank";
  console.log(dojo); //o/p burbank
}
console.log(dojo); //o/p : san jose as the global value

//#8-Bonus
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students) {
  const dojo = {};
  dojo.name = name;
  dojo.students = students;
  if (dojo.students > 50) {
    dojo.hiring = true;
  } else if (dojo.students <= 0) {
    dojo = "closed for now";
  }
  return dojo;
}
//console.log(makeDojo("Chicago", 65)); invoking the makeDojo function and consolelog the return;
//const dojo= {}; object
// dojo.name ="chicago";
// dojo.students = 65 ;
// dojo.hiring = true;
//  return dojo, So o/p will be  dojo={name: "chicago", students: 65 , hiring: true}

//  then error as we trying to edit dojo and it is a const value ;
