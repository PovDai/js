"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.suskaiciuok = suskaiciuok;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

function surask(haystack) {
  for (var i = 0; i <= haystack.length; i++) {
    if (haystack[i] === 'needle') {
      return "found the needle at position ".concat(i);
    }
  }
}

;
var z1 = ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"];
console.log(surask(z1));
/*Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
If the input is an empty array or is null, return an empty array.
Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].*/

function countPositivesSumNegatives(input) {
  if (input === null || input === '' || input === 0) {
    return [];
  }

  var s5 = 0; //+

  var s3 = 0; //-

  for (var i = 0; i <= input.length; i++) {
    if (input[i] > 0) {
      s5++;
    }

    if (input[i] < 0) {
      s3 += input[i];
    }
  }

  return [s5, s3];
}

;
var z2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
console.log(countPositivesSumNegatives(z2));

function makeUpperCase(str) {
  var result = str.toUpperCase();
  return result;
}

;
console.log(makeUpperCase('jonas')); /// sutraukimas be tarpu zodzio. 

function noSpace(x) {
  var result = '';

  for (var i = 0; i < x.length; i++) {
    if (x[i] !== ' ') {
      result += x[i];
    }
  }

  return result;
}

console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'));
console.log(noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd'));

function boolToWord(bool) {
  if (bool === 'true') {
    return "Yes";
  } else {
    return "No";
  }
}

;
console.log(boolToWord('true'));
console.log(boolToWord('false'));
console.log(boolToWord('undefined'));

function greet() {
  return "hello world";
}

console.log(greet());

function basicOp(operation, value1, value2) {
  var result = eval("".concat(value1).concat(operation).concat(value2));
  return "'".concat(value1, " ").concat(operation, " ").concat(value2, " = ").concat(result, "'");
}

;
console.log(basicOp('+', 4, 7));
console.log(basicOp('-', 15, 18));
console.log(basicOp('*', 5, 5));
console.log(basicOp('/', 49, 7));

function fakeBin(x) {
  var skaicius = Number(x);
  var eilute = '';

  for (var i = 0; i <= skaicius.length; i++) {
    if (i > 5) {
      eilute += (_readOnlyError("eilute"), x[i]);
    }

    return eilute;
  }
}

console.log(fakeBin('45385593107843568'));
console.clear();

function testEven(n) {
  if (n % 2 === 0) {
    return true;
  }

  if (n % 2 === 1) {
    return false;
  }

  if (n % 1 !== 0) {
    return false;
  } //Your awesome code here!

}

;
console.log(testEven(0.1));
console.log(testEven(0));
console.log(testEven(0.5));
console.log(testEven(1));
console.log(testEven(2));
console.log(testEven(-4));

function simpleMultiplication(number) {
  var multi = 8;
  var multi1 = 9;

  if (number % 2 === 0) {
    return number * multi;
  }

  if (number % 2 === 1) {
    return number * multi1;
  }
}

;
console.log(simpleMultiplication(2));
console.log(simpleMultiplication(1));
console.log(simpleMultiplication(8)); /// pakeisti is pliuso i minusa. 

function invert(array) {
  for (var i = 0; i < array.length; i++) {
    array[i] = -array[i];
  }

  return array;
}

var z3 = [1, 2, 3, 4, 5];
var a = [1, -2, 3, -4, 5];
var c8 = [];
console.log(invert(z3));
console.log(invert(a));
console.log(invert(c8)); //// kai vienam reikia lyginio kitam nelyginio kad gautusi true. 

function lovefunc(flower1, flower2) {
  return flower1 % 2 !== flower2 % 2; // turi vienas buti 1 kitas 0, tada gausime taip. jeigu pirmas nelygus antram tada taip. 
}

console.log(lovefunc(1, 4));
console.log(lovefunc(2, 2));
console.log(lovefunc(0, 1));
console.log(lovefunc(0, 0)); /// suskaicius vidurki. 

function findAverage(array) {
  var sum = 0;
  var count = 0;
  var result = 0;

  for (var i = 0; i < array.length; i++) {
    sum += array[i];
    count++;
    result = sum / count;
  }

  return result;
}

;
console.log(findAverage([1, 1, 1]));
console.log(findAverage([1, 2, 3]));
console.log(findAverage([1, 2, 3]));
console.log(findAverage([1, 2, 3, 4])); /// raides dvigubint arba skaicius. 

function daubleChar(str) {
  var zodis = "";

  for (var i = 0; i < str.length; i++) {
    zodis += str[i] + str[i]; // a+a/b+b/c+c/d+d
  }

  return zodis;
}

console.log(daubleChar('abcd'));
console.log(daubleChar('Adidas'));
console.log(daubleChar('1337'));
console.log(daubleChar('illuminati'));
console.log(daubleChar("123456"));
console.log(daubleChar("%^&*("));
/*
"4",  "5" --> "9"
"34", "5" --> "39"
"", "" --> "0"
"2", "" --> "2"
"-5", "3" --> "-2"*/
//Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

/*
const stringas = "9";
const skaicius = Number(stringas); /// kaip paversti number tipu jeigu imanoma 

console.log(skaicius); // 9 (number tipas)
console.log(typeof skaicius); // "number"

const skaicius = 9;
const stringas = String(skaicius);

console.log(stringas); // "9" (string tipas) kaip paversti string tipu jeigu imanoma.,
console.log(typeof stringas); // "string"*/

function sumStr(a, b) {
  var skaicius1 = Number(a);
  var skaicius2 = Number(b);
  var suma = skaicius1 + skaicius2;
  var suma1 = String(suma);
  return "\"".concat(a, "\",\"").concat(b, "\" --> \"").concat(suma1, "\"");
}

console.log(sumStr('4', '5'));
console.log(sumStr('34', '5'));
console.log(sumStr('0', '0'));

function hoopCount(n) {
  if (n >= 10) {
    return 'Great, now move on to tricks';
  }

  if (n < 10) {
    return 'Keep at it until get it';
  }
}

console.log(hoopCount(3));
console.log(hoopCount(11));
console.clear();

function setAlarm(employed, vacation) {
  if (employed && !vacation) {
    return true;
  } else {
    return false;
  }
}

console.log(setAlarm(true, true)); // false

console.log(setAlarm(false, true)); // false

console.log(setAlarm(true, false)); // true

console.log(setAlarm(false, false)); // false

console.clear();

function nbYear(p0, percent, aug, p) {
  var metai = p0 + p0 * percent + aug;
  return metai;
}

console.log(nbYear(1000, 0.02, 50, 1200));

function findNeedle(haystack) {
  var pozition = 0;

  for (var i = 0; i < haystack.length; i++) {
    if (haystack[i] === 'needle') {
      pozition += i;
    }
  }

  return "found the needle ant pozition ".concat(pozition);
}

;
console.log(findNeedle([1, 2, 3, 4, 5, 6, 7, 8, 8, 7, 5, 4, 3, 4, 5, 6, 67, 5, 5, 3, 3, 4, 2, 34, 234, 23, 4, 234, 324, 324, 'needle', 1, 2, 3, 4, 5, 5, 6, 5, 4, 32, 3, 45, 54]));

function evenOrOdd(number) {
  if (number % 2 == 0) {
    return 'Even';
  } else {
    return "Odd";
  }
}

console.log(evenOrOdd(2));
console.log(evenOrOdd(7));
console.log(evenOrOdd(0)); ////// jeigu reikia pakeisti zodyje viena raide kita raide. 

function DNAtoRNA(dna) {
  var sd = '';

  for (var i = 0; i < dna.length; i++) {
    if (dna[i] === 'T') {
      sd += 'U';
    } else {
      sd += dna[i];
    }
  }

  return sd;
}

console.log(DNAtoRNA('GCAT')); /// pakartoju isiminimui 

function ieskokPakeisk(duomenys) {
  var naujas = '';

  for (var i = 0; i < duomenys.length; i++) {
    if (duomenys[i] === 'T') {
      naujas += 'U';
    } else {
      naujas += duomenys[i];
    }
  }
} // pakartoju/ 


function uzkeisk(duomenys) {
  var naujas5 = '';

  for (var i = 0; i < duomenys.length; i++) {
    if (duomenys[i] === 'T') {
      naujas5 += 'U';
    } else {
      naujas5 += duomenys[i];
    }
  }
}

function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  var sum = laLigaGoals + copaDelReyGoals + championsLeagueGoals;
  return sum;
}

console.log(goals(0, 2, 5)); /// Surasti trikampio 3 kampo dydi, ju suma lygi 180 laipsniu. 

function otherAngle(a, b) {
  var suma = 180;
  var c = suma - a - b;
  return c;
}

console.log(otherAngle(30, 60)); /// pajude per koordinates 

function move(position, roll) {
  var naujosKoordinates = position + roll * 2;
  return naujosKoordinates;
}

;
console.log(move(0, 4));
console.clear(); /// kai reikia tam tikrus dalykus pakeist kitais dalykais/ labai svarbu kur sedi return. 

function correct(string) {
  var zodis = '';

  for (var i = 0; i < string.length; i++) {
    if (string[i] === '5') {
      zodis += 'S';
    } else if (string[i] === '0') {
      zodis += 'O';
    } else if (string[i] === '1') {
      zodis += 'I';
    } else {
      zodis += string[i];
    }
  }

  return zodis;
}

console.log(correct('L0ND0N'));
console.log(correct("DUBL1N"));

function positiveSum(arr) {
  var sum = 0;

  if (arr.length === 0) {
    /// pradzioje saunam kad patikrinu ar ne [] skliaustai sedi uzklausoj. 
    return 0;
  }

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i]; //// jeigu pliusas sudedam jeigu minusas skaiciuojam kaip 0. 
    }
  }

  return sum;
}

;
console.log(positiveSum([1, 2, 3, 4, 5]));
console.log(positiveSum([-1, -2, -3, -5]));
console.log(positiveSum([]));
console.log(positiveSum([1, -2, 3, 4, 5]));

function updateLight(current) {
  if (current === 'green') {
    return 'yellow';
  }

  if (current === "yellow") {
    return 'red';
  }

  if (current === "red") {
    return "green";
  }
}

;
console.log(updateLight('green'));
console.log(updateLight('yellow'));
console.log(updateLight('red'));
console.log('----------');
var atvirukoTekstas = '"abracadabra';
var atvirukoBalses = ['a', 'e', 'i', 'o', 'u']; ///  kai reikia surasti zodyje, balsiu ne viena kieki. naudojami includes()

function getCount(str) {
  var atvirukoSuma = 0;
  var raides = ['a', 'e', 'i', 'o', 'u'];

  for (var i = 0; i < str.length; i++) {
    if (raides.includes(str[i])) {
      atvirukoSuma++;
    }
  }

  return atvirukoSuma;
}

;
console.log(getCount('abracadabra'));
console.log(getCount('pear tree')); /// reikia surasti ar eiluteje yra norima reiksme.Labai svarbu kur sedi paskutinis return, nes kitaip reiksme duos bloga.

function check(a, x) {
  for (var i = 0; i < a.length; i++) {
    if (a[i] === x) {
      return true;
    }
  }

  return false;
}

;
console.log(check[(66, 101)], 66);
console.log(check(['t', 'e', 's', 't'], 'e'));
console.log(check(['what', 'a', 'great', 'kata'], 'kat')); /// Math.floor suapvalina i mazesne puse pagal uzduoti. 

function litres(time) {
  var kiekis = 0.5;
  var suma = time * kiekis;
  var galutine = Math.floor(suma);
  return galutine;
}

;
console.log(litres(0));
console.log(litres(1));
console.log(litres(2));
console.log(litres(3));
console.log('-------------');

function arithmetic(a, b, operator) {
  if (operator === 'add') {
    return a + b;
  }

  if (operator === 'subtract') {
    return a - b;
  }

  if (operator === 'multiply') {
    return a * b;
  }

  if (operator === 'divide') {
    return a / b;
  }
}

console.log(arithmetic(1, 2, 'add')); // kai reikia paimti array eilute ir istumti zodi. 

function removeEveryOther(arr) {
  var naujas = [];

  for (var i = 0; i < arr.length; i += 2) {
    naujas.push(arr[i]); // naujas array gausis prasukti zodziai gausis. 
  }

  return naujas;
}

console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']));

function greef(name, owner) {
  if (name === owner) {
    return 'Hello boss';
  }

  if (name !== owner) {
    return 'Hello guest';
  }
}

;
console.log(greef('Daniel', 'Daniel'));
console.log(greef('Greg', 'Daniel')); // kai reikia isimti kazkoki elementa is zodio. siuo atveju sauktuka. 

function removeExclamationMarks(s) {
  var naujas = '';

  for (var i = 0; i < s.length; i++) {
    if (s[i] !== '!') {
      naujas += s[i];
    }
  }

  return naujas;
}

;
console.log(removeExclamationMarks("Hello World!"));

function reverseList(duomenys) {
  var list = '';

  for (var i = duomenys.length; i > 0; i--) {
    list += [i];
  }

  return "[".concat(list, "]");
}

;
var b = [1, 2, 3, 4];
var c = [9, 2, 0, 7];
console.log(reverseList(b));
console.log(reverseList(c));

function greek(name) {
  return "Hello,".concat(name, " how are you doing today");
}

console.log(greek("Ryan")); // kai reikia patikrinti ar antras zodis tinka pirmo pabaigai. 

function solution(str, ending) {
  return str.endsWith(ending);
}

console.log(solution('abcde', 'cde')); // jeigu reikia sujungti array tipo zodzius i string tipa. 

function smash(words) {
  return words.join(' ');
}

;
console.log(smash(["hello", "world"])); /// reikia is zodziu sakinio surasti trumpiausia zodi. 

