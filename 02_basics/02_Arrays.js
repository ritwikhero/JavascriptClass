const marvelHeroes = ["spiderman","ironman","thor"];
const dcHeroes = ["batman","superman","flash"];

// marvelHeroes.push(dcHeroes);

// console.log(marvelHeroes);

const assemble = marvelHeroes.concat(dcHeroes); //concat 2 arrays
console.log(assemble);

//another way , it's better cause we ca add many array no limitation like concat
const newArr = [...marvelHeroes,...dcHeroes];
console.log(newArr);

const arr = [1,2,3,[4,5,6],7,[8,9,10,[11,12,13]]];
const arr1 = arr.flat(Infinity);
console.log(arr1);