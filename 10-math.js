// Math viskas prasideda nuo sio. 

Math.E
console.log(Math.E);// 2.71 kazoks ten skaicius..
console.log(Math.PI);// pi reiksme.
console.log(Math.SQRT2);// Dvejoto kvadratine saknis kaip pvz.


//abs - vercia minusinius i pliusinisu duoda absoliuce verte. Vercia minusus i pliusu. Jeigu reikia keisti reiksme - daryti. 
console.log(- Math.abs(5)) // JEIGU Reikia keisti pliusa i minusa ir minusa i pliusa. 
console.log(Math.abs(5));
console.log(Math.abs(-5)); // Absoliutine verte. jkeigu -10 bus 10. Arba minusinius pavercia i pozityvius. 
console.log('\nabs'); // new line ir spauzdinti. 

//Math.cbrt() kubine sakni istraukia trecio laispniop. 
console.log(Math.cbrt (8)); // kubine sakni istraukia 
console.log(Math.cbrt (9)); 

// ceil apvaline i didesne puse iki sveiko skaiciaus, ceiling nesvarbu kiek po kablelio. 

console.log(Math.ceil(8.6));
console.log(Math.ceil(8.2));
console.log(Math.ceil(8.1));

//Math.floor suapvaline i grindis nesvarbu kiek po kablelio. i mazesne puse. 
console.log(Math.floor(8));
console.log(Math.floor(8.5));
console.log(Math.floor(8.99));

// Math.round pagal taisykle apvalini i virsu nuo 0.5 dydzio pvz 1.5.
console.log(Math.round(8.5));// cia bus 9 ;
console.log(Math.round(8.49999)); // cia bus 8;

// trunc Math.trunc(); Numeta desimtaine dali, svarbiausia - patikrinti. 

console.log(Math.trunc(8));
console.log(Math.trunc(9));
console.log(Math.trunc(4.5));
console.log(Math.trunc(4.9999));
console.log(Math.trunc(-4.9999));

/// Math.hypot(); izambine paskaiciuoja pagal pitagoro teorema. istrizaine staciojo trikampio. 

console.log(Math.hypot(3,4));
console.log(Math.hypot(4,5));// trikampio.
console.log(Math.hypot(4,5,6)); // kubo. 

// Max ir min Math.max suranda didziausia dydi eiluteje ir maziausia dydi eilute.

console.log(Math.max(10,2,8,1,6)); // surasti didziausia skaiciu eiluteje.
console.log(Math.min(-10,9,5,4,2,1)); // suranda maziausia eilute.

// Math.pow kelimas laipsniu pirmas eina skaicius antras eina kuriuo laipsniu keliamas. 

console.log(Math.pow(2,1)); // tas pats kai 2**1;
console.log(Math.pow(2,3));// tas pats kai 2**3;
console.log(Math.pow(2,4));// tas pats kai 2**4;
console.log(Math.pow(2,5));
console.log(Math.pow(2,6));
console.log(Math.pow(2,7));
console.log(Math.pow(2,8));

// sign grazina 1 -1 arba 0 jeigu skaicius pozityvus duoda 1 jeigu negatyvus -1 jeigu 0 duoda 0.

console.log(Math.sign(8));
console.log(Math.sign(-8));
console.log(Math.sign(0));

// pvz

const a=-825.65
if(Math.sign(a)===1){
    console.log(a)///cia ateina +++
}else{
    console.log(a*-1);// cia ateina ---
}

// sqrt kvadratine saknis
console.log(Math.sqrt(4)); // tas pats kai 4**0.5.
console.log(Math.sqrt(9));// tas pats kai 4**0.5.
console.log(Math.sqrt(16));

console.clear();


// random sukuria atsitiktini skaiciu tarp 0 ir 1.0 gali gauti lygiai 1 neimanoma.

console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

// Random skaicius: nuo 0 iki 10;[0..9] arba [0..10);

// nuo 3 arba 7.kai salyga kai krenta 3 ir 7 
// [0..1)=[0..0.5)+[0.5..1)

for(let i=0; i<10;i++){
    if(Math.random()<0.5){
console.log(3);

    }else{
    console.log(7);
}}

// jeigu reikia suskaiciuoti. kiek iskrito kartu. 

let count3=0;
let count7=0;
for(let i=0;i<100;i++ ) {
    if(Math.random()<0.5){
        count3++;
    }else{
        count7++;
    }
}
console.log(count3,count7);


/// Man reikia gauti skaiciu atsitiktini sveikaji, kuris butu intervale nuo 13 iki 149 imtinai [13..149]
// [13...149]
// [13..13]

/// MINTINAI ISMOKTI Math.floor(Math.random()*(max-min+1)+min);Jos ribos kai turi gauti skaiciu nuo iki ir jie imtini. 

function randomNumber(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);

}

console.log(randomNumber(1,10));
console.log(randomNumber(1,100));
console.log(randomNumber(1,10));
console.log(randomNumber(1,10));
console.log(randomNumber(1,10));

// pvz kauliuko ismetimas. 

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);// suapvalina iki sveiko mazesnio skaiciaus(generuoja random skaiciu 0-1 intervale)
}

const counts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

for (let i = 0; i < 1000000; i++) {
    const index = randomNumber(0, 9);
    counts[index]++;
}

console.log(counts);

const counts2 = [0, 0];

for (let i = 0; i < 1000000; i++) {
    const index = randomNumber(0, 1);
    counts2[index]++;
}

console.log(counts2);



function makeNegative(num) {
    let skaicius=num;
    let naujaReiksme=Math.abs(skaicius);

    return  naujaReiksme;
  }
  console.log(makeNegative(42));



