function findShort(s) {
  var nauj = s.split(' '); // susplitinam i [zodis,zodis,zodis] eilute 

  var zod = nauj[0].length; /// prisilyginam 0 kad tikrintu nuo 0 

  for (var i = 0; i < nauj.length; i++) {
    if (nauj[i].length < zod) {
      /// darome < maziau nes maziausia > jeigu didziausio ieskotume. 
      zod = nauj[i].length; // length prierasas nes ieskome ilgio automatiskai rodys ilgiuus visur. 
    }
  }

  return zod;
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps")); //3

console.log(findShort("Let's travel abroad shall we")); //2

function bmi(weight, height) {
  var bmi = weight / (height * height);

  if (bmi <= 18.5) {
    return "Underweight";
  }

  if (bmi <= 25.0) {
    return "Normal";
  }

  if (bmi <= 30.0) {
    return "Overweight";
  }

  if (bmi > 30) {
    return "Obese";
  }
}

console.log(bmi(50, 1.80)); ///////////
/// patikrinti ar pateiktas a turi savyje x 

function chec(a, x) {
  for (var i = 0; i < a.length; i++) {
    if (a[i] === x) {
      return true;
    }
  }

  return false;
}

console.log(chec([66, 101], 66));
console.log(chec([101, 45, 75, 105, 99, 107], 107));
console.log(chec(['t', 'e', 's', 't'], 'e')); ////// nauja funkcija array.map()  pakeiciam mapu ir padarom per parseint numeriu, tada galim su ciklu suskaiciut. 

function sumMix(x) {
  var numbers = x.map(function (item) {
    return Number.parseInt(item);
  });
  var sum = 0;

  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum;
}

console.log(sumMix([9, 3, '7', '3'])); /// reikia paskaiciuoti avis kas yra lengva, 1 avis true, bet kad maiso null ir undefined. Taciau juos atradus imetus continue toliau eis

function countSheeps(sheep) {
  var count = 0;

  for (var i = 0; i < sheep.length; i++) {
    if (sheep[i] === undefined || sheep[i] === null || sheep.length === 0) {
      continue;
    }

    if (sheep[i] === true) {
      count++;
    }
  }

  return count;
}

console.log(countSheeps([]));
console.log(countSheeps([undefined]));
console.log(countSheeps([undefined, null, false, true]));
console.log(countSheeps([undefined, null, false, true, true, false, null, undefined])); //// paprasta funkcija su likusiu kiekiu kuro ir atstumu. 

function zeroFuel(distanceToPump, mpg, fuelLeft) {
  var mid = distanceToPump / mpg;

  if (mid <= fuelLeft) {
    return true;
  } else {
    return false;
  }
}

;
console.log(zeroFuel(50, 25, 2)); //// easy kaip pakeist number to string reiksme. 

function numberToString(num) {
  return '' + num;
}

console.log(numberToString(67)); /// arba 

function numberTo(num) {
  return num.toString();
}

;
console.log(numberTo(67)); //// pakeisti stringa i array eilute prase splitint pagal ' ' tarpa. 

function stringToArray(string) {
  return string.split(" "); // splitinam pagal tarpa. ir padarom [ eilute. ]
  // code code code
}

console.log(stringToArray('Robin Singh'));

function persistence(num) {
  var string = num + '';
  var array = string.split();
  console.log(array);
} //// lengvas suprantamas visiem


function switchItUp(number) {
  if (number === 0) {
    return "Zero";
  }

  if (number === 1) {
    return 'One';
  }

  if (number === 2) {
    return 'Two';
  }

  if (number === 3) {
    return 'Three';
  }

  if (number === 4) {
    return 'Four';
  }

  if (number === 5) {
    return 'Five';
  }

  if (number === 6) {
    return 'Six';
  }

  if (number === 7) {
    return 'Seven';
  }

  if (number === 8) {
    return 'Eight';
  }

  if (number === 9) {
    return "Nine";
  }
}

console.log(switchItUp(2)); ///// kai reikia suskaiciuoti ar sakinys turi tiek pat x ir o reiksmiu. 

function XO(str) {
  var xCount = 0;
  var oCount = 0;

  if (str.length === 0) {
    //// reikia si tikrinima daryti pries cikla, nes kitaip neveiks. 
    return true;
  }

  for (var i = 0; i < str.length; i++) {
    if (str[i] === 'X' || str[i] === 'x') {
      xCount++;
    } else if (str[i] === 'O' || str[i] === 'o') {
      oCount++;
    }
  }

  return xCount === oCount;
}

console.log(XO('')); // true

console.log(XO('xo')); // true

console.log(XO('xxxoo')); // false

console.log(XO('xXoO')); // true

console.log(XO('xxOOx')); // false
//// nupjauna pirma ir paskutine raides. 

function removeChar(str) {
  return str.slice(1, -1);
}

;
console.log(removeChar('eloquent')); // patikrinti ar is duotu krastiniu galima suskaiciuoti ar gali gautis trikmapis. 

function isTriangle(a, b, c) {
  if (a + b > c && a + c > b && b + c > a) {
    return true;
  }

  return false;
}

console.log(isTriangle(1, 2, 2));

function abbrevName(name) {
  var skirti = name.split(' '); // gaunasi du zodziai 

  var pirmos = skirti[0][0].toUpperCase(); // taip paimam pirmo zodzio pirma raide.Padarom didziaja 

  var antra = skirti[1][0].toUpperCase(); // taip paimam antra zodzio pirma raide. 

  return "".concat(pirmos, ".").concat(antra);
}

;
console.log(abbrevName("Sam Harris")); // reikia surasti visu kintamuju kvadratu suma. 

function squareSum(numbers) {
  var sum = 0;

  for (var i = 0; i < numbers.length; i++) {
    sum += Math.pow(numbers[i], 2);
  }

  return sum;
}

console.log(squareSum([0, 3, 4, 5])); //// pakeisti stringa i numberi 

var stringToNumber = function stringToNumber(str) {
  return Number(str);
};

console.log(stringToNumber('1234'));
console.log('-------------------'); // kaip is skaiciaus padaryti eilute ir ideti i array skliaustus su push.metodu. 

function reverseSeg(n) {
  var n1 = [];

  for (var i = n; i > 0; i--) {
    n1.push(i);
  }

  return n1;
}

console.log(reverseSeg(5)); /// kaip is string eilutes rasti diziausia ir maziausia pasiverciant masyvu 

function highAndLow(numbers) {
  var n0 = numbers.split(' '); // pasiverciam i object po 1 skaiciu. 

  var max = Math.max.apply(Math, _toConsumableArray(n0)); // Didžiausia reikšmė BUTINA DETI ... nes neiskos masyve skaiciu. 

  var min1 = Math.min.apply(Math, _toConsumableArray(n0));
  return '' + "".concat(max, " ").concat(min1);
}

;
console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")); /// kai skaiciai dauginasi is x darosi eilute ir padarom masyva. 

function countBy(x, n) {
  var z = [];

  for (var i = 1; i <= n; i++) {
    z.push([i] * x); // istumiam i [] skliaustus su , tarpuose. 
  }

  return z;
}

console.log(countBy(1, 10));
console.log(countBy(2, 5));

function highAndLo(numbers) {
  var n0 = numbers.split(' '); // pasiverciam i object po 1 skaiciu. 

  var max = Math.max.apply(Math, _toConsumableArray(n0)); // Didžiausia reikšmė BUTINA DETI ... nes neiskos masyve skaiciu. 

  var min1 = Math.min.apply(Math, _toConsumableArray(n0));
  return '' + "".concat(max, " ").concat(min1);
}

;
console.log(highAndLo("8 3 -5 42 -1 0 0 -9 4 7 4 -4")); //// kai reikia skaiciu pakeisti 0 arba 1 iki 5 ir virs 5 ribose. 

function fakeBi(x) {
  var naujas = ''; // nulinis lygis stringo reiksme 

  var masyvas = x.split([]); // isskirstom string eilute po 1 skaiciu [] reiksmeje 

  for (var i = 0; i < masyvas.length; i++) {
    if (masyvas[i] < 5) {
      naujas += 0;
    }

    if (masyvas[i] >= 5) {
      naujas += 1;
    }
  }

  return naujas + '';
}

console.log(fakeBi('45385593107843568')); /// kai reikia eiluteje surasti maziausia skaiciu. 

function findSmallestInt(arr) {
  var maziukas = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < maziukas) {
      maziukas = arr[i];
    }
  }

  return maziukas;
}

console.log(findSmallestInt([78, 56, 232, 12, 8]));

function sayHello(name) {
  return 'Hello ' + name;
}

console.log(sayHello('Mr. Spock')); ///// kai reikia is string zodzio ispjauti pirma nari kuris skaicius, bet skaicius bus string eilute kuria reiks pasivers number. 

function getAge(inputString) {
  var number = inputString.slice(0, 1);
  var change = Number.parseInt(number);
  return change;
}

console.log(getAge("4 years old")); /// apsukt eilute ir ispauzdinti [] per pusha. 

function sortArray(array) {
  var nauja = [];

  for (var i = array.length - 1; i >= 0; i--) {
    /// kai paskutini dedam ir nuo jo skaiciuojam nepamirstam length-1. 
    nauja.push(array[i]);
  }

  return nauja;
}

;
console.log(sortArray([0, 1, 2, 3, 5])); /// paprasta funkcija su pervirsiu grazint viena ats be pervirsio 0 

function enough(cap, on, wait) {
  if (on + wait <= cap) {
    return 0;
  }

  if (on + wait > cap) {
    return on + wait - cap;
  }
}

console.log(enough(10, 5, 5));
console.log(enough(10, 25, 5)); ///// pakeist sakinyje balses tustuma. dauga pildymo. 

function disemvowel(str) {
  return str.replaceAll('a', '').replaceAll('e', '').replaceAll('i', '').replaceAll('o', '').replaceAll('u', '').replaceAll('O', '').replaceAll('U', '').replaceAll('I', '').replaceAll('A', '').replaceAll('E', '');
}

console.log(disemvowel("This website is for losers LOL!"));
console.clear(); ///////// is number eilutes pasidaryti i stringa veliau i object po 1 skaiciu atsakyma pateikti vel number budu. 

function squareDigits(num) {
  var stringu = num.toString().split('');
  var nauja = [];

  for (var i = 0; i < stringu.length; i++) {
    nauja += Math.pow(stringu[i], 2);
  }

  return parseInt(nauja);
}

console.log(squareDigits(3212)); /// padaryti eilute is dvieju skaiciu. turi grizti array eilute. 

console.log('-----------');

function between(a, b) {
  var _final = [];

  for (var i = a; i <= b; i++) {
    _final.push(i);
  }

  return _final;
}

console.log(between(1, 4)); /// KAI REIKIA SURASTI MASYVE MIN IR MAX NAUDOJAM MATH 

function minMax(arr) {
  return [Math.min.apply(Math, _toConsumableArray(arr)), Math.max.apply(Math, _toConsumableArray(arr))]; // reikia deti ... kad paimtu skauciavimui masyva. 
}

;
console.log(minMax([1, 2, 3, 4, 5])); // arba for ciklu 

function minMa(arr) {
  if (arr.length === 0) return []; // jei masyvas tuščias

  var mini = arr[0];
  var maxi = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < mini) {
      mini = arr[i];
    }

    if (arr[i] > maxi) {
      maxi = arr[i];
    }
  }

  return [mini, maxi];
}

console.log(minMa([1, 2, 3, 4, 5])); /// Ar Zaidzia banjo su string metodais; 

function areYouPlayingBanjo(name) {
  if (name.at(0) === 'R' || name.at(0) === 'r') {
    return name + " plays banjo";
  } else {
    return name + " does not play banjo";
  }
}

console.log(areYouPlayingBanjo('Adam')); //// kai reikia surasti kiek metu uztruks kol pasieks kazkoki skaiciu :) 

function calculateYears(principal, interest, tax, desired) {
  var count = 0;

  for (var i = principal; i < desired; i += principal * interest - principal * interest * tax) {
    count++;
  }

  return count;
}

console.log(calculateYears(1000, 0.05, 0.18, 1100));
console.log(calculateYears(1000, 0.01625, 0.18, 1200)); // kai reikia paimti masyva kuris nebaigtas ir reikia istaisyti seka nes cia truko 7

function pipeFix(numbers) {
  var nauja = [];

  for (var i = numbers[0]; i <= numbers[numbers.length - 1]; i++) {
    nauja.push(i);
  }

  return nauja;
}

console.log(pipeFix([1, 2, 3, 5, 6, 8, 9]));

function howMuchILoveYou(nbPetals) {
  nbPetals = nbPetals % 6; /// reikia pasidaryti kad betkokia reiksme paimtu 

  if (nbPetals === 0) nbPetals = 6;
  {
    if (nbPetals === 1 || nbPetals === 7) {
      return "I love you";
    }
  }

  if (nbPetals === 2 || nbPetals === 8) {
    return "a little";
  }

  if (nbPetals === 3 | nbPetals === 9) {
    return "a lot";
  }

  if (nbPetals === 4 || nbPetals === 10) {
    return "passionately";
  }

  if (nbPetals === 5 || nbPetals === 11) {
    return "madly";
  }

  if (nbPetals === 6 || nbPetals === 12) {
    return "not at all";
  }

  ;
}

console.log(howMuchILoveYou(10)); // kai reikia isimti is eilutes # sugrazinti eiluten nukirpta be jo jeigu jo nera ta pacia grazina, 

function removeUrlAnchor(url) {
  if (url.includes('#') === false) {
    return url;
  }

  ;
  var skaicius = url.indexOf('#');
  var naujas = url.slice(0, skaicius);
  return "".concat(naujas);
}

;
console.log(removeUrlAnchor('www.codewars.com#about'));
console.log(removeUrlAnchor('www.codewars.com/katas/?page=1#about')); /// pazymiu vidurkis tarp ir duoda raide ats. 

function getGrade(s1, s2, s3) {
  var sum = (s1 + s2 + s3) / 3;

  if (90 <= sum && sum <= 100) {
    return 'A';
  } else if (80 <= sum && sum < 90) {
    return 'B';
  } else if (70 <= sum && sum < 80) {
    return 'C';
  } else if (60 <= sum && sum < 70) {
    return 'D';
  } else if (0 <= sum && sum < 60) {
    return 'F';
  }
}

;
console.log(getGrade(95, 90, 93)); /// reikia iki tam tikro dydzio padaryti masyva su tam tikru zingsniu. 

function findMultiples(integer, limit) {
  var nauja = [];

  for (var i = integer; i <= limit; i += integer) {
    nauja.push(i);
  }

  return nauja;
}

;
console.log(findMultiples(5, 25));
console.log(findMultiples(1, 2));
console.log(findMultiples(5, 7)); /// kas ka geria pagal amziu. 

function peopleWithAgeDrink(old) {
  if (old >= 21) {
    return 'drink whisky';
  }

  if (old < 21 && old >= 18) {
    return 'drink beer';
  }

  if (old < 18 && old >= 14) {
    return 'drink coke';
  }

  return 'drink toddy';
}

;
console.log(peopleWithAgeDrink(13));
console.log(peopleWithAgeDrink(14));
console.log(peopleWithAgeDrink(18));
console.log(peopleWithAgeDrink(17)); // parasyk funkcija kuri be skaiciu grazintu visada 5 skaiciu.

function unusualFive() {
  return 'jonas'.length;
}

console.log(unusualFive()); /// o surinkimas i gala. 

function moveZeros(arr) {
  var ats = []; /// nuliai cia eis. 

  var ats2 = []; /// kiti skaiciai 

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      ats.push(arr[i]);
    } else {
      ats2.push(arr[i]);
    }
  }

  return [].concat(ats2, ats);
}

;
console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1])); /// pakeisti skaicius x2 ats 

function maps(x) {
  var nes = [];

  for (var i = 0; i < x.length; i++) {
    nes.push(x[i] * 2);
  }

  return nes;
}

console.log(maps([1, 2, 3]));
console.log('----------'); //// is array atimti maziausia ir ispauzdinti eilute be jo. 

function filter_list(l) {
  var result = [];

  for (var i = 0; i < l.length; i++) {
    if (typeof l[i] === 'number' && !isNaN(l[i])) {
      result.push(l[i]);
    }
  }

  return result;
}

