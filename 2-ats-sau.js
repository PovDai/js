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

/* Susikurkite sąrašą 10 miestų, kuriame būtų įvardinami miesto pavadinimai ir jų 
atstumai iki Vilniaus ([‘Kaunas’, 89.6, ‘Klaipėda’, 307.3, … ).

a. Parašykite funkciją, kuri pasakytų, kur toliausiai nuvažiuotume važiuodami x 
km/h greičiu per y valandų 
b. Parašykite funkciją, kuri pasakytų, ar spėtume pasiekti norimą miestą per x 
valandų ir kokiu greičiu turėtume važiuoti? (padarykite limitą 120 km/h) 
c. Parašykite funkciją, kuri nurodytų į kokį tolimiausią miestą mes galėtume 
nuvažiuoti su k kiekiu pinigų, jei už vieną litrą degalų turime mokėti j eurų. 
Kelionę pradedame su 30 litrų benzino bakelyje, už kuriuos mokėti nereikia. 
Nuvažiuodami vieną kilometrą sudeginame x kiekį degalų 
d. Susikurkite sąrašą kelio sąlygoms iki kiekvieno miesto apibūdinti (pavyzdžiui: 
geras, prastas, taisomas). Geromis kelio sąlygomis iki miesto važiuojame 
paprastai, prastomis kelio sąlygomis iki miesto važiuojame 1.5 karto ilgiau, o 
taisomo kelio sąlygomis važiuojame 2 kartus ilgiau. Parašykite funkciją, kuri 
pagal kelio sąlygas ir duotus atstumus, parašytų kiek laiko tektų važiuoti iki 
kiekvieno miesto*/


/*a. Parašykite funkciją, kuri pasakytų, kur toliausiai nuvažiuotume važiuodami x 
km/h greičiu per y valandų */


// 1. Miestų sąrašas su atstumais iki Vilniaus (array formatu)
const miestai = [
    'Kaunas', 102,
    'Klaipėda', 312,
    'Šiauliai', 213,
    'Panevėžys', 135,
    'Alytus', 105,
    'Marijampolė', 138,
    'Mažeikiai', 279,
    'Utena', 95,
    'Tauragė', 193,
    'Telšiai', 232
];

// 2. Funkcija, kuri nustato tolimiausią pasiekiamą miestą
function rastiToliausiaMiesta(greitis, valandos) {
    const galimasAtstumas = greitis * valandos;
    let tolimiausiasMiestas = '';
    let tolimiausiasAtstumas = 0;
    
    for (let i = 0; i < miestai.length; i += 2) {
        const miestoPavadinimas = miestai[i];
        const atstumas = miestai[i + 1];
    
        if (atstumas <= galimasAtstumas && atstumas > tolimiausiasAtstumas) {
            tolimiausiasMiestas = miestoPavadinimas;
            tolimiausiasAtstumas = atstumas;
        }
    }
    
    if (tolimiausiasMiestas === '') {
        return `Vaiduodami ${greitis} km/h greičiu per ${valandos} val. nepavyktų pasiekti nė vieno miesto iš sąrašo.`;
    } else {
        return `Vaiduodami ${greitis} km/h greičiu per ${valandos} val. galėtumėte pasiekti tolimiausią miestą: ${tolimiausiasMiestas} (${tolimiausiasAtstumas} km nuo Vilniaus).`;
    }
}

// 3. Funkcijos panaudojimo pavyzdžiai
console.log(rastiToliausiaMiesta(80, 2));  // Greitis 80 km/h, laikas 2 val.
console.log(rastiToliausiaMiesta(120, 1.5)); // Greitis 120 km/h, laikas 1.5 val.
console.log(rastiToliausiaMiesta(60, 1));   // Greitis 60 km/h, laikas 1 val.



 /*b. Parašykite funkciją, kuri pasakytų, ar spėtume pasiekti norimą miestą per x 
valandų ir kokiu greičiu turėtume važiuoti? (padarykite limitą 120 km/h) */





