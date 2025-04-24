


function surask(haystack) {
    for(let i=0;i<=haystack.length;i++){
      if(haystack[i]==='needle'){
        return `found the needle at position ${i}`
      }}};

  const z1=["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"];
  console.log(surask(z1));

  /*Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].*/


function countPositivesSumNegatives(input) {

    if (input===null||input===''||input===0){
        return []}
        

        let s5=0;//+
        let s3=0;//-

     for(let i=0;i<=input.length;i++){
        if(input[i]>0 ){
            s5++;
        } if (input[i]<0){
            s3+=input[i]
        }
    } return [s5,s3]
};

const z2=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]
console.log(countPositivesSumNegatives(z2));

function makeUpperCase(str) {
const result=str.toUpperCase();
    return result;
  };
  console.log(makeUpperCase('jonas'));

/// sutraukimas be tarpu zodzio. 
  function noSpace(x) {
    let result = '';
    for (let i = 0; i < x.length; i++) {
        if (x[i] !== ' ') {
            result += x[i];
        }
    }
    return result; 
}

console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B')); 
console.log(noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd')); 

function boolToWord( bool ){
    if (bool==='true'){
      return `Yes`
    }else {
      return `No`
    }
  };
  console.log(boolToWord('true'));
  console.log(boolToWord('false'));
  console.log(boolToWord('undefined'));

  function greet(){
    return "hello world"
}
console.log(greet());


function basicOp(operation, value1, value2){
    const result = eval(`${value1}${operation}${value2}`);
    return `'${value1} ${operation} ${value2} = ${result}'`
  };
  console.log(basicOp('+', 4, 7));
  console.log(basicOp('-', 15, 18));
  console.log(basicOp('*', 5, 5));
  console.log(basicOp('/', 49, 7));

  function fakeBin(x){
    const skaicius=Number(x);
    const eilute='';
    for(let i=0;i<=skaicius.length;i++){
        if(i>5) {eilute+=x[i]
        } return eilute;
    }
    }
    console.log(fakeBin('45385593107843568'));
    console.clear();

    function testEven(n) {
        if(n%2===0){
          return true;
        }if (n%2===1){
          return false;
        } if(n%1!==0){
          return false;
        }
          //Your awesome code here!
      };
      console.log(testEven(0.1));
      console.log(testEven(0));
      console.log(testEven(0.5));
      console.log(testEven(1))
      console.log(testEven(2))
      console.log(testEven(-4))

      function simpleMultiplication(number) {
        let multi=8;
        let multi1=9;
          if(number%2===0){
            return number*multi
          } if (number%2===1){
            return number*multi1
          }
      };
      console.log(simpleMultiplication(2))
      console.log(simpleMultiplication(1))
      console.log(simpleMultiplication(8))
/// pakeisti is pliuso i minusa. 

      function invert(array) {
        for (let i = 0; i < array.length; i++) {
          array[i] = -array[i]; 
        }
        return array; 
      }
      const z3=[1,2,3,4,5];
      const a=[1,-2,3,-4,5];
      const c8=[];
      console.log(invert(z3));
      console.log(invert(a));
      console.log(invert(c8));
//// kai vienam reikia lyginio kitam nelyginio kad gautusi true. 
    
        function lovefunc(flower1, flower2) {
            return (flower1 % 2 !== flower2 % 2); // turi vienas buti 1 kitas 0, tada gausime taip. jeigu pirmas nelygus antram tada taip. 
        }
    
      console.log(lovefunc(1,4));
      console.log(lovefunc(2,2));
      console.log(lovefunc(0,1));
      console.log(lovefunc(0,0));
/// suskaicius vidurki. 
      function findAverage(array) {
        let sum=0;
        let count=0;
        let result=0;
        
        
        for(let i=0;i<array.length;i++){
          sum+=array[i]
          count++;
          result=sum/count;
    
      }
        return result
      };
      console.log(findAverage ([1,1,1]));
      console.log(findAverage ([1,2,3]));
      console.log(findAverage ([1,2,3]));
      console.log(findAverage ([1,2,3,4]));
/// raides dvigubint arba skaicius. 
      function daubleChar(str) {
        let zodis="";
        for(let i=0;i<str.length;i++){
            zodis+=str[i]+str[i];// a+a/b+b/c+c/d+d
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

function sumStr(a,b){
    let skaicius1=Number(a);
    let skaicius2=Number(b);
    let suma=skaicius1+skaicius2;
    let suma1=String(suma);

   return  `"${a}","${b}" --> "${suma1}"`
}
console.log(sumStr('4','5'));
console.log(sumStr('34','5'));
console.log(sumStr('0','0'));

function hoopCount (n) {
    if(n>=10){
      return 'Great, now move on to tricks'
    }if (n<10){
      return 'Keep at it until get it'
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
    
    console.log(setAlarm(true, true));   // false
    console.log(setAlarm(false, true));  // false
    console.log(setAlarm(true, false)); // true
    console.log(setAlarm(false, false)); // false
console.clear();

    function nbYear(p0, percent, aug, p) {
        const metai=p0+p0*percent+aug
        return metai;
    }
    console.log(nbYear(1000,0.02,50,1200))


    function findNeedle(haystack) {
        let pozition=0;
        for(let i=0;i<haystack.length;i++){
          if(haystack[i]==='needle'){
            pozition+=i;
            
          }
        }return `found the needle ant pozition ${pozition}`
      };

      console.log(findNeedle([1,2,3,4,5,6,7,8,8,7,5,4,3,4,5,6,67,5,5,3,3,4,2,34,234,23,4,234,324,324,'needle',1,2,3,4,5,5,6,5,4,32,3,45,54 ]));

      function evenOrOdd(number) {
        if(number%2==0){
          return 'Even'
        } else{
          return "Odd"
        }
      }
      console.log(evenOrOdd(2));
      console.log(evenOrOdd(7));
      console.log(evenOrOdd(0));
////// jeigu reikia pakeisti zodyje viena raide kita raide. 
      function DNAtoRNA(dna) {
        let sd='';
        for(let i=0;i<dna.length;i++){
          if(dna[i]==='T'){
            sd+='U'
          } else {
            sd+=dna[i]
          }
        } return sd;
      }
      console.log(DNAtoRNA('GCAT'));
/// pakartoju isiminimui 
function ieskokPakeisk(duomenys){
    let naujas='';
    for(let i=0;i<duomenys.length;i++){
        if(duomenys[i]==='T' ){
            naujas+='U'
        } else{
            naujas+=duomenys[i]
        }
    }
}
// pakartoju/ 
function uzkeisk(duomenys){
    let naujas5='';
    for(let i=0;i<duomenys.length;i++){
        if(duomenys[i]==='T'){
            naujas5+='U'
        }else{
            naujas5+=duomenys[i]
        }
    }
}

function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    const sum=laLigaGoals+copaDelReyGoals+championsLeagueGoals
    return sum;
  }
  console.log(goals(0,2,5));
/// Surasti trikampio 3 kampo dydi, ju suma lygi 180 laipsniu. 
  function otherAngle(a, b) {
    const suma=180;
    const c=suma-a-b
    return c;
  }
  console.log(otherAngle(30,60));

  /// pajude per koordinates 

  function move (position, roll) {
    const naujosKoordinates=position+(roll*2);
    return naujosKoordinates
  };
  console.log(move(0,4))
console.clear()

/// kai reikia tam tikrus dalykus pakeist kitais dalykais/ labai svarbu kur sedi return. 
  function correct(string){
    let zodis = '';
    for(let i = 0; i < string.length; i++){
        if(string[i] === '5'){
            zodis += 'S';
        } else if(string[i] === '0'){
            zodis += 'O';
        } else if(string[i] === '1'){
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
    let sum=0;
    if(arr.length===0){/// pradzioje saunam kad patikrinu ar ne [] skliaustai sedi uzklausoj. 
        return 0;
    }for(let i=0;i<arr.length;i++){
        if(arr[i]>0){
            sum+=arr[i];//// jeigu pliusas sudedam jeigu minusas skaiciuojam kaip 0. 
        }
        }return sum;
    };

  console.log(positiveSum([1,2,3,4,5]));
  console.log(positiveSum([-1,-2,-3,-5]));
  console.log(positiveSum([]));
  console.log(positiveSum([1,-2,3,4,5]));

  function updateLight(current) {
    if(current==='green'){
      return 'yellow'
    } if(current==="yellow"){
      return 'red'
    } if(current==="red"){
      return "green"
    }
    
  };
  console.log(updateLight('green'));
  console.log(updateLight('yellow'));
  console.log(updateLight('red'));

console.log('----------')

let atvirukoTekstas = '"abracadabra'
const atvirukoBalses = ['a', 'e', 'i','o','u']
///  kai reikia surasti zodyje, balsiu ne viena kieki. naudojami includes()

function getCount(str) {
    let atvirukoSuma = 0;
    const raides= ['a', 'e', 'i','o','u']

    for(let i=0;i<str.length;i++){
     if(raides.includes(str[i])){
        atvirukoSuma++}
    }
    return atvirukoSuma
};
console.log(getCount('abracadabra'));
console.log(getCount('pear tree'));

/// reikia surasti ar eiluteje yra norima reiksme.Labai svarbu kur sedi paskutinis return, nes kitaip reiksme duos bloga.
function check(a, x) {
    for(let i=0;i<a.length;i++){
      if(a[i]===x){
        return true
      }
      }return false 
    };
  console.log(check[66,101],66)
  console.log(check(['t', 'e', 's', 't'], 'e'));
  console.log(check(['what', 'a', 'great', 'kata'], 'kat'));
/// Math.floor suapvalina i mazesne puse pagal uzduoti. 
  function litres(time) {
    const kiekis=0.5
    const suma=time*kiekis
    const galutine=Math.floor(suma);
    
    return galutine
  };
  console.log(litres(0));
  console.log(litres(1));
  console.log(litres(2));
  console.log(litres(3));
console.log('-------------')
  function arithmetic(a, b, operator){
    
    if(operator==='add'){
      return a+b
    }if (operator==='subtract'){
      return a-b
    }if(operator==='multiply'){
      return a*b
    }if(operator==='divide'){
      return a/b
    }
  }
  console.log(arithmetic(1,2,'add'));
// kai reikia paimti array eilute ir istumti zodi. 
  function removeEveryOther(arr){
    let naujas=[];
    for(let i=0;i<arr.length;i+=2){
         naujas.push(arr[i]);// naujas array gausis prasukti zodziai gausis. 
    }
    return naujas;
  }
  console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']));

  function greef (name, owner) {
    if(name===owner){
      return 'Hello boss'
    }if(name!==owner){
      return 'Hello guest'
    }
  };
  console.log(greef('Daniel','Daniel'));
  console.log(greef('Greg','Daniel'));

// kai reikia isimti kazkoki elementa is zodio. siuo atveju sauktuka. 
  function removeExclamationMarks(s) {
let naujas='';
for(let i=0;i<s.length;i++){
    if(s[i]!=='!'){
        naujas+=s[i]
    }
}
    return naujas
  };
   console.log(removeExclamationMarks("Hello World!"));

   function reverseList(duomenys){
    let list='';
    for(let i=duomenys.length;i>0;i--){
        list+=[i];
    } return `[${list}]`;
};
const b=[1, 2, 3, 4] ;
const c=[9, 2, 0, 7];
console.log(reverseList(b));
console.log(reverseList(c));

function greek(name){
  return `Hello,${name} how are you doing today`
}
console.log(greek("Ryan"));

// kai reikia patikrinti ar antras zodis tinka pirmo pabaigai. 
function solution(str, ending){
  
  return str.endsWith(ending)
}
console.log(solution('abcde', 'cde'));


// jeigu reikia sujungti array tipo zodzius i string tipa. 
function smash (words) {
 
  return words.join(' ');
};
console.log(smash(["hello", "world"]));
/// reikia is zodziu sakinio surasti trumpiausia zodi. 
function findShort(s){
  const nauj=s.split(' ') // susplitinam i [zodis,zodis,zodis] eilute 
  let zod=nauj[0].length; /// prisilyginam 0 kad tikrintu nuo 0 
  for(let i=0;i<nauj.length;i++){
    if(nauj[i].length<zod){ /// darome < maziau nes maziausia > jeigu didziausio ieskotume. 
      zod=nauj[i].length;// length prierasas nes ieskome ilgio automatiskai rodys ilgiuus visur. 
    }
  }
  return zod;
}
console.log(findShort("bitcoin take over the world maybe who knows perhaps"));//3
console.log(findShort("Let's travel abroad shall we"));//2

function bmi(weight, height) {
  let bmi=weight/(height*height)
  if(bmi<=18.5){
    return "Underweight"
  }if(bmi<=25.0){
    return "Normal"
  } if(bmi<=30.0){
    return "Overweight"
  } if(bmi>30){
    return "Obese"
  }
}
console.log(bmi(50,1.80));


///////////
/// patikrinti ar pateiktas a turi savyje x 
function chec(a, x) {
  for(let i=0;i<a.length;i++){
    if(a[i]===x){
      return true;
    }
  }
  return false;
}
console.log(chec([66, 101], 66));
console.log(chec([101, 45, 75, 105, 99, 107], 107));
console.log(chec(['t', 'e', 's', 't'], 'e'));


////// nauja funkcija array.map()  pakeiciam mapu ir padarom per parseint numeriu, tada galim su ciklu suskaiciut. 
function sumMix(x){
  const numbers=x.map(item=>Number.parseInt(item));
  let sum=0;
  for(let i=0;i<numbers.length;i++){
    sum+=numbers[i]
  }
return sum;
}
console.log(sumMix([9, 3, '7', '3']));
/// reikia paskaiciuoti avis kas yra lengva, 1 avis true, bet kad maiso null ir undefined. Taciau juos atradus imetus continue toliau eis
function countSheeps(sheep) {
  let count=0;
  for(let i=0; i<sheep.length;i++){
    if(sheep[i]===undefined||sheep[i]===null||sheep.length===0){
      continue; 
    }
    if(sheep[i]===true){
      count++
    }
  }
 return count;
}
console.log(countSheeps([]));
console.log(countSheeps([undefined]));

console.log(countSheeps([undefined,null,false,true]));

console.log(countSheeps([undefined,null,false,true,true,false,null,undefined]));

//// paprasta funkcija su likusiu kiekiu kuro ir atstumu. 
function zeroFuel(distanceToPump, mpg, fuelLeft) {
  const mid=distanceToPump/mpg
  if(mid<=fuelLeft){
    return true;
  } else{
  return false;
}
};
  console.log(zeroFuel(50,25,2));
//// easy kaip pakeist number to string reiksme. 
  function numberToString(num) {
    return ''+num;
  }
  console.log(numberToString(67));

  /// arba 

  function numberTo(num) {
    return num.toString();
  };
  console.log(numberTo(67));
//// pakeisti stringa i array eilute prase splitint pagal ' ' tarpa. 
  function stringToArray(string){
    return string.split(" "); // splitinam pagal tarpa. ir padarom [ eilute. ]
      // code code code
    
    }
    console.log(stringToArray('Robin Singh'));

    function persistence(num) {
      let string=num+'';
     let array=string.split();
     console.log(array);
     }
//// lengvas suprantamas visiem

function switchItUp(number){
  if(number===0){
    return "Zero"
}if(number===1){
  return 'One'
} if(number===2){
  return'Two'
}if(number===3){
  return 'Three'
}if (number===4){
  return 'Four'
}if(number===5){
  return 'Five'
}if (number===6){
  return 'Six'
}if (number===7){
  return 'Seven'
}if(number===8){
  return'Eight'
}if(number===9){
  return "Nine"
}
}
console.log(switchItUp(2));

///// kai reikia suskaiciuoti ar sakinys turi tiek pat x ir o reiksmiu. 

function XO(str) {
  let xCount = 0;
  let oCount = 0;
  if (str.length === 0) { //// reikia si tikrinima daryti pries cikla, nes kitaip neveiks. 
    return true; 
  }
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'X' || str[i] === 'x') {
      xCount++;
    } else if (str[i] === 'O' || str[i] === 'o') {
      oCount++;
    }
  }
  return xCount === oCount; 
}

console.log(XO(''));      // true
console.log(XO('xo'));    // true
console.log(XO('xxxoo')); // false
console.log(XO('xXoO'));  // true
console.log(XO('xxOOx')); // false

//// nupjauna pirma ir paskutine raides. 

function removeChar(str){
  return str.slice(1,-1)
 
 };
 console.log(removeChar('eloquent'));
// patikrinti ar is duotu krastiniu galima suskaiciuoti ar gali gautis trikmapis. 
 function isTriangle(a,b,c)
{ if(a+b>c&&a+c>b&&b+c>a){
     return true
     }
   return false;
}
console.log(isTriangle(1,2,2));

function abbrevName(name) {
  const skirti = name.split(' ');// gaunasi du zodziai 
  const pirmos=skirti[0][0].toUpperCase() // taip paimam pirmo zodzio pirma raide.Padarom didziaja 
  const antra=skirti[1][0].toUpperCase() // taip paimam antra zodzio pirma raide. 

  return `${pirmos}.${antra}`
};
console.log(abbrevName("Sam Harris"));
// reikia surasti visu kintamuju kvadratu suma. 
function squareSum(numbers){
  let sum=0;
    for( let i=0; i<numbers.length;i++){
      sum+=numbers[i]**2
    }
    return sum;
  }
  console.log(squareSum([0, 3, 4, 5]));
  //// pakeisti stringa i numberi 
  const stringToNumber = function(str){
  
    return Number(str)
  }
  console.log(stringToNumber('1234'));

console.log('-------------------')


// kaip is skaiciaus padaryti eilute ir ideti i array skliaustus su push.metodu. 
function reverseSeg(n){
  let n1=[];
  for(let i=n;i>0;i--){
   n1.push(i)
  }
  return n1;
}
console.log(reverseSeg(5));


 /// kaip is string eilutes rasti diziausia ir maziausia pasiverciant masyvu 
function highAndLow(numbers){
  let n0=numbers.split(' '); // pasiverciam i object po 1 skaiciu. 

 const max = Math.max(...n0); // Didžiausia reikšmė BUTINA DETI ... nes neiskos masyve skaiciu. 
 const min1=Math.min(...n0);

return ''+`${max} ${min1}`
};

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));


/// kai skaiciai dauginasi is x darosi eilute ir padarom masyva. 
function countBy(x, n) {
  let z = [];
  for(let i=1; i<=n;i++){
    z.push([i]*x) // istumiam i [] skliaustus su , tarpuose. 
  }
  return z
}
console.log(countBy(1,10));
console.log(countBy(2,5));



function highAndLo(numbers){
  let n0=numbers.split(' '); // pasiverciam i object po 1 skaiciu. 

 const max = Math.max(...n0); // Didžiausia reikšmė BUTINA DETI ... nes neiskos masyve skaiciu. 
 const min1=Math.min(...n0);

return ''+`${max} ${min1}`
};

console.log(highAndLo("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));

//// kai reikia skaiciu pakeisti 0 arba 1 iki 5 ir virs 5 ribose. 
function fakeBi(x){
  let naujas=''; // nulinis lygis stringo reiksme 
  let masyvas=x.split([])// isskirstom string eilute po 1 skaiciu [] reiksmeje 
  for(let i=0; i<masyvas.length;i++){
    if(masyvas[i]<5){
      naujas+=0
    }if (masyvas[i]>=5){
      naujas+=1
    }
  } 
  return naujas+''

}
console.log(fakeBi('45385593107843568'));
/// kai reikia eiluteje surasti maziausia skaiciu. 
function findSmallestInt(arr) {
  let maziukas=arr[0]
  
  for( let i=0; i<arr.length;i++){
    if(arr[i]<maziukas){
      maziukas=arr[i]
    }
  }
  return maziukas;
}
console.log(findSmallestInt([78,56,232,12,8]));

function sayHello(name) {
  return 'Hello '+name
}
console.log(sayHello('Mr. Spock'));

///// kai reikia is string zodzio ispjauti pirma nari kuris skaicius, bet skaicius bus string eilute kuria reiks pasivers number. 
function getAge(inputString){

let number=inputString.slice(0,1)
let change=Number.parseInt(number)
return change;
}
console.log(getAge("4 years old"));
/// apsukt eilute ir ispauzdinti [] per pusha. 
function sortArray(array) {
  let nauja=[];
    for( let i=array.length-1;i>=0;i--){/// kai paskutini dedam ir nuo jo skaiciuojam nepamirstam length-1. 
      nauja.push(array[i])
    }
    return nauja;
  };
  console.log(sortArray([0, 1, 2, 3, 5 ]));
/// paprasta funkcija su pervirsiu grazint viena ats be pervirsio 0 
  function enough(cap, on, wait) {
    if(on+wait<=cap){
      return 0;
    } if(on+wait>cap){
      return (on+wait)-cap
    }
  }
  console.log(enough(10,5,5));
  console.log(enough(10,25,5));
  ///// pakeist sakinyje balses tustuma. dauga pildymo. 
  function disemvowel(str) {
    return str.replaceAll('a','').replaceAll('e','').replaceAll('i','').replaceAll('o','').replaceAll('u','').replaceAll('O','').replaceAll('U','').replaceAll('I','').replaceAll('A','').replaceAll('E','')
  }
  console.log(disemvowel("This website is for losers LOL!"));
console.clear()
///////// is number eilutes pasidaryti i stringa veliau i object po 1 skaiciu atsakyma pateikti vel number budu. 
function squareDigits(num){
  let stringu=num.toString().split('')
  let nauja=[];

  for( let i=0;i<stringu.length;i++){
    nauja+=stringu[i]**2

  }
  
  return parseInt(nauja)
}
console.log(squareDigits(3212));
/// padaryti eilute is dvieju skaiciu. turi grizti array eilute. 
console.log('-----------')
function between(a, b) {
  let final=[];
  for (let i=a;i<=b;i++){
    final.push(i)
}
   return final;
}
console.log(between(1,4));
/// KAI REIKIA SURASTI MASYVE MIN IR MAX NAUDOJAM MATH 
function minMax(arr) {
  return [Math.min(...arr), Math.max(...arr)]; // reikia deti ... kad paimtu skauciavimui masyva. 
};
console.log(minMax([1,2,3,4,5]));
// arba for ciklu 

function minMa(arr) {
  if (arr.length === 0) return []; // jei masyvas tuščias
  
  let mini = arr[0];
  let maxi = arr[0];
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < mini) {
      mini = arr[i];
    }
    if (arr[i] > maxi) {
      maxi = arr[i];
    }
  }
  
  return [mini, maxi];
}

console.log(minMa([1, 2, 3, 4, 5]))

/// Ar Zaidzia banjo su string metodais; 

function areYouPlayingBanjo(name) {
  if(name.at(0)==='R'||name.at(0)==='r'){
  return name + " plays banjo" 
} else{
  return name + " does not play banjo"
}
  }
console.log(areYouPlayingBanjo('Adam'));
//// kai reikia surasti kiek metu uztruks kol pasieks kazkoki skaiciu :) 
function calculateYears(principal, interest, tax, desired) {
  let count=0;
for(let i=principal; i<desired;i+=(principal*interest)-((principal*interest)*tax)){
  count++
}
return count;
}

console.log(calculateYears(1000,0.05,0.18,1100));
console.log(calculateYears(1000,0.01625,0.18,1200));
// kai reikia paimti masyva kuris nebaigtas ir reikia istaisyti seka nes cia truko 7
function pipeFix(numbers){
  let nauja=[];
  for(let i=numbers[0];i<=numbers[numbers.length-1];i++){
    nauja.push(i)
  }
 return nauja;
}
console.log(pipeFix([1,2,3,5,6,8,9]));

function howMuchILoveYou(nbPetals) {
  nbPetals = nbPetals % 6; /// reikia pasidaryti kad betkokia reiksme paimtu 
  if (nbPetals === 0) nbPetals = 6;
{if(nbPetals===1||nbPetals===7){
  return "I love you" }
} if(nbPetals===2||nbPetals===8){
  return "a little"
}if (nbPetals===3|nbPetals===9){
  return "a lot"
}if(nbPetals===4||nbPetals===10){
  return "passionately"
}if(nbPetals===5||nbPetals===11){
  return "madly"
}if(nbPetals===6||nbPetals===12){
  return "not at all"
};
}
console.log(howMuchILoveYou(10));

// kai reikia isimti is eilutes # sugrazinti eiluten nukirpta be jo jeigu jo nera ta pacia grazina, 
function removeUrlAnchor(url){
  if(url.includes('#')===false){
    return url;
  };
let skaicius=url.indexOf('#');
let naujas=url.slice(0,skaicius)

return `${naujas}`
    
  };

  console.log(removeUrlAnchor('www.codewars.com#about'))
  console.log(removeUrlAnchor('www.codewars.com/katas/?page=1#about'));
/// pazymiu vidurkis tarp ir duoda raide ats. 
  function getGrade (s1, s2, s3) {
    let sum=(s1+s2+s3)/3

  if(90<=sum&&sum<=100){
    return 'A'
  }else if(80<=sum&&sum<90){
    return 'B'
  }else if(70<=sum&&sum<80){
    return 'C'
  }else if(60<=sum&&sum<70){
    return 'D'
  }else if (0<=sum&&sum<60){
    return 'F'
  }
};
  console.log(getGrade(95,90,93));
  /// reikia iki tam tikro dydzio padaryti masyva su tam tikru zingsniu. 
  function findMultiples(integer, limit) {
    let nauja=[];
    for( let i=integer;i<=limit;i+=integer){
      nauja.push(i)
      
    }
    return nauja;
  };
  console.log(findMultiples(5, 25));
  console.log(findMultiples(1, 2));
  console.log(findMultiples(5, 7));
/// kas ka geria pagal amziu. 
function peopleWithAgeDrink(old) {
  if (old>=21){
    return 'drink whisky'
  } if(old<21&&old>=18){
    return 'drink beer'
  } if(old<18&&old>=14){
    return 'drink coke'
  } 
  return 'drink toddy'
};
console.log(peopleWithAgeDrink(13));
console.log(peopleWithAgeDrink(14));
console.log(peopleWithAgeDrink(18));
console.log(peopleWithAgeDrink(17));
// parasyk funkcija kuri be skaiciu grazintu visada 5 skaiciu.
function unusualFive() {
  return 'jonas'.length
}
console.log(unusualFive());
/// o surinkimas i gala. 
function moveZeros(arr) {
  let ats=[];/// nuliai cia eis. 
  let ats2=[];/// kiti skaiciai 
  for(let i=0;i<arr.length;i++){
    if(arr[i]===0){
   ats.push(arr[i]) 
  } else {
    ats2.push(arr[i]);
  }
  }
  return [...ats2,...ats];
  };
  
console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]));
/// pakeisti skaicius x2 ats 
function maps(x){
  let nes=[];
  for(let i=0;i<x.length;i++){
    nes.push(x[i]*2)
  } 
  return nes;
}
console.log(maps([1,2,3]))
console.log('----------')
//// is array atimti maziausia ir ispauzdinti eilute be jo. 
function filter_list(l) {
  const result = [];
  for (let i = 0; i < l.length; i++) {
    if (typeof l[i] === 'number' && !isNaN(l[i])) {
      result.push(l[i]);
    }
  }
  return result;
}
  console.log(filter_list([1,2,'a','b']));
  console.log(filter_list([1,2,'aasf','1','123',123]));