console.log(filter_list([1, 2, 'a', 'b']));
console.log(filter_list([1, 2, 'aasf', '1', '123', 123])); // reikia paimti skaiciu vidurki ir palyginti ji su klases vidurkiu 

function betterThanAverage(classPoints, yourPoints) {
  var sum = 0;

  for (var i = 0; i < classPoints.length; i++) {
    sum += classPoints[i];
  }

  var average = sum / classPoints.length; // visus papildomus skaiciavimus daryti po loop uzdarymo. 

  return average < yourPoints; // galima daryt true folse paciam returne greitesnis variantas 
}

;
console.log(betterThanAverage([2, 3], 5));
console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9)); /// kai reikia kintamuosius sudaugint ir duoti rezultata 

function grow(x) {
  var sum1 = 1; /// 0 negali but nesidaugins eilute. 

  for (var i = 0; i < x.length; i++) {
    sum1 *= x[i]; // cia gaunasi eilute 1*1*2*3=6
  }

  return sum1;
}

console.log(grow([1, 2, 3])); /// paprastas 

function problem(x) {
  if (typeof x === 'string') {
    return 'Error';
  }

  ;
  return x * 50 + 6; //your code here
}

;
console.log(problem('hello'));
console.log(problem(1));
console.log(problem(5)); /// irgi easy su if 

function paperwork(n, m) {
  if (n < 0 || m < 0) {
    return 0;
  }

  return n * m;
}

;
console.log(paperwork(5, 5));
console.log(paperwork(-5, 5)); /// easy vel funkcija 

function combat(health, damage) {
  if (damage > health) {
    return 0;
  }

  return health - damage;
}

;
console.log(combat(20, 30));
console.log(combat(92, 8)); /// surasti raides viete abelecele 

function position(letter) {
  var letters = 'abcdefghijklmnopqrstuvwxyz';
  return "Position of alphabet: ".concat(letters.indexOf(letter) + 1);
}

;
console.log(position('a'));
console.log(position('c')); /// suzinot charcode numeriuka. 

function getChar(c) {
  return c.toString().charCodeAt();
}

;
console.log(getChar(55)); ///Sulygint ar zodis parasius is galo gaunasi toks pats 

function isPalindrome(x) {
  var naujas = x.toLowerCase();
  var ats = '';

  for (var i = naujas.length - 1; i >= 0; i--) {
    ats += naujas[i];
  }

  return ats === naujas;
}

;
console.log(isPalindrome('Abba')); ///// reikia patikrinti ar duota reiksme virsina limita ar ne. 

function smallEnough(a, limit) {
  for (var i = 0; i < a.length; i++) {
    if (a[i] > limit) {
      return false;
    }
  }

  return true;
}

;
console.log(smallEnough([66, 101], 200));

function reverseSe(n) {
  var nauja = [];

  for (var i = 5; i > 0; i--) {
    nauja.push([i]);
  }

  return [nauja.join('')];
}

;
console.log(reverseSe(5));

function fancyMath(n1, zenklas, n2) {
  var func = {
    '+': function _(a, b) {
      return a + b;
    },
    '-': function _(a, b) {
      return a - b;
    },
    '*': function _(a, b) {
      return a * b;
    },
    '/': function _(a, b) {
      return a / b;
    }
  };
  var funcToUse = func[zenklas];

  if (funcToUse === undefined) {
    return ':(';
  }

  return funcToUse(n1, n2);
}

console.log(fancyMath(7, '+', 5));
console.log(fancyMath(7, '-', 5));
console.log(fancyMath(7, '*', 5));
console.log(fancyMath(7, '/', 5));
console.log(fancyMath(7, '**', 5)); //// nelengvas su ifais, kur pagal ideja nesunku bet ifa sunkiai suderina. 

function warnTheSheep(queue) {
  var naujasDarinys = queue.reverse();

  for (var i = 0; i < naujasDarinys.length; i++) {
    if (naujasDarinys[i] === 'wolf') {
      if (i === 0) {
        return "Pls go away and stop eating my sheep";
      } else {
        return "Oi! Sheep ".concat(i, "! You are about to be eaten by a wolf!");
      }
    }
  }

  return "Pls go away and stop eating my sheep";
}

;
console.log(warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"]));
console.log(warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "sheep", "wolf"])); //// suskaiciuoti skaiciu suma, kai tie skaiciai kaip vienas. 

function sumDigits(number) {
  var naujas = Math.abs(number).toString(); // pasikeicia i number pasikeicia i stringa. 

  var sum = 0;

  for (var i = 0; i < naujas.length; i++) {
    sum += parseInt(naujas[i]); /// parseIntas pakeicia atgal i number reiksme ats sumos. 
  }

  return sum;
}

console.log(sumDigits(10));
console.log(sumDigits(99)); /// paprastas parasyt funkcija sudet ciklo skaicius. 

function summation(num) {
  var sum = 0;

  for (var i = 1; i <= num; i++) {
    sum += i;
  }

  return sum; // Code here
}

console.log(summation(2)); //// pakeist visas balses i !!! 

function replace(s) {
  return s.replaceAll('a', '!').replaceAll('e', '!').replaceAll('i', '!').replaceAll('o', '!').replaceAll('u', '!').replaceAll('A', '!').replaceAll('E', '!').replaceAll('I', '!').replaceAll('O', '!').replaceAll('U', '!');
}

;
console.log(replace('aeiou'));
console.log(replace('"!Hi! Hi!"')); /////// paprastas su lairkdoziu ir milisekundem. 

function past(h, m, s) {
  return h * 3600000 + m * 60000 + s * 1000;
}

console.log(past(0, 1, 1)); /// su masinos nuoma ir ifu. 

function rentalCarCost(d) {
  if (d <= 2) {
    return d * 40;
  }

  if (d >= 3 && d <= 6) {
    return d * 40 - 20;
  }

  if (d >= 7) {}

  return d * 40 - 50;
}

;
console.log(rentalCarCost(2));
console.log(rentalCarCost(1)); // super lengvas su if

function chromosomeCheck(sperm) {
  if (sperm === 'XY') {
    return "Congratulations! You're going to have a son.";
  }

  if (sperm === "XX") {}

  return "Congratulations! You're going to have a daughter.";
}

console.log(chromosomeCheck('XY'));
console.log(chromosomeCheck('XX')); /// lengvas 

function hero(bullets, dragons) {
  var kiekis = bullets / dragons;

  if (kiekis >= 2) {
    return true;
  } else {}

  return false;
}

console.log(hero(10, 5)); // easy su if ir tekstu ir mazinimu. 

function mouthSize(animal) {
  var mazintos = animal.toLowerCase();

  if (mazintos === 'alligator') {
    return 'small';
  } else {}

  return 'wide';
}

console.log(mouthSize('toucan')); // bisk sudetingesnis su sqrt trunc ir if 

function isSquare(n) {
  var saknis = Math.sqrt(n);
  var liekana = saknis - Math.trunc(saknis);

  if (n < 0) {
    return false;
  }

  if (liekana > 0) {
    return false;
  }

  return true;
}

;
console.log(isSquare(-1));
console.log(isSquare(0));
console.log(isSquare(26));
console.log(isSquare(25)); /// easy to repeat 

function repeatStr(n, s) {
  return '' + s.repeat(n);
}

;
console.log(repeatStr(3, "*")); /// easy replace 

function correctPolishLetters(string) {
  return string.replaceAll('ą', 'a').replaceAll('ć', 'c').replaceAll('ę', 'e').replaceAll('ł', 'l').replaceAll('ń', 'n').replaceAll('ó', 'o').replaceAll('ś', 's').replaceAll('ź', 'z').replaceAll('ż', 'z');
}

console.log(correctPolishLetters('Jędrzej Błądziński'));

function opposite(number) {
  return -number;
}

;
console.log(opposite(1));
console.log(opposite(-12525220.3325));
console.log(opposite(3.3333)); ///

function main(verb, noun) {
  return "".concat(verb, " ").concat(noun);
}

;
console.log(main('take', 'item')); /// apsuksti zodzius vietom 

function reverseWords(str) {
  return str.split(' ').reverse().join(' '); // padalinam per tarpa, apsukam ir sujungiam per tarpa. 
}

console.log(reverseWords('hello world!'));

function whatday(num) {
  if (num === 1) {
    return 'Sunday';
  }

  if (num === 2) {
    return 'Monday';
  }

  if (num === 3) {
    return 'Tuesday';
  }

  if (num === 4) {
    return 'Wednesday';
  }

  if (num === 5) {
    return 'Thursday';
  }

  if (num === 6) {
    return 'Friday';
  }

  if (num === 7) {
    return 'Saturday';
  }

  if (num > 7) {}

  return 'Wrong, please enter a number between 1 and 7';
}

;
console.log(whatday(78));

function validateHello(greetings) {
  var greet = greetings.toLowerCase();

  if (greet === 'hello' || greet === 'ciao' || greet === 'salut' || greet === 'hallo' || greet === 'hola' || greet === 'ahoj' || greet === 'czesc') {
    return true;
  }

  return false;
}

console.log(validateHello('meh'));

function grees(name) {
  if (name === "Johnny") {
    return "Hello my love!";
  } else {}

  return "Hello, ".concat(name, "!");
}

;
console.log(grees('Jim'));
console.log(grees("Johnny")); // su rodykline pabandziau 

var contamination = function contamination(text, _char) {
  return _char.repeat(text.length);
};

console.log(contamination('abc', 'z'));

function capitalizeWord(word) {
  var pirmaR = word[0].toUpperCase();
  var liekana = word.slice(1);
  return pirmaR + liekana;
}

console.log(capitalizeWord('word'));
console.clear(); ///// sudetingas su vardu reiksmiu padidinimu kai yra ne vienas zodis padidinimu, 

