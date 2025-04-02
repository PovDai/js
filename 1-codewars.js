


function findNeedle(haystack) {
    for(let i=0;i<=haystack.length;i++){
      if(haystack[i]==='needle'){
        return `found the needle at position ${i}`
      }}};

  const z1=["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"];
  console.log(findNeedle(z1));

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
    function setAlarm(employed, vacation) {
        return employed && !vacation;
    };


console.clear();

function setAlarm(employed, vacation){
    if(employed===true&&vacation===true){
      return false;
    }if(employed===false&&vacation===true){
      return true;
    }if(employed!==false&&vacation!==true){
        return false;
    }if(employed!==true&&vacation!==true){
        return false;
    }
    };
    console.log(setAlarm(true,true));
    console.log(setAlarm(false,true));
    console.log(setAlarm(true,false));
    console.log(setAlarm(false,false));

    /*
    employed | vacation 
    true     | true     => false
    true     | false    => true
    false    | true     => false
    false    | false    => false*/
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

    for(i=0;i<str.length;i++){
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

  function greet (name, owner) {
    if(name===owner){
      return 'Hello boss'
    }if(name!==owner){
      return 'Hello guest'
    }
  };
  console.log(greet('Daniel','Daniel'));
  console.log(greet('Greg','Daniel'));

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

   function toCamelCase(str){
    let naujas='';

    for(let i=0;i<str.length;i++){
      if(str[i]!=='_'&&str[i]!=='-') {
         naujas+= str[i]
    
      }
    } return naujas;
  }
  console.log(toCamelCase("the_stealth_warrior"));
  console.log(toCamelCase("The_Stealth-Warrior"));
  