//Užduotis: atvirukų gamintojas nori tam tikras atviruko raides užklijuoti blizgančių raidžių lipdukais.
//Padėkite gamintojui paskaičiuoti, kiek raidžių lipdukų reikės jam nusipirkti.
//Kas bus, jei atvirukų gamintojas norės visas balses išpuošti lipdukais?




let atvirukoTekstas = 'labai geras daiktas yra televizorius aš su juo galiu matyti jus';
let atvirukoRaide = 'a';
let atvirukoSuma = 0;



function AtvirukoLipdukai (Raide)
{
    atvirukoSuma = 0;
    for (let i = 0; i <atvirukoTekstas.length; i++)
    {
        if(atvirukoTekstas[i] === Raide)
            {
                atvirukoSuma += 1;
            }
            
    }

    return atvirukoSuma;
}



const AtvirukoBalses = ['a', 'e', 'o', 'u', 'i', 't', 'z', 'g'];

for (let i = 0; i < AtvirukoBalses.length; i++)
{
    console.log("Raidė " + AtvirukoBalses[i] + " pasikartoja " + AtvirukoLipdukai(AtvirukoBalses[i]))
}
















//Noriu rasti, kaip dažnai natūraliame tekste pasitaiko žodžių su tam tikra raide. Noriu rašyti tekstą tol
// kol surasiu pirmąsias n norimų raidžių


let manoraide = 'y'
let tekstasilgas = 'kazin kas tokio idomaus gali buti programavime. Daug dalykų, galbūt, tik reikia juos atrasti.'
let rastosraides = 0
let norimaskiekis = 4
let einamastekstas = '';


for (let i = 0; rastosraides < norimaskiekis; i++)
{
    einamastekstas += tekstasilgas[i];
    if (tekstasilgas[i] === manoraide)
    {
        rastosraides += 1;
    }
    if (i === tekstasilgas.length -1)
    {
        rastosraides = 4
    }
}

console.log(einamastekstas)



/*2. Parašyti funkciją, kuri apskaičiuotų kiek sveikųjų teigiamų skaičių sąraše yra tam tikrų 
skaičių ir išvestų resultatą grafiškai. PVZ: turint sąrašą  [1, 1, 2, 3, 3, 3, 4] rezultatas 
būtų gaunamas toks: */

const sarasas=[1,1,2,3,3,3,4];
//1:**
//2:*

function sudedam(sarasas){
let sum=sarasas[0];
for(let i=0;i<sarasas.length;i++){
    if(sarasas[i]===1){
        sum+='*'
    }if(sarasas[i]===2){
        sum+='*';
    }
    }return sum;
}
console.log(sudedam(sarasas));

/*

Susikurkite 7 sąrašus, kuriose yra talpinamos skirtingų dienų temperatūros vertės 
a. Parašykite funkciją, kuri apskaičiuotų norimos dienos vidutinę temperatūrą. 
b. Parašykite funkciją, kuri apskaičiuotų norimos dienos aukščiausią 
temperatūrą. 
c. Parašykite funkciją, kuri apskaičiuotų norimos dienos žemiausią temperatūrą. 
d. Parašykite funkciją, kuriai davus visas savaitės dienas, ji suranda kurią dieną 
buvo žemiausia temperatūra, ir kurią dieną buvo aukščiausia temperatūra 
e. Parašykite funkciją, kuri apskaičiuotų visos savaitės vidutinę temperatūrą 
f. 
Parašykite funkciją, kuriai nurodžius vieną savaitės dieną ir tos dienos 
numatomą kritulių kiekį (saulėta (nelis) / debesuota (lis)), funkcija praneštų 
kaip siūloma pasiruošti einant į lauką: Pasitepti saulės kremu (jei saulėta ir 
šilta), Pasiimti skėtį (jei debesuota ir nešalta), Užsidėti striukę (Jei šalta), ir 
pasiimti morką besmegeniui lipdyti (Jei šalta ir debesuota). Kokia 
temperatūra yra šilta/nešalta/šalta įsivardinkite patys skaičiais. Šalta 
turėtų būti bent 0 laipsnių kad kristų sniegas .*/


const a = [12, 14, 16, 18, 17, 15, 13];