function getDrinkByProfession(param) {
  var patikslintas = param.toLowerCase();
  var perdarytas = patikslintas.split(' ').map(function (word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(' ') + '';

  if (patikslintas === 'jabroni') {
    return "".concat(perdarytas, " should map to 'Patron Tequila'");
  } else if (patikslintas === 'school counselor') {
    return "".concat(perdarytas, " should map to 'Anything with Alcohol'");
  } else if (patikslintas === "programmer") {
    return "".concat(perdarytas, " should map to 'Hipster Craft Beer'");
  } else if (patikslintas === "bike gang member") {
    return "".concat(perdarytas, " should map to 'Moonshine'");
  } else if (patikslintas === "politician") {
    return "".concat(perdarytas, " should map to 'Your tax dollars'");
  } else if (patikslintas === 'rapper') {
    return "".concat(perdarytas, " should map to 'Cristal'");
  } else {
    return "'".concat(perdarytas, " should map to 'Beer'");
  }
}

;
console.log(getDrinkByProfession("jabrOni"));
console.log(getDrinkByProfession("bike ganG member"));
console.clear(); ////////// prie zodzio jo ilgi prideti 

function addLength() {
  for (var _len = arguments.length, str = new Array(_len), _key = 0; _key < _len; _key++) {
    str[_key] = arguments[_key];
  }

  return str.map(function (zodis) {
    return "".concat(zodis, " ").concat(zodis.length);
  });
}

;
console.log(addLength('Apple', 'Ban')); /// kai reikia surasti sekanti kvadrata ir ar jis sveikasis skaicius ar ne. Jeigu ne -1 grazinam 

function findNextSquare(sq) {
  var naujas = Math.sqrt(sq);
  var next = Math.pow(naujas + 1, 2);
  var trupmena = naujas - Math.trunc(naujas); /// daugiau uz 0 grazinam -1

  if (trupmena > 0) {
    return -1;
  } else if (trupmena === 0) {
    return next;
  }
}

;
console.log(findNextSquare(114));
console.log(findNextSquare(121));
console.log(findNextSquare(625));
console.log(findNextSquare(319225)); //////// kaip paskaiciuoti kiek metu truks kol pasieks norimas pinigu suma su procentais atemus mokescius. 

console.log('------------');

function calculateYear(principal, interest, tax, desired) {
  var count = 0;

  while (principal < desired) {
    var procentai = principal * interest;
    console.log(procentai, '--------'); /// procentai gaunami pirma karta. 

    var mokesciai = procentai * tax;
    console.log(mokesciai, 'iiiiiii'); // mokesciai mokami pirma karta 

    principal += procentai - mokesciai; // reiskai startine suma + procentai - mokesciai ir taip suka kol gauna 1100 arba daugiau

    console.log(principal);
    count++; // skaiciuoja kol surenka norima suma apsisukimo ratus 
  }

  return count;
}

;
console.log(calculateYear(1000, 0.05, 0.18, 1100)); //// lengvas paskaiciuoti ar suma lyginis ar ne. 

function oddOrEven(array) {
  var sum = 0;

  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }

  if (sum % 2 === 0) {
    return 'even';
  } else {
    return 'odd';
  }
}

console.log(oddOrEven([0, 1, 5]));
console.log(oddOrEven([-1023, 1, -2])); /// lengvas su zodziu apsukimu eiluteje. 

function nameShuffler(str) {
  return str.split(' ').reverse().join(' ');
}

console.log(nameShuffler('john McClane'));

function validatePIN(pin) {
  if (pin.length !== 4 && pin.length !== 6) {
    return false;
  } else if (pin - Math.trunc(pin) > 0) {
    return false;
  } else {
    return true;
  }
}

console.log(validatePIN('1'));
console.log(validatePIN('12245'));
console.log(validatePIN('-1.224'));
console.log(validatePIN('1234')); // while funkcija suskaiciupti kiek uztruks metu priaugui gauti. 

function nbYea(p0, percent, aug, p) {
  var count = 0;

  while (p0 < p) {
    // nuo kiek iki kiek salyga 
    var prieaugis = Math.floor(p0 * (percent / 100) + aug);
    p0 += prieaugis; // didejimas 

    count++; // skaiciavimas ciklu kiek 
  }

  return count;
}

console.log(nbYea(1500, 5, 100, 5000)); /// daug ifu tikriausiai galima padaryti greiciau su objektais bet dar nlb iseina 

function gree(language) {
  if (language === 'english' || language === 'IP_ADDRESS_INVALID' || language === 'IP_ADDRESS_NOT_FOUND' || language === 'IP_ADDRESS_REQUIRED') {
    return 'Welcome';
  }

  if (language === 'czech') {
    return "Vitejte";
  }

  if (language === 'danish') {
    return "Velkomst";
  }

  if (language === "dutch") {
    return "Welkom";
  }

  if (language === "estonian") {
    return "Tere tulemast";
  }

  if (language === "finnish") {
    return "Tervetuloa";
  }

  if (language === "flemish") {
    return "Welgekomen";
  }

  if (language === "french") {
    return "Bienvenue";
  }

  if (language === "german") {
    return "Willkommen";
  }

  if (language === "irish") {
    return "Failte";
  }

  if (language === "italian") {
    return "Benvenuto";
  }

  if (language === "latvian") {
    return "Gaidits";
  }

  if (language === "lithuanian") {
    return "Laukiamas";
  }

  if (language === "polish") {
    return "Witamy";
  }

  if (language === "spanish") {
    return "Bienvenido";
  }

  if (language === "swedish") {
    return "Valkommen";
  }

  if (language === "welsh") {
    return "Croeso";
  }
}

;
console.log(gree('english'));
console.log(gree('IP_ADDRESS_INVALID')); //// apsukti sarasa;

function reverseLis(list) {
  var naujas = list.reverse();
  return naujas;
}

console.log(reverseLis([1, 2, 3, 4])); /// istaisyti ir pateikti pataisyta varianta 

function rainAmount(mm) {
  var needs = 40 - mm;

  if (mm >= 40) {
    return "Your plant has had more than enough water for today!";
  } else if (mm < 40) {
    return "You need to give your plant" + ' ' + needs + "mm of water";
  }
}

;
console.log(rainAmount(100));
console.log(rainAmount(39));
console.log(rainAmount(35)); /// kaip surasti min ir max ir dif

function differenceInAges(ages) {
  var naujas = Math.min.apply(Math, _toConsumableArray(ages));
  var naujasMax = Math.max.apply(Math, _toConsumableArray(ages));
  var dif = naujasMax - naujas;
  return [naujas, naujasMax, dif];
}

console.log(differenceInAges([82, 15, 6, 38, 35]));

function tripleTrouble(one, two, three) {
  var one1 = one.split('');
  var two2 = two.split('');
  var three3 = three.split('');
  var bendras = [].concat(_toConsumableArray(one1), _toConsumableArray(two2), _toConsumableArray(three3)); // [ 'aaa', 'bbb', 'ccc' ]

  var ats = '';
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = bendras[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var raides = _step.value;
      ats += raides;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return ats;
}

console.log(tripleTrouble("aaa", "bbb", "ccc"));

function checkAlive(health) {
  if (health <= 0) {
    return false;
  } else {
    return true;
  }
}

;
console.log(checkAlive(5));
console.log(checkAlive(-1));
console.log(checkAlive(0)); //// is string reiksmes padaryti stringa reiksmes per tritaski ir sujungti atgal i stringa/. 

function solutio(a, b) {
  var a1 = a.split('  ');
  [45];
  var b1 = b.split('  ');
  [1];

  if (a.length > b.length) {
    return [].concat(_toConsumableArray(b1), _toConsumableArray(a1), _toConsumableArray(b1)).join('');
  } else {
    return [].concat(_toConsumableArray(a1), _toConsumableArray(b1), _toConsumableArray(a1)).join('');
  }
}

;
console.log(solutio('45', '1'));
console.log(solutio('13', '200')); /// suskaiciuoti atstuma tarp stulpu 

function pillars(numPill, dist, width) {
  if (numPill <= 1) {
    return 0;
  }

  if (numPill === 2) {
    return dist * 100;
  } else {
    var skaiciavimai = (numPill - 1) * dist + width / 100 * (numPill - 2);
    return Math.round(skaiciavimai * 100);
  }
}

console.log(pillars(11, 15, 30)); /// su rodykline funkcija ir ternary pvz

var areaOrPerimeter = function areaOrPerimeter(l, w) {
  return l === w ? w * l : (w + l) * 2;
}; // Return your answer


console.log(areaOrPerimeter(3, 3));
console.log(areaOrPerimeter(6, 10)); /// surasti per reduce array skirtuma cuboidu

function findDifference(a, b) {
  var a1 = a.reduce(function (suma, n) {
    return suma * n;
  }, 1);
  var b1 = b.reduce(function (suma, n) {
    return suma * n;
  }, 1);
  return Math.abs(a1 - b1);
}

console.log(findDifference([3, 2, 5], [1, 4, 4])); /// kai reikia grazinti skaicius kurie dalinasi is savo pozicijos arejusi be likuciu. 

function multipleOfIndex(array) {
  var naujas = [];

  for (var i = 0; i < array.length; i++) {
    if (i !== 0 && array[i] % i === 0) {
      naujas.push(array[i]);
    }

    if (i === 0 && array[i] === 0) {
      naujas.push(array[i]);
    }
  }

  return naujas;
}

console.log(multipleOfIndex([22, -6, 32, 82, 9, 25]));
console.log(multipleOfIndex([0, 2, 3, 6, 9])); /// surasti kiek eiliu sumaises iseidamas is teatro 

function seatsInTheater(nCols, nRows, col, row) {
  return (nCols - (col - 1)) * (nRows - row);
}

console.log(seatsInTheater(16, 11, 5, 3));

function integrate(coefficient, exponent) {
  var ats = coefficient / (exponent + 1);
  return "".concat(ats, "x^").concat(exponent + 1);
}

console.log(integrate(3, 2)); /// pirmos eilutes kvadratai turi buti daugiau negu antros eilutes kubu suma 

function arrayMadness(a, b) {
  var a1 = a.reduce(function (total, n) {
    return total + Math.pow(n, 2);
  }, 0);
  var b1 = b.reduce(function (total, n) {
    return total + Math.pow(n, 3);
  }, 0);

  if (a1 > b1) {
    return true;
  } else {}

  return false;
}

console.log(arrayMadness([1, 2, 3], [0, 1, 2]));
console.log(arrayMadness([5, 3, 2, 4, 1], [15]));
console.log(arrayMadness([2, 5, 3, 4, 1], [3, 3, 3, 3, 3]));
console.log(arrayMadness([1, 3, 5, 2, 4], [2, 2, 2, 2, 2, 2, 2, 1]));
console.log(arrayMadness([1, 2, 3, 4, 5], [2, 2, 2, 2, 2, 2, 1, 1, 1]));
console.log(arrayMadness([2, 4, 6, 8, 10, 12, 14], [1, 3, 5, 7, 9, 11, 13])); /// is objecto padaryt zodzio reiksme ir jo ilgi. 
// surast kurioje quadranto puseje yra reiksme; 

function quadrant(x, y) {
  if (x > 0 && y > 0) {
    return 1;
  }

  if (x < 0 && y < 0) {
    return 3;
  }

  if (x < 0 && y > 0) {
    return 2;
  }

  if (x > 0 && y < 0) {
    return 4;
  }
}

;
console.log(quadrant([1, 2, 1])); // kitoks uzrasymas 
/// padaryt rodykline kad atrodytu 56^7

var derive = function derive(coefficient, exponent) {
  return "".concat(coefficient * exponent, "x^").concat(exponent - 1);
};

console.log(derive(7, 8)); /// paskaiciuoti vidurki pazymiu. 

function getAverage(marks) {
  var sum = marks.reduce(function (total, n) {
    return total + n;
  }, 0);
  var ilgis = marks.length;
  var ats = sum / ilgis;
  return Math.floor(ats);
}

;
console.log(getAverage([2, 2, 2, 2])); // basic pakeist pagal reiksme veiksma;

function basicO(operation, value1, value2) {
  if (operation === '+') {
    return value1 + value2;
  }

  if (operation === '-') {
    return value1 - value2;
  }

  if (operation === '*') {
    return value1 * value2;
  }

  if (operation === '/') {
    return value1 / value2;
  }
}

;
console.log(basicO('+', 4, 7));
console.log(basicO('-', 15, 18));
console.log(basicO('*', 5, 5));
console.log(basicO('/', 49, 7)); // paskaiciuoti butelius :D

function dutyFree(normPrice, discount, hol) {
  return Math.floor(hol / (normPrice / (100 / discount)));
}

;
console.log(dutyFree(12, 50, 1000)); /// su ifais ir sakiniais

function cookie(x) {
  if (typeof x === 'string') {
    return "Who ate the last cookie? It was Zach!";
  }

  if (typeof x === 'number') {
    return "Who ate the last cookie? It was Monica!";
  }

  if (typeof x !== 'string' || typeof x !== 'number') {
    return "Who ate the last cookie? It was the dog!";
  }
}

;
console.log(cookie(26));
console.log(cookie(true)); // be zodzio false, duok ats false; 

function ifChuckSaysSo(type) {
  return Number.isInteger(type);
}

;
console.log(ifChuckSaysSo(NaN));
console.clear();

function suskaiciuok(a, b, zenklas) {
  if (zenklas === '+') {
    return "Rezultatas sudedant: ".concat(a, "+").concat(b, "=").concat(a + b);
  }

  if (zenklas === '-') {
    return "Rezultatas atemant: ".concat(a, "-").concat(b, "=").concat(a - b);
  }

  if (zenklas === '*') {
    return "Rezultatas dauginant: ".concat(a, "*").concat(b, "=").concat(a * b);
  }

  if (zenklas === '/') {
    return "Rezultatas daulinant: ".concat(a, "/").concat(b, "=").concat(a / b);
  }
}

;
console.log(suskaiciuok(1, 10, '+'));
var jubiliejai = [{
  age: 1,
  dovana: 'Vienaragis'
}, {
  age: 5,
  dovana: 'Pilis'
}, {
  age: 10,
  dovana: 'dviratis'
}, {
  age: 15,
  dovana: 'Motociklas'
}];

function dovanai(metai) {
  for (var _i = 0, _jubiliejai = jubiliejai; _i < _jubiliejai.length; _i++) {
    var _jubiliejai$_i = _jubiliejai[_i],
        age = _jubiliejai$_i.age,
        dovana = _jubiliejai$_i.dovana;

    if (metai === age) {
      return "Gimtadienio  dovana ".concat(age, " proga, yra ").concat(dovana);
    } else {}
  }

  return "Tokiems metams dovana nenumatyta";
}

;

function mystery() {
  var results = {
    sanity: 'Hello'
  };
  return results;
}

console.log(mystery()); // isvardint bezdziones 

function monkeyCount(n) {
  var monkeys = [];

  for (var i = 1; i <= n; i++) {
    monkeys.push(i);
  }

  return monkeys;
}

console.log(monkeyCount(5));

function calculateTip(amount, rating) {
  var ratingMazintas = rating.toLowerCase();

  if (ratingMazintas === 'terible') {
    return Math.round(amount * 0 - amount);
  }

  if (ratingMazintas === 'poor') {
    return Math.round(amount * 1.05 - amount);
  }

  if (ratingMazintas === 'good') {
    return Math.round(amount * 1.1 - amount);
  }

  if (ratingMazintas === 'great') {
    return Math.round(amount * 1.15 - amount);
  }

  if (ratingMazintas === 'excellent') {
    return Math.round(amount * 1.2 - amount);
  }
}

;
console.log(calculateTip(20, 'Excellent'));

function reverseS(n) {
  var nauja = [];

  for (var i = n; i > 0; i--) {
    nauja.push(i);
  }

  return nauja;
}

;
console.log(reverseS(5));
/*
Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers, so, for example:*/

function multiply(number) {
  var ats = Math.abs(number).toString().length;
  return number * Math.pow(5, ats);
}

;
console.log(multiply(10));
console.log(multiply(-2));

function toCamelCase(str) {
  var naujas = str.replaceAll('_', ' ').replaceAll('-', ' ').split(' ');
  var zodis = '';
  console.log(naujas);
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = naujas[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var zodziai = _step2.value;

      var _a = zodziai[0].toUpperCase();

      var _b = zodziai.slice(1).toLowerCase();
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
        _iterator2["return"]();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return;
}

;
console.log(toCamelCase("the_stealth_warrior")); //// sudeti suma visu x rezultatu. 

function points(games) {
  var suma = 0;
  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = games[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var kombinacijos = _step3.value;
      var skaicius = kombinacijos.split(':'); // isskiriam skaicius per : gaunasi 1 ir 0 pvz 

      suma += parseFloat(skaicius[0]); /// sudedam skaicius is pirmos pozicijos ir paverciam juos Number tipu. 
    }
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
        _iterator3["return"]();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }

  return suma;
}

console.log(points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"])); //// susumuot array skaicius. 

function sum(numbers) {
  return numbers.reduce(function (total, n) {
    return total + n;
  }, 0);
}

console.log(sum([1, 5.2, 4, 0, -1])); /// kuriam metu ketvirciui priklauso menuo S

var quarterOf = function quarterOf(month) {
  if (month >= 1 && month < 4) {
    return 1;
  }

  if (month >= 4 && month < 7) {
    return 2;
  }

  if (month >= 7 && month <= 9) {
    return 3;
  } else {}

  return 4;
};

console.log(quarterOf(11));
console.log(quarterOf(1));
console.log(quarterOf(3));

function firstNonConsecutive(arr) {
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1] + 1) {
      return arr[i];
    }
  }

  return null;
}

console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8])); /// patikrint kuri reiksme didziausia ir grazinti .

function expressionMatter(a, b, c) {
  var a1 = a * (b + c);
  var b1 = a * b * c;
  var c1 = a + b * c;
  var d1 = (a + b) * c;
  var e1 = a + b + c;
  return Math.max(a1, b1, c1, d1, e1);
}

console.log(expressionMatter(2, 1, 2));
console.log(expressionMatter(1, 1, 1));
console.log(expressionMatter(1, 6, 1)); // apsukst apsukta 

function reverseWord(str) {
  var a = str.split('').reverse().join('').split(' ').reverse().join(' ');
  return a;
}

console.log(reverseWord('The quick brown fox jumps over the lazy dog.'));

function myFirstKata(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return false;
  }

  return a % b + b % a;
}

;
console.log(myFirstKata(3, 5));

function soluti(n) {
  var abc = Math.trunc(n);
  console.log(abc);
  var abs = n - abc;
  var fix = abs.toFixed(1);
  var num = parseFloat(fix);

  if (num >= 0.1 && num <= 0.2) {
    return Math.floor(n);
  }

  if (num >= 0.3 && num <= 0.7) {
    return abc + 0.5;
  }

  if (num >= 0.8) return Math.ceil(n);
}

;
console.log(soluti(4.3));

function spEng(sentence) {
  var pataisyta = sentence.toLowerCase(); // mazinta 

  if (pataisyta === "english") {
    return true;
  } else {}

  return false;
}

console.log(spEng('english'));
console.log(spEng("egnlish"));

function validateCode(code) {
  var a = code.toFixed().split('');
  var b = parseFloat(a[0]);

  if (b === 1 || b === 2 || b === 3) {
    return true;
  }

  return false;
}

console.log(validateCode(123));
console.log(validateCode(423));

function quotable(name, quote) {
  return "".concat(name, " said: \"").concat(quote, "\"");
}

console.log(quotable('Grae', 'Practice makes perfect'));

function defineSuit(card) {
  var b = card.slice(-1);

  if (b === '♣') {
    return 'clubs';
  }

  if (b === '♦') {
    return 'diamonds';
  }

  if (b === '♥') {
    return 'hearts';
  }

  if (b === '♠') {
    return 'spades';
  }
}

;
console.log(defineSuit('10♣'));

