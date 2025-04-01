/*1. Spausdinkite skaičius nuo 10 iki 1 atvirkštine tvarka naudodami for ciklą. 
3. Spausdinkite kiekvieną lyginį skaičių nuo 0 iki 20 naudodami for ciklą. 
4. Spausdinkite kiekvieną nelyginį skaičių nuo 0 iki 20 naudodami for ciklą. 
5. Išspausdinkite pirmuosius 10 skaičių kvadratų (1^2, 2^2, 3^2 ir t. t.). 
6. Išspausdinkite pirmuosius 10 skaičių kubų (1^3, 2^3, 3^3 ir t. t.). 
7. Atspausdinkite 7 daugybos lentelę (7 × 1, 7 × 2 ir t. t.). 
8. Atspausdinkite nuo 1 iki 5 žvaigždučių (*) seriją (pvz., *, **, *** ir t. t.). 
9. Atspausdinkite atvirkštinę eigą su žvaigždutėmis 5 eilutėse (pvz., *****, ****, *** ir t. t.). 
10. Spausdinti skaičius nuo 1 iki 50, kurie dalijasi iš 3. 
11. Spausdinti skaičius nuo 1 iki 50 imtinai, kurie dalijasi iš 5. 
12. Spausdinti skaičius nuo 1 iki 100, kurie dalijasi ir iš 3, ir iš 5. 
13. Sukurkite for ciklą, kuris penkis kartus išspausdintų "Hello, World!". 

Sunkesnės užduotys: 

1. Sukurkite for ciklą, kuris spausdina skaičius nuo 1 iki 100, tačiau kiekvieną skaičių, kuris 
dalijasi iš 4, reikia pakeisti žodžiu „Fizz“. 
2. Spausdinkite skaičius nuo 1 iki 100, bet skaičius, kurie dalijasi iš 3, pakeiskite "Fizz", 
skaičius, kurie dalijasi iš 5, - "Buzz", o skaičius, kurie dalijasi iš abiejų, - "FizzBuzz". 
3. Spausdinkite pirmuosius 10 skaičių Fibonačio sekoje. 
4. Spausdinkite skaičius nuo 1 iki 20 ir prie kiekvieno lyginio skaičiaus spausdinkite 
"Even", o prie kiekvieno nelyginio - "Odd". 
5. Spausdinti bet kurio pasirinkto skaičiaus daugybos lentelę. 
6. Sukurkite for ciklą, kuris spausdina skaičius nuo 1 iki 30, bet tik tuos, kurie dalijasi iš 2 
arba 3. 
7. Sukurkite for ciklą, kad patikrintumėte, ar skaičius yra pirminis, ir išspausdintumėte 
pranešimą. 
8. Spausdinkite pirmuosius 10 pirminių skaičių, naudodami for ciklą ir if sąlygas. 
9. Išspausdinkite visų lyginių skaičių nuo 1 iki 100 sumą. */

//1. Spausdinkite skaičius nuo 1 iki 10 naudodami for ciklą. 
for(let i=1;i<=10;i++){
    console.log(`Atsakymas`,i);
};

// 2. Spausdinkite skaičius nuo 10 iki 1 atvirkštine tvarka naudodami for ciklą.

for (let i=10;i>=1;i--){
    console.log(`Atsakymas yra`,i);
};
//3. Spausdinkite kiekvieną lyginį skaičių nuo 0 iki 20 naudodami for ciklą. 
for(let i=2;i<=20;i+=2){
    console.log(`Visi lyginiai skaiciai`,i);   
};
//4.Spausdinkite kiekvieną nelyginį skaičių nuo 0 iki 20 naudodami for ciklą. 
for(let i=1;i<=20;i+=2){
    console.log(`Visi nelyginiai ${i}`)
};
//5.Išspausdinkite pirmuosius 10 skaičių kvadratų (1^2, 2^2, 3^2 ir t. t.). 
for(let i=1;i<=10;i++){
    const kvadratas=i*i;
    console.log(`${i} skaiciaus kvadratas yra ${kvadratas} `);
};
//6. Išspausdinkite pirmuosius 10 skaičių kubų (1^3, 2^3, 3^3 ir t. t.). 
for(let i=1;i<=10;i++){
    const kubas=i**3;
    console.log(`${i} skaiciaus kubas yra ${kubas}`)
};
//7. Atspausdinkite 7 daugybos lentelę (7 × 1, 7 × 2 ir t. t.). 
const n=7;
for(let i=1;i<=10;i++){
 console.log(`${i} daugybos lentele ${n}*${i}=${n*i}`)
};
//8. Atspausdinkite nuo 1 iki 5 žvaigždučių (*) seriją (pvz., *, **, *** ir t. t.). 
for(let i=1;i<=5;i++){
    let plus='';
    for(let j=0;j<i;j++){
        plus+='*'}
        console.log(plus)
    };
