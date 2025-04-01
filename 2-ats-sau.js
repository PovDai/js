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