let r = [10, 11, 13, 16, 18, 16, 14];

const k = [5, 7, 8, 7, 6, 5, 4];

const d = [5, 4, 3, 2, 1, 0, -1];

const e = [20, 19, 18, 17, 16, 16]

const f = [16, 15, 15, 14, 14, 14]

const h =[-7, -8, -8, -7, -5, -3];

//a. Parašykite funkciją, kuri apskaičiuotų norimos dienos vidutinę temperatūrą. 

function vid(duomenys){
    let tempVid=0;
    let tempSum=0;

    for(let i=0;i<duomenys.length;i++){
        tempSum+=duomenys[i];
        tempVid=tempSum/duomenys.length;

    }

    return`Vidutine dienos temperatura:${tempVid}`;
}

console.log(vid(a));
console.log(vid(r));
console.log(vid(k));
console.log(vid(d));
console.log(vid(e));
console.log(vid(f));
console.log(vid(h));
//b. Parašykite funkciją, kuri apskaičiuotų norimos dienos aukščiausia temperatura. 

function auksciausia(duomenys){
    let max=duomenys[0]
    for(let i=0;i<duomenys.length;i++){
        if(duomenys[i]>max){
            max=duomenys[i]
        }

        } return `Auksciausia dienos temperatura ${max}`;
    }
    console.log(auksciausia(a));
    console.log(auksciausia(b));
    console.log(auksciausia(c));
    console.log(auksciausia(d));
//c. Parašykite funkciją, kuri apskaičiuotų norimos dienos žemiausią temperatūrą. 


function zemiau(duomenys){
    let min =duomenys[0]
    for(let i=0;i<duomenys.length;i++){
        if(duomenys[i]<min){
            min=duomenys[i]
        }

        } return `Zemiausia dienos temperatura ${min}`;
    }
    console.log(zemiau(a));
    console.log(zemiau(b));
    console.log(zemiau(c));
    console.log(zemiau(d));

/*Parašykite funkciją, kuriai davus visas savaitės dienas, ji suranda kurią dieną 
buvo žemiausia temperatūra, ir kurią dieną buvo aukščiausia temperatūra */


console.log('------------------------')

function kuriaDiena(duomenys){
    let min=duomenys[0];
    let max=duomenys[0];
    let minDiena=0;
    let maxDiena=0;
    for(let i=0; i<duomenys.length;i++){
        if(duomenys[i]>max){
            max=duomenys[i];
            maxDiena=i
        }if(duomenys[i]<min){
            min=duomenys[i]
            minDiena=i

            }
        } return `Minimali  ${minDiena+1}  diena temp ${min} maksimali ${maxDiena+1} diena  temp  ${max}`
    };

console.log(kuriaDiena(a));
console.log(kuriaDiena(b));
console.log(kuriaDiena(c));
console.log(kuriaDiena(d));
console.log(kuriaDiena(e));
console.log(kuriaDiena(f));
console.log(kuriaDiena(h));

//e. Parašykite funkciją, kuri apskaičiuotų visos savaitės vidutinę temperatūrą.


function vid(duomenys){
    let tempVid=0;
    let tempSum=0;
    let savaitesVid=0;

    for(let i=0;i<duomenys.length;i++){
        tempSum+=duomenys[i];
        tempVid=tempSum/duomenys.length;

    }
 return tempVid //// kazkaip reikia paimt vidurki ir padalint is dienu skaiciaus. 
}

console.log(vid(a));
console.log(vid(b));
console.log(vid(c));
console.log(vid(d));
console.log(vid(e));
console.log(vid(f));
console.log(vid(h));
/*
Parašykite funkciją, kuriai nurodžius vieną savaitės dieną ir tos dienos 
numatomą kritulių kiekį (saulėta (nelis) / debesuota (lis)), funkcija praneštų 
kaip siūloma pasiruošti einant į lauką: Pasitepti saulės kremu (jei saulėta ir 
šilta), Pasiimti skėtį (jei debesuota ir nešalta), Užsidėti striukę (Jei šalta), ir 
pasiimti morką besmegeniui lipdyti (Jei šalta ir debesuota). Kokia 
temperatūra yra šilta/nešalta/šalta įsivardinkite patys skaičiais. Šalta 
turėtų būti bent 0 laipsnių kad kristų sniegas .*/

