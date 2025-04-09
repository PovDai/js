/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
*/
/// isFinite() ar baigtinis skaicius yra. kai tikrinam number.IsFinite() tada tiksliau tikrina ar skaicius. nes jeigu tikrina 'asas' gali buti true. 

console.log(isFinite(5));
console.log(isFinite(-3.14));
console.log(isFinite(Infinity));
console.log(isFinite(NaN));

/// Number.isInteger() ar sveikasi skaicius. butinai darom su Number.
console.log('---------')
console.log(Number.isInteger('-1.254'))
console.log(Number.isInteger(5));
console.log(Number.isInteger(0));
console.log(Number.isInteger(NaN));
console.log(Number.isInteger('asd125'));
console.log(Number.isInteger('-1.254'))
// Number.IsNaN();

console.log(Number.isNaN(5));
console.log(Number.isNaN(NaN));
console.log(Number.isNaN('adsfd'),isNaN('adsfd')); 
console.log(Number.isNaN([]),isNaN([])); 
console.log(Number.isNaN({}),isNaN({})); 




//number.parseFloat() vienas viena su desimtainiais // universalesnis nes paima ir sveikuosius ir desimtine dali. 
// parseInt() su sveikaisiaias. Pakeicia i number reiksme 

const userInput='22';
const userName=parseInt(userInput) /// pakeiciam i number reiksme. tada +5 prides 5. 
const date=userName+5; // jeigu daugyba sudaugins. + reiskia prideda teksta Visi kiti kaip matematika veiks. 
console.log(date);

console.log(parseInt('65')); 
console.log(parseInt('65.314')); // duos tik sveika skaiciu. 
console.log(parseInt('65asad')); // duos vistiek tik skaiciu. 

console.log(parseInt('labas'));/// duos NaN 
console.log(parseInt('labas1111'));// duos NaN
console.log(parseInt('212121labas'));// jeigu pirmi skaitmenys paima jisai. 
console.log(parseInt('212121labas3333'));// paims tik pirmus skaicius, jeigu sutinka klaida sustoja. 
console.log(parseInt([1,2,3,4]));/// Paims tiktais pati pirma 
console.log(parseInt(true));// duos klaida NAN
console.log(parseInt('222labas333'.replace('labas','')));// pakeiciam labas tustuma sujungia. 
console.log(parseInt('222333'));

console.log(parseFloat('44'));
console.log(parseFloat('44.4')); // nepamirsti kalbelis eina kaip taskas cia. 
console.log(parseFloat('-44.4'));
console.log(parseFloat('44,4'));

console.log(parseFloat('55.66lanas')); // irgi ima is priekio ir pateikia, jeigu nesamone baigia darba. 
console.log(parseFloat('55.66lanas155151'));
console.log(parseFloat('55.66.77'));// paims iki antro kablelio, 2 kablelis kaip klaida yra. 
console.log(parseFloat('--55.5'));// NaN
console.log(parseFloat('++55.5'));//NaN

//Number.EPSILON  suzinoti kokiam intervalui skaiciai priklauso. 


// toFixed() pakeicia number i string tipa, paskui atkeisti su parseFloat() reikia perdaryt. 
const a=12.145265
console.log(a);
console.log(typeof a); // numebr gaunasi 
console.log(typeof typeof  a); // stringas jau gaunasi 

const b= a.toFixed(4);// leis skaicius po kablelio 4. 12.5654 bet jau cia gaunasi kaip stringas. 
console.log(b);
console.log(typeof b);// jau tampa kaip stringas. 


const c=parseFloat(b); /// pakeis i reiksme i number . 
console.log(c)
console.log(typeof c);

console.log(12.65654665.toFixed(7));
console.log(12.65654665.toFixed(1));
console.log(3.14.toFixed(1));
console.log(3.14.toFixed(2));
console.log(3.14.toFixed(3));
console.log(3.14.toFixed(4)); // jeigu daugiau irasyt duos 0 gale. IR kaip sake pakeicia i stringa. 



























