
/*
ARRAY - sąrašas, Arėjus, matrica, masyvas, list'as, rinkinys/ nuo cia destytojo failas.
*/
const empty = [];
console.log(empty);
console.log(empty[0])
const luckyNumbers = [7, 777, 13, 666, 8, 2];
console.log(luckyNumbers);

const students = ['Jonas', 'Maryte', 'Petras', 'Ona'];
console.log(students);

const firstNumber = luckyNumbers[0];
console.log(firstNumber);

console.log(luckyNumbers[0]);
console.log(luckyNumbers[1]);
console.log(luckyNumbers[2]);
console.log(luckyNumbers[3]);
console.log(luckyNumbers[4]);
console.log(luckyNumbers[5]);
console.log(luckyNumbers[6]);
console.log(luckyNumbers[7]);

console.log(students);
console.log(students[0]);
console.log(students[1]);
console.log(students[2]);
console.log(students[3]);
console.log(students[4]);
console.log(students[5]);
console.log(students[-1]);

console.log(empty.length);
console.log(luckyNumbers.length);
console.log(students.length);


const numbers = [10, 2, 8, 4, 6];

const totalSum1 = numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4];
console.log(totalSum1);

let totalSum2 = 0;
totalSum2 = totalSum2 + numbers[0];
totalSum2 = totalSum2 + numbers[1];
totalSum2 = totalSum2 + numbers[2];
totalSum2 = totalSum2 + numbers[3];
totalSum2 = totalSum2 + numbers[4];
console.log(totalSum2);

let totalSum3 = 0;
totalSum3 += numbers[0];
totalSum3 += numbers[1];
totalSum3 += numbers[2];
totalSum3 += numbers[3];
totalSum3 += numbers[4];
console.log(totalSum3);

const dictionary = ['pomidoras', 'agurkas', 'bulve', 'kefyras', 'druska', 'svogunu laiskai', 'lasiniai'];

// Patiekalui reikes: a, b, c, d.
const sentence1 = 'Patiekalui reikes: ' + dictionary[0] + ', ' + dictionary[1] + ', ' + dictionary[2] + ', ' + dictionary[3] + ', ' + dictionary[4] + ', ' + dictionary[5] + ', ' + dictionary[6] + '.';
console.log(sentence1);

let sentence2 = 'Patiekalui reikes: ';
sentence2 += dictionary[0] + ', ';
sentence2 += dictionary[1] + ', ';
sentence2 += dictionary[2] + ', ';
sentence2 += dictionary[3] + ', ';
sentence2 += dictionary[4] + ', ';
sentence2 += dictionary[5] + ', ';
sentence2 += dictionary[6] + '.';
console.log(sentence2);



let index = 0;// cia kai naudojama k++ reiksme. Butinai reikia deklaruoti 0 reiksme.
let sentence3 = 'Patiekalui reikes: ';

sentence3 += dictionary[index] + ', ';

index += 1;
sentence3 += dictionary[index] + ', ';

index += 1;
sentence3 += dictionary[index] + ', ';

index += 1;
sentence3 += dictionary[index] + ', ';

index += 1;
sentence3 += dictionary[index] + ', ';

index += 1;
sentence3 += dictionary[index] + ', ';

index += 1;
sentence3 += dictionary[index] + '.';
console.log(sentence3);

let k = 0;
k = k + 1;
k += 1;
k++;
++k;

let i = 0;
let sentence4 = 'Patiekalui reikes: ';
sentence4 += dictionary[i++] + ', ';
sentence4 += dictionary[i++] + ', ';
sentence4 += dictionary[i++] + ', ';
sentence4 += dictionary[i++] + ', ';
sentence4 += dictionary[i++] + ', ';
sentence4 += dictionary[i++] + ', ';
sentence4 += dictionary[i++] + '.';
console.log(sentence4);

let j = -1; /// padarius -1 galima naudoti ++j, bet geriau einasi j++.
let sentence5 = '++ Patiekalui reikes: ';
sentence5 += dictionary[++j] + ', ';
sentence5 += dictionary[++j] + ', ';
sentence5 += dictionary[++j] + ', ';
sentence5 += dictionary[++j] + ', ';
sentence5 += dictionary[++j] + ', ';
sentence5 += dictionary[++j] + ', ';
sentence5 += dictionary[++j] + '.';
console.log(sentence5);

const b=['jonas',1,2,2,5];
const f=123456
if(Array.isArray(f)){
    console.log('Array');
    
}else (console.log("ne- Array"));

























