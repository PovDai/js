// Ternary islikti paprasta 3 dalyku oeperacija, jeigu daugiau yra operaciju darom is else netinka. 

let zodis ='';
if( 4>2){
    zodis='daugiau'
}else{
    zodis='maziau'
}
console.log(zodis);

/// yra kintamasis kurio reiksmes mes nezinome del to jis tusicas buna o zodis duoda atsakyma pagal salyga if 
// is pradziu nezinau galutines reioiksmes ji paaiskeja kai padarau if salyga ir tada tik naudoju ja. 
let skaicius=0;
if( 7<=5){
    skaicius=7
}else{
    skaicius=5;
}
console.log(skaicius);


// supaprastinimas i viena eilute. Ternary operatorius panaudotas. 

// klausimas ? teigama ; neigaiama ; ir viskas. loginam i console del atsakymo. 

const word=4>2? 'daugiau':'Maziau';
console.log(word)

const number= 7<=5 ? 7:5;// nes ne ir duos neigiama ats kuris yra 5 
console.log(number);

const years=22; // teiginys turi buti virsuje 
const isAdult=years>=18? 'Suauges':'Nesuauges'; // klausia metai >= 18 ? atsakymas teigiamas susauges, neigaiamas nesuauges. 

console.log(isAdult);


const value=7;
const type=typeof value==='number'? 'skaicius':'Ne skaicius';
console.log(type)


/// visi skaiciai yra pozityvus isskyrus 0; 

if(0){
    console.log('Taip')
}else{
    console.log('Ne')
}

///// visi tekstai stringai yra pozityvus
// isskyrus '' tuscia eilute. ' ' jau duos atsakyma taip. 

if(''){
    console.log('Taip')
}else{
    console.log('Ne')
}

/// netgi tuscias  array yra pozityvus/ visi Array yra pozityvus true kitaip pasakius. 

if([]){
    console.log('Taip')
}else{
    console.log('Ne')
}

/// visi objektai yra pozityvus is saves, true.

if({}){
    console.log('Taip')
}else{
    console.log('Ne')
}


// undefined yra negatyvus visada. 
if(undefined){
    console.log('Taip')
}else{
    console.log('Ne')
}

// null irgi yra negatyvas visada is saves. 
if(null){
    console.log('Taip')
}else{
    console.log('Ne')
}


////////////////// ternary////////////// sudetingi bet iprasti zmones taip nedaro :D


const a=0
? 1
:2;
console.log(a) /// duos atsakyma 2 nes 0 negatyvi reiksme. 

const b=1
? 2
:3; // vienetas pozityvi reiksme del to duos 2 reiks 
console.log(b)

const c= 2
?3
    ?4
    :5
:6;
console.log(c)

const d=0
? 1
:2
    ? 3
    :4;
console.log(d)

const e=1
?2
    ?3
    :4
:5
    ?6
    :7;
console.log(e);

/// unari operatoriai (vienas)= paprasciausias opetorius
/// binari operatoriai (du)+ - * - % operatoriai nes reikia tureti dvi reiksmes 
// ternary operatoriai (trys) ? : ternaris nes is triju segmentu klausimas. 