// reikia paimti skaiciu vidurki ir palyginti ji su klases vidurkiu 
    function betterThanAverage(classPoints, yourPoints) {
      let sum=0;
      for (let i=0;i<classPoints.length;i++){
        sum+=classPoints[i];
      }
      const average=sum/classPoints.length // visus papildomus skaiciavimus daryti po loop uzdarymo. 

      return average<yourPoints; // galima daryt true folse paciam returne greitesnis variantas 
    };
    console.log(betterThanAverage([2,3],5));
    console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9));
/// kai reikia kintamuosius sudaugint ir duoti rezultata 
    function grow(x){
      let sum1=1;/// 0 negali but nesidaugins eilute. 
      for (let i=0; i<x.length;i++){
       sum1*=x[i] // cia gaunasi eilute 1*1*2*3=6
      }
     return sum1;
    }
    console.log(grow([1,2,3]));
/// paprastas 
    function problem(x){
      if(typeof x==='string'){
        return 'Error'
      };
    
      return x*50+6;
      //your code here
    };
    console.log(problem('hello'));
    console.log(problem(1));
    console.log(problem(5));
/// irgi easy su if 
    function paperwork(n, m) {
      if (n<0||m<0){
        return 0;
      }
      return n*m;
      
    };
    console.log(paperwork(5,5));
    console.log(paperwork(-5,5));
