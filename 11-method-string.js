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

console.clear();


// string() padaro eilute === stringui. 

const a = new String("Hello world"); // a === "Hello world" is false
const b = String("Hello world"); // b === "Hello world" is true
a instanceof String; // is true
b instanceof String; // is false
typeof a; // "object"
typeof b; // "string"

// charAt() 

const sentence = "The quick brown fox jumps over the lazy dog.";

const index = 4;

console.log(`The character at index ${index} is ${sentence.charAt(index)}`); // "The character at index 4 is q"

// concat() sujungia dvi reiksmes padaro i viena stringa. 

const str1 = "Hello";
const str2 = "World";

console.log(str1.concat(" ", str2));
// Expected output: "Hello World"

console.log(str2.concat(", ", str1));
// Expected output: "World, Hello"



/// repeat() pakartoti norima teksta kazkiek kartu. 
const mood = "Happy! ";

console.log(`I feel ${mood.repeat(3)}`);
// Expected output: "I feel Happy! Happy! Happy! 



//replace() pakeisti kazkoki teksta kitu kazkokiu tekstu. 

const paragraph = "I think Ruth's dog is cuter than your dog!";

console.log(paragraph.replace("Ruth's", "my"));
// Expected output: "I think my dog is cuter than your dog!"

const regex = /Dog/i;
console.log(paragraph.replace(regex, "ferret"));
// Expected output: "I think Ruth's ferret is cuter than your dog!"


/// replaceAll() pakeisti visam tekste pasikartojancius zodzius nauja reiksme. 
const paragraph = "I think Ruth's dog is cuter than your dog!";

console.log(paragraph.replaceAll("dog", "monkey"));
// Expected output: "I think Ruth's monkey is cuter than your monkey!"

// Global flag required when calling replaceAll with regex
const regex = /Dog/gi;
console.log(paragraph.replaceAll(regex, "ferret"));
// Expected output: "I think Ruth's ferret is cuter than your ferret!"


///search() iesko visam tekste ir parodo kurioje vietoje tekste jis yra. 

const paragraph = "I think Ruth's dog is cuter than your dog!";

// Anything not a word character, whitespace or apostrophe
const regex = /[^\w\s']/g;

console.log(paragraph.search(regex));
// Expected output: 41

console.log(paragraph[paragraph.search(regex)]);
// Expected output: "!"

//slice() iskerpa norima teksta, galima nurodyti nuo kurio indexo iki kurio. 

const str = "The quick brown fox jumps over the lazy dog.";

console.log(str.slice(31));
// Expected output: "the lazy dog."

console.log(str.slice(4, 19));
// Expected output: "quick brown fox"

console.log(str.slice(-4));
// Expected output: "dog."

console.log(str.slice(-9, -5));
// Expected output: "lazy"


//Slice() funkcija naudojama JavaScript kalboje norint išgauti dalį masyvo arba teksto, nekeičiant originalaus masyvo/teksto.
const vaisiai = ['Bananas', 'Apelsinas', 'Citrina', 'Obuolys', 'Mangas'];

// Ištraukti nuo 1 indekso iki galo
const citrusiniai = vaisiai.slice(1);
// citrusiniai = ['Apelsinas', 'Citrina', 'Obuolys', 'Mangas']// jeigu be antro, tai nukerpa pirma ir visa eilute duoda. 

// Ištraukti nuo 1 iki 3 indekso (neįskaitant 3)
const citrusiniai2 = vaisiai.slice(1, 3); // duoda antra nuo priekio ir 
// citrusiniai2 = ['Apelsinas', 'Citrina']

// Neigiami indeksai - skaičiuoja nuo galo
const nuoGalo = vaisiai.slice(-3, -1); // duoda 3 nuo gali ir 2 nuo galo. 
// nuoGalo = ['Citrina', 'Obuolys']


//Substring() iskerpa zodzio daleles 

const str = "Mozilla";

console.log(str.substring(1, 3)); // nuo 0 iki z gauname oz. 
// Expected output: "oz"

console.log(str.substring(2));
// Expected output: "zilla"


//toLocaleLowerCase() padaro visas raides i mazasias. 

// toLocaleUpperCase() padaro raides i didziasias. 

// padaro didziaja raide i mazaja. toLowerCase()

const sentence = "The quick brown fox jumps over the lazy dog.";

console.log(sentence.toLowerCase());
// Expected output: "the quick brown fox jumps over the lazy dog."

//toUpperCase() padaro i didziasias raides. 
const sentence = "The quick brown fox jumps over the lazy dog.";

console.log(sentence.toUpperCase());
// Expected output: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."


//trim() pasalina nereikalingus tarpus tarp zodziu. 
// Vartotojo įvesties valymas
const vartotojoIvestis = '   john.doe@example.com   ';
const valytasElPastas = vartotojoIvestis.trim();

// Palyginimams
if (valytasElPastas === 'john.doe@example.com') {
  console.log('El. paštas teisingas');
}

// valueOf() 




















