//ND PADARYTI FUNKCIJAS KURIOS RODYTU. -/ */ dalybos, operacijomis.
//2,2->2+2=4.
//7,5->7+5=12.
//-7,15->-7+15=8.

// ND surasyti visas imanomas kombinacijas su && arba || kai yra naudojamos 4 boolean reiksmes.
// ND ir kiek gavosi kombinaciju?;
// Nd kombinatorikos kuras pasikrint.

//2,2->2+2=4.
//7,5->7+5=12.
//-7,15->-7+15=8.

// uzduociu: https://docs.google.com/document/d/1UnM5MzO7KPf-atlz3HXPJN8XlaN37nlUJ7fp6GwvIZ8/edit?tab=t.0#heading=h.40g6yguvm5k8

// 5-> Gautas skaicius:5.
function skaicius(n){

    return `Gautas skaicius:${n}.`;
   }
   const gn1=skaicius(5);
     console.log(gn1);


// ND surasyti visas imanomas kombinacijas su && arba || kai yra naudojamos 4 boolean reiksmes



//Sukurti skirtingas eilutes +,-,*,/.
//2,2->2+2=4.
//7,5->7+5=12.
//-7,15->-7+15=8.

function sum (a,b){
    const result=a+b;
    return `${a}+${b}=${result}`;
}

console.log(sum(2,2));
console.log(sum(7,5));
console.log(sum( -7, 15));

function minus(a,b){
    const result=a-b;
    return `${a}-${b}=${result};  `
}
console.log(minus(2,2));
console.log(minus(7,5));
console.log(minus(-7,15));

function daugyba(a,b){
    const result=a*b;
    return `${a}*${b}=${result};          `
}
console.log(daugyba(2,2));
console.log(daugyba(7,5));
console.log(daugyba(-7,15));

function dalyba(a,b){
    const result=a/b;
    return `${a}/${b}=${result}`;
}
console.log(dalyba(2,2));
console.log(dalyba(7,5));
console.log(dalyba(-7,15));

//1. uzduotis:Sukurti 3 kintamuosius su skaičiaus tipo reikšmėmis
let a=1;
let b=2;
let c=3;
let ats=a+b+c; // Susumuoti visu skaiciaus tipo kintamuosius.
console.log(a);
console.log(b);
console.log(c);
console.log(ats);//Susumuoti visu skaiciaus tipo kintamuosius.

//2. uzduotis. Sukurti 3 kintamuosius su teksto tipo reikšmėmis

const   a1="vienas"
const   b1="du";
const   c1="trys";
const ats1=`   ${a1} ${b1} ${c1}`; // Sujungti visus teksto tipo kintamuosius taip, jog tarp jų būtų sudarytas tarpas

console.log(a1);
console.log(b1);
console.log(c1);
console.log(ats1);

//3. uzduotis Sukurti 3 sąrašo tipo kintamuosius su penkiomis teksto tipo reiksmemis. 

const list=["vienas","du","trys","test","nest"];
const list1=["audi","volvo","BMW","skoda","nio"]
const list2=["nieko","kito","nesitikek","is","jo"]


console.log(list);
console.log(list1);
console.log(list2);

//4. Sukurti 3 sąrašo tipo kintamuosius su penkiomis skaičių tipo reikšmėmis


const lis=[1,2,3,4,5];
const lis1=[6,7,8,9,10];
const lis2=[11,12,13,14,15];

console.log(lis);
console.log(lis1);
console.log(lis2);
/*    Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką
1-2+3-4+5
*/
let b8=[1,-2,3,-4,5];
const verte=b8[0]-b8[2]+b8[3]-b8[4]+b8[5];
console.log(verte);

5./*Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios taip, jog tarp jų būtų kablelis ir tarpas*/


let vardai=['volvo','audi','bwm','dacia'];

    let sakinys1= 'Apsuktas tektas:';
    sakinys1+=vardai[3]+' ,';
    sakinys1+=vardai[2]+' ,';
    sakinys1+=vardai[1]+' ,';
    sakinys1+=vardai[0]+' ,';

console.log(sakinys1);