/// easy vel funkcija 
    function combat(health, damage) {
      if(damage>health){
        return 0;
      }
      return health-damage
    };
    console.log(combat(20,30));
    console.log(combat(92,8));
/// surasti raides viete abelecele 
    function position(letter){
      const letters='abcdefghijklmnopqrstuvwxyz'
      return `Position of alphabet: ${letters.indexOf(letter)+1}`
    };
    console.log(position('a'));
    console.log(position('c'));
/// suzinot charcode numeriuka. 
    function getChar(c){
      return c.toString().charCodeAt();
    };
    console.log(getChar(55));

///Sulygint ar zodis parasius is galo gaunasi toks pats 
function isPalindrome(x) {
  let naujas=x.toLowerCase();
  let ats='';
  for(let i=naujas.length-1;i>=0;i--){
    ats+=naujas[i];

  }
  return ats===naujas
};
console.log(isPalindrome('Abba'));
///// reikia patikrinti ar duota reiksme virsina limita ar ne. 
function smallEnough(a, limit){
  for(let i=0;i<a.length;i++){
    if(a[i]>limit){
      return false
    } 
    
    }
  return true
};
console.log(smallEnough([66,101],200));

function reverseSe(n){
  let nauja=[];

  for(let i=5;i>0;i--){
    nauja.push([i])
  }
  return [nauja.join('')]
};
console.log(reverseSe(5));



function fancyMath(n1,zenklas,n2){
  const func={
      '+':(a,b)=>a+b,
      '-':(a,b)=>a-b,
      '*':(a,b)=>a*b,
      '/':(a,b)=>a/b,
  };
  const funcToUse=func[zenklas];
  if(funcToUse===undefined){
      return ':(';
  }
  return funcToUse(n1,n2);
  }
  console.log(fancyMath(7,'+',5));
  console.log(fancyMath(7,'-',5));
  console.log(fancyMath(7,'*',5));
  console.log(fancyMath(7,'/',5));
  console.log(fancyMath(7,'**',5));


//// nelengvas su ifais, kur pagal ideja nesunku bet ifa sunkiai suderina. 
  function warnTheSheep(queue) {
    let naujasDarinys=queue.reverse();
    for(let i=0;i<naujasDarinys.length;i++){
      if(naujasDarinys[i]==='wolf'){
        if(i===0){
          return `Pls go away and stop eating my sheep`
        } else {
          return `Oi! Sheep ${i}! You are about to be eaten by a wolf!`
      }
      }
      }
      return "Pls go away and stop eating my sheep"
    };

  console.log(warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"]));
  console.log(warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "sheep", "wolf"]));
//// suskaiciuoti skaiciu suma, kai tie skaiciai kaip vienas. 

  function sumDigits(number) {
    let naujas=Math.abs(number).toString();// pasikeicia i number pasikeicia i stringa. 

    let sum=0;
    for(let i=0;i<naujas.length;i++){
      sum+=parseInt(naujas[i]); /// parseIntas pakeicia atgal i number reiksme ats sumos. 

    }
    return sum;
  }
  console.log(sumDigits(10));
  console.log(sumDigits(99));
/// paprastas parasyt funkcija sudet ciklo skaicius. 
  function summation(num) {
    let sum=0;
    for(let i=1;i<=num;i++){
      sum+=i
    }
    return sum;
    // Code here
  }
  console.log(summation(2));
//// pakeist visas balses i !!! 
  function replace(s) {
    return s.replaceAll('a','!').replaceAll('e','!').replaceAll('i','!').replaceAll('o','!').replaceAll('u','!').replaceAll('A','!').replaceAll('E','!').replaceAll('I','!').replaceAll('O','!').replaceAll('U','!')
    };
    console.log(replace('aeiou'))
    console.log(replace('"!Hi! Hi!"'))
/////// paprastas su lairkdoziu ir milisekundem. 
function past(h, m, s){
  return (h*3600000)+(m*60000)+(s*1000)
}
console.log(past(0,1,1));

/// su masinos nuoma ir ifu. 
function rentalCarCost(d) {
  if(d<=2){
    return d*40
  } if (d>=3&&d<=6){
    return d*40-20
  } if( d>=7){
  }
  return d*40-50
};
console.log(rentalCarCost(2));
console.log(rentalCarCost(1));

// super lengvas su if

function chromosomeCheck(sperm) {
  if(sperm==='XY'){
    return "Congratulations! You're going to have a son."
  }if (sperm==="XX"){
  
  }
    return "Congratulations! You're going to have a daughter."
    
  }
  console.log(chromosomeCheck('XY'));
  console.log(chromosomeCheck('XX'));
/// lengvas 
function hero(bullets, dragons){
  const kiekis=bullets/dragons;
  if(kiekis>=2){
    return true;
  } else{
    
  }
   return false;
}
console.log(hero(10,5));
// easy su if ir tekstu ir mazinimu. 
function mouthSize(animal) {
  const mazintos=animal.toLowerCase();
  
  if(mazintos==='alligator'){
    return 'small'
  }else{
    
  }
  return 'wide'
}
console.log(mouthSize('toucan'));
// bisk sudetingesnis su sqrt trunc ir if 
function isSquare(n){

  const saknis=Math.sqrt(n)
  const liekana=saknis-Math.trunc(saknis)

  if(n<0){
    return false;
  }if(liekana>0){
    return false;
  }
    return true;
  };
console.log(isSquare(-1));
console.log(isSquare(0));
console.log(isSquare(26)); 
console.log(isSquare(25)); 
/// easy to repeat 
function repeatStr (n, s) {
  return ''+ s.repeat(n)
};

console.log(repeatStr(3, "*"));
/// easy replace 

function correctPolishLetters (string) {
  return string.replaceAll('ą','a').replaceAll('ć','c').replaceAll('ę','e').replaceAll('ł','l').replaceAll('ń','n').replaceAll('ó','o').replaceAll('ś','s').replaceAll('ź','z').replaceAll('ż','z')
}
console.log(correctPolishLetters('Jędrzej Błądziński'));


function opposite(number) {
  return -number;
};
console.log(opposite(1));
console.log(opposite(-12525220.3325));
console.log(opposite(3.3333));

///
function main (verb, noun){
  return `${verb} ${noun}`
};
console.log(main('take','item'));
/// apsuksti zodzius vietom 
function reverseWords(str){
  return str.split(' ').reverse().join(' ');// padalinam per tarpa, apsukam ir sujungiam per tarpa. 
}
console.log(reverseWords('hello world!'));

function whatday(num) { 
  if(num===1){
    return 'Sunday'
  }if(num===2){
    return 'Monday'
  }if(num===3){
    return 'Tuesday'
  }if(num===4){
    return 'Wednesday'
  }if(num===5){
    return 'Thursday'
  }if(num===6){
    return 'Friday'
  }if(num===7){
    return 'Saturday'
  }if(num>7){
    
  }
return 'Wrong, please enter a number between 1 and 7'

};
console.log(whatday(78));

function validateHello(greetings) {
  let greet=greetings.toLowerCase();
  if(greet==='hello'||greet==='ciao'||greet==='salut'||greet==='hallo'||greet==='hola'||greet==='ahoj'||greet==='czesc'){
    return true;
  }
  return false;
}
console.log(validateHello('meh'));

function grees(name){

  if(name==="Johnny"){
    return `Hello my love!`
  }else {

  }
  return `Hello, ${name}!`
 
};
console.log(grees('Jim'));
console.log(grees("Johnny"));

// su rodykline pabandziau 

