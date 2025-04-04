/*https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
*/

console.log('Labas');
console.log('Labas'[0]);
console.log('Labas'[1]);
console.log('Labas'[2]);
console.log('Labas'[3]);

let text='pomidoras';
console.log(text[0]);
console.log(text[text.length-1]); // gaunam paskutine raide. 

console.log('-----at()-----')
// at() pvz duomenys.at(0) paima pirma raide. text.at() arba duomenys.at()
console.log('--',  text.at(0));
console.log('--',  text.at(-1)); // pirmas nuo galo.paskutine pozicija. 
console.log('--',  text.at(-2));// antras nuo galo.
console.log('--',  text.at(-3));

// includes randa ar ieskoma reiksme yra string eiluteje.Duoda true arba false. 
console.log('------includes-----')
console.log('');

console.log("Vasara".includes('V'));
console.log("Vasara".includes('v'));
console.log("Vasara".includes('a'));

function includes(text){
    return false;
}


console.log('Bepasikulversciaudamasis'.includes('a'));
console.log('Bepasikulversciaudamasis'.includes('aaa'));// galima ieskoti ir tris pvz raides vienoje vietoje. 
console.log('Bepasikulversciaudamasis'.includes('kul'));
// includes iesko visama duotame tekste.

console.log('---------startsWith------')
// startsWith ziuri ar nuo pradzios ieskoma raide yra. pvz P./ duoda true arba false 

console.log('Pomirodas'.startsWith('a'));
console.log('Pomirodas'.startsWith('P'));
console.log('Pomirodas'.startsWith('Po'));
console.log('Pomirodas'.startsWith('Pom'));

// endsWith  ar pabaiga baigiasi. duoda true arba false. 
console.log('-----endsWith------')

console.log('Pomirodas'.endsWith('a'));
console.log('Pomirodas'.startsWith('s'));
console.log('Pomirodas'.startsWith('das'));
console.log('Pomirodas'.startsWith('as'));

console.log('-----indexOF-----')
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

let k="Kulverstukas"
console.log(k.indexOf('u')+1); /// +1 kad ieskotu nuo toliau. 
console.log(k.indexOf('s')+1);
console.log(k.indexOf('e')+1);


console.log('------trim--------')

//trim() pasalina nereikalingus tarpus tarp zodziu. 
// Vartotojo įvesties valymas
let vartotojoIvestis = '   john.doe@example.com   ';
let valytasElPastas = vartotojoIvestis.trim();

// Palyginimams
if (valytasElPastas === 'john.doe@example.com') {
  console.log('El. paštas teisingas');
}

console.log("-------------repeat()-------")
/// repeat();
console.log('a');
console.log('aaaaaaaaaaaaaaaaa');
console.log('a'.repeat(5));

let symbol="labas";
let megaSymbol=symbol.repeat(10); // repeatas floor padaro automatiskai. 
console.log(symbol);
console.log(megaSymbol);


function stringRepeat(text,count){/// pakrtoja sita teksta 3 kartus.
let result='';
for(let i=0;i<Math.floor(count);i++){// darome 3 kartus cikla. kuris lygi tuscias plius text+text+text
  result +=text;
}
  return result;
};
console.log(stringRepeat('rikiki',4));
console.log(stringRepeat('rikiki',3.99999));// sutvarkom su Math.floor.
console.log('--------replace-------')

// replace () pakeiciame vietoje kazko i norima kazka kita 

console.log('a');
console.log('vasara'.replace('a','-')); /// (pirmoje rasosi ko ieskai, antram raso kuo keiciam)

const summer='vasara'.replace('a','-');
console.log(summer);


const summer2 ='vasara'.replace('a','-').replace('a','-').replace('a','-') /// galima chainint eilutes funkcijos. 
console.log(summer2);

const cloud='debeselis'.replace('u','***').replace('e','*'.repeat(5)) /// galima ideti kita metoda. pvz repeat. 
console.log(cloud)

const template='VARDAS ejo i parduotuve pirkti DAIKTAS.'; // kai norime sakinius replacint
let name='Jonas'
let item='Pomidoras';

const shop=template.replace('VARDAS',name).replace('DAIKTAS',item);

console.log(shop);

console.log('------replaceAll()------')
/// replaceall() pakeicia visas norimas naujomis reiksmemis. 

console.log('vasara');
console.log('vasara'.replaceAll('a','-'));

const template3='VARDAS saunuolis.  VARDAS grazuolis. VARDAS smalsuolis. VARDAS murzius.';
const multiName=template3.replaceAll('VARDAS','Petras');
console.log(multiName);

console.log('ananasas'.replace('a',''));
console.log('ananasas'.replaceAll('a',''));
console.log('ananasas'.replaceAll('na',''));

// Labas rytas, Lietuva