console.clear();

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
function pickLeter(text,number){
    let zodis='';
    if(typeof text!=='string'){
        return `Pirmasis kintamasis yra netinkamo tipo.`
    }if(text.length===0||text.length>100){
        return `Pirmojo kintamojo reikšmė yra netinkamo dydžio.`
    }if(typeof number!=='number'){
        return `Antrasis kintamasis yra netinkamo tipo`
    }if(number<=0){
        return `Antrasis kintamasis turi būti didesnis už nulį`
    }if(number>text.length){
        return `Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį`
        
    } for(let i=number-1;i<text.length;i+=number){ // reiskia 
        zodis+=text[i]

    } return zodis;
};
console.log(pickLeter('abcdefg',2));
console.log(pickLeter('abcdefghijk',3));
console.log(pickLeter('abc',0));
console.log(pickLeter('abc',4));
console.log(pickLeter('1561',2));

console.clear()


// Parašykite for ciklą, kuris apskaičiuotų visų skaičių nuo 5 iki 15 sumą.
let sum=0;
for(i=5;i<15;i++){
    sum+=i  /// nes cia ir eina konkretus skaiciai ne is duomenu.
}
console.log(`suma yra:${sum}`)

// Parašykite for ciklą, kuris į console išvestų visas žodžio ‘Vakaras’ raides po vieną
let zodis='Vakaras'
let naujas='';
for(let i=0;i<zodis.length;i++){
    console.log(`${i} pozicijoje raide ${zodis[i]}`)
}
// . Parašykite for ciklą, kuris išvestų šešeto daugybos lentelę

let p=6;
for (let i=1;i<=10;i++){
    console.log(`Daugybos lentele ${i}*${p}=${i*p} `)
}
/*Parašykite for ciklą, kuris į consolę išvestų nuo 5 iki 1, ir po vieneto (vietoje 0) į
ekraną išvestų žodį ‘BOOM’*/
for( let i=5;i>=0;i--){
    console.log(i) // is pradziu loginasi skaiciai 
    if(i===0){
        console.log('boom') // kai pasiekia skaicius 0, darom boom. 
    }
}
//Parašykite for ciklą, kuris isudėtų visus lyginius skaičius nuo 3 iki 18

let c8=0;

for(let i=3;i<18;i++){ /// i yra skaicius [i] spauzdimnamas
    if(i%2===0){
   c8+=i
    }
}
console.log(`Visu lyginiu suma:`,c8)

//Parašykite for ciklą, kuris išvestų visus sąrašo elementus į console.
let sarasa=[1,2,3,4,]
for (let i=0;i<sarasas.length;i++){
    console.log(`visi ${sarasa[i]} `)
};
/*Parašykite ciklą, kuris iš vardų sąrašo išvestų visus elementus, pridėdamas ‘Mano
vardas - ’ console log eilutės pradžioje */

const vardai=['Jonas','Petras','Maryte']

for(let i=0; i<vardai.length;i++){
    console.log(`Mano vardas - ${vardai[i]}`)
}

//Parašykite for ciklą, kuris sudėtų visus sąrašo skaitinius elementus.

let sarasas5=[1,2,3,4,];
let sumsum=0;

for(let i=0;i<sarasas5.length;i++){
    sumsum+=sarasas5[i];
}
console.log(`Saraso viso suma`,sumsum)
/* Parašykite for ciklą, kuris išvestų į console visus sąrašo elementus nuo paskutinio iki
pirmo */
let sarasas6=[1,2,3,4,];

for(let i=sarasas6.length;i>0;i--){
    console.log(`Numeriukai`,i)
}

/*Parašykite for ciklą, kuris išvestų į console tik tuos skaičius, jei jie yra pinigų reikšmės
(1, 2, 5, 10, 20, 50, 100, 200, 500) */