const contamination=(text, char)=> char.repeat(text.length);
console.log(contamination('abc','z'));

function capitalizeWord(word){
  const pirmaR=word[0].toUpperCase();
  const liekana=word.slice(1);
  return pirmaR+liekana;
  
} 
console.log(capitalizeWord('word'));

console.clear();
///// sudetingas su vardu reiksmiu padidinimu kai yra ne vienas zodis padidinimu, 
function getDrinkByProfession(param){
  let patikslintas=param.toLowerCase()
  let perdarytas=patikslintas.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')+'';

  
  if(patikslintas==='jabroni'){
    return `${perdarytas} should map to 'Patron Tequila'`;
  } else if(patikslintas==='school counselor'){
    return `${perdarytas} should map to 'Anything with Alcohol'`;
  } else if( patikslintas==="programmer"){
    return `${perdarytas} should map to 'Hipster Craft Beer'`;
  } else if (patikslintas==="bike gang member"){
    return `${perdarytas} should map to 'Moonshine'`;
  }else if(patikslintas==="politician"){
    return `${perdarytas} should map to 'Your tax dollars'`
  }else  if(patikslintas==='rapper'){
    return `${perdarytas} should map to 'Cristal'`;
  } else{ 
    return `'${perdarytas} should map to 'Beer'`
  
  }
};
console.log(getDrinkByProfession("jabrOni"));
console.log(getDrinkByProfession("bike ganG member"));
console.clear();
////////// prie zodzio jo ilgi prideti 

function addLength(...str) {
  return str.map(zodis=>`${zodis} ${zodis.length}`)

  };
  console.log(addLength('Apple','Ban'))
/// kai reikia surasti sekanti kvadrata ir ar jis sveikasis skaicius ar ne. Jeigu ne -1 grazinam 

  function findNextSquare(sq) {
    let naujas=Math.sqrt(sq);
    let next=(naujas+1)**2
    let trupmena=naujas-Math.trunc(naujas) /// daugiau uz 0 grazinam -1
if(trupmena>0){
  return -1;
}else if(trupmena===0){
  return next;
}

  };
  console.log(findNextSquare(114));
  console.log(findNextSquare(121));
  console.log(findNextSquare(625));
  console.log(findNextSquare(319225));
//////// kaip paskaiciuoti kiek metu truks kol pasieks norimas pinigu suma su procentais atemus mokescius. 
console.log('------------')
  function calculateYear(principal, interest, tax, desired) {
    let count=0;

    while(principal<desired){
    let procentai=principal*interest;
    console.log(procentai,'--------') /// procentai gaunami pirma karta. 
    let mokesciai=procentai*tax;
    console.log(mokesciai,'iiiiiii')// mokesciai mokami pirma karta 
    principal+=procentai-mokesciai; // reiskai startine suma + procentai - mokesciai ir taip suka kol gauna 1100 arba daugiau
    console.log(principal)
    count++ // skaiciuoja kol surenka norima suma apsisukimo ratus 
    }
    return count;
  };

    console.log(calculateYear(1000,0.05,0.18,1100));
  //// lengvas paskaiciuoti ar suma lyginis ar ne. 
    function oddOrEven(array) {
      let sum=0;
      for(let i=0;i<array.length;i++){
        sum+=array[i];
      }
      
      if(sum%2===0){
        return 'even';
      }else{
        return 'odd';
      }
    }
 
    console.log(oddOrEven([0,1,5]));
    console.log(oddOrEven([-1023, 1, -2]));
/// lengvas su zodziu apsukimu eiluteje. 
    function nameShuffler(str){
      return str.split(' ').reverse().join(' ');
    }
    console.log(nameShuffler('john McClane'));

    function validatePIN (pin) {
      if(pin.length!==4&&pin.length!==6){
        return false;
      } else if(pin-Math.trunc(pin)>0){
        return false;
      } else{
        return true;
      }
    
    }
    console.log(validatePIN('1'));
    console.log(validatePIN('12245'));
    console.log(validatePIN('-1.224'));
    console.log(validatePIN('1234'));
// while funkcija suskaiciupti kiek uztruks metu priaugui gauti. 
    function nbYea(p0, percent, aug, p) {
      let count=0;
    while(p0<p){ // nuo kiek iki kiek salyga 
      let prieaugis=Math.floor(p0*(percent/100)+aug)
      p0+=prieaugis; // didejimas 
      count++;// skaiciavimas ciklu kiek 
    }
    return count;
  }
  console.log(nbYea(1500,5,100,5000))
/// daug ifu tikriausiai galima padaryti greiciau su objektais bet dar nlb iseina 
  function gree(language) {
    if(language==='english'||language==='IP_ADDRESS_INVALID'||language==='IP_ADDRESS_NOT_FOUND'||language==='IP_ADDRESS_REQUIRED'){
      return 'Welcome';
    }
    if(language==='czech'){
      return "Vitejte";
    } if(language==='danish'){
      return "Velkomst";
    } if(language==="dutch"){
      return "Welkom";
    } if(language==="estonian"){
      return "Tere tulemast";
    }if(language==="finnish"){
      return "Tervetuloa";
    }
    if(language==="flemish"){
      return "Welgekomen";
    }
    if(language==="french"){
      return "Bienvenue";
    }
    if(language==="german"){
      return "Willkommen";
    }
    if(language==="irish"){
      return "Failte";
    }
    if(language==="italian"){
      return "Benvenuto";
    }
    if(language==="latvian"){
      return "Gaidits";
    }
    if(language==="lithuanian"){
      return "Laukiamas";
    }
    if(language==="polish"){
      return "Witamy";
    }
    if(language==="spanish"){
      return "Bienvenido";
    }
    if(language==="swedish"){
      return "Valkommen";
    }
    if(language==="welsh"){
      return "Croeso";
    }
    };
  console.log(gree('english'));
  console.log(gree('IP_ADDRESS_INVALID'));
//// apsukti sarasa;
  function reverseLis(list) {
    const naujas=list.reverse();
  
    return naujas;
    }
  console.log(reverseLis([1,2,3,4]));
  /// istaisyti ir pateikti pataisyta varianta 
  function rainAmount(mm){
    let needs=40-mm;


      if (mm>=40){
           return "Your plant has had more than enough water for today!";
      } else if(mm<40) {
           return "You need to give your plant"+' '+needs+"mm of water";
      }
  };
  console.log(rainAmount(100));
  console.log(rainAmount(39));
 console.log(rainAmount(35));

/// kaip surasti min ir max ir dif

function differenceInAges(ages){
  let naujas=Math.min(...ages);
  let naujasMax=Math.max(...ages);
  let dif=naujasMax-naujas;
  return [naujas, naujasMax, dif];
}
console.log(differenceInAges([82,15,6,38,35]))

function tripleTrouble(one, two, three){
  let one1=one.split('');
  let two2=two.split('');
  let three3=three.split('');
  let bendras=[...one1,...two2,...three3];// [ 'aaa', 'bbb', 'ccc' ]
  let ats='';
  for(const raides of bendras){
    ats+=raides
  }
  return ats;
 }
console.log(tripleTrouble("aaa","bbb","ccc"));

function checkAlive (health) {
  if (health <=0){
    return false
  } else  {
    return true
  }
};
console.log(checkAlive(5));
console.log(checkAlive(-1));
console.log(checkAlive(0));
//// is string reiksmes padaryti stringa reiksmes per tritaski ir sujungti atgal i stringa/. 
function solutio(a, b){
  let a1=a.split('  '); [45]
  let b1=b.split('  '); [1]

  if(a.length>b.length){
    return [...b1,...a1,...b1].join('');
  } else{
    return [...a1,...b1,...a1].join('');
  }
};
console.log(solutio('45', '1'));
console.log(solutio('13', '200'));
/// suskaiciuoti atstuma tarp stulpu 
function pillars(numPill, dist, width) {
  if(numPill<=1){
    return 0;
  }if( numPill===2){
    return dist*100;
  } else{
  let skaiciavimai=(numPill-1)*dist+(width/100)*( numPill-2)
    return Math.round(skaiciavimai*100);
  }
}
console.log(pillars(11,15,30));

/// su rodykline funkcija ir ternary pvz
  const areaOrPerimeter = (l , w)=>l===w? w*l:(w+l)*2
  // Return your answer
console.log(areaOrPerimeter(3,3));
console.log(areaOrPerimeter(6,10));

/// surasti per reduce array skirtuma cuboidu
    function findDifference(a, b) {
      const a1=a.reduce((suma,n)=>suma*n,1);
      const b1=b.reduce((suma,n)=>suma*n,1);
      
      return Math.abs(a1-b1);
    }
console.log(findDifference([3, 2, 5], [1, 4, 4]));
/// kai reikia grazinti skaicius kurie dalinasi is savo pozicijos arejusi be likuciu. 
function multipleOfIndex(array) {
  let naujas=[];
  for(let i=0;i<array.length;i++){
    if(i!==0 &&  array[i]%i===0){
       naujas.push(array[i]);
    }if(i===0&&array[i]===0){
      naujas.push(array[i]);
    }
  }
  return naujas;
}
console.log(multipleOfIndex([22, -6, 32, 82, 9, 25]));
console.log(multipleOfIndex([0,2,3,6,9]));
/// surasti kiek eiliu sumaises iseidamas is teatro 
function seatsInTheater(nCols, nRows, col, row) {
  return (nCols-(col-1))*(nRows-row);
  
  
}
console.log(seatsInTheater(16,11,5,3));

function integrate(coefficient, exponent) {
  let ats=coefficient/ (exponent+1)
  return `${ats}x^${exponent+1}`
  
}
console.log(integrate(3,2));
/// pirmos eilutes kvadratai turi buti daugiau negu antros eilutes kubu suma 
function arrayMadness(a, b) {
  let a1=a.reduce((total,n)=>total+n**2,0);
  let b1=b.reduce((total,n)=>total+n**3,0);
  if (a1>b1){
    return true;
  } else{

  }
  return false; 
}

console.log(arrayMadness([1,2,3],[0,1,2]))
console.log(arrayMadness([5,3,2,4,1],[15]))
console.log(arrayMadness([2,5,3,4,1],[3,3,3,3,3]))
console.log(arrayMadness([1,3,5,2,4],[2,2,2,2,2,2,2,1]))
console.log(arrayMadness([1,2,3,4,5],[2,2,2,2,2,2,1,1,1]))
console.log(arrayMadness([2,4,6,8,10,12,14],[1,3,5,7,9,11,13]))
/// is objecto padaryt zodzio reiksme ir jo ilgi. 



// surast kurioje quadranto puseje yra reiksme; 

function quadrant(x,y) {
  if(x>0&&y>0){
    return 1;
  }if(x<0&&y<0){
    return 3;
  } if(x<0&&y>0){
    return 2;
  }if(x>0&&y<0){
    return 4;
  }
};
console.log(quadrant([1,2,1]));
// kitoks uzrasymas 


/// padaryt rodykline kad atrodytu 56^7
const derive=(coefficient,exponent)=>`${coefficient*exponent}x^${exponent-1}`

console.log(derive(7,8));
/// paskaiciuoti vidurki pazymiu. 
function getAverage(marks){
  let sum= marks.reduce((total,n)=>total+n,0);
  let ilgis=marks.length;
  let ats=sum/ilgis;
  return  Math.floor(ats);
  
};
console.log(getAverage([2,2,2,2]));

// basic pakeist pagal reiksme veiksma;
function basicO(operation, value1, value2){
  if(operation==='+'){
    return value1+value2;
  }if(operation==='-'){
    return value1-value2;
  } if(operation==='*'){
    return value1*value2;
  }if(operation==='/'){
    return value1/value2;
    }
};
console.log(basicO('+', 4, 7));
console.log(basicO('-', 15, 18));
console.log(basicO('*', 5, 5));
console.log(basicO('/', 49, 7));
// paskaiciuoti butelius :D
function dutyFree(normPrice, discount, hol){
  return Math.floor(  hol/(normPrice/(100/discount)));
  };
  console.log(dutyFree(12,50,1000));
