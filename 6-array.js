/*

Array - sarasas kitaip pasakius

*/

const empty = [];

console.log(empty[0]);

const luckyNumbers=[7,777,13,666,8,2];
console.log(luckyNumbers);

const students=['Jonas','Maryte','Petras','Ona'];
console.log(students);


const firsNumber=luckyNumbers[0];
console.log(firsNumber);
console.log(luckyNumbers[1]);
console.log(luckyNumbers[2]);
console.log(luckyNumbers[3]);
console.log(luckyNumbers[4]);

console.log(students[0]);
console.log(students[1]);
console.log(students[2]);

console.log(empty.length);
console.log(luckyNumbers.length); /// issilogint .lenght funkcija kiek skaiciu, 
console.log(students.length);


const numbers= [10,2,8,4,6];
const totalSum1=numbers[0]+numbers[1]+numbers[2]+numbers[3]+numbers[4];/// Paprastu budu sudetis eilutes. 
console.log(totalSum1);
let totalSum2=0;
console.log(totalSum2);

totalSum2=totalSum2+numbers[0];/// reiskia ta pati kaip is += tik ten sutrumpintai eina.+= pvz totalSum3+=numbers[0];
totalSum2=totalSum2+numbers[1];
totalSum2=totalSum2+numbers[2];
totalSum2=totalSum2+numbers[3];
totalSum2=totalSum2+numbers[4];
console.log(totalSum2);

const dictionary=['pomidoras','agurkas','bulve','kefyras','druska','svogunu laiskai','lasiniai'];

// patiekalui reikes;a,b,c,d.

const sentence1='Patiekalui reikes:'+dictionary[0]+','+dictionary[1]+','+dictionary[2]+','+dictionary[3];
console.log(sentence1); /// taip iki begalybes kiek nariu reikia. Toks ilgas sprendimo budas. 

const sentence2='Patiekalui reikes:';
console.log(sentence2);

