function friend(friends) {
  var zodziai = [];
  var _iteratorNormalCompletion4 = true;
  var _didIteratorError4 = false;
  var _iteratorError4 = undefined;

  try {
    for (var _iterator4 = friends[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
      var vardai = _step4.value;

      if (vardai.length === 4) {
        zodziai.push(vardai);
      }
    }
  } catch (err) {
    _didIteratorError4 = true;
    _iteratorError4 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
        _iterator4["return"]();
      }
    } finally {
      if (_didIteratorError4) {
        throw _iteratorError4;
      }
    }
  }

  return zodziai;
}

console.log(friend(["Ryan", "Kieran", "Mark"]));

function removeSmallest(numbers) {
  var naujaKopija = _toConsumableArray(numbers);

  var min = Math.min.apply(Math, _toConsumableArray(naujaKopija));
  var ind = naujaKopija.indexOf(min);
  naujaKopija.splice(ind, 1); /// iskerpa vienetuka tokiu budu. 

  return naujaKopija; /// cia grazina originalo kopija be 1. 
}

;
console.log(removeSmallest([5, 3, 2, 1, 4])); //arba su for of. 

function iesk(skaiciai) {
  var nauja = [];
  var indeksas = Math.min.apply(Math, _toConsumableArray(skaiciai));
  var _iteratorNormalCompletion5 = true;
  var _didIteratorError5 = false;
  var _iteratorError5 = undefined;

  try {
    for (var _iterator5 = skaiciai[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
      var skaicius = _step5.value;

      if (skaicius !== indeksas) {
        nauja.push(skaicius);
      }
    }
  } catch (err) {
    _didIteratorError5 = true;
    _iteratorError5 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion5 && _iterator5["return"] != null) {
        _iterator5["return"]();
      }
    } finally {
      if (_didIteratorError5) {
        throw _iteratorError5;
      }
    }
  }

  return nauja;
}

console.log(iesk([5, 3, 2, 1, 4]));

function sumTwoSmallestNumbers(numbers) {
  var copija = _toConsumableArray(numbers); // reikia pasidaryti kopija, kad paskui iskirpti splicu minimuma 


  var a = Math.min.apply(Math, _toConsumableArray(copija)); // is kopijos pasiimam minimuma 

  console.log(a, '--------');
  var index = copija.indexOf(a); // minimumo pozicija 

  copija.splice(index, 1); // iskerpam minimuma lieka nauja eilute be minimumo 

  console.log(copija);
  var b = Math.min.apply(Math, _toConsumableArray(copija)); // vel pasidarom minimumo matavima. 

  var sum = a + b;
  return sum;
}

;
console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));

function busStops(numbers) {
  var keleiviu = 0;
  var _iteratorNormalCompletion6 = true;
  var _didIteratorError6 = false;
  var _iteratorError6 = undefined;

  try {
    for (var _iterator6 = numbers[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
      var numeriai = _step6.value;
      var ilipo = numeriai[0];
      var islipo = numeriai[1];
      keleiviu += ilipo - islipo;
    }
  } catch (err) {
    _didIteratorError6 = true;
    _iteratorError6 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion6 && _iterator6["return"] != null) {
        _iterator6["return"]();
      }
    } finally {
      if (_didIteratorError6) {
        throw _iteratorError6;
      }
    }
  }

  return keleiviu;
}

;
console.log(busStops([[10, 0], [3, 5], [5, 8]]));

function isAnagram(test, original) {
  var normalize = function normalize(str) {
    return str.toLowerCase().split('').sort().join('');
  }; /// pagal sorta surikiuoja visas raides vienodai del to galima palyginti. 


  console.log(normalize);
  return normalize(test) === normalize(original);
}

console.log(isAnagram('foefet', 'toffee'));

function sumArray(array) {
  if (array === null || array.length === 0 || array.length === 1 || array.length === 2) {
    return 0;
  }

  var kopija = _toConsumableArray(array);

  var a = Math.min.apply(Math, _toConsumableArray(kopija));
  var aIndex = kopija.indexOf(a);
  var b = Math.max.apply(Math, _toConsumableArray(kopija));
  var bIndex = kopija.indexOf(b);
  kopija.splice(aIndex, 1);
  kopija.splice(bIndex, 1);
  return kopija.reduce(function (total, n) {
    return total + n;
  }, 0);
}

console.log(sumArray([-6, 20, -1, 10, -12]));

function multiTable(number) {
  var skaicius = '';

  for (var i = 1; i <= 10; i++) {
    skaicius += "".concat(i, "*").concat(number, "=").concat(i * number, "\n");
  }

  return skaicius;
}

console.log(multiTable(6)); /// nupjauti pirmas tris reiksmes 

function take(arr, n) {
  return arr.splice(0, n);
}

console.log(take([0, 1, 2, 3, 5, 8, 13], 3));

function hello(name) {
  if (!name || name.length === 0) {
    return 'Hello, World!';
  }

  var pirma = name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase();
  return "Hello, ".concat(pirma, "!");
}

;
console.log(hello('johN'));

function getMiddle(s) {
  if (s.length <= 2) {
    /// sukranta variantai kur 0 / 1 arba 2 raides. 
    return s;
  }

  var middle = Math.floor(s.length / 2); // darom iki sveiko skaiciaus kad galetum slice priimti i indexus. 

  if (s.length % 2 === 0) {
    return s.slice(middle - 1, middle + 1);
  } else {
    return s[middle];
  }
}

console.log(getMiddle('test')); // "es"

console.log(getMiddle('testing')); // "t"

console.log(getMiddle('middle')); // "dd"

console.log(getMiddle("A"));

function reverseLetter(str) {
  return str.split('').reverse().join('');
}

console.log(reverseLetter('krishan'));

function getSize(width, height, depth) {
  var tur = width * height * depth;
  var plotas = height * width * 2 + height * depth * 2 + width * depth * 2;
  return [plotas, tur];
}

;
console.log(getSize(4, 2, 6));
console.log(getSize(10, 10, 10));

function factorial(n) {
  var derinukas = [];

  for (var i = n; i >= 1; i--) {
    derinukas.push(i);
  }

  return derinukas.reduce(function (total, n) {
    return total * n;
  }, 1);
}

console.log(factorial(1));

function stringClean(s) {
  var keista = s.split('');
  var nauja = [];
  var _iteratorNormalCompletion7 = true;
  var _didIteratorError7 = false;
  var _iteratorError7 = undefined;

  try {
    for (var _iterator7 = keista[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
      var skaiciai = _step7.value;

      if (skaiciai !== '1' && skaiciai !== '2' && skaiciai !== '0' && skaiciai !== '3' && skaiciai !== '4' && skaiciai !== '5' && skaiciai !== '6' && skaiciai !== '7' && skaiciai !== '8' && skaiciai !== '9') {
        nauja.push(skaiciai);
      }
    }
  } catch (err) {
    _didIteratorError7 = true;
    _iteratorError7 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion7 && _iterator7["return"] != null) {
        _iterator7["return"]();
      }
    } finally {
      if (_didIteratorError7) {
        throw _iteratorError7;
      }
    }
  }

  return nauja.join('');
}

console.log(stringClean('E3at m2e2!!')); /// su min ir max suzinoti atstuma ir sudet taskus 

function getSum(a, b) {
  var sum = 0;
  var aMin = Math.min(a, b);
  var bMax = Math.max(a, b);

  for (var i = aMin; i <= bMax; i++) {
    sum += i;
  }

  return sum;
}

console.log(getSum(0, 1)); // 1 

console.log(getSum(0, -2)); // -3

function animal(obj) {
  return "This ".concat(obj.color, " ").concat(obj.name, " has ").concat(obj.legs, " legs");
}

console.log(animal({
  name: "dog",
  legs: 4,
  color: "white"
}));

function mango(quantity, price) {
  if (quantity <= 2) {
    return quantity * price;
  }

  if (quantity % 3 === 0) {
    return (quantity - quantity / 3) * price;
  } else {
    var apvalinta = Math.floor(quantity / 3);
    var ats = (quantity - apvalinta) * price;
    return ats;
  }
}

;
console.log(mango(7, 5));

function angle(n) {
  return (n - 2) * 180;
}

console.log(angle(3));

function cockroachSpeed(s) {
  return Math.round(s * 27.7777);
}

console.log(cockroachSpeed(1.09));

function humanYearsCatYearsDogYears(humanYears) {
  if (humanYears === 1) {
    return [humanYears, 15, 15];
  }

  if (humanYears === 2) {
    return [humanYears, 24, 24];
  }

  return [humanYears, 24 + (humanYears - 2) * 4, 24 + (humanYears - 2) * 5];
}

;
console.log(humanYearsCatYearsDogYears(10));

function stray(numbers) {
  if (numbers[0] !== numbers[1] && numbers[0] !== numbers[2]) {
    // patikrina ar 1 nelygus 2 arba pirmas nelygus 3 
    return numbers[0]; // jeigu 1 nelygus likusiems grazinam pirma kaip ats. 
  }

  for (var i = 1; i < numbers.length; i++) {
    /// ciklas jeigu isvardinti skaiciai nelygus 1 variantui grazinam skaiciu [i]
    if (numbers[i] !== numbers[0]) {
      // imama cikla nuo 2 nario nes pirma jau patikrinome 
      return numbers[i];
    }
  }

  return numbers[0];
}

;
console.log(stray([1, 1, 2]));
console.log(stray([1, 2, 1]));
console.log(stray([17, 17, 3, 17, 17, 17, 17]));

function cubeChecker(volume, side) {
  if (volume <= 0) {
    return false;
  }

  if (Math.cbrt(volume) === side) {
    return true;
  } else {}

  return false;
}

;
console.log(cubeChecker(8, 3));
console.log(cubeChecker(8, 2));

function largestPairSum(numbers) {
  var kopija = _toConsumableArray(numbers); // reikalinga kad isimti skaicius didziausius.


  var max1 = Math.max.apply(Math, _toConsumableArray(kopija));
  var index = kopija.indexOf(max1);
  kopija.splice(index, 1); // palieka kopija be didziausio skaiciaus kad vel galetume naudoti math max funkcija. 

  console.log(kopija);
  var max2 = Math.max.apply(Math, _toConsumableArray(kopija));
  return max1 + max2;
}

console.log(largestPairSum([10, 14, 2, 23, 19])); /// su sortu variantas

function largestPairSu(numbers) {
  var _numbers$sort = numbers.sort(function (a, b) {
    return a - b;
  }),
      _numbers$sort2 = _slicedToArray(_numbers$sort, 2),
      a = _numbers$sort2[0],
      b = _numbers$sort2[1];

  return "".concat(a, " ir ").concat(b);
}

console.log(largestPairSu([10, 14, 2, 23, 19]));

function sumOfMinimums(arr) {
  var sum = 0;
  var _iteratorNormalCompletion8 = true;
  var _didIteratorError8 = false;
  var _iteratorError8 = undefined;

  try {
    for (var _iterator8 = arr[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
      var deriniai = _step8.value;
      var min = Math.min.apply(Math, _toConsumableArray(deriniai));
      sum += min;
    }
  } catch (err) {
    _didIteratorError8 = true;
    _iteratorError8 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion8 && _iterator8["return"] != null) {
        _iterator8["return"]();
      }
    } finally {
      if (_didIteratorError8) {
        throw _iteratorError8;
      }
    }
  }

  return sum;
}

console.log(sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]])); /// pakeisti is binari i normale reiksme 

function binaryArrayToNumber(arr) {
  var skaiciai = '';

  for (var i = 0; i < arr.length; i++) {
    skaiciai += arr[i];
  }

  return parseInt(skaiciai, 2);
}

;
console.log(binaryArrayToNumber([0, 0, 0, 1]));

function mergeArrays(arr1, arr2) {
  var c = arr1.concat(arr2);
  return 0;
}

;
console.log(mergeArrays([1, 2, 3, 4], [7, 6, 5, 8]));
console.log(mergeArrays([1, 3, 5, 7, 9], [10, 8, 6, 4, 2]));
console.log(mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12])); /// kai reikia isfiltruoti is array daug reiksmiu vienodu tik unikales. ir surikiuoti nuo maziausios i didziausoia 

function mergeArray(arr1, arr2) {
  var c = arr1.concat(arr2); /// concar sujungimas 

  var b = c.sort(function (a, b) {
    return a - b;
  }); /// rikiavimas pagal eiliskuma nuo maziausio 

  return c.filter(function (reiksme, indexas) {
    return b.indexOf(reiksme) === indexas;
  }); // filtravimas 
}

;
console.log(mergeArray([1, 2, 3, 4], [7, 6, 5, 8]));
console.log(mergeArray([1, 3, 5, 7, 9], [10, 8, 6, 4, 2]));
console.log(mergeArray([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]));

function countSheep(num) {
  if (num === 0) {
    return "";
  }

  var sum = '';

  for (var i = 1; i <= num; i++) {
    sum += i + ' ' + 'sheep...';
  }

  return sum;
}

console.log(countSheep(0));
console.log(countSheep(1));
console.log(countSheep(2));
console.log(countSheep(3)); /// skaiciu isdeliojimas su kelimu laipsniu 

function powersOfTwo(n) {
  var num = [];

  for (var i = 0; i <= n; i++) {
    num.push(Math.pow(2, i));
  }

  return num;
}

console.log(powersOfTwo(0));
console.log(powersOfTwo(4)); /// kai reikia is array paimti ir surasti viena nr kuris issikiria is kitu 

function findUniq(arr) {
  var naujas = arr[0];
  var antras = arr[1];

  if (arr[0] !== arr[1] && arr[0] !== arr[2]) {
    return arr[0];
  }

  for (var i = 0; i < arr.length; i++) {
    if (naujas === antras) {}

    if (arr[i] !== arr[0]) {
      naujas = arr[i];
    }
  }

  return naujas;
}

console.log(findUniq([1, 0, 0]));
console.log(findUniq([0, 1, 0]));
console.log(findUniq([1, 1, 1, 2, 1, 1]));
console.log(findUniq([3, 10, 3, 3, 3]));

function sayHell(name, city, state) {
  var pagerintas = name.join(' ');
  console.log(pagerintas, '-------');
  return "Hello, ".concat(pagerintas, "! Welcome to ").concat(city, ", ").concat(state, "!");
}

;
console.log(sayHell(['Franklin', 'Delano', 'Roosevelt'], 'Chicago', 'Illinois'));

function sumOfDifferences(arr) {
  if (arr.length === 0 || arr === null) {
    return 0;
  }

  var a = arr.sort(function (a, b) {
    return b - a;
  }); // surikiavom nuo didziausio iki mazesnio 

  var suma = 0;

  for (var i = 0; i < a.length - 1; i++) {
    suma += a[i] - a[i + 1];
  }

  return suma;
}

console.log(sumOfDifferences([1, 2, 10])); // reikai gauti 9

console.log(sumOfDifferences([-3, -2, -1]));

function factoria(n) {
  if (n < 0 || n > 12) {
    return 'RangeError';
  }

  var eile = [];

  for (var i = n; i >= 1; i--) {
    eile.push(i);
  }

  return eile.reduce(function (total, n) {
    return total * n;
  }, 1); // Calculate the factorial here
}