const hi='Labas rytas, Lietuva!';
const hiNormalSize=hi.replace(' ','').length//// pasalinam tarpus ir paskaiciuojam raidziu kieki. 
console.log(hiNormalSize);

console.log('--------toUpperCase-----')
//// toUpperCase() PADAROM I DIDESNES RAIDES TEKSTA. 

console.log('labas'.toUpperCase());
console.log('Labas'.toUpperCase());

/// toLowerCase() padaro teksta mazosiomis raidemis. 

console.log('------toLowerCase-----')

console.log('labas'.toLowerCase());
console.log('Labas1221'.toLowerCase());


console.log("The_Stealth-Warrior".replaceAll('-','').replaceAll('_','' ));

console.log('-----slice-------')
/// slice() nupjauna norima kieki zodzio.pirmas skaicius nuo kur antras iki kur. 

console.log('Pomidoras'.slice());
console.log('Pomidoras'.slice(0));// tiek nupjauna. 
console.log('Pomidoras'.slice(1));//// reiskiasi nupjaunam viena pirma raide. 
console.log('Pomidoras'.slice(2));
console.log('Pomidoras'.slice(3));
console.log('Pomidoras'.slice(0,1));
console.log('Pomidoras'.slice(0,2));/// tiek palieka 
console.log('Pomidoras'.slice(0,3));// Pom
console.log('LIETUVA'.slice(1,3));// Ispjauna IE, nes nuo 2 raides iki 4 raides ispjauna 
console.log('SENUKAS'.slice(0,-1));// reiskiasi nupjauna paskutine raide. 
console.log('MOCIUTE'.slice(0,-2));
console.log('JONUKAS'.slice(-6,-2)); // reiskiasi ima 6 nuo galo ir nuo ten pjauna iki 2 nuo galo. 

// trim panaikina tarpus is priekio ir is galo, per vidury nevalo tarpu. naudojamas pvz registraciju formose, panaikinti tarpus prie username. 

console.log(`"${'pomidoras'.trim()}"`);
console.log(`"${      'pomidoras'.trim()}"`);
console.log(`"${      'pomidoras'      .trim()}"`);
console.log(`"${      'labas rytas'     .trim()}"`);

/// trimEnd() nuvalo tik gala. 
/// trimStart() nuvalo tik prieki. 

// Vardas --> Vardemnis Pavardenis
// Pavarde--> Pavardenis

console.log('------split-------')
// split(); perskiria zodzius pagal norima skirtuka, pvz -_ skirtukas.Grazina zodi kaip stringa array tipe. 

const t1='zodis';
const t1Parts=t1.split(); // grazina stringu['zodis'];
const t1Parts2=t1.split('o'); // o ispjauna ir padaro du zodzius. 
const t1Parts3=t1.split('d'); // d ispjauna ir palieka zo is 
console.log(t1Parts);
console.log(t1Parts2);
console.log(t1Parts3);

const t2='kultuvatorius';
const t2Parts=t2.split('t');
console.log(t2Parts);

const t3='Labas rytas Lietuva';
const t3Parts=t3.split(' ');
console.log(t3Parts);

console.log('duona'.split('o'));
console.log('duona'.split('d'));
console.log('duona'.split('u'));

console.log('ana'.split('a'));
console.log('vasara'.split(''));//// isdalina zodis i atskiras raides. 
console.log(''.split('')); // gausis tuscias [] array. 
console.log(' '.split(' ')); // gausis ['','']

const t4='Labas. Ka tu. Ka tu veiki';
const sentenceCount=t4.split('.').length-1;
console.log(sentenceCount);

console.log('pomidoras'.split('dor'));
console.log('ananasas'.split('na')); // liks a '' ir as atsakymas. 

// charCodeAt raides koda israso. cia bus 97. kai reikia raides palyginti pagal koda. 
console.log(' '.charCodeAt(0));
console.log('a'.charCodeAt(0));

if('A'>'a' ){ // pagal koda lygina. 
  console.log('daugiau')
}else {
  console.log('maziau')
}

if('labas'>'iki' ){ // pagal koda lygina. 
  console.log('daugiau') // labas yra zodyne toliau negu iki, patikrino raides palygino. 
}else {
  console.log('maziau')
}

if('labas'>'labai' ){ // pagal koda lygina. 
  console.log('daugiau') // labas yra zodyne toliau negu iki, patikrino raides palygino. 
}else {
  console.log('maziau')
}

const s1=String.fromCharCode(65); // is kodo suzinota simbolis abeceleje. 
console.log(s1);

const s2=String.fromCharCode(4845); // is kodo suzinota simbolis abeceleje. Visi simboliai yra.
console.log(s2);
const s3=String.fromCharCode(100001); // is kodo suzinota simbolis abeceleje. Visi simboliai yra.
console.log(s3);









