/// su ifais ir sakiniais
  function cookie(x){
    if(typeof x==='string'){
      return `Who ate the last cookie? It was Zach!`
    } if(typeof x==='number'){
    return "Who ate the last cookie? It was Monica!";
    } if(typeof x!=='string'||typeof x!=='number'){
      return "Who ate the last cookie? It was the dog!";
    }
  };
  console.log(cookie(26));
  console.log(cookie(true));

  // be zodzio false, duok ats false; 

  function ifChuckSaysSo(type){
    return Number.isInteger(type);
  
  };
  console.log(ifChuckSaysSo(NaN))

  console.clear();
  
  export function suskaiciuok(a,b,zenklas){
    if(zenklas==='+'){
        return `Rezultatas sudedant: ${a}+${b}=${a+b}`;
    }if( zenklas==='-'){
        return `Rezultatas atemant: ${a}-${b}=${a-b}`;
    }if(zenklas==='*'){
        return `Rezultatas dauginant: ${a}*${b}=${a*b}`;
    }if(zenklas==='/'){
        return `Rezultatas daulinant: ${a}/${b}=${a/b}`;
    }
    };
    console.log(suskaiciuok(1,10,'+'));


    const jubiliejai=[
      {age:1, dovana:'Vienaragis'},
      {age:5, dovana:'Pilis'},
      {age:10, dovana:'dviratis'},
      {age:15, dovana:'Motociklas'},

  ];
  function dovanai(metai){
  
  for(const {age,dovana}of jubiliejai){ 
      if(metai===age){
     return `Gimtadienio  dovana ${age} proga, yra ${dovana}`
      }else {
      }
  }
  return `Tokiems metams dovana nenumatyta`
  
  };

  function mystery() {
    var results =
      {sanity: 'Hello'};
    return results
  }
  console.log(mystery())
// isvardint bezdziones 
  function monkeyCount(n) {
    let monkeys=[];
      for(let i=1;i<=n;i++){
        monkeys.push(i);
      }
      return monkeys;
    }
    console.log(monkeyCount(5));

    function calculateTip(amount, rating) {
  let ratingMazintas=rating.toLowerCase();
  
  if(ratingMazintas==='terible'){
    return Math.round((amount*0)-amount);
  }if(ratingMazintas==='poor'){
    return Math.round((amount*1.05)-amount);
  }if(ratingMazintas==='good'){
    return Math.round((amount*1.1)-amount)
  }if(ratingMazintas==='great'){
    return Math.round((amount*1.15)-amount);
  }if(ratingMazintas==='excellent'){
    return Math.round((amount*1.2)-amount)
  }

};
console.log(calculateTip(20,'Excellent'));

function reverseS(n){
  let nauja=[];
  for(let i=n;i>0;i--){
    nauja.push(i)
  }
  return nauja;
};
console.log(reverseS(5));

/*
Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers, so, for example:*/
function multiply(number){
  let ats=Math.abs(number).toString().length;

  return number*(5**ats);
};
console.log(multiply(10));
console.log(multiply(-2));

function toCamelCase(str){
  let naujas=str.replaceAll('_',' ').replaceAll('-',' ').split(' ');
  let zodis='';
  console.log(naujas);
  for(const zodziai of naujas){
   let a=  zodziai[0].toUpperCase();
   let b= zodziai.slice(1).toLowerCase();
  
  }
  
  return 

};
console.log(toCamelCase("the_stealth_warrior"));

//// sudeti suma visu x rezultatu. 
function points(games) {
let suma=0;
  for(const kombinacijos of games){
  const skaicius=kombinacijos.split(':'); // isskiriam skaicius per : gaunasi 1 ir 0 pvz 
  suma+=parseFloat(skaicius[0]);/// sudedam skaicius is pirmos pozicijos ir paverciam juos Number tipu. 
  } 
  return suma;
}
console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]));
//// susumuot array skaicius. 
function sum (numbers) {

  return numbers.reduce((total,n)=>total+n,0);
}
console.log(sum([1, 5.2, 4, 0, -1]));

/// kuriam metu ketvirciui priklauso menuo S
 const quarterOf = (month) => {
  if(month>=1&&month<4){
    return 1;
  }if(month>=4&&month<7){
    return 2;
  }if(month>=7&&month<=9){
    return 3;
  } else{
    
  }
  return 4;
}
console.log(quarterOf(11));
console.log(quarterOf(1));
console.log(quarterOf(3));

function firstNonConsecutive(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1] + 1) {
      return arr[i];
    }
  }
  return null;
}

console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]));
/// patikrint kuri reiksme didziausia ir grazinti .
function expressionMatter(a, b, c) {
  
  let a1=a*(b+c)

  let b1=a*b*c

  let c1=a+b*c


  let d1=(a+b)*c
  let e1 = a + b + c;

  return Math.max(a1, b1, c1, d1,e1);
}
console.log(expressionMatter(2,1,2));
console.log(expressionMatter(1,1,1));
console.log(expressionMatter(1,6,1));
// apsukst apsukta 
function reverseWord(str) {
let a=str.split('').reverse().join('').split(' ').reverse().join(' ')

return a;
}
console.log(reverseWord('The quick brown fox jumps over the lazy dog.'));

function myFirstKata(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
     return false;
  }
   return  a % b + b % a;
  };

console.log(myFirstKata(3,5));

function soluti(n){
  let abc= Math.trunc(n)
  console.log(abc)
  let abs=n-abc
  let fix=abs.toFixed(1);
  let num=parseFloat(fix);
  
  if(num>=0.1&&num<=0.2){
    return Math.floor(n);
  }
  if(num>=0.3&&num<=0.7){
    return abc+0.5;
  }if(num>=0.8)
    return Math.ceil(n);
  
};
console.log(soluti(4.3));

function spEng(sentence){
  let pataisyta=sentence.toLowerCase(); // mazinta 
  if(pataisyta==="english"){
    return true;
  }else{
  }
    return false;
  }
  console.log(spEng('english'));
  console.log(spEng("egnlish"));


  function validateCode (code) {
    let a=code.toFixed().split('');
    let b=parseFloat( a[0]);
    if(b===1||b===2||b===3){
      return true;
    }

     return false;
    }
    console.log(validateCode(123));
    console.log(validateCode(423));

    function quotable(name, quote){
      return `${name} said: "${quote}"`;
    }
    console.log(quotable('Grae', 'Practice makes perfect'));


    function defineSuit(card) {
      let b=card.slice(-1);
      if(b==='♣'){
        return 'clubs'
      }if(b==='♦'){
        return 'diamonds'
      }if(b==='♥'){
        return 'hearts'
      }if(b==='♠'){
        return 'spades'
      }
    };
    console.log(defineSuit('10♣'))

    function friend(friends){
      let zodziai=[];
      for (const vardai of friends){
        if(vardai.length===4){
          zodziai.push(vardai);
        }
      } 
      return zodziai;
    }
    console.log(friend(["Ryan", "Kieran", "Mark"]));

    function removeSmallest(numbers) {
      const naujaKopija=[...numbers]; 

      let min=Math.min(...naujaKopija);
      let ind=naujaKopija.indexOf(min);
      naujaKopija.splice(ind,1); /// iskerpa vienetuka tokiu budu. 
  
        return naujaKopija /// cia grazina originalo kopija be 1. 
       }; 
       console.log(removeSmallest([5, 3, 2, 1, 4]));

       //arba su for of. 

function iesk(skaiciai){
  let nauja=[];
  let indeksas=Math.min(...skaiciai);
  for(const skaicius of skaiciai){
    if (skaicius !==indeksas){
      nauja.push(skaicius);
    }
  }
  return nauja;
}
console.log(iesk([5, 3, 2, 1, 4]));

function sumTwoSmallestNumbers(numbers) {  
  let copija=[...numbers]; // reikia pasidaryti kopija, kad paskui iskirpti splicu minimuma 

  let a=Math.min(...copija); // is kopijos pasiimam minimuma 
  console.log(a,'--------')
  let index=copija.indexOf(a);// minimumo pozicija 

  copija.splice(index,1); // iskerpam minimuma lieka nauja eilute be minimumo 
  console.log(copija)
  let b=Math.min(...copija);// vel pasidarom minimumo matavima. 
  let sum=a+b
  return sum;
};
console.log(sumTwoSmallestNumbers([5,8,12,19,22]));


function busStops(numbers){
let keleiviu=0;

  for(const numeriai of numbers ){
  const ilipo=numeriai[0];
  const islipo=numeriai[1];
  keleiviu+=ilipo-islipo

  }
  return keleiviu;
  };
console.log(busStops([[10,0],[3,5],[5,8]]));


function isAnagram(test, original) {
 
  const normalize = (str) => str.toLowerCase().split('').sort().join('');/// pagal sorta surikiuoja visas raides vienodai del to galima palyginti. 
  console.log(normalize);
  return normalize(test) === normalize(original);
}
console.log(isAnagram('foefet','toffee'));


function sumArray(array) {
  if(array===null||array.length===0||array.length===1||array.length===2){
    return 0;
  } const kopija=[...array];
    let a=Math.min (...kopija);
    let aIndex=kopija.indexOf(a)
    let b=Math.max (...kopija);
    let bIndex=kopija.indexOf(b)
    kopija.splice(aIndex,1)
    kopija.splice(bIndex,1);
  
  return kopija.reduce((total,n)=>total+n,0);
  }
 
  console.log(sumArray([ -6, 20, -1, 10, -12 ]));




  function multiTable(number) {
   let skaicius='';
    for (let i=1;i<=10;i++){
      skaicius+=`${i}*${number}=${i*number}\n`;
    }
    return skaicius;
  }
  console.log(multiTable(6));
/// nupjauti pirmas tris reiksmes 

function take(arr, n) {

  return arr.splice(0,n) 
}
console.log(take([0, 1, 2, 3, 5, 8, 13], 3));




function hello(name) {
  if(!name || name.length === 0) {
    return 'Hello, World!';
  }
  let pirma = name.slice(0,1).toUpperCase() + name.slice(1).toLowerCase();
  return `Hello, ${pirma}!`;
};
console.log(hello('johN'));  


function getMiddle(s) {
  if (s.length <= 2) { /// sukranta variantai kur 0 / 1 arba 2 raides. 
    return s;
  }
  const middle = Math.floor(s.length / 2);// darom iki sveiko skaiciaus kad galetum slice priimti i indexus. 
  if (s.length % 2 === 0) {
    return s.slice(middle - 1, middle + 1);
  } else {
    return s[middle];
  }
}

console.log(getMiddle('test'));    // "es"
console.log(getMiddle('testing')); // "t"
console.log(getMiddle('middle'));  // "dd"
console.log(getMiddle("A"));    


function reverseLetter(str) {
  
  return str.split('').reverse().join('')
  
}
console.log(reverseLetter('krishan'))

function getSize(width, height, depth){
let tur=width*height*depth;
let plotas=((height*width)*2)+((height*depth)*2)+((width*depth)*2);

return [plotas,tur]
};
console.log(getSize(4, 2, 6));
console.log(getSize(10, 10,10));

function factorial(n){
  let derinukas=[];
  for(let i=n;i>=1;i--){
    derinukas.push(i)
  }
  
  return derinukas.reduce((total,n)=>total*n,1);
}
console.log(factorial(1));

function stringClean(s){
  let keista=s.split('')
  let nauja=[];
  for(const skaiciai of keista){
    if(skaiciai!=='1'&&skaiciai!=='2'&&skaiciai!=='0'&&skaiciai!=='3'&&skaiciai!=='4'&&skaiciai!=='5'&&skaiciai!=='6'&&skaiciai!=='7'&&skaiciai!=='8'&&skaiciai!=='9'){
      nauja.push(skaiciai);

    }
  }

  return nauja.join('');
}
console.log(stringClean('E3at m2e2!!'));
/// su min ir max suzinoti atstuma ir sudet taskus 
function getSum(a, b){
  let sum=0;
  let aMin=Math.min(a,b);
  let bMax=Math.max(a,b);
for(let i=aMin;i<=bMax;i++){
  sum+=i;
}
return sum; 

}
console.log(getSum(0,1)); // 1 
console.log(getSum(0,-2));// -3

function animal(obj){

    
  
  return `This ${obj.color} ${obj.name} has ${obj.legs} legs`
}
console.log(animal({name: "dog", legs: 4, color: "white"}))