/*Kintamųjų palyginimas
Priklausomai nuo sąlygos, susikurkite 2 skirtingų reikšmių nurodyto tipo kintamuosius.
Lyginant, jei rezultatas tenkina palyginimo sąlygą (nurodytą žemiau), tai į console išvesti žodį “Pomidoras”, o jei sąlyga nėra tenkinama, išvesti sakinį “Bandykite kitą kartą.”.

Tarpusavyje palyginti skaičiaus tipo kintamuosius:
kuris didesnis
kuris mažesnis
ar jie lygūs
ar jie nelygūs
kuris didesnis arba lygus
kuris mažesnis arba lygus
Išvesti teksto tipo kintamųjų ilgius
Tarpusavyje palyginti teksto tipo kintamųjų ilgius:
kuris didesnis
kuris mažesnis
ar jie lygūs
ar jie nelygūs
kuris didesnis arba lygus
kuris mažesnis arba lygus
Išvesti sąrašo tipo kintamųjų ilgius
Tarpusavyje palyginti sąrašo tipo kintamųjų ilgius:
kuris didesnis
kuris mažesnis
ar jie lygūs
ar jie nelygūs
kuris didesnis arba lygus
kuris mažesnis arba lygus
*/
if (4 > 2) {
    console.log('--- taip');
} else {
    console.log('--- ne');
}

const h1=10;
const h2=2;
if (h1>h2){
    console.log('Pomidoras');
}else {
    console.log('Bandykite dar karta');
}
if (h1<h2){
    console.log('Pomidoras');
}else {
    console.log('Bandykite dar karta');
}
if (h1===h2){
    console.log('Pomidoras');
}else {
    console.log('Bandykite dar karta');
}
if (h1!==h2){
    console.log('Pomidoras');
}else {
    console.log('Bandykite dar karta');
}
if (h1>=h2){
    console.log('Pomidoras');
}else {
    console.log('Bandykite dar karta');
}
if (h1<=h2){
    console.log('Pomidoras');
}else {
    console.log('Bandykite dar karta');
};

const h3="Jonas";
const h4="Petras"
const h3l=h3.length;
const h4l=h4.length;
if (h3l<h4l){
    console.log('Pomidoras');
}else {
    console.log('Bandykite dar karta');
}
if (h3l>h4l){
    console.log('Pomidoras');
}else {
    console.log('Bandykite dar karta');
}
/* Funkcija pavadinimu “tusciaFunkcija”:
nepriima jokių kintamųjų
neatlieka jokios vidinės logikos
gražina boolean tipo reikšmę “false”
*/

function empty() {
}
console.log(empty());

function empty(){
    return false;
}
console.log();
/* priima du skaičiaus tipo kintamuosius
atskirame kintamajame įsimena sandaugos reikšmę
gražina saudaugos rezultatą
TESTAI:
console.log( daugyba( skaicius1, skaicius2 ) );
console.log( daugyba( skaicius3, skaicius2 ) );
console.log( daugyba( skaicius1, skaicius3 ) );
rezultatas: teisingos reikšmės;
*/

function daugyba(a1,a2){
    return a1*a2;
}
console.log(daugyba(1,2));
console.log(daugyba(3,2));
console.log(daugyba(1,3));
console.clear();

/*
Funkcija pavadinimu “skaitmenuKiekisSkaiciuje”:
priima vieną kintamąjį
jei perduotas kintamasis nėra skaičiaus tipo, tai išveda pranešimą “Pateikta netinkamo tipo reikšmė.”
priešingu atveju, funkcija tęsia darbą
į atskirą kintamąjį įsimena skaičių sudarančių skaitmenų kiekį
gražina skaitmenų kiekį

console.log( skaitmenuKiekisSkaiciuje( 5 ) );
rezultatas: 1
console.log( skaitmenuKiekisSkaiciuje( 781 ) );
rezultatas: 3
console.log( skaitmenuKiekisSkaiciuje( 37060123456 ) );
rezultatas: 11

*/



function skaitmenuKiekisSkaiciuje(kiekis){
    if (typeof kiekis!=='number'||isNaN(kiekis ))  { 
    return "Pateikta netinkamo tipo reiksme";
    } else  {
        const skaiciaus=kiekis.toString().length;
    return skaiciaus;
    }}
    
    console.log(skaitmenuKiekisSkaiciuje(5));
    console.log(skaitmenuKiekisSkaiciuje(781));
    console.log(skaitmenuKiekisSkaiciuje(37060123456 ));
    console.log( skaitmenuKiekisSkaiciuje( true ));
    console.log( skaitmenuKiekisSkaiciuje( " asd"));
    console.log( skaitmenuKiekisSkaiciuje( NaN ) );
// mini projektas.Write a program that determines if a number is positive, negative, or zero.

const min1=0;

if (min1 > 0) {
    console.log("Positive");
} else if (min1 < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}

// if(){}else if (){} else { }

//Mini Project: Write a function that takes two numbers and returns their sum.