console.log(factoria(13));
console.log(factoria(2));

function nearestSq(n) {
  var skaicius = Math.round(Math.sqrt(n));
  return skaicius * skaicius;
}

console.log(nearestSq(10));
console.log(nearestSq(9999)); //// pakeisti paprastos reiksmes i binary reiksme. 

function toBinary(n) {
  return parseInt(n.toString(2));
}

console.log(toBinary(5));

function arrayMadnes(a, b) {
  return a.reduce(function (total, n) {
    return total + Math.pow(n, 2);
  }, 0) > b.reduce(function (total, n) {
    return total + Math.pow(n, 3);
  }, 0) ? true : false;
}

;
console.log(arrayMadnes([1, 2, 3], [0, 1, 2]));
console.log(arrayMadnes([5, 3, 2, 4, 1], [15]));
console.log(arrayMadnes([2, 5, 3, 4, 1], [3, 3, 3, 3, 3]));
console.log(arrayMadnes([1, 3, 5, 2, 4], [2, 2, 2, 2, 2, 2, 2, 1]));
console.log(arrayMadnes([1, 2, 3, 4, 5], [2, 2, 2, 2, 2, 2, 1, 1, 1]));
console.log(arrayMadnes);
[2, 4, 6, 8, 10, 12, 14], [1, 3, 5, 7, 9, 11, 13];

function isIsogra(word) {
  word = word.toLowerCase().split("").sort();

  for (var i = 0; i < word.length - 1; i++) {
    if (word[i] === word[i + 1]) return false;
  }

  return true;
}

console.log(isIsogra('Dermatoglyphics'));
console.log(isIsogra('moOse'));

function isIsogram(word) {
  word = word.toLowerCase().split('').sort();

  for (var i = 0; i < word.length - 1; i++) {
    if (word[i] === word[i + 1]) {
      return false;
    }
  }

  return true;
}

;
console.log(isIsogram('Dermatoglyphics'));
console.log(isIsogram('moOse'));

function reverse(string) {
  return string.split(' ').reverse().join(' ');
}

console.log(reverse('I am an expert at this'));

function flattenAndSort(array) {
  var _ref;

  var a = (_ref = []).concat.apply(_ref, _toConsumableArray(array)).sort(function (a, b) {
    return a - b;
  }); /// [] pries concat reiskia kad daro visiskai naujaeilute. kurioje atsiranda destrukturizuotas array. 


  return a;
}

console.log(flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]])); /// is 4tadalio apskritimo ilgio, surasti kvadrato plota ji sumazinti iki decimal reiksmiu. 

function squareArea(A) {
  var ats = (Math.pow(A * 2, 2) / Math.pow(Math.PI, 2)).toFixed(2);
  var b = parseFloat(ats);
  return b;
}

console.log(squareArea(2));

function array(string) {
  var arr = string.split(',');

  if (arr.length <= 2 || string === '') {
    return null;
  }

  return arr.slice(1, -1).join(' ');
}

console.log(array('A1,B2'));
console.log(array('1,2,3'));

function calculateAge(a, b) {
  if (b - a === 1) {
    return "You are 1 year old.";
  }

  if (b - a === -1) {
    return "You will be born in 1 year.";
  }

  if (a === b) {
    return 'You were born this very year!';
  }

  if (a < b) {
    return "You are ".concat(Math.abs(b - a), " years old.");
  }

  if (a > b) {
    return "You will be born in ".concat(Math.abs(a - b), " years.");
  }
}

console.log(calculateAge(2012, 2016));
console.log(calculateAge(2000, 2000));

function twoDecimalPlaces(n) {
  var ats = n.toFixed(2);
  return parseFloat(ats);
}

console.log(twoDecimalPlaces(4.659725356));

function getCha(c) {
  var s2 = String.fromCharCode(c);
}

console.log(getCha(55));

function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
  return Math.floor(Math.sqrt(age1 * age1 + age2 * age2 + age3 * age3 + age4 * age4 + age5 * age5 + age6 * age6 + age7 * age7 + age8 * age8) / 2);
}

console.log(predictAge(65, 60, 75, 55, 60, 63, 64, 45));

function howManyLightsabersDoYouOwn(name) {
  if (name === 'Zach') {
    return 18;
  } else {}

  return 0;
}

console.log(howManyLightsabersDoYouOwn());

function noOdds(values) {
  return values.filter(function (skaiciai) {
    return skaiciai % 2 === 0;
  });
}

console.log(noOdds([0, 1, 2, 3]));

function reverseLette(str) {
  return str.split('').reverse().join('').replace(/[0-9]/g, '').replace(/[^\w\s]|_/g, '').replaceAll(' ', '');
}

console.log(reverseLette('egkuxrcife\\hsyvkxormxoanhyglcrnlvdjioozr    goood'));

function strCount(str, letter) {
  return str.split(letter).length - 1; /// isskiria teksta hell ir o tada matuoja ilgi 2 gaunasi minus 1 iseina 1
}

;
console.log(strCount('Hello', 'o')); /// kai reikia is masyvo paimti max ir min nari ir ju skirtuma 

function differenceInAge(ages) {
  var x = ages.sort(function (a, b) {
    return a - b;
  })[0]; // cia pirmas naris min 

  var y = ages.sort(function (a, b) {
    return a - b;
  })[ages.length - 1]; // cia paskutinis narys eilutes max 

  return [x, y, y - x];
}

;
console.log(differenceInAge([82, 15, 6, 38, 35]));

function tripleTroubl(one, two, three) {
  var ats = '';

  for (var i = 0; i < one.length; i++) {
    ats += one[i] + two[i] + three[i];
  }

  return ats;
}

console.log(tripleTroubl("aaa", "bbb", "ccc")); /// kai reikia sudeti tekstu 1 raides is triju tekstu. 

function tripleTroub(a, b, c) {
  return a.split('').map(function (s, i) {
    return s + b[i] + c[i];
  }).join('');
}

console.log(tripleTroub("aaa", "bbb", "ccc"));

function calculator(a, b, sign) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 'unknown value';
  }

  if (sign === '-') {
    return a - b;
  }

  if (sign === '+') {
    return a + b;
  }

  if (sign === '*') {
    return a * b;
  }

  if (sign === '/') {
    return a / b;
  } else {}

  return 'unknown value';
}

console.log(calculator(1, 'h', '-'));

function alphabetWar(fight) {
  if (fight === 'w' || fight === 'p' || fight === 'b' || fight === 's') {
    return "Left side wins!";
  }

  if (fight === 'm' || fight === 'q' || fight === 'd' || fight === 'z') {
    return "Right side wins!";
  }

  var leftCount = 0;
  var rightCount = 0;

  for (var i = 0; i < fight.length; i++) {
    if (fight[i] === 'w') {
      leftCount += 4;
    }

    if (fight[i] === 'p') {
      leftCount += 3;
    }

    if (fight[i] === 'b') {
      leftCount += 2;
    }

    if (fight[i] === 's') {
      leftCount += 1;
    }

    if (fight[i] === 'm') {
      rightCount += 4;
    }

    if (fight[i] === 'q') {
      rightCount += 3;
    }

    if (fight[i] === 'd') {
      rightCount += 2;
    }

    if (fight[i] === 'z') {
      rightCount += 1;
    }
  }

  if (leftCount > rightCount) {
    return "Left side wins!";
  }

  if (leftCount < rightCount) {
    return "Right side wins!";
  } else {
    return "Let's fight again!";
  }
}

;
console.log(alphabetWar("zdqmwpbs"));

function disemvowe(str) {
  var balses = 'aeiouAEIOU';
  var naujas = '';
  var _iteratorNormalCompletion9 = true;
  var _didIteratorError9 = false;
  var _iteratorError9 = undefined;

  try {
    for (var _iterator9 = str[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
      var raides = _step9.value;

      if (!balses.includes(raides)) {
        naujas += raides;
      }
    }
  } catch (err) {
    _didIteratorError9 = true;
    _iteratorError9 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion9 && _iterator9["return"] != null) {
        _iterator9["return"]();
      }
    } finally {
      if (_didIteratorError9) {
        throw _iteratorError9;
      }
    }
  }

  return naujas;
}

console.log(disemvowe("This website is for losers LOL!"));

var Kata =
/*#__PURE__*/
function () {
  function Kata() {
    _classCallCheck(this, Kata);
  }

  _createClass(Kata, null, [{
    key: "getVolumeOfCuboid",
    value: function getVolumeOfCuboid(length, width, height) {
      return length * width * height;
    }
  }]);

  return Kata;
}();

console.log(Kata.getVolumeOfCuboid(1, 2, 2));

function wordsToMarks(string) {
  var skaiciai = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26
  };
  var sum = 0;
  var _iteratorNormalCompletion10 = true;
  var _didIteratorError10 = false;
  var _iteratorError10 = undefined;

  try {
    for (var _iterator10 = string[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
      var raides = _step10.value;
      sum += skaiciai[raides];
    }
  } catch (err) {
    _didIteratorError10 = true;
    _iteratorError10 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion10 && _iterator10["return"] != null) {
        _iterator10["return"]();
      }
    } finally {
      if (_didIteratorError10) {
        throw _iteratorError10;
      }
    }
  }

  return sum;
}

console.log(wordsToMarks('attitude')); /// kai reikia paskaiciuoti per kiek laiko nugaruos gesintuvas iki nenaudojamos ribos. 

function evaporator(content, evap_per_day, threshold) {
  var days = 0;
  var thresholdAmount = content * (threshold / 100);
  var currentAmount = content;

  while (currentAmount > thresholdAmount) {
    // kiek dienu atliks cikl
    currentAmount -= currentAmount * (evap_per_day / 100); /// esamasminus per cikla  esamas padauginta is nugaravimo. 

    days++;
  }

  return days;
}

console.log(evaporator(10, 10, 10)); // Output: 22

function gooseFilter(birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  var nauja = [''];
  var _iteratorNormalCompletion11 = true;
  var _didIteratorError11 = false;
  var _iteratorError11 = undefined;

  try {
    for (var _iterator11 = birds[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
      var zodziai = _step11.value;

      if (!geese.includes(zodziai)) {
        nauja.push(zodziai);
      }
    }
  } catch (err) {
    _didIteratorError11 = true;
    _iteratorError11 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion11 && _iterator11["return"] != null) {
        _iterator11["return"]();
      }
    } finally {
      if (_didIteratorError11) {
        throw _iteratorError11;
      }
    }
  }

  return nauja.splice(1);
}

;
console.log(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"])); //"Mallard", "Hook Bill", "Crested", "Blue Swedish"]);

['Mallard', 'Hook Bill', 'Crested', 'Blue Swedish'];

function gooseFilte(birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter(function (b) {
    return !geese.includes(b);
  });
}

;
console.log(gooseFilte(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]));

function apple(x) {
  var b = parseFloat(x);

  if (Math.pow(b, 2) > 1000) {
    return "It's hotter than the sun!!";
  } else {}

  return 'Help yourself to a honeycomb Yorkie for the glovebox.';
}

console.log(apple('50'));

function evenNumbers(array, number) {
  var ats = array.filter(function (n) {
    return n % 2 === 0;
  }).slice(-number);
  return ats;
}

console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));

function vowelIndices(word) {
  var pataisytas = word.toLowerCase();
  var balses = 'aeiouy';
  var result = [];

  for (var i = 0; i < pataisytas.length; i++) {
    if (balses.includes(pataisytas[i])) {
      result.push(i + 1);
    }
  }

  return result;
}

console.log(vowelIndices('apple'));

function usdcny(usd) {
  var ats = usd * 6.75.toFixed(2);
  var atstrunc = ats - Math.trunc(ats);

  if (atstrunc === 0) {
    return ats + '.00' + ' Chinese Yuan';
  }

  if (atstrunc === 0.1 || atstrunc === 0.2 || atstrunc === 0.3 || atstrunc === 0.4 || atstrunc === 0.5 || atstrunc === 0.6 || atstrunc === 0.7 || atstrunc === 0.8 || atstrunc === 0.9) {
    return ats + '0' + ' Chinese Yuan';
  } else {}

  return "".concat(ats, " Chinese Yuan");
}

console.log(usdcny(8861));

function addBinary(a, b) {
  var sum = a + b;
  return sum.toString(2);
}

console.log(addBinary(1, 2)); //// dar reikia padirbet 

function longestConsec(strarr, k) {
  if (strarr.length === 0 || strarr.length < k || k <= 0) {
    return "";
  }

  if (strarr.length === 3 && strarr[0].length < strarr[1].length && strarr[1].length > strarr[2].length) {
    return strarr.slice(0, k).join('');
  } else {}

  return strarr.sort(function (a, b) {
    return b.length - a.length;
  }).slice(0, k).join('');
}

;
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2));
console.log(longestConsec(["wlwsasphmxx", "owiaxujylentrklctozmymu", "wpgozvxxiu"], 2));
console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1));
console.log(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 3));

function helloWorld(info) {
  var str = info;
  return str;
}

;
console.log(helloWorld('Hello World!'));
console.log("Hello World!"); /// panaikinti paskutini elementa !

function remove(string) {
  if (string[string.length - 1] === '!') {
    return string.slice(0, -1);
  }

  return string;
}

console.log(remove("Hi!!!")); // Grąžins "Hi!!"

console.log(remove("Hi!")); // Grąžins "Hi"

console.log(remove("Hi")); // Grąžins "Hi"

function digits(n) {
  var ats = [];
  var _iteratorNormalCompletion12 = true;
  var _didIteratorError12 = false;
  var _iteratorError12 = undefined;

  try {
    for (var _iterator12 = n[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
      var skaicius = _step12.value;
      var pirmas = skaicius[0];
      var string = pirmas.toFixed();
      var ilgis = string.length;
      ats.push(ilgis);
    }
  } catch (err) {
    _didIteratorError12 = true;
    _iteratorError12 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion12 && _iterator12["return"] != null) {
        _iterator12["return"]();
      }
    } finally {
      if (_didIteratorError12) {
        throw _iteratorError12;
      }
    }
  }

  return ats;
}

console.log(digits([[0, 1], [9, 1], [66, 2], [12345, 5], [128685, 6], [9876543210, 10], [9007199254740991, 16]]));

function sumArra(array) {
  if (array === undefined || array === null || array.length === 0 || array.length === 1 || array.length === 2) {
    return 0;
  }

  var c = array.sort(function (a, b) {
    return a - b;
  }).slice(1, -1);
  return c.reduce(function (a, b) {
    return a + b;
  }, 0);
}

console.log(sumArra([6, 2, 1, 8, 10]));
console.log(sumArra([-6, 20, -1, 10, -12]));