function mango(quantity, price){
  if(quantity<=2){
    return quantity * price; 
  }
  if(quantity%3===0){
    return (quantity- (quantity/3))*price;
  } else{
    let apvalinta=Math.floor(quantity/3);
    let ats=(quantity-apvalinta)*price;
    return ats;

  }

};
console.log(mango(7,5))

function angle(n) {
  return (n-2)*180
}
console.log(angle(3));

function cockroachSpeed(s) {
  return Math.round(s*27.7777)
}
console.log(cockroachSpeed(1.09));

function humanYearsCatYearsDogYears(humanYears) {
  if(humanYears===1){
    return [humanYears,15,15];
  } if(humanYears===2){
    return [humanYears,24,24];
  }
    

  return [humanYears,(24+((humanYears-2)*4)),(24+((humanYears -2)*5))];
};
console.log(humanYearsCatYearsDogYears(10));





function stray(numbers) {
  if (numbers[0] !== numbers[1] && numbers[0] !== numbers[2]) { // patikrina ar 1 nelygus 2 arba pirmas nelygus 3 
    return numbers[0];// jeigu 1 nelygus likusiems grazinam pirma kaip ats. 
  }
  
  for (let i = 1; i < numbers.length; i++) {/// ciklas jeigu isvardinti skaiciai nelygus 1 variantui grazinam skaiciu [i]
    if (numbers[i] !== numbers[0]) {// imama cikla nuo 2 nario nes pirma jau patikrinome 
      return numbers[i];
    }
  }
  return numbers[0];
};

console.log(stray([1,1,2]));  
console.log(stray([1,2,1]));   
console.log(stray([17, 17, 3, 17, 17, 17, 17]));  

function cubeChecker(volume, side){
  if(volume<=0){
    return false; 
  }
  if(Math.cbrt(volume)===side){
    return true;
  }else{
    
  }
  return false; 
};

console.log(cubeChecker(8,3));
console.log(cubeChecker(8,2));


  function largestPairSum (numbers) {
    let kopija=[...numbers] // reikalinga kad isimti skaicius didziausius.
    let max1=Math.max(...kopija)
    let index=kopija.indexOf(max1)
    kopija.splice(index,1);// palieka kopija be didziausio skaiciaus kad vel galetume naudoti math max funkcija. 
    console.log(kopija);
 
    let max2=Math.max(...kopija);
    
    return max1+max2;
  }
  console.log(largestPairSum([10,14,2,23,19]));

  /// su sortu variantas

  function largestPairSu(numbers) {
    var [a, b] = numbers.sort((a, b) => a - b)
    return `${a} ir ${b}`
  }
  console.log(largestPairSu([10,14,2,23,19]));

  function sumOfMinimums(arr) {
let sum=0;
for (const deriniai of arr){
  const min=Math.min(...deriniai)
    sum+=min;
  }
  return sum;
}
  console.log(sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]));
/// pakeisti is binari i normale reiksme 
  function binaryArrayToNumber ( arr){
    let skaiciai='';
for(let i=0;i<arr.length;i++){
  skaiciai+=arr[i]
}
    return parseInt(skaiciai,2);
  };
  console.log(binaryArrayToNumber([0,0,0,1]))
  
  function mergeArrays(arr1, arr2) {
    let c=arr1.concat(arr2);
    
      
      return 0
    };
    console.log(mergeArrays([1,2,3,4],[7,6,5,8]));
    console.log(mergeArrays([1,3,5,7,9], [10,8,6,4,2]));
    console.log(mergeArrays([1,3,5,7,9,11,12], [1,2,3,4,5,10,12]));

/// kai reikia isfiltruoti is array daug reiksmiu vienodu tik unikales. ir surikiuoti nuo maziausios i didziausoia 
    function mergeArray(arr1, arr2) {
      let c=arr1.concat(arr2);/// concar sujungimas 
        let  b=c.sort((a,b)=>a-b);/// rikiavimas pagal eiliskuma nuo maziausio 
        return c.filter((reiksme,indexas)=>b.indexOf(reiksme)===indexas);// filtravimas 
      };
      console.log(mergeArray([1,2,3,4],[7,6,5,8]));
      console.log(mergeArray([1,3,5,7,9], [10,8,6,4,2]));
      console.log(mergeArray([1,3,5,7,9,11,12], [1,2,3,4,5,10,12]));


      function countSheep(num){
        if(num===0){
          return "";
        }
        let sum='';
      for(let i=1;i<=num;i++){
        sum+=i+' '+'sheep...'
      }
      return sum;
    }
        console.log(countSheep(0));
        console.log(countSheep(1));
        console.log(countSheep(2));
        console.log(countSheep(3));
/// skaiciu isdeliojimas su kelimu laipsniu 
        function powersOfTwo(n) {
          let num = [];
          for (let i = 0; i <= n; i++) {
              num.push(Math.pow(2, i)); 
          }
          return num;
      }
      
      console.log(powersOfTwo(0)); 
      console.log(powersOfTwo(4)); 
/// kai reikia is array paimti ir surasti viena nr kuris issikiria is kitu 
      function findUniq(arr) {
        let naujas=arr[0]
        let antras=arr[1];
        if(arr[0]!==arr[1]&&arr[0]!==arr[2]){
          return arr[0];
        }
    
        for(let i=0;i<arr.length;i++){
          if(naujas===antras){
          }
          if(arr[i]!==arr[0]){
            naujas=arr[i]
          }
        }
        return naujas;
      }
      console.log(findUniq([1,0,0]));
      console.log(findUniq([0,1,0]));
      console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]));
      console.log(findUniq([ 3, 10, 3, 3, 3 ]));
    
      
      function sayHell( name, city, state ) {
        let pagerintas=name.join(' ')

        console.log(pagerintas,'-------');

        return `Hello, ${pagerintas}! Welcome to ${city}, ${state}!`
      };
      
console.log(sayHell(['Franklin','Delano','Roosevelt'], 'Chicago', 'Illinois'));

function sumOfDifferences(arr) {
  if(arr.length===0||arr===null){
    return 0;
  }
  let a=arr.sort((a,b)=>b-a)// surikiavom nuo didziausio iki mazesnio 
  let suma=0;
  for (let i = 0; i < a.length - 1; i++) {
    suma += a[i] - a[i + 1];
  }
  
  return suma;
  }
console.log(sumOfDifferences([1,2,10]));// reikai gauti 9
console.log(sumOfDifferences([-3, -2, -1]));

function factoria(n){
  if(n<0||n>12){
    return 'RangeError'
  }
  let eile=[];
  for(let i=n;i>=1;i--){
    eile.push(i)
  }
  return eile.reduce((total,n)=>total*n,1)
  
    // Calculate the factorial here
  }
  console.log(factoria(13))
  console.log(factoria(2))
  

  function nearestSq(n){
    let skaicius=Math.round( Math.sqrt(n))
    return skaicius*skaicius
}
console.log(nearestSq(10));
console.log(nearestSq(9999));
//// pakeisti paprastos reiksmes i binary reiksme. 
function toBinary(n){
  return parseInt(n.toString(2));
}
console.log(toBinary(5));

function arrayMadnes(a, b) {
  return (a.reduce((total,n)=>total+n**2,0))>(b.reduce((total,n)=>total+n**3,0)) ? true:false
};


console.log(arrayMadnes([1,2,3],[0,1,2]))
console.log(arrayMadnes([5,3,2,4,1],[15]))
console.log(arrayMadnes([2,5,3,4,1],[3,3,3,3,3]))
console.log(arrayMadnes([1,3,5,2,4],[2,2,2,2,2,2,2,1]))
console.log(arrayMadnes([1,2,3,4,5],[2,2,2,2,2,2,1,1,1]))
console.log(arrayMadnes);([2,4,6,8,10,12,14],[1,3,5,7,9,11,13])



 function isIsogra(word){
  word = word.toLowerCase().split("").sort();
  for (var i=0;i<word.length-1;i++){
    if (word[i]===word[i+1]) return false;
    }
  return true;
}

console.log(isIsogra('Dermatoglyphics'))
 console.log(isIsogra('moOse'));
            

 function isIsogram(word){
  word=word.toLowerCase().split('').sort();
     for( let i=0; i<word.length-1;i++){
       if(word[i]===word[i+1]) {
        return false;
       }
      }
return true;

  }; 
  console.log(isIsogram('Dermatoglyphics'))
   console.log(isIsogram('moOse'));
   
   function reverse(string){
    return string.split(' ').reverse().join(' ')
  }
  console.log(reverse('I am an expert at this'))

  function flattenAndSort(array) {
   let a=[].concat(...array).sort((a,b)=>a-b);/// [] pries concat reiskia kad daro visiskai naujaeilute. kurioje atsiranda destrukturizuotas array. 

    return a;
  }
  console.log(flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]]));



/// is 4tadalio apskritimo ilgio, surasti kvadrato plota ji sumazinti iki decimal reiksmiu. 

  function squareArea(A){
    let ats=(Math.pow(A*2,2)/(Math.pow(Math.PI,2))).toFixed(2)
    let b=parseFloat(ats);
  
    return b;
  }

  console.log(squareArea(2))

      function array(string) {
        const arr = string.split(',');
        if (arr.length <= 2 || string === '') {
          return null;
        }
        return arr.slice(1, -1).join(' ');
      }
      console.log(array('A1,B2'));
      console.log(array('1,2,3'));

      function  calculateAge(a,b) {
        if(b-a===1){
          return `You are 1 year old.`
        } if(b-a===-1){
          return `You will be born in 1 year.`
        }
        if(a===b){
          return 'You were born this very year!';
        }if(a<b){
          return  `You are ${Math.abs(b-a)} years old.`
        }if(a>b){
          return `You will be born in ${Math.abs(a-b)} years.`
        }

      }
      console.log(calculateAge(2012,2016));
      console.log(calculateAge(2000,2000));

      function twoDecimalPlaces(n) {
        let ats=n.toFixed(2)
       
        return parseFloat(ats);
      }
      console.log(twoDecimalPlaces(4.659725356));
      function getCha(c){
  
        const s2=String.fromCharCode(c);
        }
        console.log(getCha(55))

        function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
          return Math.floor((Math.sqrt(age1*age1+age2*age2+age3*age3+age4*age4+age5*age5+age6*age6+age7*age7+age8*age8))/2)
        }
        console.log(predictAge(65,60,75,55,60,63,64,45))


        function howManyLightsabersDoYouOwn(name) {
          if(name==='Zach'){
          return 18;
          } else{
          }
          return 0;
          
        }
        console.log( howManyLightsabersDoYouOwn())


        function noOdds( values ){
          return values.filter((skaiciai)=>skaiciai%2===0)
        }
        console.log(noOdds([0,1,2,3]));

        function reverseLette(str) {


  
          return str.split('').reverse().join('').replace(/[0-9]/g,'').replace(/[^\w\s]|_/g, '').replaceAll(' ','');
        }
        console.log(reverseLette('egkuxrcife\\hsyvkxormxoanhyglcrnlvdjioozr    goood'))

function strCount(str,letter){
  return str.split(letter).length-1;/// isskiria teksta hell ir o tada matuoja ilgi 2 gaunasi minus 1 iseina 1
} ;
console.log(strCount('Hello','o'));
/// kai reikia is masyvo paimti max ir min nari ir ju skirtuma 
function differenceInAge(ages){
  let x = ages.sort((a,b) => a - b)[0]// cia pirmas naris min 
  let y = ages.sort((a,b) => a - b)[ages.length - 1]// cia paskutinis narys eilutes max 
  return [x, y, y - x]
};

console.log(differenceInAge([82, 15, 6, 38, 35]));

function tripleTroubl(one, two, three){
  let ats='';
  
  for(let i=0;i<one.length;i++){
    ats+=one[i]+two[i]+three[i];
  }
  
  
  return ats;
 }
console.log(tripleTroubl("aaa","bbb","ccc"));

/// kai reikia sudeti tekstu 1 raides is triju tekstu. 
function tripleTroub(a, b, c){
  return a.split('').map((s,i)=>s+b[i]+c[i]).join('')
}
console.log(tripleTroub("aaa","bbb","ccc"));