function sum(a1,b1){
    return a1+b1;
}
console.log(sum(2,3));

/* 1 užduotis - mokytojo suvestinė:

Susikurkite bent 6 sąrašo (array) tipo kintamuosius, kurių pirmas narys yra mokinio vardas, o toliau yra 5 skaičiaus tipo mokinio pažymiai
Sukurkite funkciją, kuri padaro šiuos veiksmus:
Į console išveda mokinio vardą
Į console išveda mokinio pažymių vidurkį ir praneša ar mokinys išlaikė ar neišlaikė kurso
Jei mokinys neišlaiko kurso, parašykite ar mokinys, gavęs vieną gerą įvertį, galėtų pasitaisyti savo vidurkį.

2 užduotis - filmų rekomendacija:

Susikurkite bent 5 sąrašo tipo kintamuosius, kurių pirmas narys yra filmo pavadinimas, antras narys yra filmo žanras, o trečias narys yra skaičiaus tipo filmo įvertis.
Susikurkite 2 kintamuosius kurie -pirmas nurodo jūsų mėgstamą žanrą ir antras nurodo jūsų norimą matyti filmo įvertį.
Padarykite funkciją, kuri iš pasirinktų 3 filmų, pagal jūsų norimą žanrą ir įvertį išveda į console kokie filmai jums patiktų. Jei joks filmas netinka, turi tai pranešti.
*/


const q1= ['Povilas',10,9,8,7,6];
const w1= ["Raimonda",1,2,3,4,5];
const e1 =  ['Barbora',7,6,4,5,4];
const r1 = ['Leonas',8,9,10,4,5];
const t1 =['Jonas',8,8,7,5,1];
const y1 =['Roma',1,4,6,7,10];

   function skaiciuotiVidurki(mokinioDuomenys) {
    const vardas = mokinioDuomenys[0];
    const pazymiai = mokinioDuomenys.slice(1);
    const suma = pazymiai.reduce((a, b) => a + b, 0);
    const vidurkis = suma / pazymiai.length;


    if (vidurkis>=7){ 
        return `${vardas} pazymu vidurkis yra ${vidurkis} ir kursa jis islaike`;
   } else{
       return `${vardas} pazymu vidurkis yra ${vidurkis} ir  mokinys kurso neislaike`;
   }}

   console.log(skaiciuotiVidurki(q1));
console.log(skaiciuotiVidurki(w1));
console.log(skaiciuotiVidurki(e1));
console.log(skaiciuotiVidurki(r1));
console.log(skaiciuotiVidurki(t1));
console.log(skaiciuotiVidurki(y1));


function pridetiIrPerskaiciuoti(mokinioDuomenys, papildomasPazymys) {

    mokinioDuomenys.push(papildomasPazymys);
    const naujasVidurkis = skaiciuotiVidurki(mokinioDuomenys);
    return naujasVidurkis;
}



console.log(pridetiIrPerskaiciuoti(q1, 10));
console.log(pridetiIrPerskaiciuoti(w1, 10));
console.log(pridetiIrPerskaiciuoti(e1, 10));
console.log(pridetiIrPerskaiciuoti(r1, 10));
console.log(pridetiIrPerskaiciuoti(t1, 10));
console.log(pridetiIrPerskaiciuoti(y1, 10));

/*Funkcija pavadinimu “dalyba”:
turi priimti du kintamuosius
reikia sugalvoti ir įgyvendinti kuo daugiau logiškų patikrinimų, kurie padėtų apsaugoti funkciją nuo neteisingo panaudojimo
esant blogoms sąlygoms, išvesti atitinkamą pranešimą
esant geroms - tęsti darbą
į atskirą kintamąjį išsaugoti apskaičiuotą dviejų skaičių dalybos reikšmę
daliname pirmąjį skaičių iš antrojo
grąžinti suskaičiuotą reikšmę
TESTAI:
sugalvoti bent 5 testus, kurie bendrai iš esmės patvirtintu gerą funkcijos veikimą
*/
console.clear();

function dalyba(a,b){
if (b===0){
    return `Dalyba iš nulio yra negalima !`
}else { const atsakymas=a/b;
    return`Dalybos atsakymas yra: ${atsakymas}`
}
};
console.log(dalyba(5,2));
console.log(dalyba(1,0));
console.log(dalyba(10,5));
console.log(dalyba(0,0));
console.log(dalyba(5,-5));
console.log(dalyba(-5,-2));
console.log(dalyba(5,Infinity));
console.log(dalyba(Infinity,5));