function isUpperCase(sakinys) {
  if (sakinys.length === 0) {
    return "".concat(sakinys, " is upper case");
  }

  var caps = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var naujas = [];
  var testui = sakinys.replaceAll(' ', '');
  var _iteratorNormalCompletion13 = true;
  var _didIteratorError13 = false;
  var _iteratorError13 = undefined;

  try {
    for (var _iterator13 = sakinys[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
      var raides = _step13.value;

      if (caps.includes(raides)) {
        naujas.push(raides);
      }
    }
  } catch (err) {
    _didIteratorError13 = true;
    _iteratorError13 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion13 && _iterator13["return"] != null) {
        _iterator13["return"]();
      }
    } finally {
      if (_didIteratorError13) {
        throw _iteratorError13;
      }
    }
  }

  return naujas.length === testui.length ? "".concat(sakinys, " is upper case") : "".concat(sakinys, " is not upper case");
}

console.log(isUpperCase(''));

function cockroachSpee(s) {
  var konst = 1000 / 36;
  return Math.floor(s * konst);
}

console.log(cockroachSpee(0.6704108509808064)); // turi buti 

function twoSort(s) {
  var a = s.sort();
  console.log(a);
  return a[0].split('').join('***');
}

console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]));
console.log(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]));

function descendingOrder(n) {
  return parseFloat(n.toFixed().split('').sort(function (a, b) {
    return b - a;
  }).join(''));
}

console.log(descendingOrder(1021));

function getDivisorsCnt(n) {
  var count = 0;
  var nauja = [];

  for (var i = 1; i <= n; i++) {
    nauja.push(i);
  }

  for (var _i2 = 0; _i2 <= nauja.length; _i2++) {
    if (n % _i2 === 0) {
      count++;
    }
  }

  return count; // todo
}

console.log(getDivisorsCnt(54)); ///// kuris nenuluzta ;

function getDivisorsCn(n) {
  var count = 0;

  for (var i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      // If divisors are equal, count only one
      if (n / i === i) {
        count++;
      } else {
        // Otherwise count both
        count += 2;
      }
    }
  }

  return count;
}

console.log(getDivisorsCn(10));

function dnaStrand(dna) {
  var naujas = '';
  var _iteratorNormalCompletion14 = true;
  var _didIteratorError14 = false;
  var _iteratorError14 = undefined;

  try {
    for (var _iterator14 = dna[Symbol.iterator](), _step14; !(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done); _iteratorNormalCompletion14 = true) {
      var raides = _step14.value;

      if (raides === 'A') {
        naujas += 'T';
      }

      if (raides === 'C') {
        naujas += 'G';
      }

      if (raides === 'T') {
        naujas += 'A';
      }

      if (raides === 'G') {
        naujas += 'C';
      }
    }
  } catch (err) {
    _didIteratorError14 = true;
    _iteratorError14 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion14 && _iterator14["return"] != null) {
        _iterator14["return"]();
      }
    } finally {
      if (_didIteratorError14) {
        throw _iteratorError14;
      }
    }
  }

  return naujas;
}

console.log(dnaStrand('AAA'));
console.log(dnaStrand('ATTGC'));

function century(year) {
  var maziems = year.toFixed().length;
  var antra = parseFloat(year.toFixed().split('').slice(0, 1).join(''));
  var pirma = parseFloat(year.toFixed().split('').slice(0, 2).join(''));
  var fix = parseFloat(year.toFixed().split('').slice(-2).join(''));

  if (maziems === 2 || maziems === 1) {
    return 1;
  }

  if (fix > 0) {
    return pirma + 1;
  }

  if (fix === 0) {
    return pirma;
  }

  if (maziems === 3 && fix > 0 || maziems === 3 && fix > 0) {
    return antra + 1;
  }

  if (fix === 0) {
    return antra;
  }
}

console.log(century(101));

function capitals(word) {
  var sarasas = [];

  for (var i = 0; i < word.length; i++) {
    if (word[i] >= 'A' && word[i] <= 'Z') {
      sarasas.push(i);
    }
  }

  return sarasas;
}

console.log(capitals('CodEWaRs'));

function busStop(number) {
  var skaicius = [];
  var _iteratorNormalCompletion15 = true;
  var _didIteratorError15 = false;
  var _iteratorError15 = undefined;

  try {
    for (var _iterator15 = number[Symbol.iterator](), _step15; !(_iteratorNormalCompletion15 = (_step15 = _iterator15.next()).done); _iteratorNormalCompletion15 = true) {
      var skaiciai = _step15.value;
      skaicius.push(skaiciai[0] - skaiciai[1]);
    }
  } catch (err) {
    _didIteratorError15 = true;
    _iteratorError15 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion15 && _iterator15["return"] != null) {
        _iterator15["return"]();
      }
    } finally {
      if (_didIteratorError15) {
        throw _iteratorError15;
      }
    }
  }

  return skaicius.reduce(function (a, b) {
    return a + b;
  }, 0);
}

;
console.log(busStop([[10, 0], [3, 5], [5, 8]]));
console.log(busStop([[3, 0], [9, 1], [4, 10], [12, 2], [6, 1], [7, 10]]));
console.log(busStop([[3, 0], [9, 1], [4, 8], [12, 2], [6, 1], [7, 8]]));

function findAverag(nums) {
  return nums.reduce(function (total, b) {
    return total + b;
  }, 0) / nums.length;
}

console.log(findAverag([1, 3, 5, 7]));

function distinct(a) {
  return a.sort().filter(function (reiksme, i) {
    return a.indexOf(reiksme) === i;
  });
}

console.log(distinct([1, 2, 1, 1, 3, 2]));

function sumCubes(n) {
  var naujas = [];

  for (var i = 1; i <= n; i++) {
    naujas.push(i);
  }

  return naujas.reduce(function (total, n) {
    return total + Math.pow(n, 3);
  }, 0);
}

console.log(sumCubes(10));

var gre = function gre(name) {
  var naujas = name.toLowerCase().slice(1); // galas

  var sudurtinis = name.slice(0, 1).toUpperCase();
  var geras = sudurtinis + naujas;
  return "Hello ".concat(geras, "!");
};

console.log(gre('riley'));

function solve(s) {
  var isimtibalses = s.replaceAll('a', ' ').replaceAll('e', ' ').replaceAll('i', ' ').replaceAll('o', ' ').replaceAll('u', ' ').split(' ');
  console.log(isimtibalses);
  var skaiciai = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26
  };
  var sums = [];
  var _iteratorNormalCompletion16 = true;
  var _didIteratorError16 = false;
  var _iteratorError16 = undefined;

  try {
    for (var _iterator16 = isimtibalses[Symbol.iterator](), _step16; !(_iteratorNormalCompletion16 = (_step16 = _iterator16.next()).done); _iteratorNormalCompletion16 = true) {
      var raides = _step16.value;
      var _sum = 0;
      var _iteratorNormalCompletion17 = true;
      var _didIteratorError17 = false;
      var _iteratorError17 = undefined;

      try {
        for (var _iterator17 = raides[Symbol.iterator](), _step17; !(_iteratorNormalCompletion17 = (_step17 = _iterator17.next()).done); _iteratorNormalCompletion17 = true) {
          var raideles = _step17.value;
          _sum += skaiciai[raideles];
        }
      } catch (err) {
        _didIteratorError17 = true;
        _iteratorError17 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion17 && _iterator17["return"] != null) {
            _iterator17["return"]();
          }
        } finally {
          if (_didIteratorError17) {
            throw _iteratorError17;
          }
        }
      }

      sums.push(_sum);
    }
  } catch (err) {
    _didIteratorError16 = true;
    _iteratorError16 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion16 && _iterator16["return"] != null) {
        _iterator16["return"]();
      }
    } finally {
      if (_didIteratorError16) {
        throw _iteratorError16;
      }
    }
  }

  return Math.max.apply(Math, sums);
}

console.log(solve('chruschtschov'));

function findLongest(array) {
  var nauja = array.map(function (n) {
    return n.toFixed();
  });
  return parseInt(nauja.sort(function (a, b) {
    return a.length - b.length;
  }).slice(-1).join(''));
}

console.log(findLongest([1, 10, 100]));

function findLonges(array) {
  return array.reduce(function (a, b) {
    return Math.abs(a).toString().length >= Math.abs(b).toString().length ? a : b;
  });
}

console.log(findLonges([1, 10, 100]));

function remov(string) {
  if (string.at(-1) === '!') {
    return string.slice(0, -1);
  } else {
    return string;
  }
}

console.log(remov("Hi! Hi!"));

function solu(nums) {
  if (nums.length === 0 || nums === null) {
    return [];
  }

  return nums.sort(function (a, b) {
    return a - b;
  });
}

console.log(solu([1, 2, 3, 10, 5]));

function rem(string) {
  if (string.endsWith('!')) {
    return string.slice(0, -1);
  }

  return string;
}

console.log(rem('Hi!!!'));

function alphabetPosition(text) {
  var skaiciai = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26
  };
  var mazintas = text.toLowerCase();
  var naujas = [];
  var _iteratorNormalCompletion18 = true;
  var _didIteratorError18 = false;
  var _iteratorError18 = undefined;

  try {
    for (var _iterator18 = mazintas[Symbol.iterator](), _step18; !(_iteratorNormalCompletion18 = (_step18 = _iterator18.next()).done); _iteratorNormalCompletion18 = true) {
      var raides = _step18.value;
      naujas.push(skaiciai[raides]);
    }
  } catch (err) {
    _didIteratorError18 = true;
    _iteratorError18 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion18 && _iterator18["return"] != null) {
        _iterator18["return"]();
      }
    } finally {
      if (_didIteratorError18) {
        throw _iteratorError18;
      }
    }
  }

  return naujas.join(' ').replaceAll('  ', ' ').replaceAll('  ', ' ');
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));

function quote(fighter) {
  var name = fighter.toLowerCase();

  if (name === 'george saint pierre') {
    return "I am not impressed by your performance.";
  }

  if (name === 'conor mcgregor') {
    return "I'd like to take this chance to apologize.. To absolutely NOBODY!";
  }
}

;
console.log(quote('george saint pierre'));

function sumEvenNumbers(input) {
  return input.filter(function (n) {
    return n % 2 === 0;
  }).reduce(function (total, n) {
    return total + n;
  }, 0);
}

console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

function createArray(number) {
  var newArray = [];

  for (var counter = 1; counter <= number; counter++) {
    newArray.push(counter);
  }

  return newArray;
}

console.log(createArray(2));

function sumMul(n, m) {
  if (m < 0 || n === 0) {
    return 'INVALID';
  }

  var sum = 0;

  for (var i = n; i < m; i++) {
    if (i % n === 0) {
      sum += i;
    }
  }

  return sum;
}

console.log(sumMul(2, 9));

function toNumberArray(stringarray) {
  var naujas = stringarray.map(function (zodis) {
    return parseFloat(zodis);
  });
  return naujas;
}

console.log(toNumberArray(["1.1", "2.2", "3.3"]));

function bump(x) {
  var count = 0;
  var _iteratorNormalCompletion19 = true;
  var _didIteratorError19 = false;
  var _iteratorError19 = undefined;

  try {
    for (var _iterator19 = x[Symbol.iterator](), _step19; !(_iteratorNormalCompletion19 = (_step19 = _iterator19.next()).done); _iteratorNormalCompletion19 = true) {
      var raides = _step19.value;

      if (raides === 'n') {
        count++;
      }
    }
  } catch (err) {
    _didIteratorError19 = true;
    _iteratorError19 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion19 && _iterator19["return"] != null) {
        _iterator19["return"]();
      }
    } finally {
      if (_didIteratorError19) {
        throw _iteratorError19;
      }
    }
  }

  return count <= 15 ? 'Woohoo' : 'Car Dead';
}

console.log(bump("__nn_nnnn__n_n___n____nn__nnn"));

function solv(s) {
  var didziosios = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var count = 0;
  var _iteratorNormalCompletion20 = true;
  var _didIteratorError20 = false;
  var _iteratorError20 = undefined;

  try {
    for (var _iterator20 = s[Symbol.iterator](), _step20; !(_iteratorNormalCompletion20 = (_step20 = _iterator20.next()).done); _iteratorNormalCompletion20 = true) {
      var raides = _step20.value;

      if (didziosios.includes(raides)) {
        count++;
      }
    }
  } catch (err) {
    _didIteratorError20 = true;
    _iteratorError20 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion20 && _iterator20["return"] != null) {
        _iterator20["return"]();
      }
    } finally {
      if (_didIteratorError20) {
        throw _iteratorError20;
      }
    }
  }

  if (count <= s.length / 2) {
    return s.toLowerCase();
  } else {}

  return s.toUpperCase();
}

;
console.log(solv('LABADiena'));

function hexToDec(hexString) {
  return hexString.toString(2);
}

console.log(hexToDec('1'));
console.log(hexToDec('16'));

function sameCase(a, b) {
  var didziosios = 'ABCDEFGHIJKLM N O P Q R S T U V W X Y Z';
  var mazosios = 'a b c d e f g h i j k l m n o p q r s t u v w x y z';

  if (didziosios.includes(a) && didziosios.includes(b)) {
    return 1;
  }

  if (mazosios.includes(a) && mazosios.includes(b)) {
    return 1;
  }

  if (didziosios.includes(a) && mazosios.includes(b)) {
    return 0;
  }

  if (mazosios.includes(a) && didziosios.includes(b)) {
    return 0;
  } else {}

  return -1;
}

console.log(sameCase('G', ','));

function billboard(name) {
  var price = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 30;
  var skaicius = 0;
  var _iteratorNormalCompletion21 = true;
  var _didIteratorError21 = false;
  var _iteratorError21 = undefined;

  try {
    for (var _iterator21 = name[Symbol.iterator](), _step21; !(_iteratorNormalCompletion21 = (_step21 = _iterator21.next()).done); _iteratorNormalCompletion21 = true) {
      var raides = _step21.value;
      skaicius += price;
    }
  } catch (err) {
    _didIteratorError21 = true;
    _iteratorError21 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion21 && _iterator21["return"] != null) {
        _iterator21["return"]();
      }
    } finally {
      if (_didIteratorError21) {
        throw _iteratorError21;
      }
    }
  }

  return skaicius;
}

console.log(billboard("Jeong-Ho Aristotelis"));

function isVow(a) {
  var balses = {
    97: 'a',
    101: 'e',
    105: 'i',
    111: 'o',
    117: 'u'
  };
  var naujas = [];
  var _iteratorNormalCompletion22 = true;
  var _didIteratorError22 = false;
  var _iteratorError22 = undefined;

  try {
    for (var _iterator22 = a[Symbol.iterator](), _step22; !(_iteratorNormalCompletion22 = (_step22 = _iterator22.next()).done); _iteratorNormalCompletion22 = true) {
      var skaiciai = _step22.value;

      if (balses[skaiciai]) {
        naujas.push(balses[skaiciai]);
      } else {
        naujas.push(skaiciai);
      }
    }
  } catch (err) {
    _didIteratorError22 = true;
    _iteratorError22 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion22 && _iterator22["return"] != null) {
        _iterator22["return"]();
      }
    } finally {
      if (_didIteratorError22) {
        throw _iteratorError22;
      }
    }
  }

  return naujas;
}