// 9. Atspausdinkite atvirkštinę eigą su žvaigždutėmis 5 eilutėse (pvz., *****, ****, *** ir t. t.). 

for(let i=5;i>=1;i--){
    let plus='';
    for (let j=0;j<i;j++){
        plus+="*";// reikia eis *=*/ paskui ** *** **** *****
    }console.log(plus)
};
//10. Spausdinti skaičius nuo 1 iki 50, kurie dalijasi iš 3. 
for(let i=1;i<50;i++){
    if(i%3===0){
        console.log(`Skaiciai kurie dalijasi is 3 yra ${i}`)
    }
};
//11. Spausdinti skaičius nuo 1 iki 50 imtinai, kurie dalijasi iš 5. 
for (let i=1;i<=50;i++){
    if(i%5===0){
        console.log(`Skaiciai kurie dalijasi is 5 yra ${i}`) 
    }
};
//12. Spausdinti skaičius nuo 1 iki 100, kurie dalijasi ir iš 3, ir iš 5.
for (let i=1;i<=100;i++){
    if(i%6===0){
        console.log(`Skaiciai kurie dalijasi is 3 ir 5 yra ${i}`)
    }
};
//13. Sukurkite for ciklą, kuris penkis kartus išspausdintų "Hello, World!". 
for(let i=1;i<=5;i++){
    console.log(`Hello, World !`)
};

/*.1. Sukurkite for ciklą, kuris spausdina skaičius nuo 1 iki 100, tačiau kiekvieną skaičių, kuris 
dalijasi iš 4, reikia pakeisti žodžiu „Fizz“. */

for(let i=1;i<=100;i++){
    if(i%4===0){
        console.log(`Fizz`)
    } else {
        console.log(i)
    }
};
/*2. Spausdinkite skaičius nuo 1 iki 100, bet skaičius, kurie dalijasi iš 3, pakeiskite "Fizz", 
skaičius, kurie dalijasi iš 5, - "Buzz", o skaičius, kurie dalijasi iš abiejų, - "FizzBuzz". */

for(let i=1;i<100;i++){
    if(i%3===0){
        console.log('Fizz')
    }if(i%5===0){
        console.log(`Buzz`)
    } else {
        console.log(i)
    }
};
/*Spausdinkite pirmuosius 10 skaičių Fibonačio sekoje. 0,1,1,2,3,5,8,13,21,34.*/
    console.log(`--------fibonaci-------`);
let x=0;
let y=1;
let z=2;
for (let i=0;i<=10;i++){
    if(i===0){
        console.log(x)
    } if(i===1){
        console.log(y)
    } else {
        z=x+y;
        x=y;
        y=z;
        console.log(z) 
    }
};






/*4. Spausdinkite skaičius nuo 1 iki 20 ir prie kiekvieno lyginio skaičiaus spausdinkite 
"Even", o prie kiekvieno nelyginio - "Odd". */
for (let i=1;i<=20;i++){
    if(i%2===0){
        console.log(`Even`)
    }else {
        console.log(`Odd`)
    }
};
//Spausdinti bet kurio pasirinkto skaičiaus daugybos lentelę. 
const o=8;
for(let i=1;i<=10;i++){
    console.log(`Skaiciaus ${i} daugybos lentele yra ${i}*${o}=${i*o}  `)
};
/* 6. Sukurkite for ciklą, kuris spausdina skaičius nuo 1 iki 30, bet tik tuos, kurie dalijasi iš 2 
arba 3. */

const bendras= 6;
for(let i=1;i<30;i++){
    if(i%6===0){
        console.log(i)
    }
};
/*  Išspausdinkite visų lyginių skaičių nuo 1 iki 100 sumą. */

let skaic=0;
for (let i=2;i<100;i+=2){
    skaic+=i;
}
console.log(`Lyginiu skaiciu suma yra ${skaic}`);