function calculator(a,b,sign){
  if(typeof a!=='number'|| typeof b!=='number'){
    return 'unknown value'
  }
  if(sign==='-'){
    return a-b;
  } if(sign==='+'){
    return a+b;
  }if(sign==='*'){
    return a*b;
  }if(sign==='/'){
    return a/b;
  } else{
  
  }
  return 'unknown value'
}
console.log(calculator(1,'h','-'))

function alphabetWar(fight){

  if(fight==='w'||fight==='p'||fight==='b'||fight==='s'){
    return `Left side wins!`;
  }
  if (fight==='m'||fight==='q'||fight==='d'||fight==='z'){
    return `Right side wins!`;
  }

  let leftCount=0;
  let rightCount=0;
  
  for(let i=0;i<fight.length;i++){
    if(fight[i]==='w'){
      leftCount+=4;
    }if(fight[i]==='p'){
      leftCount+=3;
    }if(fight[i]==='b'){
      leftCount+=2;
    }if(fight[i]==='s'){
      leftCount+=1;
    } if(fight[i]==='m'){
      rightCount+=4;
    } if(fight[i]==='q'){
      rightCount+=3;
    }if(fight[i]==='d'){
      rightCount+=2;
    }if(fight[i]==='z'){
      rightCount+=1;
  }
  }
  if(leftCount>rightCount){
    return `Left side wins!`;
  }if(leftCount<rightCount){
    return `Right side wins!`
  }else {
    return  `Let's fight again!`
  }

  };

console.log(alphabetWar("zdqmwpbs"));



function disemvowe(str) {
  const balses='aeiouAEIOU'
let naujas='';
for(const raides of str){
  if(!balses.includes(raides)){
    naujas+=raides
  }
}
 return naujas;
}

console.log(disemvowe("This website is for losers LOL!"));

class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length*width*height
  }
}
console.log(Kata.getVolumeOfCuboid(1,2,2));


function wordsToMarks(string){
  const skaiciai = {
    a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10,
    k: 11, l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, r: 18,
    s: 19, t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26
  };
  let sum=0;
for(const raides of string){
  
    sum+=skaiciai[raides]
  }
  return sum;
}

console.log(wordsToMarks('attitude'));
/// kai reikia paskaiciuoti per kiek laiko nugaruos gesintuvas iki nenaudojamos ribos. 
function evaporator(content, evap_per_day, threshold) { 
  let days = 0;
  const thresholdAmount = content * (threshold / 100);
  let currentAmount = content;
  
  while (currentAmount > thresholdAmount) { // kiek dienu atliks cikl
    currentAmount -= currentAmount * (evap_per_day / 100);/// esamasminus per cikla  esamas padauginta is nugaravimo. 
    days++;
  }
  
  return days;
}

console.log(evaporator(10, 10, 10)); // Output: 22

function gooseFilter (birds) {
  const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  let nauja=[''];
for(const zodziai of birds){
  if(!geese.includes(zodziai)){
    nauja.push(zodziai)
  }

}
return nauja.splice(1)
};

console.log(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]));



//"Mallard", "Hook Bill", "Crested", "Blue Swedish"]);

[ 'Mallard', 'Hook Bill', 'Crested', 'Blue Swedish' ]

function gooseFilte (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter(b => !geese.includes(b));
};
console.log(gooseFilte(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]));


function apple(x){
  const b=parseFloat(x);
  if(b**2>1000){
    return `It's hotter than the sun!!`
  } else{
    
  }
return 'Help yourself to a honeycomb Yorkie for the glovebox.'
}
console.log(apple('50'));

function evenNumbers(array, number) {
  let ats=array.filter((n)=>n%2===0).slice(-number)
  return ats
}
console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));

function vowelIndices(word){
  const pataisytas=word.toLowerCase();
  const balses='aeiouy'
  let result=[];
  
  for(let i=0;i<pataisytas.length;i++){
    if(balses.includes(pataisytas[i])){
      result.push(i+1)
    }
  }
  return result
}
console.log(vowelIndices('apple'));

function usdcny(usd) {
  let ats=(usd*6.75.toFixed(2))
  let atstrunc= ats-Math.trunc(ats)
  if(atstrunc===0 ){
    return ats+'.00'+' Chinese Yuan'
  } if(atstrunc===0.1||atstrunc===0.2||atstrunc===0.3||atstrunc===0.4||atstrunc===0.5||atstrunc===0.6||atstrunc===0.7||atstrunc===0.8||atstrunc===0.9){
    return ats+'0'+' Chinese Yuan'
  }
  else{
    
  }

  return `${ats} Chinese Yuan`
}
console.log(usdcny(8861));

function addBinary(a,b) {
  
  const sum=a+b
 return sum.toString(2)
}
console.log(addBinary(1,2));
//// dar reikia padirbet 
function longestConsec(strarr, k) {
  if(strarr.length===0||strarr.length < k || k <=0 ){
    return ""; 

  }
  if(strarr.length===3&&strarr[0].length<strarr[1].length&&strarr[1].length> strarr[2].length){
   return strarr.slice(0,k).join('')
 }else{
 
 }
   return strarr.sort((a,b)=>b.length-a.length).slice(0,k).join('')
 };
 console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2));
 console.log(longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"],2));
 console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1));
 console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3));

 function helloWorld(info){
  const str=info;
  return str;
};

console.log(helloWorld('Hello World!'));
console.log("Hello World!");


/// panaikinti paskutini elementa !


function remove(string){

  if(string[string.length-1]==='!'){
    return string.slice(0,-1)

  }
  return string;

}

console.log(remove("Hi!!!")); // Grąžins "Hi!!"
console.log(remove("Hi!"));   // Grąžins "Hi"
console.log(remove("Hi"));    // Grąžins "Hi"


function digits(n) {
 let ats=[];
  for (const skaicius of n){
    const pirmas=skaicius[0]
    const string=pirmas.toFixed()
    const ilgis=string.length;
    ats.push(ilgis);

  }
    
    return ats;
  
  }
  console.log(digits([
      [0, 1],[9, 1],[66, 2],[12345, 5],[128685, 6],[9876543210, 10],[9007199254740991, 16],
    ]));
  

    function sumArra(array) {
      if(array===undefined||array===null||array.length===0||array.length===1||array.length===2){
        return 0;
      } 
      const c= array.sort((a,b)=>a-b).slice(1,-1)
    
      
      return c.reduce((a,b)=>a+b,0);
      }
     
      console.log(sumArra([ 6,2,1,8,10]));
      console.log(sumArra([-6, 20, -1, 10, -12]));


      function isUpperCase(sakinys){
        if(sakinys.length===0){
          return `${sakinys} is upper case`
        }
     const caps='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
            let naujas=[];
            const testui=sakinys.replaceAll(' ','');

              for(const raides of sakinys ){
                if(caps.includes(raides)){
                  naujas.push(raides)
                }
              }

              return naujas.length===testui.length? `${sakinys} is upper case`:`${sakinys} is not upper case`
            }
            console.log(isUpperCase(''));



function cockroachSpee(s) {
    let konst=1000/36;
      return Math.floor((s*konst));
    }
console.log(cockroachSpee(0.6704108509808064));// turi buti 



function twoSort(s) {
  const a=s.sort()
  console.log(a);
  return a[0].split('').join('***')

}
console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]));
console.log(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]));



function descendingOrder(n){


return parseFloat(n.toFixed().split('').sort((a,b)=>b-a).join(''));
}
console.log(descendingOrder(1021));

function getDivisorsCnt(n){
  let count=0;
  let nauja=[];
  for(let i=1;i<=n;i++){
    nauja.push(i)
  }
 for(let i=0;i<=nauja.length;i++){
  if(n%i===0){
    count++
  }
 }
 return count;
    // todo
}
console.log(getDivisorsCnt(54));
///// kuris nenuluzta ;