/*Parašykite for ciklą, kuris iš sąrašo Raidės [ ‘L’, ‘a’, ‘b’, ‘a’, ‘s’] sudėliotų kintamąjį
Žodis, kurio reikšmė yra ‘Labas’*/

const raides=['L','a','b','a','s']
let zodelis='';

for(let i=0;i<raides.length;i++){
    zodelis+=raides[i]
}
console.log(`Sudejus raides gaunasi ${zodelis}`)

/* Parašykite for ciklą, kuris atskirai atspausdintų kiekvieną žodžio Programavimas
raidę.*/

const duomenys='Programavimas';
for(let i=0;i<duomenys.length;i++){
    console.log(`${i} pozicijoje raide ${duomenys[i]}`)
};


/*Parašykite for ciklą, kuris sudaugintų skaičius nuo 2 iki 10. Už ciklo išveskite į
consolę reikšmę */
for (let i=2;i<10;i++){
}
console.log(`${i}pozicijoje daugybos reiksme ${i*i} `)

// Parašykite for ciklą, kuris apskaičiuos visų nelyginių skaičių nuo 1 iki 30 sumą
let su=0;
for(let i=1;i<30;i++){
    if (i%2===1){
        su+=i
    }
};
console.log(`suma bus`,su)

// Parašykite for ciklą, kuris į console išvestų skaičius nuo 20 iki 10
for(let i=20;i>10;i--){
    console.log(i,`pozicijoje skaicius`,i)
};
/*Parašykite for ciklą, kuris į console išvestų sąrašo RaidėsAtbulai [ ‘s’, ‘a’, ‘b’, ‘a’, ‘L’]
elementus vienas po kito nuo galo iki pradžios*/

let sar=['s','a','b','a','L'];
let ras='';
for(let i=sar.length;i>=0;i--){
    ras+=sar[i];
};
console.log(`Naujas zodis yra ${ras}`);

/*Parašykite for ciklą, kuris į console išvestų kintamojo ŽodisAtbulas =
‘samivamargorP’ atskiras raides vieną po kitos */

let zodisAtbulas='samivamargorP'
for(let i=0;i<zodisAtbulas.length;i++){
    console.log(i,`pozicijoje raide`,zodisAtbulas[i])
};
/*Parašykite for ciklą, kuris į consolę išveda skaičius nuo 1 iki 100. Jei skaičius dalinasi
iš 7, papildomai į consolę yra išvedamas žodis ‘lucky’*/

for(let i=1;i<100;i++){
    if(i%7===0){
        console.log(`Lucky`)
    } else{
        console.log(i)
    }
};

/*Parašykite for ciklą, kuris į console po vieną atskirai išvestų dvigubas sąrašo
Dvigubinti [2, 3, 6, 8] reikšmes (Gaunamas atsakymas: 4, 6, 12, 16)*/

const e8=[2,3,6,8];
for(let i=0;i<e8.length;i++){
    console.log(`2x skaicia`,e8[i]*2 )
}
/* Parašykite for ciklą, kuris iš sąrašo DaugSkaičių [2, 14, 10, 1000, 503, 8, 0] išvestų
visus skaičius, kurie yra mažesni už 100*/ 

const daugSkaiciu=[2,14,10,1000,503,8,0]
for(let i=0;i<daugSkaiciu.length;i++){
    if(daugSkaiciu[i]<100 ){
        console.log(`Skaiciai mazesni negu 100:`,daugSkaiciu[i])
    }
}

//Parašykite for ciklą, kuris apskaičiuotų kiek raidžių a yra žodyje abrakadabra

const z7='abrakadabra'
let sk=0;
for(let i=0;i<z7.length;i++){
    sk++;
}
console.log(`raidziu zodyje yra`,sk)

/*. Parašykite for ciklą, kuris išvestų, kokios būtų sąrašo PridėsiuSkaičių [2, 8, 88, 14]
elementų reikšmės, jei prie kiekvieno elemento pridėtume dvejetą*/

const e4=[2,8,88,14]
for(let i=0;i<e4.length;i++){
    console.log(`Pridejus 2 reiksmes butu `,e4[i]+2)
};