// arba
let suma=0;
for (let i=0;i<100;i++){
    if(i%2===0){
        suma+=i;
    }
}
console.log(suma);
/* 7. Sukurkite for ciklą, kad patikrintumėte, ar skaičius yra pirminis, ir išspausdintumėte 
pranešimą. 2, 3, 5, 7, 11, 13, 17, 19, 23,29, 31, 37, 41, 43 seka eina 1/2/2/4/2/4/2/4/6/2/6/4/2  */

/// apsuksti eilute. 

function string(duomenys){
    let zodis='';
    for(let i=0;i<=duomenys.length;i++){
        zodis=duomenys[i]+zodis; 

    } return `Cia yra ${zodis}`
}

console.log(string('abc'));
console.log(string('sula'));
console.log(string('sedek'));

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

/*Suskaičiuoti, kiek nurodytame intervale yra skaičių, kurie dalijasi be liekanos iš 3, 5 ir 7 atskirai:
0 - 11
8 - 31
-18 - 18
rezultatą pateikti tokiu formatu:
Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra 4 vienetai.
Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 5 yra 3 vienetai.
Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 7 yra 2 vienetai.
*/


function kiek(pradzia,pabaiga,daliklis){
    let vnt=0;
    for(let i=pradzia;i<pabaiga;i++){
        if(i%daliklis===0) vnt++; {}
    } return `Skaiciu intervale tarp ${pradzia} ir ${pabaiga} besidalijanciu is ${daliklis} yra ${vnt} `
}console.log(kiek(0,11,3));
console.log(kiek(8,31,5));
console.log(kiek(-18,18,7));

/* Suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai):
0 … 0
0 … 4
0 … 100
574 … 815
-50 … 50
-70 … 30
*/

function su(pradzia,pabaiga){
    let viso=0;
    if(typeof pradzia!=='number'){
        return `Netinkama ${pradzia}  reiksme`
    } if(typeof pabaiga!=='number'){
        return `Netinkama ${pabaiga} reiksme `
    } if (isNaN(pradzia)){
        return `Not a number !`
    } if (isNaN(pabaiga)) {
        return `Not a number !`
    }
    for(let i=pradzia;i<=pabaiga;i++){
        viso+=i;
    } return viso;
};
console.log(su(0,0));
console.log(su(0,4));
console.log(su(0,100));
console.log(su(574,815));
console.log(su(-50,50));
console.log(su(-70,30));

console.log(su(2, 2));
console.log(su(7, 5));
console.log(su(7, -5));
console.log(su(-7, 5));
console.log(su(-7, -5));
console.log(su(7, 0));
console.log(su(-7, 0));
console.log(su(0, 5));
console.log(su(0, -5));

console.log(su(2, 'labas'));
console.log(su(-2, 'labas'));
console.log(su('labas', 3));
console.log(su('labas', -3));
console.log(su(2, true));
console.log(su(-2, true));
console.log(su(true, 3));
console.log(su(true, -3));
console.log(su(2, [5]));
console.log(su(-2, [5]));
console.log(su([5], 3));
console.log(su([5], -3));

console.log(su('labas', 'rytas'));

console.log(su(NaN, 5));
console.log(su(5, NaN));
console.log(su(NaN, NaN));

/* Raskite didžiausią skaičių sąraše ir patikrinkite, ar jis didesnis už 10. 
a. Pavyzdys: Patikrinkite, ar didžiausias skaičius sąraše [2, 5, 12, 4] yra didesnis 
nei 10. */

function didesnisUz10(skaiciai) {
  let didziausias = skaiciai[0];
 for (let i = 0; i < skaiciai.length; i++) {
      if (skaiciai[i] > didziausias) {
          didziausias = skaiciai[i];
      }
  }
  console.log("Didžiausias skaičius sąraše yra:", didziausias);
  if (didziausias > 10) {
      console.log("Didžiausias skaičius yra didesnis už 10.");
  } else {
      console.log("Didžiausias skaičius nėra didesnis už 10.");
  }
}
didesnisUz10([2, 5, 12, 4],10);