function getDivisorsCn(n) {
  let count = 0;
  for (let i = 1; i <= Math.sqrt(n); i++) {
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

function dnaStrand(dna){
  let naujas='';
    for(const raides of dna){
      if(raides==='A'){
        naujas+='T'
      }if(raides==='C'){
        naujas+='G'
      }if(raides==='T'){
        naujas+='A'
      }if(raides==='G'){
        naujas+='C'
      }
    }
    return naujas;
  
  
    }
  console.log(dnaStrand('AAA'))
  console.log(dnaStrand('ATTGC'))


  function century(year) {
    let maziems=year.toFixed().length
    let antra=parseFloat(year.toFixed().split('').slice(0,1).join(''));
    const pirma=parseFloat(year.toFixed().split('').slice(0,2).join(''));
    const fix=parseFloat(year.toFixed().split('').slice(-2).join('')); 

    if(maziems===2||maziems===1){
      return 1}
      if(fix>0){
        return pirma+1
        }if(fix===0){
        return pirma
        }
    if(maziems===3&&fix>0||maziems===3&&fix>0){

        return antra+1
      }if(fix===0){
        return antra;
      }
    }
  console.log(century(101));

  function capitals (word) {
    let sarasas=[];
     for(let i=0;i<word.length;i++){
       if(word[i]>='A'&& word[i]<='Z'){
         sarasas.push(i)
       }
     }
     return sarasas;
     }
console.log(capitals('CodEWaRs'));

function busStop(number){
  let skaicius=[];
 for(const skaiciai of number){
  skaicius.push(skaiciai[0]-skaiciai[1])
 }
    return skaicius.reduce((a,b)=>a+b,0)
    };
  console.log(busStop([[10,0],[3,5],[5,8]]));
  console.log(busStop([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]));
  console.log(busStop([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]));

  function findAverag(nums) {
    return nums.reduce((total,b)=>total+b,0)/nums.length
  }
  console.log(findAverag([1,3,5,7]));


  function distinct(a) {
    
    return a.sort().filter((reiksme,i)=>a.indexOf(reiksme)===i)
  }
  console.log(distinct([1,2,1,1,3,2]));


  function sumCubes(n){
    let naujas=[];
    for(let i=1;i<=n;i++){
      naujas.push(i)
    }
   return naujas.reduce((total,n)=>total+n**3,0)
  }
  console.log(sumCubes(10));


  var gre = function(name) {
    let naujas=name.toLowerCase().slice(1) // galas
    let sudurtinis=name.slice(0,1).toUpperCase();
    let geras=sudurtinis+naujas;
    return `Hello ${geras}!`
  
  };
  console.log(gre('riley'))

  function solve(s) {
    const isimtibalses=s.replaceAll('a',' ').replaceAll('e',' ').replaceAll('i',' ').replaceAll('o',' ').replaceAll('u',' ').split(' ')
    console.log(isimtibalses)

    const skaiciai = {
    a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10,
    k: 11, l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, r: 18,
    s: 19, t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26
  };
  
  let sums=[];
  for(const raides of isimtibalses){
    let sum=0;
    for(const raideles of raides){
      sum+=skaiciai[raideles]
    }
    sums.push(sum)
  }
  return Math.max(...sums)
  }
console.log(solve('chruschtschov'))

function findLongest(array){
let nauja=array.map((n)=>n.toFixed())

  return  parseInt(nauja.sort((a,b)=>a.length-b.length).slice(-1).join(''))
}
console.log(findLongest([1,10,100]));

function findLonges(array) {
  return array.reduce((a, b) => 
    Math.abs(a).toString().length >= Math.abs(b).toString().length ? a : b
  );
}
  console.log(findLonges([1,10,100]));

  function remov(string) {  
    if(string.at(-1)==='!'){
      return string.slice(0,-1)}
    else{
      return string;
    } 
  }
  console.log(remov("Hi! Hi!"));

  function solu(nums){
    if(nums.length===0|| nums===null){
      return []
    }
    return nums.sort((a,b)=>a-b);
  
  }
  console.log(solu([1,2,3,10,5]))
  function rem(string) {  
    if(string.endsWith('!')){
      return string.slice(0,-1);
    }
   return string;
  }
  console.log(rem('Hi!!!'));
  
  function alphabetPosition(text) {
    const skaiciai = {
        a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10,
        k: 11, l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, r: 18,
        s: 19, t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26
      };
      const mazintas=text.toLowerCase()
      let naujas=[];
      for(const raides of mazintas){
      
        naujas.push(skaiciai[raides])
    }
  return naujas.join(' ').replaceAll('  ',' ').replaceAll('  ',' ')
  }
    console.log(alphabetPosition("The sunset sets at twelve o' clock."));

    function quote(fighter) {
      let name=fighter.toLowerCase();
      if(name==='george saint pierre'){
        return "I am not impressed by your performance."
      }if(name==='conor mcgregor'){
        return "I'd like to take this chance to apologize.. To absolutely NOBODY!"
      }
    };
    
    console.log(quote('george saint pierre'))

    function sumEvenNumbers(input) {
      return input.filter(n=>n%2===0).reduce((total,n)=>total+n,0);
    }
    console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

    function createArray(number) {
      const newArray = [];
      for (let counter = 1; counter <= number;counter++) {
          newArray.push(counter);
      }
      return newArray;
  }
  console.log(createArray(2));

  function sumMul(n,m){
    if(m<0||n===0){
      return 'INVALID'
    }
  let sum=0;
    for(let i=n;i<m;i++){
      if(i%n===0){
        sum+=i
      }
    }
    return sum;
  }
  console.log(sumMul(2,9));

  function toNumberArray(stringarray){
    const naujas=stringarray.map(zodis=>parseFloat(zodis));
   
  return naujas
  }
  console.log(toNumberArray(["1.1","2.2","3.3"]));

  function bump(x){
    let count=0;
    for(const raides of x){
      if(raides==='n'){
        count++
      }
    }
    return count<=15 ? 'Woohoo':'Car Dead'
  
  }
  console.log(bump("__nn_nnnn__n_n___n____nn__nnn"));

  function solv(s){
    const didziosios='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let count=0;
    for(const raides of s){
      if(didziosios.includes(raides)){
        count++
      }
      }
      if(count<=s.length/2){
        return s.toLowerCase();
      }else{

      }

      return s.toUpperCase();
    };
  console.log(solv('LABADiena'))

  function hexToDec(hexString){
  
    return hexString.toString(2)
  }
  console.log(hexToDec('1'))
  console.log(hexToDec('16'))

  function sameCase(a, b){
    const didziosios='ABCDEFGHIJKLM N O P Q R S T U V W X Y Z'
    const mazosios='a b c d e f g h i j k l m n o p q r s t u v w x y z'
    
    if(didziosios.includes(a)&& didziosios.includes(b)){
      return 1
    }if(mazosios.includes(a)&& mazosios.includes(b)){
      return 1
    }if(didziosios.includes(a)&&mazosios.includes(b)){
      return 0
    } if(mazosios.includes(a)&&didziosios.includes(b)){
      return 0
    } else{
    }
    return -1
    } 
  
  console.log(sameCase('G',','))

  function billboard(name, price = 30){
    let skaicius=0;
    for(const raides of name){
      skaicius+=price
    }
  return skaicius;
  } 
  console.log(billboard("Jeong-Ho Aristotelis"));



function isVow(a){
  const balses={97:'a',101:'e',105:'i',111:'o',117:'u'};

  let naujas=[];
  for(const skaiciai of a){
    if(balses[skaiciai]){
      naujas.push(balses[skaiciai])
    } else{
      naujas.push(skaiciai);
    }

  }
  return naujas;
}
console.log(isVow([118,117,120,98,106,107,97,101,111,117]))


function isSortedAndHow(array) {
  
  let sortintaMaz=[...array].sort((a,b)=>a-b).toString()// nuo maziausios.
  let sortintaDid=[...array].sort((a,b)=>b-a).toString()// nuo didziausios
  let nekeista=array.toString()

  console.log(sortintaMaz)
  console.log(sortintaDid)
  console.log(nekeista)

  if(nekeista===sortintaMaz){
    return "yes, ascending"
  } if(nekeista===sortintaDid){
    return "yes, descending"
  } else{

  }

  return 'no'
}
console.log(isSortedAndHow([1,2])) // yes 
console.log(isSortedAndHow([15,7,3,-8]));// no, descending
console.log(isSortedAndHow([4,2,30]))

function gimme (triplet) {
  let nauja=parseFloat([...triplet].sort((a,b)=>a-b).slice(1,-1).toString())
  return triplet.indexOf(nauja)
}
console.log(gimme([5,10,14]));


function totalGoals(laLigaGoals,championsLeagueGoals,copaDelReyGoals){

return laLigaGoals+championsLeagueGoals+copaDelReyGoals
}
console.log(totalGoals(43,10,5))


function isUpperCas(sakinys){
  if(sakinys.length===0){
    return true;
  }
  const caps='ABCDEFGHIJKLMNOPQRSTUVWXYZ'

  let naujas='';

  for(const raides of sakinys){
    if(caps.includes(raides)){
      naujas+=raides
    }
  }

return  naujas===sakinys.split(' ').join('') ? true:false
     
 }
 console.log(isUpperCas('ACSKLDFJSgSKLDFJSKLDFJ'));

 function saleHotdogs(n){
  
  if(n<5){
    return n*100
  } else if(n>=5 && n<10){
    return n*95
  } if(n>=10){
   
  }
  return n*90
}
console.log(saleHotdogs(4));

function adjacentElementsProduct(array) {
  let naujas=[];
for(let i=0;i<array.length-1;i++){
  naujas.push(array[i]*array[i+1])
}
  return Math.max(...naujas)
}
console.log(adjacentElementsProduct([1, 5, 10, 9]));

//arba

function adjacentElementsProduc(array) {
  let naujas=[];
for(const skaiciai of array){
  naujas.push(skaiciai*(skaiciai+1))
}
  return Math.max(...naujas)
}
console.log(adjacentElementsProduc([1, 5, 10, 9]));


function capitalize(s){
  let pirmas='';
  let antras='';

  for(let i=0;i<s.length;i++){
    if(i%2===0){
      pirmas+=s[i].toUpperCase();
    }else{
      pirmas+=s[i]
    }
  }
for(let i=0;i<s.length;i++ ){
  if(i%2!==0){
    antras+=s[i].toUpperCase();
  } else{
    antras+=s[i]
  }
}

  return [pirmas,antras]
}
  
  console.log(capitalize('abcdef'))// ['AbCdEf', 'aBcDeF']

  function remainder(n, m){
    if(m===0||n===0||n<0||m<0){
      return NaN;
    } if(n<m){
      return m%n
    }else{
      
    }
  
    return n%m
    
  }
  console.log(remainder(-13,-13));

  function suk(duomenys){
    const raide='ek';

    let naujas=duomenys.split('').reverse().join('')
    let text='';

    for(const raides of duomenys){
      if(!raide.includes(raides)){
        text+=raides;
      }
    }


    return text.split(' ').map(w=>w.toUpperCase()+' '+w.length)
  }
  console.log(suk('Dukrele buvo kieme'));

  function addLen(...str) {
   let naujas=str.toString().replaceAll(' ',',').split(',')
   
    return naujas.map(w=>w+' '+w.length)
    }
        console.log(addLen('Apple','Ban'))
        console.log(addLen('you will win'))

//Patikrinkite, ar sąraše [1, -2, 3, -4] yra teigiamų skaičių. 

function teig(duomenys){
return duomenys.filter(w=>w>0).toString().replaceAll(',','').split('').map(w=>w+' '+typeof w)
}
console.log(teig([1, -2, 3, -4]));
  


//Patikrinkite, ar didziausias didesnis negu 10 

function as(duomenys){

  return Math.max(...duomenys)>10
}
console.log(as([2, 5, 12, 4]));

/* Pavyzdys: Patikrinkite, ar [2, 2, 2, 2, 2, 5, 6] turi daugiau nei 3 skaičiaus 2 
elementus.*/
function tu(duomenys){

  return duomenys.map(w=>w=2).length>3

}
console.log(tu([2, 2, 2, 2, 2, 5, 6]))
//Pavyzdys: Patikrinkite, ar sąraše [1, 2, 3, 4] yra skaičius 3.

 const jus =duomenys=>parseFloat( duomenys.filter(w=>w===3).toString())===3

 console.log(jus([1, 2, 3, 4]));



function calculateT(amount, rating) {
  if (!rating) return 'Rating not recognised';
  
  let ratingLower = rating.toLowerCase();
  
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

console.log(calculateT(20, 'Excellent'));  // Output: 4

function faktorial(n){
  let naujas=[];
  for(let i=1;i<=n;i++){
    naujas.push(i)
  }

  return naujas.reduce((total,n)=>total*n,1)
}
console.log(faktorial(3));


function validateHel(greetings) {
  

return ['hello','ciao','salut','hallo','hola','ahoj','czesc'].some(w=>greetings.toLowerCase().includes(w));
}
console.log(validateHel('ahoj'));
console.log(validateHel('tSchuSS hOw, saLUT! LA; WiE, wIE: QUe tRES, hoMBRE, hAStA? LA. Bien. HOW. yoU, HastA lA hOW wIe? qUe viStA! TRES TReS You HaStA DoINg aRE: YoU,'));



function lowercaseCount(str){
  const sarasas='abcdefghijklmnopqrstuvwxyz'
  let count=0;
  
  for(const raides of str){
    if(sarasas.includes(raides)){
      count++
    }
    
  }
    return count;

}
console.log(lowercaseCount('abc'));
/// arba su regex 

function lowercaseCoun(str){
  return (str.match(/[a-z]/g) || []).length
}
console.log(lowercaseCoun('abc'));


function minSum(arr) {
  let sortedArr = arr.sort((a, b) => a - b);/// susirikiuojam nuo maziausio iki diziausio. 
  let sum = 0;
  let left = 0; // deklaruojam kaire ir desine puses 
  let right = sortedArr.length - 1; /// desine puse 
  
  while (left < right) { // leidziam cikla kol kaire maziau uz desine 
    sum += sortedArr[left] * sortedArr[right];
    left++;/// zingsnis kad eina is prieko po 1 
    right--;/// zingsnis kad eina is galo po 1 
  }
  
  return sum;
}

console.log(minSum([5, 4, 2, 3]))


function rowWeights(array){
let pirmi=0;
let antri=0;


for(let i=0;i<array.length;i++){
  if(i%2===0){
    pirmi+=array[i];
    
  }else{
    antri+=array[i]
  }

}
return [pirmi,antri]

}
console.log(rowWeights([50,60,70,80]));

function rowWeight(array){
  let a= array.filter((x, i)=>i%2===0).reduce((total,n)=>total+n,0);///
  let b= array.filter((x, i)=>i%2!==0).reduce((total,n)=>total+n,0);/// filteryje galiam i deklaruot
    
    return [a,b]
  }
  console.log(rowWeight([50,60,70,80]));



  function removeTrailingExclamations(string) {
    return string.replace(/!+$/, '');
}

console.log(removeTrailingExclamations('!Hi!!!')); // "!Hi"
console.log(removeTrailingExclamations('Labas!!'));


function re(s){
  //coding and coding....
  while (s[s.length - 1] === '!') {
    s = s.slice(0, -1);
  }
  return s;
}
console.log(re('hi !!!'));


function r(s,n){
  
let naujas='';

  
}
console.log(r('Hi!!!',1));

function whoIsPaying(name){
  if(name.length>2){
    return [name,name.slice(0,2)]
  } else{ 
  }
  return [name];
}
console.log(whoIsPaying('Meee'))


function digi(n) {
  let ats = [];
  let geras=[...n]
  for (const skaicius of geras) {
    const pirmas = skaicius[0];
    const digitCount = Math.abs(pirmas).toString().length;
    ats.push([skaicius+', '+digitCount]);
  }
  return ats;
}

console.log(digi([[0], [9], [66], [12345], [128685], [9876543210], [9007199254740991]]));

function filterString(value) {
  return parseFloat(value.replace(/[a-zA-Z]/g,''));
}
console.log(filterString('123asdasd'));


function multiTab(number) {
  let skaicius='';
   for (let i=1;i<=10;i++){
     skaicius+=`${i}*${number}=${i*number}`;
     if(i<10) result +='\n';
   }
   return skaicius;
 }
 console.log(multiTab(6));





















