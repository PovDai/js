/*https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
*/

// su siuksliu deze nekreipiam demesio. 


console.log('Labas');
console.log('Labas'[0]);
console.log('Labas'[1]);
console.log('Labas'[2]);
console.log('Labas'[3]);

const text='pomidoras';
console.log(text[0]);
console.log(text[text.length-1]); // gaunam paskutine raide. 


// at pvz duomenys.at(0) paima pirma raide. taxt.at() arba duomenys.at()
console.log('--',  text.at(0));
console.log('--',  text.at(-1)); // pirmas nuo galo.paskutine pozicija. 
console.log('--',  text.at(-2));// antras nuo galo.
console.log('--',  text.at(-3));

// includes randa ar ieskoma reiksme yra string eiluteje.Duoda true arba false. 

console.log('');

console.log("Vasara".includes('V'));
console.log("Vasara".includes('v'));
console.log("Vasara".includes('a'));

function includes(text){
    return false;
}

// padaryt su ifais ir forais.

console.log('Bepasikulversciaudamasis'.includes('a'));
console.log('Bepasikulversciaudamasis'.includes('aaa'));// galima ieskoti ir tris pvz raides vienoje vietoje. 
console.log('Bepasikulversciaudamasis'.includes('kul'));
// includes iesko visama duotame tekste.


// startsWith ziuri ar nuo pradzios ieskoma raide yra. pvz P.

console.log('Pomirodas'.startsWith('a'));
console.log('Pomirodas'.startsWith('P'));
console.log('Pomirodas'.startsWith('Po'));
console.log('Pomirodas'.startsWith('Pom'));

// endsWith  ar pabaiga baigiasi.

console.log('Pomirodas'.endsWith('a'));
console.log('Pomirodas'.startsWith('s'));
console.log('Pomirodas'.startsWith('das'));
console.log('Pomirodas'.startsWith('as'));

// indexOf kiek raidziu zodyje ir raides pozicija, jeigu yra daugiau tokiu paciu, rodo pirmaos raides index.
// -1 reiskia false/ kad nerado.

console.log('Pomidoras'.indexOf('P'));
console.log('Pomidoras'.indexOf('o'));
console.log('Pomidoras'.indexOf('as'));
console.log('Pomidoras'.indexOf('p'));/// maziau uz 0 but negali, o cia meta -1. Indexa
console.log('Pomidoras'.indexOf('mido')); // grazina kad nuo 2 indexo prasideda ieskomas derinukas.

console.log('Pomidoras'.indexOf('o'));
console.log('Pomidoras'.indexOf('o',0));
console.log('Pomidoras'.indexOf('o',1));
console.log('Pomidoras'.indexOf('o',2)); // irasant per ,kablelis praskipinam pirma pvz ir ieskom nuo 3 pozicijos


console.log('Kulverstukas'.indexOf('u'));
console.log('Kulverstukas'.indexOf('u',5));
console.log('Kulverstukas'.indexOf('u',2)); // jeigu norim ieskoti antros raides tokios pat pradeda nuo tos pozicijos. 
console.log('Kulverstukas'.indexOf('u',0));

const k="Kulverstukas"
console.log(k.indexOf('u')+1); /// +1 kad ieskotu nuo toliau. 
console.log(k.indexOf('s')+1);
console.log(k.indexOf('e')+1);
