console.log(isVow([118, 117, 120, 98, 106, 107, 97, 101, 111, 117]));

function isSortedAndHow(array) {
  var sortintaMaz = _toConsumableArray(array).sort(function (a, b) {
    return a - b;
  }).toString(); // nuo maziausios.


  var sortintaDid = _toConsumableArray(array).sort(function (a, b) {
    return b - a;
  }).toString(); // nuo didziausios


  var nekeista = array.toString();
  console.log(sortintaMaz);
  console.log(sortintaDid);
  console.log(nekeista);

  if (nekeista === sortintaMaz) {
    return "yes, ascending";
  }

  if (nekeista === sortintaDid) {
    return "yes, descending";
  } else {}

  return 'no';
}

console.log(isSortedAndHow([1, 2])); // yes 

console.log(isSortedAndHow([15, 7, 3, -8])); // no, descending

console.log(isSortedAndHow([4, 2, 30]));

function gimme(triplet) {
  var nauja = parseFloat(_toConsumableArray(triplet).sort(function (a, b) {
    return a - b;
  }).slice(1, -1).toString());
  return triplet.indexOf(nauja);
}

console.log(gimme([5, 10, 14]));

function totalGoals(laLigaGoals, championsLeagueGoals, copaDelReyGoals) {
  return laLigaGoals + championsLeagueGoals + copaDelReyGoals;
}

console.log(totalGoals(43, 10, 5));

function isUpperCas(sakinys) {
  if (sakinys.length === 0) {
    return true;
  }

  var caps = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var naujas = '';
  var _iteratorNormalCompletion23 = true;
  var _didIteratorError23 = false;
  var _iteratorError23 = undefined;

  try {
    for (var _iterator23 = sakinys[Symbol.iterator](), _step23; !(_iteratorNormalCompletion23 = (_step23 = _iterator23.next()).done); _iteratorNormalCompletion23 = true) {
      var raides = _step23.value;

      if (caps.includes(raides)) {
        naujas += raides;
      }
    }
  } catch (err) {
    _didIteratorError23 = true;
    _iteratorError23 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion23 && _iterator23["return"] != null) {
        _iterator23["return"]();
      }
    } finally {
      if (_didIteratorError23) {
        throw _iteratorError23;
      }
    }
  }

  return naujas === sakinys.split(' ').join('') ? true : false;
}

console.log(isUpperCas('ACSKLDFJSgSKLDFJSKLDFJ'));

function saleHotdogs(n) {
  if (n < 5) {
    return n * 100;
  } else if (n >= 5 && n < 10) {
    return n * 95;
  }

  if (n >= 10) {}

  return n * 90;
}

console.log(saleHotdogs(4));

function adjacentElementsProduct(array) {
  var naujas = [];

  for (var i = 0; i < array.length - 1; i++) {
    naujas.push(array[i] * array[i + 1]);
  }

  return Math.max.apply(Math, naujas);
}

console.log(adjacentElementsProduct([1, 5, 10, 9])); //arba

function adjacentElementsProduc(array) {
  var naujas = [];
  var _iteratorNormalCompletion24 = true;
  var _didIteratorError24 = false;
  var _iteratorError24 = undefined;

  try {
    for (var _iterator24 = array[Symbol.iterator](), _step24; !(_iteratorNormalCompletion24 = (_step24 = _iterator24.next()).done); _iteratorNormalCompletion24 = true) {
      var skaiciai = _step24.value;
      naujas.push(skaiciai * (skaiciai + 1));
    }
  } catch (err) {
    _didIteratorError24 = true;
    _iteratorError24 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion24 && _iterator24["return"] != null) {
        _iterator24["return"]();
      }
    } finally {
      if (_didIteratorError24) {
        throw _iteratorError24;
      }
    }
  }

  return Math.max.apply(Math, naujas);
}

console.log(adjacentElementsProduc([1, 5, 10, 9]));

function capitalize(s) {
  var pirmas = '';
  var antras = '';

  for (var i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
      pirmas += s[i].toUpperCase();
    } else {
      pirmas += s[i];
    }
  }

  for (var _i3 = 0; _i3 < s.length; _i3++) {
    if (_i3 % 2 !== 0) {
      antras += s[_i3].toUpperCase();
    } else {
      antras += s[_i3];
    }
  }

  return [pirmas, antras];
}

console.log(capitalize('abcdef')); // ['AbCdEf', 'aBcDeF']

function remainder(n, m) {
  if (m === 0 || n === 0 || n < 0 || m < 0) {
    return NaN;
  }

  if (n < m) {
    return m % n;
  } else {}

  return n % m;
}

console.log(remainder(-13, -13));

function suk(duomenys) {
  var raide = 'ek';
  var naujas = duomenys.split('').reverse().join('');
  var text = '';
  var _iteratorNormalCompletion25 = true;
  var _didIteratorError25 = false;
  var _iteratorError25 = undefined;

  try {
    for (var _iterator25 = duomenys[Symbol.iterator](), _step25; !(_iteratorNormalCompletion25 = (_step25 = _iterator25.next()).done); _iteratorNormalCompletion25 = true) {
      var raides = _step25.value;

      if (!raide.includes(raides)) {
        text += raides;
      }
    }
  } catch (err) {
    _didIteratorError25 = true;
    _iteratorError25 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion25 && _iterator25["return"] != null) {
        _iterator25["return"]();
      }
    } finally {
      if (_didIteratorError25) {
        throw _iteratorError25;
      }
    }
  }

  return text.split(' ').map(function (w) {
    return w.toUpperCase() + ' ' + w.length;
  });
}

console.log(suk('Dukrele buvo kieme'));

function addLen() {
  for (var _len2 = arguments.length, str = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    str[_key2] = arguments[_key2];
  }

  var naujas = str.toString().replaceAll(' ', ',').split(',');
  return naujas.map(function (w) {
    return w + ' ' + w.length;
  });
}

console.log(addLen('Apple', 'Ban'));
console.log(addLen('you will win')); //Patikrinkite, ar sąraše [1, -2, 3, -4] yra teigiamų skaičių. 

function teig(duomenys) {
  return duomenys.filter(function (w) {
    return w > 0;
  }).toString().replaceAll(',', '').split('').map(function (w) {
    return w + ' ' + _typeof(w);
  });
}

console.log(teig([1, -2, 3, -4])); //Patikrinkite, ar didziausias didesnis negu 10 

function as(duomenys) {
  return Math.max.apply(Math, _toConsumableArray(duomenys)) > 10;
}

console.log(as([2, 5, 12, 4]));
/* Pavyzdys: Patikrinkite, ar [2, 2, 2, 2, 2, 5, 6] turi daugiau nei 3 skaičiaus 2 
elementus.*/

function tu(duomenys) {
  return duomenys.map(function (w) {
    return w = 2;
  }).length > 3;
}

console.log(tu([2, 2, 2, 2, 2, 5, 6])); //Pavyzdys: Patikrinkite, ar sąraše [1, 2, 3, 4] yra skaičius 3.

var jus = function jus(duomenys) {
  return parseFloat(duomenys.filter(function (w) {
    return w === 3;
  }).toString()) === 3;
};

console.log(jus([1, 2, 3, 4]));

function calculateT(amount, rating) {
  if (!rating) return 'Rating not recognised';
  var ratingLower = rating.toLowerCase();

  if (ratingLower === 'terrible') {
    return 0;
  } else if (ratingLower === 'poor') {
    return Math.ceil(amount * 0.05);
  } else if (ratingLower === 'good') {
    return Math.ceil(amount * 0.10);
  } else if (ratingLower === 'great') {
    return Math.ceil(amount * 0.15);
  } else if (ratingLower === 'excellent') {
    return Math.ceil(amount * 0.20);
  } else {
    return 'Rating not recognised';
  }
}

console.log(calculateT(20, 'Excellent')); // Output: 4

function faktorial(n) {
  var naujas = [];

  for (var i = 1; i <= n; i++) {
    naujas.push(i);
  }

  return naujas.reduce(function (total, n) {
    return total * n;
  }, 1);
}

console.log(faktorial(3));

function validateHel(greetings) {
  return ['hello', 'ciao', 'salut', 'hallo', 'hola', 'ahoj', 'czesc'].some(function (w) {
    return greetings.toLowerCase().includes(w);
  });
}

console.log(validateHel('ahoj'));
console.log(validateHel('tSchuSS hOw, saLUT! LA; WiE, wIE: QUe tRES, hoMBRE, hAStA? LA. Bien. HOW. yoU, HastA lA hOW wIe? qUe viStA! TRES TReS You HaStA DoINg aRE: YoU,'));

function lowercaseCount(str) {
  var sarasas = 'abcdefghijklmnopqrstuvwxyz';
  var count = 0;
  var _iteratorNormalCompletion26 = true;
  var _didIteratorError26 = false;
  var _iteratorError26 = undefined;

  try {
    for (var _iterator26 = str[Symbol.iterator](), _step26; !(_iteratorNormalCompletion26 = (_step26 = _iterator26.next()).done); _iteratorNormalCompletion26 = true) {
      var raides = _step26.value;

      if (sarasas.includes(raides)) {
        count++;
      }
    }
  } catch (err) {
    _didIteratorError26 = true;
    _iteratorError26 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion26 && _iterator26["return"] != null) {
        _iterator26["return"]();
      }
    } finally {
      if (_didIteratorError26) {
        throw _iteratorError26;
      }
    }
  }

  return count;
}

console.log(lowercaseCount('abc')); /// arba su regex 

function lowercaseCoun(str) {
  return (str.match(/[a-z]/g) || []).length;
}

console.log(lowercaseCoun('abc'));

function minSum(arr) {
  var sortedArr = arr.sort(function (a, b) {
    return a - b;
  }); /// susirikiuojam nuo maziausio iki diziausio. 

  var sum = 0;
  var left = 0; // deklaruojam kaire ir desine puses 

  var right = sortedArr.length - 1; /// desine puse 

  while (left < right) {
    // leidziam cikla kol kaire maziau uz desine 
    sum += sortedArr[left] * sortedArr[right];
    left++; /// zingsnis kad eina is prieko po 1 

    right--; /// zingsnis kad eina is galo po 1 
  }

  return sum;
}

console.log(minSum([5, 4, 2, 3]));

function rowWeights(array) {
  var pirmi = 0;
  var antri = 0;

  for (var i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      pirmi += array[i];
    } else {
      antri += array[i];
    }
  }

  return [pirmi, antri];
}

console.log(rowWeights([50, 60, 70, 80]));

function rowWeight(array) {
  var a = array.filter(function (x, i) {
    return i % 2 === 0;
  }).reduce(function (total, n) {
    return total + n;
  }, 0); ///

  var b = array.filter(function (x, i) {
    return i % 2 !== 0;
  }).reduce(function (total, n) {
    return total + n;
  }, 0); /// filteryje galiam i deklaruot

  return [a, b];
}

console.log(rowWeight([50, 60, 70, 80]));

function removeTrailingExclamations(string) {
  return string.replace(/!+$/, '');
}

console.log(removeTrailingExclamations('!Hi!!!')); // "!Hi"

console.log(removeTrailingExclamations('Labas!!'));

function re(s) {
  //coding and coding....
  while (s[s.length - 1] === '!') {
    s = s.slice(0, -1);
  }

  return s;
}

console.log(re('hi !!!'));

function r(s, n) {
  var naujas = '';
}

console.log(r('Hi!!!', 1));

function whoIsPaying(name) {
  if (name.length > 2) {
    return [name, name.slice(0, 2)];
  } else {}

  return [name];
}

console.log(whoIsPaying('Meee'));

function digi(n) {
  var ats = [];

  var geras = _toConsumableArray(n);

  var _iteratorNormalCompletion27 = true;
  var _didIteratorError27 = false;
  var _iteratorError27 = undefined;

  try {
    for (var _iterator27 = geras[Symbol.iterator](), _step27; !(_iteratorNormalCompletion27 = (_step27 = _iterator27.next()).done); _iteratorNormalCompletion27 = true) {
      var skaicius = _step27.value;
      var pirmas = skaicius[0];
      var digitCount = Math.abs(pirmas).toString().length;
      ats.push([skaicius + ', ' + digitCount]);
    }
  } catch (err) {
    _didIteratorError27 = true;
    _iteratorError27 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion27 && _iterator27["return"] != null) {
        _iterator27["return"]();
      }
    } finally {
      if (_didIteratorError27) {
        throw _iteratorError27;
      }
    }
  }

  return ats;
}

console.log(digi([[0], [9], [66], [12345], [128685], [9876543210], [9007199254740991]]));

function filterString(value) {
  return parseFloat(value.replace(/[a-zA-Z]/g, ''));
}

console.log(filterString('123asdasd'));

function multiTab(number) {
  var skaicius = '';

  for (var i = 1; i <= 10; i++) {
    skaicius += "".concat(i, "*").concat(number, "=").concat(i * number);
    if (i < 10) skaicius += '\n';
  }

  return skaicius;
}

console.log(multiTab(6));

function pickIt(arr) {
  var odd = [],
      even = [];
  var _iteratorNormalCompletion28 = true;
  var _didIteratorError28 = false;
  var _iteratorError28 = undefined;

  try {
    for (var _iterator28 = arr[Symbol.iterator](), _step28; !(_iteratorNormalCompletion28 = (_step28 = _iterator28.next()).done); _iteratorNormalCompletion28 = true) {
      var skaiciai = _step28.value;

      if (skaiciai % 2 === 0) {
        even.push(skaiciai);
      } else {
        odd.push(skaiciai);
      }
    }
  } catch (err) {
    _didIteratorError28 = true;
    _iteratorError28 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion28 && _iterator28["return"] != null) {
        _iterator28["return"]();
      }
    } finally {
      if (_didIteratorError28) {
        throw _iteratorError28;
      }
    }
  }

  return [odd, even];
}

console.log(pickIt([10, 20, 30])); /// arba 

function su(arr) {
  return [arr.filter(function (i) {
    return i % 2 === 0;
  }), arr.filter(function (i) {
    return i % 2 !== 0;
  })];
}

console.log(su([10, 20, 30])); /// kaip sufiltruoti zodzius pagal eile jame esancio skaiciaus. 

function ie(zodis) {
  return zodis.sort(function (a, b) {
    // Extract numbers from each word
    var numA = parseInt(a.match(/[0-9]/)[0]);
    var numB = parseInt(b.match(/[0-9]/)[0]);
    return numA - numB; // Sort by the numbers found in the words
  });
}

console.log(ie(['Jon2as', 'Paul1s', 'Anna3'])); // Output: ['Paul1s', 'Jon2as', 'Anna3']

/*
Nustatyti, ar sąraše yra teigiamas skaičius.
a. Pavyzdys: Patikrinkite, ar sąraše [1, -2, 3, -4] yra teigiamų skaičių
 */

function nustat(duomenys) {
  return duomenys.filter(function (skaicius) {
    return skaicius > 0;
  }).length > 0;
}

console.log(nustat([1, -2, 3, -4]));