function paieska(sarasas,kintamasis){
    let didziausias=sarasas[0]
    for(let i=0;i<=sarasas.length;i++){
        if(sarasas[i]>didziausias){
            didziausias=sarasas[i];
        }
    }console.log(`Didiausias skaicius sarase yra ${didziausias}`);
    if (didziausias > 10) {
        console.log("Didžiausias skaičius yra didesnis už 10.");
    } else {
        console.log("Didžiausias skaičius nėra didesnis už 10.");
    }
  };
  console.log(paieska([2, 5, 12, 4],10));

  /*Funkcija pavadinimu “didziausiasSkaiciusSarase”:
priima vieną kintamąjį
jei perduotas kintamasis nėra sąrašo tipo, tai išveda pranešimą “Pateikta netinkamo tipo reikšmė.”
jei sąrašas yra tuščias, tai išveda pranešimą “Pateiktas sąrašas negali būti tuščias.”
priešingu atveju, funkcija tęsia darbą
pereina per visą pateiktą sąrašą ir į atskirą kintamąjį įsimena skaičių, kuris tuo metu yra didžiausias
gražina didžiausią surastą skaičių
TESTAI:
console.log( didziausiasSkaiciusSarase( [ 1 ] ) );
rezultatas: 1
console.log( didziausiasSkaiciusSarase( [ 1, 2, 3 ] ) );
rezultatas: 3
console.log( didziausiasSkaiciusSarase( [ -5, 78, 14, 0, 18 ] ) );
rezultatas: 78
console.log( didziausiasSkaiciusSarase( [ 69, 69, 69, 69, 66 ] ) );
rezultatas: 69
console.log( didziausiasSkaiciusSarase( [ -1, -2, -3, -4, -5, -6, -7, -8 ] ) );
rezultatas: -1
console.log( didziausiasSkaiciusSarase( “pomidoras” ) );
rezultatas: “Pateikta netinkamo tipo reikšmė.”
console.log( didziausiasSkaiciusSarase( [] ) );
rezultatas: “Pateiktas sąrašas negali būti tuščias.”
*/

console.log('--------------------cia-------------')

function bigest(duomenys){
    if(typeof duomenys==='string'){
        return `Pateikta netinkamo tipo reikšmė`
    } if(duomenys.lenght===0){
        return `Pateiktas sąrašas negali būti tuščias.`
    }
  let  didziausias=duomenys[0];
    for(let i=0;i<duomenys.length;i++){ // nes gi nuo 0 pradeda ejimus. 
        if(duomenys[i]>didziausias){
            didziausias=duomenys[i];
        }
    }return (`Didziausias skaicius sarase ${didziausias}`);
};
console.log(bigest([1]));
console.log(bigest([1,2,3]));
console.log(bigest([-5,78,14,0,18]));
console.log(bigest([69,69,69,69,66]));
console.log(bigest([-1,-2,-3,-4,-5,-6,-7,-8]));
console.log(bigest([3,3,3])); //// jeigu duomenys[i]>=didziausias overwritins pozicija. 

console.log(bigest("Pomidoras"));
console.log(bigest([]));

console.log('-----ciadestytojo--zemiau----');


function biggestNumber(list){
    if(!Array.isArray(list) ){ //// su sauktuku darant tikrina ar ne Array.
        return'Duomenys turi buti sarase';
    } if(list.length===0 ){ /// kai pateikiama[] geriausias budas ji pagaugti list.length===0.
        return`Pateiktas sąrašas negali būti tuščias.`
    } 
    let biggest=-Infinity;  // kai yra minusiniu skaiciu -Infinity daryti.
    for(let i=0;i<list.length;i++){
        if(typeof list[i]!=='number'||!isFinite(list[i])){
            continue;}///// patikrinus ar ne skaicius, testi toliau cikla nereipti demesio.
        if(list[i]>biggest){
            biggest=list[i];
        }
    } return biggest
};
console.log(biggestNumber('labas'));
console.log(biggestNumber('KEBAlabas'));

console.log(biggestNumber(1)); // cia eleminuoja if(!Array.isArray(list) ) eilute.
console.log(biggestNumber([1]));
console.log(biggestNumber([1,2,3]));
console.log(biggestNumber([-5,78,14,0,18]));
console.log(biggestNumber([69,69,69,69,66]));
console.log(biggestNumber([-1,-2,-3,-4,-5,-6,-7,-8]));
console.log(biggestNumber([-1,-2,-3]));
console.log(biggestNumber([]));// cia eleminuoja if(list.length===0 ) eilute.
console.log(biggestNumber([1,2,'asd']));
console.log(biggestNumber([1,'asd',2]));
console.log(biggestNumber(['asd',1,2]));
console.log(biggestNumber([Infinity,1,2]))
console.log(biggestNumber([-Infinity,1,2])) // cia eleminuoja if(typeof list[i]!=='number'||!isFinite(list[i])) eilute. 
console.log(biggestNumber([-1,-2,true])); /// true interpretuoja kaip vienta. false interpretuoja kaip 0.
console.log(biggestNumber([-1,true,-2]));
console.log(biggestNumber([-1,-2,-Infinity]));
console.log(biggestNumber([-1,Infinity,-2]));
console.log(biggestNumber([Infinity,1,2]));

console.log(biggestNumber([-1,-2,NaN]));
console.log(biggestNumber([-1,NaN,-2]));
console.log(biggestNumber([NaN,1,2]));




console.log('-----------cia pabaiga------');


/*Funkcija pavadinimu “isrinktiRaides”:
priima du kintamuosius:
pirmasis nurodo tekstą, su kuriuo reikės atlikti užduotį
antrasis nurodo kas kelintą raidę išrinkti
patikrinti, ar pirmasis kintamasis yra teksto tipo:
jei ne, išvedame pranešimą “Pirmasis kintamasis yra netinkamo tipo.”
priešingu atveju tęsiame darbą
patikrinti, ar pirmasis kintamasis yra ne tuščias tekstas ir ne didesnis nei 100 simbolių:
jei ne, išvedame pranešimą “Pirmojo kintamojo reikšmė yra netinkamo dydžio.”
priešingu atveju tęsiame darbą
patikrinti, ar antrasis kintamasis yra skaičiaus tipo:
jei ne, išvedame pranešimą “Antrasis kintamasis yra netinkamo tipo.”
priešingu atveju tęsiame darbą
patikriname, ar antrojo kintamojo vertė yra didesnė už nulį:
jei ne, išvedame pranešimą “Antrasis kintamasis turi būti didesnis už nulį.”
priešingu atveju tęsiame darbą
patikriname, ar antrojo kintamojo vertė yra ne didesnė už pirmojo kintamojo ilgį:
jei ne, išvedame pranešimą “Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.”
priešingu atveju tęsiame darbą
išrenkame iš nurodyto teksto kas kelintą raidę (pagal antrojo kintamojo žingsnį)
išrinktas raides sudėti į atskirą kintamąjį, kuris yra teksto tipo
gražina rezultatą
TESTAI:
console.log( isrinktiRaides( “abcdefg”, 2 ) );
rezultatas: “bdf”
console.log( isrinktiRaides( “abcdefghijkl”, 3 ) );
rezultatas: “cfil”
console.log( isrinktiRaides( “abc”, 0 ) );
rezultatas: “Antrasis kintamasis turi būti didesnis už nulį.”
console.log( isrinktiRaides( “abc”, 4 ) );
rezultatas: “Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.”
console.log( isrinktiRaides( 1561, 2 ) );
rezultatas: “Pirmasis kintamasis yra netinkamo tipo.”
*/

function findText(text,n){
    let zodis="";
    if (typeof text!=='string'){
        return `Pirmasis kintamasis yra netinkamo tipo.`
    }if (text.length>100&& text==='' ){
        return `“Pirmojo kintamojo reikšmė yra netinkamo dydžio.`
    }if (typeof n!=="number"){
        return `Antrasis kintamasis yra netinkamo tipo.`
    }if (n>0){
        return `Antrasis kintamasis turi būti didesnis už nulį.`
    }if(n>text.length){
        return `Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.`
    } for(let i=1;i<=text.length;i+=2){
        zodis+=text[i];

    } return zodis;

};
console.log(findText('abcdefg',2));
console.log(findText('abcdefghijkl',3));
console.log(findText('abc',0));
console.log(findText('abc',4));
console.log(findText('1561',2));



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





function highAndLow(numbers){
    
    const skaicius=Number(numbers);
    let min=skaicius[0];
    let max=skaicius[0];
  } for(let i=0;i<skaicius.length;i++){
   if( skaicius[i]>max){
      max+=skaicius[i];
    } if(skaicius[i]<min){
      min+=skaicius[i]
    } return `${max} ${min}`
  }
  console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));


